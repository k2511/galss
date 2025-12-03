// backend/src/controllers/categoryController.js
import db from "../config/db.js";

/**
 * Helper: detect actual column names in the `categories` table.
 * Returns an object: { idCol, nameCol, aidCol, createdAtCol, updatedAtCol }
 *
 * This function caches the result for the process lifetime to avoid repeated metadata queries.
 */
let _colMap = null;

async function detectCategoryColumns() {
  if (_colMap) return _colMap;

  // Default guesses (if DB actually has them)
  const candidates = {
    idCandidates: ["CTID", "id", "ID"],
    nameCandidates: ["cname", "name"],
    aidCandidates: ["AID", "status", "active"],
    createdCandidates: ["created_at", "createdAt", "created"],
    updatedCandidates: ["updated_at", "updatedAt", "updated"],
  };

  const map = {
    idCol: null,
    nameCol: null,
    aidCol: null,
    createdAtCol: null,
    updatedAtCol: null,
  };

  try {
    const [rows] = await db.query(
      `SELECT COLUMN_NAME
       FROM INFORMATION_SCHEMA.COLUMNS
       WHERE TABLE_SCHEMA = DATABASE() AND TABLE_NAME = 'categories'`
    );

    const cols = rows.map((r) => (r.COLUMN_NAME || "").toString());

    const findFirst = (list) => list.find((c) => cols.includes(c)) || null;

    map.idCol = findFirst(candidates.idCandidates);
    map.nameCol = findFirst(candidates.nameCandidates);
    map.aidCol = findFirst(candidates.aidCandidates);
    map.createdAtCol = findFirst(candidates.createdCandidates);
    map.updatedAtCol = findFirst(candidates.updatedCandidates);

    // Fallbacks if nothing found — use sensible defaults (will cause queries to fail later if wrong)
    map.idCol = map.idCol || "id";
    map.nameCol = map.nameCol || "name";
    map.aidCol = map.aidCol || "AID";
    map.createdAtCol = map.createdAtCol || "created_at";
    map.updatedAtCol = map.updatedAtCol || "updated_at";

    _colMap = map;
    // console.log("categoryController: detected columns ->", _colMap);
    return _colMap;
  } catch (err) {
    console.error("detectCategoryColumns error:", err);
    // return defaults so rest of code tries sensible names
    _colMap = {
      idCol: "id",
      nameCol: "name",
      aidCol: "AID",
      createdAtCol: "created_at",
      updatedAtCol: "updated_at",
    };
    return _colMap;
  }
}

/**
 * Helper to normalize a DB row to the frontend shape:
 * { CTID, cname, AID, created_at?, updated_at?, raw }
 */
function normalizeRow(row, colMap) {
  return {
    CTID: row[colMap.idCol],
    cname: row[colMap.nameCol],
    AID:
      row[colMap.aidCol] === undefined || row[colMap.aidCol] === null
        ? 1
        : Number(row[colMap.aidCol]) === 1
        ? 1
        : 0,
    created_at: row[colMap.createdAtCol],
    updated_at: row[colMap.updatedAtCol],
    raw: row,
  };
}

/**
 * GET /api/categories
 */
export async function listCategories(req, res) {
  try {
    const colMap = await detectCategoryColumns();

    // build SELECT list with aliases to preserve original DB columns for normalization
    const selectCols = [
      `${colMap.idCol} AS \`${colMap.idCol}\``,
      `${colMap.nameCol} AS \`${colMap.nameCol}\``,
      `${colMap.aidCol} AS \`${colMap.aidCol}\``,
    ];

    if (colMap.createdAtCol) selectCols.push(`${colMap.createdAtCol} AS \`${colMap.createdAtCol}\``);
    if (colMap.updatedAtCol) selectCols.push(`${colMap.updatedAtCol} AS \`${colMap.updatedAtCol}\``);

    const sql = `SELECT ${selectCols.join(", ")} FROM categories ORDER BY ${colMap.idCol} DESC`;
    const [rows] = await db.query(sql);

    const normalized = rows.map((r) => normalizeRow(r, colMap));
    return res.json(normalized);
  } catch (err) {
    console.error("listCategories error:", err.message || err);
    return res.status(500).json({ message: "Internal Server Error" });
  }
}

/**
 * GET /api/categories/:id
 */
export async function getCategory(req, res) {
  try {
    const colMap = await detectCategoryColumns();

    const id = Number(req.params.id);
    if (!id) return res.status(400).json({ message: "Invalid category id" });

    const selectCols = [
      `${colMap.idCol} AS \`${colMap.idCol}\``,
      `${colMap.nameCol} AS \`${colMap.nameCol}\``,
      `${colMap.aidCol} AS \`${colMap.aidCol}\``,
    ];
    if (colMap.createdAtCol) selectCols.push(`${colMap.createdAtCol} AS \`${colMap.createdAtCol}\``);
    if (colMap.updatedAtCol) selectCols.push(`${colMap.updatedAtCol} AS \`${colMap.updatedAtCol}\``);

    const sql = `SELECT ${selectCols.join(", ")} FROM categories WHERE ${colMap.idCol} = ? LIMIT 1`;
    const [rows] = await db.query(sql, [id]);
    if (!rows.length) return res.status(404).json({ message: "Category not found" });

    return res.json(normalizeRow(rows[0], colMap));
  } catch (err) {
    console.error("getCategory error:", err.message || err);
    return res.status(500).json({ message: "Internal Server Error" });
  }
}

/**
 * POST /api/categories
 * payload: { cname, AID }
 */
export async function createCategory(req, res) {
  try {
    const colMap = await detectCategoryColumns();

    const { cname, AID } = req.body;
    if (!cname || typeof cname !== "string" || !cname.trim()) {
      return res.status(400).json({ message: "cname (category name) is required" });
    }
    const name = cname.trim();

    // check duplicate using detected name column
    const dupSql = `SELECT ${colMap.idCol} FROM categories WHERE ${colMap.nameCol} = ? LIMIT 1`;
    const [existing] = await db.query(dupSql, [name]);
    if (existing.length) {
      return res.status(400).json({ message: "Category with that name already exists" });
    }

    const aidVal = AID !== undefined ? (Number(AID) === 1 ? 1 : 0) : 1;

    // Insert into detected name and aid columns
    const insertSql = `INSERT INTO categories (${colMap.nameCol}, ${colMap.aidCol}) VALUES (?, ?)`;
    const [result] = await db.query(insertSql, [name, aidVal]);

    const insertedId = result.insertId;

    // Return created shape with normalized field names
    const created = {
      CTID: insertedId,
      cname: name,
      AID: aidVal,
    };

    return res.status(201).json({ message: "Category created", data: created });
  } catch (err) {
    if (err && err.code === "ER_DUP_ENTRY") {
      return res.status(400).json({ message: "Category already exists" });
    }
    console.error("createCategory error:", err.message || err);
    return res.status(500).json({ message: "Internal Server Error" });
  }
}

/**
 * PUT /api/categories/:id
 * payload: { cname, AID }
 */
export async function updateCategory(req, res) {
  try {
    const colMap = await detectCategoryColumns();

    const id = Number(req.params.id);
    if (!id) return res.status(400).json({ message: "Invalid category id" });

    const { cname, AID } = req.body;
    if (cname === undefined && AID === undefined) {
      return res.status(400).json({ message: "No fields provided to update" });
    }

    let name = undefined;
    if (cname !== undefined) {
      if (!cname || typeof cname !== "string" || !cname.trim()) {
        return res.status(400).json({ message: "Invalid cname" });
      }
      name = cname.trim();

      // ensure no other category with same name (using detected name column)
      const dupSql = `SELECT ${colMap.idCol} FROM categories WHERE ${colMap.nameCol} = ? AND ${colMap.idCol} != ? LIMIT 1`;
      const [dup] = await db.query(dupSql, [name, id]);
      if (dup.length) return res.status(400).json({ message: "Another category with that name exists" });
    }

    const parts = [];
    const params = [];

    if (name !== undefined) {
      parts.push(`${colMap.nameCol} = ?`);
      params.push(name);
    }
    if (AID !== undefined) {
      parts.push(`${colMap.aidCol} = ?`);
      params.push(Number(AID) === 1 ? 1 : 0);
    }

    if (parts.length === 0) return res.status(400).json({ message: "Nothing to update" });

    params.push(id);
    const sql = `UPDATE categories SET ${parts.join(", ")} WHERE ${colMap.idCol} = ?`;
    const [result] = await db.query(sql, params);

    if (result.affectedRows === 0) return res.status(404).json({ message: "Category not found" });

    return res.json({ message: "Category updated" });
  } catch (err) {
    console.error("updateCategory error:", err.message || err);
    return res.status(500).json({ message: "Internal Server Error" });
  }
}

/**
 * DELETE /api/categories/:id
 */
export async function deleteCategory(req, res) {
  try {
    const colMap = await detectCategoryColumns();

    const id = Number(req.params.id);
    if (!id) return res.status(400).json({ message: "Invalid category id" });

    const sql = `DELETE FROM categories WHERE ${colMap.idCol} = ?`;
    const [result] = await db.query(sql, [id]);
    if (result.affectedRows === 0) return res.status(404).json({ message: "Category not found" });

    return res.json({ message: "Category deleted" });
  } catch (err) {
    console.error("deleteCategory error:", err.message || err);
    return res.status(500).json({ message: "Internal Server Error" });
  }
}

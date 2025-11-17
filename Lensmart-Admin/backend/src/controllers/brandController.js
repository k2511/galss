// src/controllers/brandController.js
import db from "../config/db.js";

/** Helper: get columns for a table */
async function getTableColumns(tableName) {
  try {
    const [cols] = await db.query(`SHOW COLUMNS FROM \`${tableName}\``);
    return Array.isArray(cols) ? cols : [];
  } catch (err) {
    return [];
  }
}

/** Helper: find first matching column name */
function pickColumn(cols, candidates) {
  if (!Array.isArray(cols)) return null;
  const names = cols.map((c) => String(c.Field).toLowerCase());
  for (const cand of candidates) {
    const idx = names.indexOf(String(cand).toLowerCase());
    if (idx !== -1) return cols[idx].Field;
  }
  return null;
}

/** Resolve or create category by name — always returns category PK (insertId or existing id) */
async function resolveOrCreateCategoryByName(cname, AID = 1) {
  if (!cname) return null;
  const name = String(cname).trim();
  if (!name) return null;

  // find categories table (plural or singular)
  const catTableInfo = await findExistingTable(["categories", "category"]);
  const catTable = catTableInfo.table;
  const catCols = catTableInfo.cols;
  if (!catTable) return null;

  const catNameCol = pickColumn(catCols, ["cname", "name", "title", "category_name"]);
  const catIdCol = pickColumn(catCols, ["CTID", "id", "ID", "cat_id", "category_id", "AID"]);
  if (!catNameCol) return null;

  try {
    // try to find existing
    const selId = catIdCol ?? "id";
    const [rows] = await db.query(`SELECT \`${selId}\` AS id FROM \`${catTable}\` WHERE \`${catNameCol}\` = ? LIMIT 1`, [name]);
    if (rows && rows.length) return rows[0].id;

    // build insert with available columns
    const insertCols = [`\`${catNameCol}\``];
    const placeholders = ["?"];
    const params = [name];

    const aidCol = pickColumn(catCols, ["AID", "aid", "active"]);
    if (aidCol) {
      insertCols.push(`\`${aidCol}\``);
      placeholders.push("?");
      params.push(Number(AID || 1));
    }

    const insertSql = `INSERT INTO \`${catTable}\` (${insertCols.join(", ")}) VALUES (${placeholders.join(", ")})`;
    const [ins] = await db.query(insertSql, params);
    return ins.insertId || null;
  } catch (err) {
    console.warn("resolveOrCreateCategoryByName error:", err && err.message ? err.message : err);
    return null;
  }
}

/** Try plural then singular table names, return existing one and its columns */
async function findExistingTable(possibleNames = []) {
  for (const name of possibleNames) {
    const cols = await getTableColumns(name);
    if (cols && cols.length) return { table: name, cols };
  }
  return { table: null, cols: [] };
}

/** ==============================
 * CREATE BRAND
 * ============================== */
export async function createBrand(req, res) {
  try {
    const payload = req.body || {};

    const brandInfo = await findExistingTable(["brands", "brand"]);
    const brandTable = brandInfo.table;
    const brandCols = brandInfo.cols;
    if (!brandTable) return res.status(500).json({ message: "brands table not found" });

    const brandNameCol = pickColumn(brandCols, ["bname", "name", "title"]);
    if (!brandNameCol) return res.status(500).json({ message: "brands table missing name column (bname or name)" });

    const categoryCol = pickColumn(brandCols, ["c_id", "category_id", "cat_id"]);
    const statusCol = pickColumn(brandCols, ["AID", "status", "active"]);
    const brandPk = pickColumn(brandCols, ["BID", "id", "ID"]) || brandCols[0]?.Field;

    const rawBrandName = payload.bname ?? payload.name;
    const brandName = String(rawBrandName || "").trim();
    if (!brandName) return res.status(400).json({ message: "Brand name required" });

    const fields = [`\`${brandNameCol}\``];
    const placeholders = ["?"];
    const values = [brandName];

    // Resolve or create category if provided
    let resolvedCatId = null;
    if (payload.c_id) resolvedCatId = Number(payload.c_id);
    else if (payload.cname) resolvedCatId = await resolveOrCreateCategoryByName(payload.cname, payload.AID || 1);

    if (categoryCol && resolvedCatId) {
      fields.push(`\`${categoryCol}\``);
      placeholders.push("?");
      values.push(resolvedCatId);
    }

    if (statusCol && (payload.AID !== undefined || payload.status !== undefined)) {
      fields.push(`\`${statusCol}\``);
      placeholders.push("?");
      values.push(Number(payload.AID ?? payload.status));
    }

    const insertSql = `INSERT INTO \`${brandTable}\` (${fields.join(", ")}) VALUES (${placeholders.join(", ")})`;
    const [result] = await db.query(insertSql, values);

    // Build safe select to return inserted row (join to category if possible)
    const categoryInfo = await findExistingTable(["categories", "category"]);
    const categoryTable = categoryInfo.table;
    const categoryCols = categoryInfo.cols;

    const catNameCol = pickColumn(categoryCols, ["cname", "name", "title", "category_name"]);
    const catIdCol = pickColumn(categoryCols, ["CTID", "id", "ID", "cat_id", "category_id"]);
    const brandForeignCol = pickColumn(brandCols, ["c_id", "category_id", "cat_id"]);

    let selectSql;
    if (categoryTable && brandForeignCol && catIdCol && catNameCol) {
      selectSql = `SELECT b.*, c.\`${catNameCol}\` AS category_name
                   FROM \`${brandTable}\` b
                   LEFT JOIN \`${categoryTable}\` c ON b.\`${brandForeignCol}\` = c.\`${catIdCol}\`
                   WHERE b.\`${brandPk}\` = ? LIMIT 1`;
    } else {
      selectSql = `SELECT b.* FROM \`${brandTable}\` b WHERE b.\`${brandPk}\` = ? LIMIT 1`;
    }

    const [rows] = await db.query(selectSql, [result.insertId]);
    return res.status(201).json({ message: "Brand created successfully", brand: rows?.[0] || null });
  } catch (err) {
    console.error("createBrand error:", err);
    return res.status(500).json({ message: "Internal Server Error", detail: err?.message || String(err) });
  }
}

/** ==============================
 * LIST BRANDS
 * ============================== */
export async function listBrands(req, res) {
  try {
    const brandInfo = await findExistingTable(["brands", "brand"]);
    const brandTable = brandInfo.table;
    const brandCols = brandInfo.cols;
    if (!brandTable) return res.status(500).json({ message: "brands table not found" });

    const categoryInfo = await findExistingTable(["categories", "category"]);
    const categoryTable = categoryInfo.table;
    const categoryCols = categoryInfo.cols;

    const brandPk = pickColumn(brandCols, ["BID", "id", "ID"]) || brandCols[0]?.Field;
    const brandForeignCol = pickColumn(brandCols, ["c_id", "category_id", "cat_id"]);
    const catIdCol = pickColumn(categoryCols, ["CTID", "id", "ID", "cat_id", "category_id"]);
    const catNameCol = pickColumn(categoryCols, ["cname", "name", "title", "category_name"]);

    let sql;
    if (categoryTable && brandForeignCol && catIdCol && catNameCol) {
      sql = `SELECT b.*, c.\`${catNameCol}\` AS category_name
             FROM \`${brandTable}\` b
             LEFT JOIN \`${categoryTable}\` c ON b.\`${brandForeignCol}\` = c.\`${catIdCol}\`
             ORDER BY b.\`${brandPk}\` DESC`;
    } else if (categoryTable && brandForeignCol && catIdCol) {
      sql = `SELECT b.*, NULL AS category_name
             FROM \`${brandTable}\` b
             LEFT JOIN \`${categoryTable}\` c ON b.\`${brandForeignCol}\` = c.\`${catIdCol}\`
             ORDER BY b.\`${brandPk}\` DESC`;
    } else {
      sql = `SELECT * FROM \`${brandTable}\` ORDER BY \`${brandPk}\` DESC`;
    }

    const [rows] = await db.query(sql);
    res.json(Array.isArray(rows) ? rows : []);
  } catch (err) {
    console.error("listBrands error:", err);
    res.status(500).json({ message: "Internal Server Error", detail: err?.message || String(err) });
  }
}

/** ==============================
 * GET BRAND BY ID
 * ============================== */
export async function getBrandById(req, res) {
  try {
    const id = req.params.id;
    const brandInfo = await findExistingTable(["brands", "brand"]);
    const brandTable = brandInfo.table;
    const brandCols = brandInfo.cols;
    if (!brandTable) return res.status(500).json({ message: "brands table not found" });

    const categoryInfo = await findExistingTable(["categories", "category"]);
    const categoryTable = categoryInfo.table;
    const categoryCols = categoryInfo.cols;

    const brandPk = pickColumn(brandCols, ["BID", "id", "ID"]) || brandCols[0]?.Field;
    const brandForeignCol = pickColumn(brandCols, ["c_id", "category_id", "cat_id"]);
    const catIdCol = pickColumn(categoryCols, ["CTID", "id", "ID", "cat_id", "category_id"]);
    const catNameCol = pickColumn(categoryCols, ["cname", "name", "title", "category_name"]);

    let sql;
    if (categoryTable && brandForeignCol && catIdCol && catNameCol) {
      sql = `SELECT b.*, c.\`${catNameCol}\` AS category_name
             FROM \`${brandTable}\` b
             LEFT JOIN \`${categoryTable}\` c ON b.\`${brandForeignCol}\` = c.\`${catIdCol}\`
             WHERE b.\`${brandPk}\` = ? LIMIT 1`;
    } else {
      sql = `SELECT * FROM \`${brandTable}\` WHERE \`${brandPk}\` = ? LIMIT 1`;
    }

    const [rows] = await db.query(sql, [id]);
    if (!rows || !rows.length) return res.status(404).json({ message: "Brand not found" });
    res.json(rows[0]);
  } catch (err) {
    console.error("getBrandById error:", err);
    res.status(500).json({ message: "Internal Server Error", detail: err?.message || String(err) });
  }
}

/** ==============================
 * UPDATE BRAND
 * ============================== */
export async function updateBrand(req, res) {
  try {
    const id = req.params.id;
    const payload = req.body;

    const brandInfo = await findExistingTable(["brands", "brand"]);
    const brandTable = brandInfo.table;
    const brandCols = brandInfo.cols;
    if (!brandTable) return res.status(500).json({ message: "brands table not found" });

    const brandNameCol = pickColumn(brandCols, ["bname", "name"]);
    const categoryCol = pickColumn(brandCols, ["c_id", "category_id", "cat_id"]);
    const statusCol = pickColumn(brandCols, ["AID", "status", "active"]);
    const brandPk = pickColumn(brandCols, ["BID", "id", "ID"]) || brandCols[0]?.Field;

    const sets = [];
    const values = [];

    if ((payload.bname || payload.name) && brandNameCol) {
      sets.push(`\`${brandNameCol}\` = ?`);
      values.push(String(payload.bname ?? payload.name).trim());
    }

    let resolvedCatId = null;
    if (payload.c_id) resolvedCatId = Number(payload.c_id);
    else if (payload.cname) resolvedCatId = await resolveOrCreateCategoryByName(payload.cname, payload.AID || 1);

    if (categoryCol && resolvedCatId) {
      sets.push(`\`${categoryCol}\` = ?`);
      values.push(resolvedCatId);
    }

    if (statusCol && (payload.AID !== undefined || payload.status !== undefined)) {
      sets.push(`\`${statusCol}\` = ?`);
      values.push(Number(payload.AID ?? payload.status));
    }

    if (!sets.length) return res.status(400).json({ message: "No valid fields to update" });

    values.push(id);
    const sql = `UPDATE \`${brandTable}\` SET ${sets.join(", ")} WHERE \`${brandPk}\` = ?`;
    await db.query(sql, values);

    // return updated item
    const categoryInfo = await findExistingTable(["categories", "category"]);
    const categoryTable = categoryInfo.table;
    const categoryCols = categoryInfo.cols;

    const catNameCol = pickColumn(categoryCols, ["cname", "name", "title", "category_name"]);
    const catIdCol = pickColumn(categoryCols, ["CTID", "id", "ID", "cat_id", "category_id"]);
    const brandForeignCol = pickColumn(brandCols, ["c_id", "category_id", "cat_id"]);

    let selectSql;
    if (categoryTable && brandForeignCol && catIdCol && catNameCol) {
      selectSql = `SELECT b.*, c.\`${catNameCol}\` AS category_name
                   FROM \`${brandTable}\` b
                   LEFT JOIN \`${categoryTable}\` c ON b.\`${brandForeignCol}\` = c.\`${catIdCol}\`
                   WHERE b.\`${brandPk}\` = ? LIMIT 1`;
    } else {
      selectSql = `SELECT * FROM \`${brandTable}\` WHERE \`${brandPk}\` = ? LIMIT 1`;
    }

    const [rows] = await db.query(selectSql, [id]);
    res.json({ message: "Brand updated", brand: rows?.[0] || null });
  } catch (err) {
    console.error("updateBrand error:", err);
    res.status(500).json({ message: "Internal Server Error", detail: err?.message || String(err) });
  }
}

/** ==============================
 * DELETE BRAND
 * ============================== */
export async function deleteBrand(req, res) {
  try {
    const id = req.params.id;
    const brandInfo = await findExistingTable(["brands", "brand"]);
    const brandTable = brandInfo.table;
    const brandCols = brandInfo.cols;
    if (!brandTable) return res.status(500).json({ message: "brands table not found" });

    const brandPk = pickColumn(brandCols, ["BID", "id", "ID"]) || brandCols[0]?.Field;
    const [result] = await db.query(`DELETE FROM \`${brandTable}\` WHERE \`${brandPk}\` = ?`, [id]);
    if (!result.affectedRows) return res.status(404).json({ message: "Brand not found" });
    res.json({ message: "Brand deleted" });
  } catch (err) {
    console.error("deleteBrand error:", err);
    res.status(500).json({ message: "Internal Server Error", detail: err?.message || String(err) });
  }
}

export default {
  createBrand,
  listBrands,
  getBrandById,
  updateBrand,
  deleteBrand,
};

// backend/src/controllers/productTypeController.js
import db from "../config/db.js";

/**
 * Expected table: product_types
 * columns: id (PK), name, code, status, created_at, updated_at
 * Adjust column names in queries below if your schema differs.
 */

function normalizeTypeRow(row) {
  return {
    id: row.id ?? row.ID ?? null,
    name: row.name ?? row.type_name ?? "",
    code: row.code ?? row.type_code ?? "",
    status: Number(row.status ?? 1),
    created_at: row.created_at ?? row.createdAt ?? null,
    updated_at: row.updated_at ?? row.updatedAt ?? null,
    raw: row,
  };
}

export async function listProductTypes(req, res) {
  try {
    const [rows] = await db.query("SELECT * FROM `product_types` ORDER BY id DESC");
    const items = Array.isArray(rows) ? rows.map(normalizeTypeRow) : [];
    res.json(items);
  } catch (err) {
    console.error("listProductTypes error:", err);
    res.status(500).json({ message: "Failed to fetch product types", detail: err.message });
  }
}

export async function getProductType(req, res) {
  try {
    const id = Number(req.params.id);
    if (!Number.isFinite(id) || id <= 0) return res.status(400).json({ message: "Invalid ID" });

    const [rows] = await db.query("SELECT * FROM `product_types` WHERE id = ? LIMIT 1", [id]);
    if (!rows || rows.length === 0) return res.status(404).json({ message: "Product type not found" });
    res.json(normalizeTypeRow(rows[0]));
  } catch (err) {
    console.error("getProductType error:", err);
    res.status(500).json({ message: "Failed to fetch product type", detail: err.message });
  }
}

export async function createProductType(req, res) {
  try {
    const { name, code, status } = req.body;
    if (!name || !String(name).trim()) return res.status(400).json({ message: "Name is required" });

    const [result] = await db.query(
      "INSERT INTO `product_types` (name, code, status) VALUES (?, ?, ?)",
      [String(name).trim(), code ? String(code).trim() : null, Number(status ?? 1)]
    );

    const [rows] = await db.query("SELECT * FROM `product_types` WHERE id = ? LIMIT 1", [result.insertId]);
    if (!rows || rows.length === 0) return res.status(500).json({ message: "Failed to retrieve created product type" });
    res.status(201).json(normalizeTypeRow(rows[0]));
  } catch (err) {
    console.error("createProductType error:", err);
    res.status(500).json({ message: "Failed to create product type", detail: err.message });
  }
}

export async function updateProductType(req, res) {
  try {
    const id = Number(req.params.id);
    if (!Number.isFinite(id) || id <= 0) return res.status(400).json({ message: "Invalid ID" });

    const { name, code, status } = req.body;

    const sets = [];
    const params = [];
    if (name !== undefined) {
      sets.push("name = ?");
      params.push(String(name).trim());
    }
    if (code !== undefined) {
      sets.push("code = ?");
      params.push(code ? String(code).trim() : null);
    }
    if (status !== undefined) {
      sets.push("status = ?");
      params.push(Number(status));
    }

    if (sets.length === 0) return res.status(400).json({ message: "No fields to update" });

    params.push(id);
    const sql = `UPDATE \`product_types\` SET ${sets.join(", ")} WHERE id = ?`;
    const [result] = await db.query(sql, params);

    if (result.affectedRows === 0) return res.status(404).json({ message: "Product type not found" });

    const [rows] = await db.query("SELECT * FROM `product_types` WHERE id = ? LIMIT 1", [id]);
    if (!rows || rows.length === 0) return res.status(404).json({ message: "Product type not found after update" });
    res.json(normalizeTypeRow(rows[0]));
  } catch (err) {
    console.error("updateProductType error:", err);
    res.status(500).json({ message: "Failed to update product type", detail: err.message });
  }
}

export async function deleteProductType(req, res) {
  try {
    const id = Number(req.params.id);
    if (!Number.isFinite(id) || id <= 0) return res.status(400).json({ message: "Invalid ID" });

    const [result] = await db.query("DELETE FROM `product_types` WHERE id = ?", [id]);
    if (!result.affectedRows) return res.status(404).json({ message: "Product type not found" });
    res.json({ message: "Product type deleted" });
  } catch (err) {
    console.error("deleteProductType error:", err);
    res.status(500).json({ message: "Failed to delete product type", detail: err.message });
  }
}

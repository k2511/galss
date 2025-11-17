// backend/src/controllers/productShapeController.js
import db from "../config/db.js";

/**
 * Expected table structure: product_shapes
 * columns: id (PK), name, code, status, created_at, updated_at
 */

function normalizeShapeRow(row) {
  return {
    id: row.id ?? row.ID ?? null,
    name: row.name ?? row.shape_name ?? "",
    code: row.code ?? row.shape_code ?? "",
    status: row.status ?? 1,
    created_at: row.created_at ?? row.createdAt,
    updated_at: row.updated_at ?? row.updatedAt,
    raw: row,
  };
}

export async function listProductShapes(req, res) {
  try {
    const [rows] = await db.query("SELECT * FROM `product_shapes` ORDER BY id DESC");
    const items = Array.isArray(rows) ? rows.map(normalizeShapeRow) : [];
    res.json(items);
  } catch (err) {
    console.error("listProductShapes error:", err);
    res.status(500).json({ message: "Failed to fetch product shapes" });
  }
}

export async function getProductShape(req, res) {
  try {
    const id = req.params.id;
    const [rows] = await db.query("SELECT * FROM `product_shapes` WHERE id = ? LIMIT 1", [id]);
    if (!rows || rows.length === 0) return res.status(404).json({ message: "Product shape not found" });
    res.json(normalizeShapeRow(rows[0]));
  } catch (err) {
    console.error("getProductShape error:", err);
    res.status(500).json({ message: "Failed to fetch product shape" });
  }
}

export async function createProductShape(req, res) {
  try {
    const { name, code, status } = req.body;
    if (!name || !name.trim()) return res.status(400).json({ message: "Name is required" });

    const [result] = await db.query(
      "INSERT INTO `product_shapes` (name, code, status) VALUES (?, ?, ?)",
      [String(name).trim(), code ? String(code).trim() : null, Number(status ?? 1)]
    );

    const [rows] = await db.query("SELECT * FROM `product_shapes` WHERE id = ? LIMIT 1", [result.insertId]);
    res.status(201).json(normalizeShapeRow(rows[0]));
  } catch (err) {
    console.error("createProductShape error:", err);
    res.status(500).json({ message: "Failed to create product shape", detail: err.message });
  }
}

export async function updateProductShape(req, res) {
  try {
    const id = req.params.id;
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

    const sql = `UPDATE \`product_shapes\` SET ${sets.join(", ")} WHERE id = ?`;
    await db.query(sql, params);

    const [rows] = await db.query("SELECT * FROM `product_shapes` WHERE id = ? LIMIT 1", [id]);
    if (!rows || rows.length === 0) return res.status(404).json({ message: "Product shape not found after update" });
    res.json(normalizeShapeRow(rows[0]));
  } catch (err) {
    console.error("updateProductShape error:", err);
    res.status(500).json({ message: "Failed to update product shape", detail: err.message });
  }
}

export async function deleteProductShape(req, res) {
  try {
    const id = req.params.id;
    const [result] = await db.query("DELETE FROM `product_shapes` WHERE id = ?", [id]);
    if (!result.affectedRows) return res.status(404).json({ message: "Product shape not found" });
    res.json({ message: "Product shape deleted" });
  } catch (err) {
    console.error("deleteProductShape error:", err);
    res.status(500).json({ message: "Failed to delete product shape", detail: err.message });
  }
}

export default {
  listProductShapes,
  getProductShape,
  createProductShape,
  updateProductShape,
  deleteProductShape,
};

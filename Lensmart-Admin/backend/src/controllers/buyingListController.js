// backend/src/controllers/buyingListController.js
import db from "../config/db.js";

/**
 * buying_list table assumed columns:
 * id, user_id, product_id, category_id, brand_id, total, status, created_at
 */

// ✅ Create buying list entry
export async function createBuyingList(req, res) {
  try {
    const { user_id, product_id, category_id, brand_id, total, status } = req.body;

    if (!product_id)
      return res.status(400).json({ message: "Product selection is required" });

    const [result] = await db.query(
      `INSERT INTO buying_list (user_id, product_id, category_id, brand_id, total, status)
       VALUES (?, ?, ?, ?, ?, ?)`,
      [
        user_id || null,
        product_id,
        category_id || null,
        brand_id || null,
        total || 0,
        status || "Active",
      ]
    );

    res.status(201).json({
      id: result.insertId,
      message: "Buying list entry created successfully",
    });
  } catch (err) {
    console.error("createBuyingList:", err);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

// ✅ Get all buying list entries
export async function listBuyingLists(req, res) {
  try {
    const [rows] = await db.query(`
      SELECT bl.*, 
             u.name AS user_name,
             p.name AS product_name, 
             c.name AS category_name, 
             b.bname AS brand_name
      FROM buying_list bl
      LEFT JOIN users u ON bl.user_id = u.id
      LEFT JOIN products p ON bl.product_id = p.id
      LEFT JOIN categories c ON bl.category_id = c.id
      LEFT JOIN brands b ON bl.brand_id = b.BID
      ORDER BY bl.created_at DESC
    `);
    res.json(rows);
  } catch (err) {
    console.error("listBuyingLists:", err);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

// ✅ Get single buying list entry by ID
export async function getBuyingListById(req, res) {
  try {
    const id = req.params.id;
    const [rows] = await db.query(
      `
      SELECT bl.*, 
             u.name AS user_name,
             p.name AS product_name, 
             c.name AS category_name, 
             b.bname AS brand_name
      FROM buying_list bl
      LEFT JOIN users u ON bl.user_id = u.id
      LEFT JOIN products p ON bl.product_id = p.id
      LEFT JOIN categories c ON bl.category_id = c.id
      LEFT JOIN brands b ON bl.brand_id = b.BID
      WHERE bl.id = ?
    `,
      [id]
    );

    if (rows.length === 0)
      return res.status(404).json({ message: "Buying list not found" });

    res.json(rows[0]);
  } catch (err) {
    console.error("getBuyingListById:", err);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

// ✅ Update buying list entry
export async function updateBuyingList(req, res) {
  try {
    const id = req.params.id;
    const { user_id, product_id, category_id, brand_id, total, status } = req.body;

    const [result] = await db.query(
      `
      UPDATE buying_list 
      SET user_id = ?, product_id = ?, category_id = ?, brand_id = ?, total = ?, status = ?
      WHERE id = ?
    `,
      [
        user_id || null,
        product_id || null,
        category_id || null,
        brand_id || null,
        total || 0,
        status || "Active",
        id,
      ]
    );

    if (result.affectedRows === 0)
      return res.status(404).json({ message: "Buying list not found" });

    res.json({ message: "Buying list updated successfully" });
  } catch (err) {
    console.error("updateBuyingList:", err);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

// ✅ Delete buying list entry
export async function deleteBuyingList(req, res) {
  try {
    const id = req.params.id;
    const [result] = await db.query("DELETE FROM buying_list WHERE id = ?", [id]);

    if (result.affectedRows === 0)
      return res.status(404).json({ message: "Buying list not found" });

    res.json({ message: "Buying list deleted successfully" });
  } catch (err) {
    console.error("deleteBuyingList:", err);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

// backend/src/controllers/newArrivalController.js
import db from "../config/db.js";

/**
 * new_arrivals table assumed columns:
 * id, product_id, featured (boolean), created_at
 */

export async function createNewArrival(req, res) {
  try {
    const { product_id, featured } = req.body;
    if (!product_id) return res.status(400).json({ message: "product_id is required" });

    const [result] = await db.query(
      "INSERT INTO new_arrivals (product_id, featured) VALUES (?, ?)",
      [product_id, featured ? 1 : 0]
    );
    res.status(201).json({ id: result.insertId });
  } catch (err) {
    console.error("createNewArrival:", err);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

export async function listNewArrivals(req, res) {
  try {
    const [rows] = await db.query(
      `SELECT na.*, p.name AS product_name
       FROM new_arrivals na
       LEFT JOIN products p ON na.product_id = p.id
       ORDER BY na.created_at DESC`
    );
    res.json(rows);
  } catch (err) {
    console.error("listNewArrivals:", err);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

export async function getNewArrivalById(req, res) {
  try {
    const id = req.params.id;
    const [rows] = await db.query("SELECT * FROM new_arrivals WHERE id = ?", [id]);
    if (rows.length === 0) return res.status(404).json({ message: "Not found" });
    res.json(rows[0]);
  } catch (err) {
    console.error("getNewArrivalById:", err);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

export async function updateNewArrival(req, res) {
  try {
    const id = req.params.id;
    const { product_id, featured } = req.body;
    await db.query(
      "UPDATE new_arrivals SET product_id = ?, featured = ? WHERE id = ?",
      [product_id || null, featured ? 1 : 0, id]
    );
    res.json({ message: "Updated" });
  } catch (err) {
    console.error("updateNewArrival:", err);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

export async function deleteNewArrival(req, res) {
  try {
    const id = req.params.id;
    await db.query("DELETE FROM new_arrivals WHERE id = ?", [id]);
    res.json({ message: "Deleted" });
  } catch (err) {
    console.error("deleteNewArrival:", err);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

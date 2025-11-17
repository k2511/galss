// src/controllers/buyingCustController.js
import { pool } from "../config/db.js";

// ✅ Get all buying customers
export const getAllBuyingCustomers = async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM buyingcust ORDER BY id DESC");
    res.json(rows);
  } catch (error) {
    console.error("Error fetching customers:", error);
    res.status(500).json({ error: "Failed to fetch customers" });
  }
};

// ✅ Create new buying customer
export const createBuyingCustomer = async (req, res) => {
  try {
    const { name, email, mobile, city, product_id, pname, tprice, category_id, brand_id, status } =
      req.body;

    if (!name || !product_id) {
      return res.status(400).json({ error: "Name and Product are required" });
    }

    const [result] = await pool.query(
      `INSERT INTO buyingcust (name, email, mobile, city, product_id, pname, tprice, category_id, brand_id, status, cdate)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, NOW())`,
      [name, email, mobile, city, product_id, pname, tprice, category_id, brand_id, status]
    );

    const [created] = await pool.query("SELECT * FROM buyingcust WHERE id = ?", [result.insertId]);
    res.status(201).json(created[0]);
  } catch (error) {
    console.error("Error creating customer:", error);
    res.status(500).json({ error: "Failed to create customer" });
  }
};

// ✅ Get one customer
export const getBuyingCustomerById = async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM buyingcust WHERE id = ?", [req.params.id]);
    if (!rows.length) return res.status(404).json({ error: "Customer not found" });
    res.json(rows[0]);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch customer" });
  }
};

// ✅ Update customer
export const updateBuyingCustomer = async (req, res) => {
  try {
    const { id } = req.params;
    const fields = req.body;
    const keys = Object.keys(fields);
    if (!keys.length) return res.status(400).json({ error: "No fields to update" });

    const setClause = keys.map((k) => `${k} = ?`).join(", ");
    const values = Object.values(fields);

    await pool.query(`UPDATE buyingcust SET ${setClause} WHERE id = ?`, [...values, id]);
    const [updated] = await pool.query("SELECT * FROM buyingcust WHERE id = ?", [id]);
    res.json(updated[0]);
  } catch (error) {
    console.error("Error updating customer:", error);
    res.status(500).json({ error: "Failed to update customer" });
  }
};

// ✅ Delete customer
export const deleteBuyingCustomer = async (req, res) => {
  try {
    const { id } = req.params;
    await pool.query("DELETE FROM buyingcust WHERE id = ?", [id]);
    res.json({ message: "Customer deleted successfully" });
  } catch (error) {
    console.error("Error deleting customer:", error);
    res.status(500).json({ error: "Failed to delete customer" });
  }
};

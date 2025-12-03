// src/controllers/buyingCustController.js  (Now for customers)
import { pool } from "../config/db.js";

/** Safe trim utility */
const tv = (v) => {
  if (v === undefined || v === null) return null;
  const s = String(v).trim();
  return s === "" ? null : s;
};

/* -------------------------------------------------------
   GET ALL CUSTOMERS (Search + Pagination)
-------------------------------------------------------- */
export const getAllBuyingCustomers = async (req, res) => {
  try {
    const q = tv(req.query.q);
    const page = Number(req.query.page) || 1;
    const perPageRaw = req.query.perPage ?? req.query.limit ?? 25;
    const perPage =
      perPageRaw === "all" ? "all" : Math.max(1, Number(perPageRaw));

    let baseSql = "SELECT * FROM customers";
    const params = [];

    if (q) {
      baseSql += " WHERE name LIKE ? OR email LIKE ? OR mobile LIKE ?";
      const like = `%${q}%`;
      params.push(like, like, like);
    }

    baseSql += " ORDER BY id DESC";

    if (perPage !== "all") {
      const offset = (Math.max(1, page) - 1) * perPage;
      baseSql += " LIMIT ? OFFSET ?";
      params.push(perPage, offset);
    }

    const [rows] = await pool.query(baseSql, params);

    if (perPage !== "all") {
      let countSql = "SELECT COUNT(*) as total FROM customers";
      const countParams = [];

      if (q) {
        countSql += " WHERE name LIKE ? OR email LIKE ? OR mobile LIKE ?";
        const like = `%${q}%`;
        countParams.push(like, like, like);
      }

      const [countRows] = await pool.query(countSql, countParams);
      const total = countRows[0]?.total ?? 0;

      return res.json({
        success: true,
        customers: rows,
        meta: {
          total,
          page,
          perPage,
          totalPages: Math.ceil(total / perPage),
        },
      });
    }

    return res.json({ success: true, customers: rows });
  } catch (error) {
    console.error("getAllCustomers error:", error);
    return res
      .status(500)
      .json({ success: false, message: "Failed to fetch customers" });
  }
};

/* -------------------------------------------------------
   CREATE CUSTOMER
-------------------------------------------------------- */
export const createBuyingCustomer = async (req, res) => {
  try {
    const body = req.body || {};

    const name = tv(body.name);
    const email = tv(body.email);
    const mobile = tv(body.mobile);
    const city = tv(body.city);
    const address = tv(body.address);

    if (!name)
      return res
        .status(400)
        .json({ success: false, message: "name is required" });

    const [result] = await pool.query(
      `INSERT INTO customers (name, email, mobile, city, address, cdate)
       VALUES (?, ?, ?, ?, ?, NOW())`,
      [name, email || "", mobile || "", city || "", address || ""]
    );

    const insertId = result.insertId;
    const [created] = await pool.query("SELECT * FROM customers WHERE id = ?", [
      insertId,
    ]);

    return res.status(201).json({ success: true, customer: created[0] });
  } catch (error) {
    console.error("createCustomer error:", error);
    return res
      .status(500)
      .json({ success: false, message: "Failed to create customer" });
  }
};

/* -------------------------------------------------------
   GET SINGLE CUSTOMER
-------------------------------------------------------- */
export const getBuyingCustomerById = async (req, res) => {
  try {
    const id = Number(req.params.id);
    if (Number.isNaN(id))
      return res.status(400).json({ success: false, message: "Invalid id" });

    const [rows] = await pool.query("SELECT * FROM customers WHERE id = ?", [
      id,
    ]);

    if (!rows.length)
      return res
        .status(404)
        .json({ success: false, message: "Customer not found" });

    return res.json({ success: true, customer: rows[0] });
  } catch (error) {
    console.error("getCustomerById error:", error);
    return res
      .status(500)
      .json({ success: false, message: "Failed to fetch customer" });
  }
};

/* -------------------------------------------------------
   UPDATE CUSTOMER
-------------------------------------------------------- */
export const updateBuyingCustomer = async (req, res) => {
  try {
    const id = Number(req.params.id);
    if (Number.isNaN(id))
      return res.status(400).json({ success: false, message: "Invalid id" });

    const fields = req.body || {};
    delete fields.id;
    delete fields.cdate;

    const keys = Object.keys(fields);
    if (!keys.length)
      return res
        .status(400)
        .json({ success: false, message: "No fields provided to update" });

    const setClause = keys.map((k) => `${k} = ?`).join(", ");
    const values = keys.map((k) => fields[k]);

    const [updateResult] = await pool.query(
      `UPDATE customers SET ${setClause} WHERE id = ?`,
      [...values, id]
    );

    if (updateResult.affectedRows === 0)
      return res
        .status(404)
        .json({ success: false, message: "Customer not found" });

    const [updated] = await pool.query("SELECT * FROM customers WHERE id = ?", [
      id,
    ]);

    return res.json({ success: true, customer: updated[0] });
  } catch (error) {
    console.error("updateCustomer error:", error);
    return res
      .status(500)
      .json({ success: false, message: "Failed to update customer" });
  }
};

/* -------------------------------------------------------
   DELETE CUSTOMER
-------------------------------------------------------- */
export const deleteBuyingCustomer = async (req, res) => {
  try {
    const id = Number(req.params.id);
    if (Number.isNaN(id))
      return res.status(400).json({ success: false, message: "Invalid id" });

    const [result] = await pool.query("DELETE FROM customers WHERE id = ?", [
      id,
    ]);

    if (result.affectedRows === 0)
      return res
        .status(404)
        .json({ success: false, message: "Customer not found" });

    return res.json({
      success: true,
      message: "Customer deleted successfully",
    });
  } catch (error) {
    console.error("deleteCustomer error:", error);
    return res
      .status(500)
      .json({ success: false, message: "Failed to delete customer" });
  }
};

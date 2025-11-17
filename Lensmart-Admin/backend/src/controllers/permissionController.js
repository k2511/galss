import { pool } from "../config/db.js"; // Your MySQL pool
import bcrypt from "bcryptjs";

/**
 * Fetch all admins
 */
export const getAdmins = async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT id, first_name, last_name, email, mobile FROM users WHERE role='admin'");
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to fetch admins" });
  }
};

/**
 * Create new admin
 */
export const createAdmin = async (req, res) => {
  try {
    const { first_name, last_name, email, password, mobile } = req.body;

    if (!first_name || !last_name || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Check if email exists
    const [existing] = await pool.query("SELECT id FROM users WHERE email=?", [email]);
    if (existing.length > 0) {
      return res.status(400).json({ message: "Email already exists" });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    const [result] = await pool.query(
      "INSERT INTO users (first_name, last_name, email, password, mobile, role) VALUES (?, ?, ?, ?, ?, 'admin')",
      [first_name, last_name, email, hashedPassword, mobile || null]
    );

    const newAdmin = {
      id: result.insertId,
      first_name,
      last_name,
      email,
      mobile,
    };

    res.status(201).json(newAdmin);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to create admin" });
  }
};

/**
 * Fetch all permissions
 */
export const getPermissions = async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT id, name FROM permissions ORDER BY name ASC");
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to fetch permissions" });
  }
};

/**
 * Fetch permissions assigned to a specific admin
 */
export const getAdminPermissions = async (req, res) => {
  try {
    const adminId = req.params.adminId;
    const [rows] = await pool.query(
      "SELECT permission_id AS id FROM admin_permissions WHERE admin_id=?",
      [adminId]
    );
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to fetch admin permissions" });
  }
};

/**
 * Update admin permissions
 */
export const updateAdminPermissions = async (req, res) => {
  try {
    const { admin_id, permission_ids, updated_by } = req.body;

    if (!admin_id || !Array.isArray(permission_ids)) {
      return res.status(400).json({ message: "Invalid request" });
    }

    // Delete old permissions
    await pool.query("DELETE FROM admin_permissions WHERE admin_id=?", [admin_id]);

    // Insert new permissions
    if (permission_ids.length > 0) {
      const values = permission_ids.map((pid) => [admin_id, pid, updated_by || null]);
      await pool.query(
        "INSERT INTO admin_permissions (admin_id, permission_id, updated_by) VALUES ?",
        [values]
      );
    }

    res.json({ message: "Permissions updated successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to update permissions" });
  }
};

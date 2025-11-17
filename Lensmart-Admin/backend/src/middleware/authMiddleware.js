// import jwt from "jsonwebtoken";
// import dotenv from "dotenv";
// dotenv.config();

// export const verifyToken = (req, res, next) => {
//   const token = req.headers.authorization?.split(" ")[1];
//   if (!token) return res.status(401).json({ message: "No token provided" });
//   try {
//     const decoded = jwt.verify(token, process.env.JWT_SECRET);
//     req.user = decoded;
//     next();
//   } catch {
//     res.status(403).json({ message: "Invalid or expired token" });
//   }
// };

// src/middleware/authMiddleware.js
import jwt from "jsonwebtoken";
import { pool } from "../config/db.js";

const JWT_SECRET = process.env.JWT_SECRET || "CHANGE_ME_SECRET";

// ==============================
// Verify Token Middleware
// ==============================
export async function verifyToken(req, res, next) {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ message: "Authorization token missing" });
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded;

    // Optional: get updated role from DB (for safety)
    const [rows] = await pool.query("SELECT id, email, role FROM users WHERE id = ?", [decoded.id]);
    if (rows.length === 0) return res.status(401).json({ message: "User not found" });

    req.user = rows[0];
    next();
  } catch (err) {
    console.error("JWT Verify Error:", err.message);
    res.status(401).json({ message: "Invalid or expired token" });
  }
}

// ==============================
// Super Admin Check
// ==============================
export function isSuperAdmin(req, res, next) {
  if (req.user.role !== "super_admin") {
    return res.status(403).json({ message: "Access denied: Super admin only" });
  }
  next();
}

// ==============================
// Permission Check Middleware (Dynamic)
// ==============================
export async function hasPermission(pagePath) {
  return async function (req, res, next) {
    try {
      if (req.user.role === "super_admin") {
        return next();
      }

      const [rows] = await pool.query(
        `SELECT COUNT(*) as allowed
         FROM admin_page_access apa
         JOIN permissions p ON apa.permission_id = p.id
         WHERE apa.admin_id = ? AND p.page_path = ?`,
        [req.user.id, pagePath]
      );

      if (rows[0].allowed > 0) {
        return next();
      } else {
        return res.status(403).json({ message: "Access denied for this page" });
      }
    } catch (err) {
      console.error("Permission Check Error:", err);
      res.status(500).json({ message: "Internal Server Error" });
    }
  };
}

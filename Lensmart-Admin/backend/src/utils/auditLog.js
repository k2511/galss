import db from "../config/db.js";

export const auditLog = async ({ userId, action, details, req }) => {
  try {
    await db.query(
      `INSERT INTO audit_logs (user_id, action, details, ip_address, created_at)
       VALUES (?, ?, ?, ?, NOW())`,
      [
        userId || null,
        action || "",
        JSON.stringify(details || {}),
        req?.ip || null
      ]
    );
  } catch (err) {
    console.error("AuditLog Error:", err);
  }
};

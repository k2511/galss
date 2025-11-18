import db from "../config/db.js";

export const getOrderDetails = async (req, res) => {
  const { id } = req.body;
  const [rows] = await db.query("SELECT * FROM orders WHERE id=?", [id]);
  if (!rows.length) return res.status(404).json({ message: "not found" });
  res.json(rows[0]);
};

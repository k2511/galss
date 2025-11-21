import { pool } from "../config/db.js";
// const JWT_SECRET = process.env.JWT_SECRET || "CHANGE_ME_SECRET";
import jwt from "jsonwebtoken";


export const getOrderDetails = async (req, res) => {
  try {
    const { id } = req.body;
    const [rows] = await pool.query("SELECT * FROM orders WHERE id=?", [id]);
    if (!rows.length) return res.status(404).json({ message: "not found" });
    res.json(rows[0]);

  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "err in get order details",
    });
  }
};

export const checkAddress = async (req, res) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    //  console.log('token', token );

    if (!token) {
      return res.status(401).json({ message: "No token provided" });
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.user = decoded;
    // console.log('req',req.user);
    let id = req.user.id;

    const [result] = await pool.query(
      "SELECT address, phone, pincode, state, city, country FROM customers  WHERE id = ?",
      [id]
    );

    let userAddress = result[0];
    // console.log('add', userAddress)
    res.status(200).json({
      message: "success",
       address : userAddress
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "err in get order details",
    });
  }
};

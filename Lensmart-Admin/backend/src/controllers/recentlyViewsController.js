import db from "../config/db.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

export const getAllRecentlyViews = async (req, res) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user_id = decoded.id;

  const [rows] = await db.query(
     `SELECT rv.*, p.* FROM recently_views as rv
        LEFT JOIN products AS p 
        ON rv.product_id = p.id
        LEFT JOIN categories AS c
        ON rv.category_id = c.id 
            WHERE rv.user_id = 1 AND DATE(rv.viewed_at) = CURDATE()
            ORDER BY rv.viewed_at DESC 
      LIMIT 10;`,
    [user_id]
  );
//   console.log('view', rows);

  res.status(200).json({ r_viewed: rows });

  } catch (err) {
    console.error("❌ Error fetching reviews:", err);
    res.status(500).json({ message: "Failed to fetch reviews" });
  }
};

/**
 * ✅ Create new review
 */
export const createRecentlyViews = async (req, res) => {
  try {
    const { item } = req.body;
    const token = req.headers.authorization?.split(" ")[1];
    // console.log('toke', token, item)
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    
    let gender = item.gender;
    let category_id = item.category_id;
    let product_id = item.id;
    let user_id = decoded.id;
    const today = new Date().toISOString().split("T")[0];

    const [rows] = await db.query(
      "SELECT * FROM recently_views WHERE user_id=? AND product_id=? AND viewed_at=?",
      [user_id, product_id, today]
    );

    if (rows.length === 0) {
      await db.query(
        "INSERT INTO recently_views (user_id, product_id, viewed_at, category_id, gender) VALUES (?, ?, ?, ?, ?)",
        [user_id, product_id, today, category_id, gender]
      );
    }

    // if (user_id && product_id) {
    //   const [result] = await db.query(
    //     `INSERT INTO recently_views  (user_id, product_id, viewed_at, category_id,gender) VALUES (?, ?, ?, ?, ?)`,
    //     [user_id, product_id, today, category_id, gender]
    //   );
    // }

    res.status(201).json({ message: "Recently view saved" });
  } catch (err) {
    console.error("❌ Error creating review:", err);
    res.status(500).json({ message: "Failed to create review" });
  }
};

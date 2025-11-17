import db from "../config/db.js";

/**
 * ✅ Get all reviews (joined with products & users)
 */
export const getAllReviews = async (req, res) => {
  try {
    const [rows] = await db.query(`
      SELECT 
        r.id,
        r.product_id,
        r.user_id,
        r.rating,
        r.comment,
        r.created_at,
        p.name AS product_name,
        u.name AS user_name
      FROM reviews r
      LEFT JOIN products p ON r.product_id = p.id
      LEFT JOIN users u ON r.user_id = u.id
      ORDER BY r.id DESC
    `);

    // console.log('rows', rows );
    
    res.status(200).json(rows);
  } catch (err) {
    console.error("❌ Error fetching reviews:", err);
    res.status(500).json({ message: "Failed to fetch reviews" });
  }
};

/**
 * ✅ Get single review by ID
 */
export const getReviewById = async (req, res) => {
  try {
    const { id } = req.params;
    const [rows] = await db.query("SELECT * FROM reviews WHERE id = ?", [id]);

    if (rows.length === 0) {
      return res.status(404).json({ message: "Review not found" });
    }

    res.status(200).json(rows[0]);
  } catch (err) {
    console.error("❌ Error fetching review:", err);
    res.status(500).json({ message: "Failed to fetch review" });
  }
};

/**
 * ✅ Create new review
 */
export const createReview = async (req, res) => {
  try {
    const { product_id, user_id, rating, comment } = req.body;
    console.log('backend reviews ', product_id, user_id, rating, comment)
    // Validation
    if (!product_id) {
      return res.status(400).json({ message: "Product ID is required" });
    }
    if (!comment || comment.trim() === "") {
      return res.status(400).json({ message: "Comment cannot be empty" });
    }

    const safeRating = rating && rating >= 1 && rating <= 5 ? rating : 5;

    const [result] = await db.query(
      `INSERT INTO reviews (product_id, user_id, rating, comment, created_at)
       VALUES (?, ?, ?, ?, NOW())`,
      [product_id, user_id || null, safeRating, comment.trim()]
    );

    res.status(201).json({
      message: "✅ Review added successfully",
      id: result.insertId,
    });
  } catch (err) {
    console.error("❌ Error creating review:", err);
    res.status(500).json({ message: "Failed to create review" });
  }
};

/**
 * ✅ Update existing review
 */
export const updateReview = async (req, res) => {
  try {
    const { id } = req.params;
    const { product_id, user_id, rating, comment } = req.body;

    if (!id) {
      return res.status(400).json({ message: "Review ID is required" });
    }

    const safeRating = rating && rating >= 1 && rating <= 5 ? rating : 5;

    const [result] = await db.query(
      `UPDATE reviews
       SET product_id = ?, user_id = ?, rating = ?, comment = ?, updated_at = NOW()
       WHERE id = ?`,
      [product_id, user_id || null, safeRating, comment?.trim() || "", id]
    );

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "Review not found" });
    }

    res.status(200).json({ message: "✅ Review updated successfully" });
  } catch (err) {
    console.error("❌ Error updating review:", err);
    res.status(500).json({ message: "Failed to update review" });
  }
};

/**
 * ✅ Delete review
 */
export const deleteReview = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({ message: "Review ID is required" });
    }

    const [result] = await db.query("DELETE FROM reviews WHERE id = ?", [id]);

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "Review not found" });
    }

    res.status(200).json({ message: "✅ Review deleted successfully" });
  } catch (err) {
    console.error("❌ Error deleting review:", err);
    res.status(500).json({ message: "Failed to delete review" });
  }
};

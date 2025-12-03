// backend/src/controllers/buyingListController.js
import db from "../config/db.js";

/**
 * buying_list table assumed columns:
 * id, user_id, product_id, category_id, brand_id, total, status, created_at
 */

// ✅ Create buying list entry
export async function createBuyingList(req, res) {
  try {
    const { ids, user_id,order_id } = req.body; 
    console.log('id',user_id, order_id)

    if (!Array.isArray(ids) || ids.length === 0) {
      return res.status(400).json({ message: "ids required" });
    }

    const placeholders = ids.map(() => '?').join(',');
    const sql = `SELECT * FROM products WHERE id IN (${placeholders})`;

    const [rows] = await db.query(sql, ids);
    console.log('rows',rows)
    if (rows.length === 0) {
      return res.status(404).json({ message: "No products found" });
    }

    let lastResult=null;

    for (const p of rows) {
      // Step 1: Check exists
      const [exist] = await db.query(
        "SELECT id FROM buying_list WHERE product_id = ?",
        [p.id]
      );
    
      if (exist.length > 0) {
        console.log("Already in list, skip:", p.id);
        continue; // skip this product
      }
    
      // Step 2: Insert new product
      lastResult = await db.query(
        `INSERT INTO buying_list 
         (user_id, product_id, category_id, order_id, brand_id, name, img, total, created_at)
         VALUES (?, ?, ?, ?, ?, ?, ?, ?, NOW())`,
        [
          user_id || null,
          p.id,
          p.category_id || null,
          order_id || null,
          p.brand_id || null,
          p.name || null,
          p.image_url || null,
          p.sell_price || 0
        ]
      );
    }
    

    res.status(201).json({
      products: rows,
      insertId: lastResult ? lastResult[0].insertId : null,
      message: "Products fetched + buying_list created"
    });
  } catch (err) {
    console.error("createBuyingList:", err);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

// ✅ Get all buying list entries
export async function listBuyingLists(req, res) {
  try {
    const [rows] = await db.query(`
      SELECT bl.*, p.*,
             customers.name AS user_name,
             p.name AS product_name, 
             c.name AS category_name, 
             b.bname AS brand_name
      FROM buying_list bl
      LEFT JOIN customers  ON bl.user_id = customers.id
      LEFT JOIN products p ON bl.product_id = p.id
      LEFT JOIN categories c ON bl.category_id = c.id
      LEFT JOIN brands b ON bl.brand_id = b.BID
      ORDER BY bl.created_at DESC;
    `);
    console.log('list buying', rows)
    res.json(rows);
  } catch (err) {
    console.error("listBuyingLists:", err);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

// ✅ Get single buying list entry by ID
export async function getBuyingListById(req, res) {
  try {
    const id = req.params.id;
    const [rows] = await db.query(
      ` SELECT bl.*, 
             u.name AS user_name,
             p.name AS product_name, 
             c.name AS category_name, 
             b.bname AS brand_name
      FROM buying_list bl
      LEFT JOIN users u ON bl.user_id = u.id
      LEFT JOIN products p ON bl.product_id = p.id
      LEFT JOIN categories c ON bl.category_id = c.id
      LEFT JOIN brands b ON bl.brand_id = b.BID
      WHERE bl.id = ?  `,
      [id]
    );

    if (rows.length === 0)
      return res.status(404).json({ message: "Buying list not found" });

    res.json(rows[0]);
  } catch (err) {
    console.error("getBuyingListById:", err);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

// ✅ Update buying list entry
export async function updateBuyingList(req, res) {
  try {
    const id = req.params.id;
    const { user_id, product_id, category_id, brand_id, total, status } = req.body;

    const [result] = await db.query(
      `
      UPDATE buying_list 
      SET user_id = ?, product_id = ?, category_id = ?, brand_id = ?, total = ?, status = ?
      WHERE id = ?
    `,
      [
        user_id || null,
        product_id || null,
        category_id || null,
        brand_id || null,
        total || 0,
        status || "Active",
        id,
      ]
    );

    if (result.affectedRows === 0)
      return res.status(404).json({ message: "Buying list not found" });

    res.json({ message: "Buying list updated successfully" });
  } catch (err) {
    console.error("updateBuyingList:", err);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

// ✅ Delete buying list entry
export async function deleteBuyingList(req, res) {
  try {
    const id = req.params.id;
    const [result] = await db.query("DELETE FROM buying_list WHERE id = ?", [id]);

    if (result.affectedRows === 0)
      return res.status(404).json({ message: "Buying list not found" });

    res.json({ message: "Buying list deleted successfully" });
  } catch (err) {
    console.error("deleteBuyingList:", err);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

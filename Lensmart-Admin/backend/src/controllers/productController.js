import { pool } from "../config/db.js";
import fs from "fs";
import path from "path";

const UPLOADS_DIR = path.join(process.cwd(), "src", "uploads"); // matches express static in index.js
const BASE_URL = process.env.BASE_URL || "http://localhost:5000";

function safeNumber(val, fallback = 0) {
  const n = Number(val);
  return Number.isFinite(n) ? n : fallback;
}

/**
 * Create product
 */
export const createProduct = async (req, res) => {
  try {
    let {
      name,
      sku,
      brand_id,
      br_id,
      category_id,
      cat_id,
      price,
      // e_price removed
      stock,
      sell_price,
      description,
      meta_key,
      meta_des,
      platform,
      features,
      ins_inst,
      d_link,
      status,
      gender,
    } = req.body;

    const finalBrandId = brand_id ?? br_id ?? null;
    const finalCategoryId = category_id ?? cat_id ?? null;
    // const image = req.file ? req.file.filename : null;
    const image = req.files?.up_img ? req.files.up_img[0].filename : null;
     
    const galleryImages = req.files?.gallery_imgs
    ? req.files.gallery_imgs.map((img) => img.filename)
    : [];

    // console.log( "backend",  galleryImages, image, req.files );

    sell_price = Number(sell_price);
    price = Number(price);

      const [result] = await pool.query(
      `INSERT INTO products
        (name, gender, sku, brand_id, category_id, price, sell_price, stock, description, image, gallery_images, meta_key, meta_des, platform, features, ins_inst, d_link, status, created_at, updated_at)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, NOW(), NOW())`,
      [
        name || null,
        gender || null,
        sku || null,
        finalBrandId || null,
        finalCategoryId || null,
        safeNumber(price, 0),
        safeNumber(sell_price, 0),
        safeNumber(stock, 0),
        description || null,
        image,
        JSON.stringify(galleryImages),
        meta_key || null,
        meta_des || null,
        platform || null,
        features || null,
        ins_inst || null,
        d_link || null , 
        status !== undefined && status !== null ? String(status) : "1",
      ]
    );

    res
      .status(201)
      .json({ id: result.insertId, message: "Product created successfully" });
  } catch (error) {
    console.error("createProduct error:", error);
    res.status(500).json({ error: error.message || "Internal Server Error" });
  }
};

/**
 * Get all products (fixed joins + brand/category names)
 */
export const getAll = async (_, res) => {
  try {
    const [rows] = await pool.query(
      `SELECT p.*,
              b.bname AS brand_name,
              c.name AS category_name
       FROM products p
       LEFT JOIN brands b ON p.brand_id = b.BID
       LEFT JOIN categories c ON p.category_id = c.id
       ORDER BY p.id DESC`
    );

    // add image_url for frontend convenience
    const mapped = rows.map((r) => ({
      ...r,
      image_url: r.image ? `${BASE_URL}/uploads/${r.image}` : null,
      gallery_images: r.gallery_images ? r.gallery_images : []
    }));

    // console.log('dd', mapped)


    res.json(mapped);
  } catch (err) {
    console.error("getAllProducts error:", err);
    res.status(500).json({ error: err.message || "Internal Server Error" });
  }
};

// backward-compat alias (some routers may import getAllProducts)
export const getAllProducts = getAll;

/**
 * Get single product by id
 */
export const getProductById = async (req, res) => {
  try {
    const [rows] = await pool.query(
      `SELECT p.*,
              b.name AS brand_name,
              c.name AS category_name
       FROM products p
       LEFT JOIN brands b ON p.brand_id = b.id
       LEFT JOIN categories c ON p.category_id = c.id
       WHERE p.id = ? LIMIT 1`,
      [req.params.id]
    );

    if (!rows.length)
      return res.status(404).json({ message: "Product not found" });

    const row = rows[0];
    row.image_url = row.image ? `${BASE_URL}/uploads/${row.image}` : null;

    
    res.json(row);
  } catch (err) {
    console.error("getProductById error:", err);
    res.status(500).json({ error: err.message || "Internal Server Error" });
  }
};

/**
 * Update product (image replacement + cleanup)
 */
export const updateProduct = async (req, res) => {
  try {
    const {
      name,
      sku,
      brand_id,
      br_id,
      category_id,
      cat_id,
      price,
      // e_price removed
      stock,
      description,
      meta_key,
      meta_des,
      platform,
      features,
      ins_inst,
      d_link,
      status,
    } = req.body;

    const finalBrandId = brand_id ?? br_id ?? null;
    const finalCategoryId = category_id ?? cat_id ?? null;
    const image = req.file ? req.file.filename : null;

    // remove old image file if new one uploaded
    if (image) {
      try {
        const [oldRows] = await pool.query(
          "SELECT image FROM products WHERE id = ? LIMIT 1",
          [req.params.id]
        );
        const oldImage = oldRows?.[0]?.image;
        if (oldImage) {
          const p = path.join(UPLOADS_DIR, oldImage);
          if (fs.existsSync(p)) fs.unlinkSync(p);
        }
      } catch (err) {
        console.warn("Failed to remove old product image:", err.message || err);
      }
    }

    await pool.query(
      `UPDATE products SET
         name = COALESCE(?, name),
         sku = COALESCE(?, sku),
         brand_id = ?,
         category_id = ?,
         price = COALESCE(?, price),
         stock = COALESCE(?, stock),
         description = COALESCE(?, description),
         image = COALESCE(?, image),
         meta_key = COALESCE(?, meta_key),
         meta_des = COALESCE(?, meta_des),
         platform = COALESCE(?, platform),
         features = COALESCE(?, features),
         ins_inst = COALESCE(?, ins_inst),
         d_link = COALESCE(?, d_link),
         status = COALESCE(?, status),
         updated_at = NOW()
       WHERE id = ?`,
      [
        name || null,
        sku || null,
        finalBrandId || null,
        finalCategoryId || null,
        price !== undefined && price !== "" ? safeNumber(price, 0) : null,
        stock !== undefined && stock !== "" ? safeNumber(stock, 0) : null,
        description || null,
        image,
        meta_key || null,
        meta_des || null,
        platform || null,
        features || null,
        ins_inst || null,
        d_link || null,
        status !== undefined && status !== null ? String(status) : null,
        req.params.id,
      ]
    );

    res.json({ message: "Product updated successfully" });
  } catch (err) {
    console.error("updateProduct error:", err);
    res.status(500).json({ error: err.message || "Internal Server Error" });
  }
};

/**
 * Delete product (and its image file)
 */
export const deleteProduct = async (req, res) => {
  try {
    try {
      const [rows] = await pool.query(
        "SELECT image FROM products WHERE id = ? LIMIT 1",
        [req.params.id]
      );
      const image = rows?.[0]?.image;
      if (image) {
        const p = path.join(UPLOADS_DIR, image);
        if (fs.existsSync(p)) fs.unlinkSync(p);
      }
    } catch (err) {
      console.warn(
        "deleteProduct: failed to remove image file",
        err.message || err
      );
    }

    const [result] = await pool.query(`DELETE FROM products WHERE id = ?`, [
      req.params.id,
    ]);
    if (result.affectedRows === 0)
      return res.status(404).json({ message: "Product not found" });
    res.json({ message: "Product deleted" });
  } catch (err) {
    console.error("deleteProduct error:", err);
    res.status(500).json({ error: err.message || "Internal Server Error" });
  }
};

// backend/src/controllers/couponController.js
import db from "../config/db.js";

/**
 * coupons table assumed columns (recommended):
 * id, PID, pname, code, discount_type ('percent'|'flat'), discount_value,
 * expires_at, status (TINYINT 1), created_at, updated_at
 *
 * This controller accepts both legacy and new field names:
 * - code or cou_code
 * - discount_value or dis_amt
 */

const ALLOWED_DISCOUNT_TYPES = new Set(["percent", "flat", "fixed"]);

function normalizeDiscountType(dt) {
  if (!dt) return "percent";
  const lc = String(dt).toLowerCase();
  if (lc === "fixed") return "flat";
  if (lc === "amount") return "flat";
  if (ALLOWED_DISCOUNT_TYPES.has(lc)) return lc;
  return "percent";
}

function parseNumber(v, fallback = 0) {
  const n = Number(v);
  return Number.isFinite(n) ? n : fallback;
}

export async function createCoupon(req, res) {
  try {
    // Accept multiple possible field names from client
     let {
      code,
      cou_code,
      discount_type,
      discount_value,
      dis_amt,
      expires_at,
      PID,
      pname,
      status,
    } = req.body;

    console.log("coupon", code, discount_type, discount_value,  expires_at, PID,  pname,  status  );

    const finalCode = (code ?? cou_code ?? "").toString().trim();
    if (!finalCode)
      return res.status(400).json({ message: "Coupon code is required" });

    // normalize discount type & value
    // const dt = normalizeDiscountType(discount_type);
    const dv = parseNumber(discount_value ?? dis_amt ?? 0, 0);

    // normalize status to 1/0
    const st =
      status === "Inactive" ||
      status === 0 ||
      status === "0" ||
      status === false
        ? 0
        : 1;

    // check duplicate
    const [existing] = await db.query(
      "SELECT id FROM coupons WHERE code = ? LIMIT 1",
      [finalCode]
    );
    if (existing.length > 0)
      return res.status(400).json({ message: "Coupon code already exists" });

    const [result] = await db.query(
      `INSERT INTO coupons
        (product_id, code, discount_type, value, expires_at, status, created_at)
       VALUES (?, ?, ?, ?, ?, ?,  NOW())`,
      [ PID, finalCode, discount_type, dv, expires_at ?? null, st]
    );

    return res.status(201).json({ id: result.insertId, code: finalCode });
  } catch (err) {
    console.error("createCoupon error:", err);
    // If unknown column or other SQL error, return message but keep 500
    return res
      .status(500)
      .json({ message: err?.message || "Internal Server Error" });
  }
}

export async function listCoupons(req, res) {
  try {
    // simple list; add pagination later if needed (limit/offset)
    const [rows] = await db.query(`SELECT  c.*, p.* FROM coupons c
                                          LEFT JOIN products p 
                                            ON p.id = c.product_id
                                          ORDER BY c.id DESC`);
    return res.json(rows);
  } catch (err) {
    console.error("listCoupons error:", err);
    return res.status(500).json({ message: "Internal Server Error" });
  }
}

export async function getCouponById(req, res) {
  try {
    const id = req.params.id;
    const [rows] = await db.query(
      "SELECT * FROM coupons WHERE id = ? LIMIT 1",
      [id]
    );
    if (rows.length === 0)
      return res.status(404).json({ message: "Coupon not found" });
    return res.json(rows[0]);
  } catch (err) {
    console.error("getCouponById error:", err);
    return res.status(500).json({ message: "Internal Server Error" });
  }
}

export async function updateCoupon(req, res) {
  try {
    const id = req.params.id;
    const {
      code,
      cou_code,
      discount_type,
      discount_value,
      dis_amt,
      expires_at,
      PID,
      pname,
      status,
    } = req.body;

    const finalCode = (code ?? cou_code ?? "").toString().trim();
    if (!finalCode)
      return res.status(400).json({ message: "Coupon code is required" });

    const dt = normalizeDiscountType(discount_type);
    const dv = parseNumber(discount_value ?? dis_amt ?? 0, 0);
    const st =
      status === "Inactive" ||
      status === 0 ||
      status === "0" ||
      status === false
        ? 0
        : 1;

    // ensure coupon exists
    const [row] = await db.query(
      "SELECT id FROM coupons WHERE id = ? LIMIT 1",
      [id]
    );
    if (row.length === 0)
      return res.status(404).json({ message: "Coupon not found" });

    // check duplicate code on other records
    const [dupes] = await db.query(
      "SELECT id FROM coupons WHERE code = ? AND id != ? LIMIT 1",
      [finalCode, id]
    );
    if (dupes.length > 0)
      return res
        .status(400)
        .json({ message: "Coupon code already in use by another record" });

    await db.query(
      `UPDATE coupons
         SET PID = ?, pname = ?, code = ?, discount_type = ?, discount_value = ?, expires_at = ?, status = ?, updated_at = NOW()
       WHERE id = ?`,
      [
        PID ?? null,
        pname ?? null,
        finalCode,
        dt,
        dv,
        expires_at ?? null,
        st,
        id,
      ]
    );

    return res.json({ message: "Coupon updated" });
  } catch (err) {
    console.error("updateCoupon error:", err);
    return res
      .status(500)
      .json({ message: err?.message || "Internal Server Error" });
  }
}

export async function deleteCoupon(req, res) {
  try {
    const id = req.params.id;
    const [result] = await db.query("DELETE FROM coupons WHERE id = ?", [id]);
    if (result.affectedRows === 0)
      return res.status(404).json({ message: "Coupon not found" });
    return res.json({ message: "Coupon deleted" });
  } catch (err) {
    console.error("deleteCoupon error:", err);
    return res.status(500).json({ message: "Internal Server Error" });
  }
}

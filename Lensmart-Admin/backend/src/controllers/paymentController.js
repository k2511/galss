import Razorpay from "razorpay";
import crypto from "crypto";
import db from "../config/db.js";
import dotenv from "dotenv";
dotenv.config();

const razor = new Razorpay({
  key_id:'',
  key_secret: '',
});

export const createOrder = async (req, res) => {
  try {
    const { subtotal, gstAmount, amount, currency, items, userId } = req.body;
    //  console.log(' subtotal,  ',  subtotal, gstAmount, amount, currency, items, userId )
    const rzpOrder = await razor.orders.create({
      amount: Math.round(amount * 100),
      currency: currency || "INR",
      receipt: "rcpt_" + Date.now(),
    });

    console.log('pao', rzpOrder)

    const [result] = await db.query(
      `INSERT INTO orders (user_id, items_json, subtotal, gst_amount, total_amount, currency, razorpay_order_id) 
       VALUES (?, ?, ?, ?, ?, ?, ?)`,
      [
        userId,
        JSON.stringify(items),
        subtotal,
        gstAmount,
        amount,
        currency,
        rzpOrder.id,
      ]
    );

    res.json({
      order: rzpOrder,
      localOrderId: result.insertId,
    });
  } catch {
    res.status(500).json({ message: "error" });
  }
};

export const verifyPayment = async (req, res) => {
  try {
    const {
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature,
      localOrderId,
    } = req.body;

    const body = razorpay_order_id + "|" + razorpay_payment_id;
    const expected = crypto
      .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
      .update(body)
      .digest("hex");

    if (expected === razorpay_signature) {
      await db.query(
        `UPDATE orders SET payment_status='paid', order_status='processing', razorpay_payment_id=? WHERE id=?`,
        [razorpay_payment_id, localOrderId]
      );

      res.json({ success: true });
    } else {
      await db.query(`UPDATE orders SET payment_status='failed' WHERE id=?`, [
        localOrderId,
      ]);
      res.json({ success: false });
    }
  } catch {
    res.status(500).json({ success: false });
  }
};

export const razorpayWebhook = async (req, res) => {
  try {
    const signature = req.headers["x-razorpay-signature"];
    const expected = crypto
      .createHmac("sha256", process.env.WEBHOOK_SECRET)
      .update(req.rawBody)
      .digest("hex");

    if (signature !== expected) return res.status(400).send("invalid");

    const payload = req.body;

    if (payload.event === "payment.captured") {
      const pay = payload.payload.payment.entity;

      await db.query(
        `UPDATE orders SET payment_status='paid', order_status='processing', razorpay_payment_id=? WHERE razorpay_order_id=?`,
        [pay.id, pay.order_id]
      );
    }

    res.json({ ok: true });
  } catch {
    res.status(500).json({ ok: false });
  }
};

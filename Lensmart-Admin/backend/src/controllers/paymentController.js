
import crypto from "crypto";
import db from "../config/db.js";
import dotenv from "dotenv";
dotenv.config();
import {razor} from '../config/razorpay.js'


export const createOrder = async (req, res) => {  
  try {
    const { subtotal, gstAmount, amount, currency, items, userId } = req.body;
    //  console.log(' subtotal,  ',  subtotal, gstAmount, amount, currency, items, userId )
    const rzpOrder = await razor.orders.create({
      amount: amount * 100,
      currency: currency || "INR",
      receipt: "rcpt_" + Date.now(),
      notes: {
        userId ,
        productsId: items.map((val) => val.product_id)
      }
    });

    console.log('order_id', rzpOrder)

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

    console.log('result in order', rzpOrder.notes  )
    // user ne already pay to nhi krdiya h iss product k liye 
    // order_id check krna h correct h ya nhi fir store krna h 
    res.status(200).json({
      success: true,
      message: "order created",
      order: rzpOrder,
      localOrderId: result.insertId,
      myOrders: rzpOrder.notes
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
    console.log("🔥 Razorpay Webhook Received at:", new Date().toISOString())
    const webhookSecret = '12345678';
     
      const signature = req.headers["x-razorpay-signature"];

      // const shasum = crypto.createHmac("sha256", webhookSecret) 
      // shasum.update(JSON.stringify(req.body));
      // const digest = shasum.digest("hex");
      const digest = crypto
      .createHmac("sha256", webhookSecret)
      .update(JSON.stringify(req.body))
      .digest("hex");

     //  hmac ----> hashed based message authentication code
    // hmac takes two thing first is sha algorithm second is secret key 
    // sha ------=>  secure hasing algorithm 
    // check sum

    
    console.log("👉 Signature:", signature);
    console.log("👉 Digest:", digest);

    if (signature !== digest) {
      console.log("❌ Webhook Verification Failed!");
      return res.status(400).json({ message: "Invalid signature" });
    }

    console.log("✅ Webhook Verified Successfully!");

    const event = req.body.event;

    if (event === "payment.captured") {
      const payment = req.body.payload.payment.entity;

      console.log("💰 Payment Captured:", payment.amount / 100);

      console.log("📝 Notes:", payment.notes);

      const { products, userId, notes } = payment.notes;

      console.log("✔ products:", products);
      console.log("✔ userId:", userId);
      console.log("✔ notes:", notes);

      // Yaha database update karna hai toh karo
      // await Order.update(...)
    }

    // if (signature !== shasum) return res.status(400).send("invalid");
    // if(signature !== digest) {
    //   console.log('payment authorized');
      
    //    const {products, userId, notes } = req.body.payload.payment.entity.notes;
    //    console.log('products, userId', products, userId, notes);
    // }

    // const payload = req.body;

    // if (payload.event === "payment.captured") {
    //   const pay = payload.payload.payment.entity;

    //   await db.query(
    //     `UPDATE orders SET payment_status='paid', order_status='processing', razorpay_payment_id=? WHERE razorpay_order_id=?`,
    //     [pay.id, pay.order_id]
    //   );
    // }

    res.json({ status: "ok" ,ok: true });
  } catch {
    res.status(500).json({ ok: false });
  }
};

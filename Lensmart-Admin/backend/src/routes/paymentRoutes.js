import express from "express";
import {
  createOrder,
  verifyPayment,
  razorpayWebhook
} from "../controllers/paymentController.js";


const app = express();


const router = express.Router();

router.post("/create-order", createOrder);
router.post("/verify-payment", verifyPayment);
router.post("/webhook", express.raw({ type: "application/json" }),  razorpayWebhook);

export default router;
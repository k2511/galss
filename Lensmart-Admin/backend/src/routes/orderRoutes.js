import express from "express";
import { getOrderDetails } from "../controllers/orderController.js";

const router = express.Router();

router.post("/order-details", getOrderDetails);

export default router;

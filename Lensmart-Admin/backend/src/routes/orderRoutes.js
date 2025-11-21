import express from "express";
import { getOrderDetails, checkAddress } from "../controllers/orderController.js";
import { verifyToken } from "../middleware/authMiddleware.js";
const router = express.Router();

router.post("/order-details", getOrderDetails);
router.post('/check-address',   checkAddress );

export default router;

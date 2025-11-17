// backend/src/routes/couponRoutes.js
import express from "express";
import {
  createCoupon,
  listCoupons,
  getCouponById,
  updateCoupon,
  deleteCoupon,
} from "../controllers/couponController.js";

const router = express.Router();

router.post("/", createCoupon);
router.get("/", listCoupons);
router.get("/:id", getCouponById);
router.put("/:id", updateCoupon);
router.delete("/:id", deleteCoupon);

export default router;


import express from "express";
import {
 addToCart,
 getAllCartItem,
 incQty,
 decQty,
 deleteItem
} from "../controllers/cartController.js";

const router = express.Router();


router.post("/", addToCart);
router.get("/", getAllCartItem);
router.post("/inc-qty", incQty);
router.post("/dec-qty", decQty);

router.delete("/", deleteItem);

export default router;

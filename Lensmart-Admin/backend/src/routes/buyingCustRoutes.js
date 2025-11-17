// src/routes/buyingCustRoutes.js
import express from "express";
import {
  getAllBuyingCustomers,
  createBuyingCustomer,
  getBuyingCustomerById,
  updateBuyingCustomer,
  deleteBuyingCustomer,
} from "../controllers/buyingCustController.js";

const router = express.Router();

router.get("/", getAllBuyingCustomers);
router.post("/", createBuyingCustomer);
router.get("/:id", getBuyingCustomerById);
router.put("/:id", updateBuyingCustomer);
router.delete("/:id", deleteBuyingCustomer);

export default router;

// backend/src/routes/productTypeRoutes.js
import express from "express";
import {
  listProductTypes,
  getProductType,
  createProductType,
  updateProductType,
  deleteProductType,
} from "../controllers/productTypeController.js";

const router = express.Router();

router.get("/", listProductTypes);
router.post("/", createProductType);
router.get("/:id", getProductType);
router.put("/:id", updateProductType);
router.delete("/:id", deleteProductType);

export default router;

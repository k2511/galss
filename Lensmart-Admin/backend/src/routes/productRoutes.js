// backend/src/routes/productRoutes.js
import express from "express";
import {
  createProduct,
  getAllProducts,
  getProductById,
  updateProduct,
  deleteProduct,
} from "../controllers/productController.js";
import { uploadSingle } from "../middleware/upload.js";

const router = express.Router();

// Create product (multipart form-data, optional image)
router.post("/", uploadSingle, createProduct);

// Get all products
router.get("/", getAllProducts);

// Get by id
router.get("/:id", getProductById);

// Update (allow file upload)
router.put("/:id", uploadSingle, updateProduct);

// Delete
router.delete("/:id", deleteProduct);

export default router;

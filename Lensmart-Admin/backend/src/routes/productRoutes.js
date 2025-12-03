// // backend/src/routes/productRoutes.js
// import express from "express";
// import {
//   createProduct,
//   getAllProducts,
//   getProductById,
//   updateProduct,
//   deleteProduct,
// } from "../controllers/productController.js";
// import { uploadSingle } from "../middleware/upload.js";

// const router = express.Router();

// // Create product (multipart form-data, optional image)
// router.post("/", uploadSingle, createProduct);

// // Get all products
// router.get("/", getAllProducts);

// // Get by id
// router.get("/:id", getProductById);

// // Update (allow file upload)
// router.put("/:id", uploadSingle, updateProduct);

// // Delete
// router.delete("/:id", deleteProduct);

// export default router;



import express from "express";
import {
  createProduct,
  getAllProducts,
  getProductById,
  updateProduct,
  deleteProduct,
} from "../controllers/productController.js";

import { uploadProductImages } from "../middleware/upload.js";
import {verifyToken} from '../middleware/authMiddleware.js'
const router = express.Router();

// Create product (main image + gallery images)
router.post("/",verifyToken , uploadProductImages, createProduct);

// Get all products
router.get("/", getAllProducts);

// Get single
router.get("/:id", getProductById);

// Update product (images allowed)
router.put("/:id", uploadProductImages, updateProduct);

// Delete
router.delete("/:id", deleteProduct);

export default router;


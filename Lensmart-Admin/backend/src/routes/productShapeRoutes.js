// backend/src/routes/productShapeRoutes.js
import express from "express";
import {
  listProductShapes,
  getProductShape,
  createProductShape,
  updateProductShape,
  deleteProductShape,
} from "../controllers/productShapeController.js";

const router = express.Router();

router.get("/", listProductShapes);
router.post("/", createProductShape);
router.get("/:id", getProductShape);
router.put("/:id", updateProductShape);
router.delete("/:id", deleteProductShape);

export default router;

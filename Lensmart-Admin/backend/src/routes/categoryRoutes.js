// src/routes/categoryRoutes.js
import express from "express";
import * as ctrl from "../controllers/categoryController.js";

const router = express.Router();

/**
 * Resolve a handler by trying a list of possible export names.
 * Returns a function (handler) — if none found, returns a 501 handler.
 */
function resolveHandler(...names) {
  const found = names.find((n) => typeof ctrl[n] === "function");
  if (found) return ctrl[found];
  return (req, res) =>
    res.status(501).json({ message: `Handler not implemented. Tried: ${names.join(", ")}` });
}

// GET list
router.get("/", resolveHandler("getAll", "listCategories", "list", "getCategories"));

// GET single
router.get("/:id", resolveHandler("getById", "getCategory", "get"));

// POST create
router.post("/", resolveHandler("create", "createCategory", "addCategory"));

// PUT update
router.put("/:id", resolveHandler("update", "updateCategory", "editCategory"));

// DELETE
router.delete("/:id", resolveHandler("remove", "deleteCategory", "delete"));

export default router;

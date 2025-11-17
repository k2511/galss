// backend/src/routes/brandRoutes.js
import express from "express";
import {
  createBrand,
  listBrands,
  getBrandById,
  updateBrand,
  deleteBrand,
} from "../controllers/brandController.js";

const router = express.Router();

/**
 * small async wrapper so thrown errors in async controllers call next(err)
 * and are handled by Express error middleware.
 */
function asyncHandler(fn) {
  return function (req, res, next) {
    Promise.resolve(fn(req, res, next)).catch(next);
  };
}

/**
 * Param middleware to validate :id when present.
 * Normalizes numeric ids (keeps strings too for flexible PKs).
 */
router.param("id", (req, res, next, id) => {
  if (id === undefined || id === null || String(id).trim() === "") {
    return res.status(400).json({ message: "Invalid id parameter" });
  }
  // attach normalized id to req so controllers can reuse if needed
  req.paramId = id;
  next();
});

// Routes
router.post("/", asyncHandler(createBrand));
router.get("/", asyncHandler(listBrands));
router.get("/:id", asyncHandler(getBrandById));
router.put("/:id", asyncHandler(updateBrand));
router.delete("/:id", asyncHandler(deleteBrand));

export default router;

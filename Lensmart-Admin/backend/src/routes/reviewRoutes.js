// backend/src/routes/reviewRoutes.js
import express from "express";
import {
  getAllReviews,
  getReviewById,
  createReview,
  updateReview,
  deleteReview,
} from "../controllers/reviewController.js";

const router = express.Router();

// Routes
router.get("/", getAllReviews);
router.get("/:id", getReviewById);
router.post("/", createReview);
router.put("/:id", updateReview);
router.delete("/:id", deleteReview);
// router.post("" , );


export default router;

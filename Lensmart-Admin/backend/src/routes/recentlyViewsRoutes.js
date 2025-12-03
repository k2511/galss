// backend/src/routes/productTypeRoutes.js
import express from "express";
import {
    getAllRecentlyViews, createRecentlyViews
} from "../controllers/recentlyViewsController.js";
// import { verifyToken } from "../middleware/authMiddleware.js";
const router = express.Router();

router.get("/", getAllRecentlyViews);
router.post("/", createRecentlyViews);


export default router;

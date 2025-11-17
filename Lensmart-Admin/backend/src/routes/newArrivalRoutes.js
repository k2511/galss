// backend/src/routes/newArrivalRoutes.js
import express from "express";
import {
  createNewArrival,
  listNewArrivals,
  getNewArrivalById,
  updateNewArrival,
  deleteNewArrival,
} from "../controllers/newArrivalController.js";

const router = express.Router();

router.post("/", createNewArrival);
router.get("/", listNewArrivals);
router.get("/:id", getNewArrivalById);
router.put("/:id", updateNewArrival);
router.delete("/:id", deleteNewArrival);

export default router;

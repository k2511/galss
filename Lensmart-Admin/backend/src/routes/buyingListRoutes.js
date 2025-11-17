import express from "express";
import {
  createBuyingList,
  listBuyingLists,
  getBuyingListById,
  updateBuyingList,
  deleteBuyingList,
} from "../controllers/buyingListController.js";

const router = express.Router();

router.get("/", listBuyingLists);
router.get("/:id", getBuyingListById);
router.post("/", createBuyingList);
router.put("/:id", updateBuyingList);
router.delete("/:id", deleteBuyingList);

export default router;

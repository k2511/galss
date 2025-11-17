import express from "express";
import {
  getAdmins,
  createAdmin,
  getPermissions,
  getAdminPermissions,
  updateAdminPermissions,
} from "../controllers/permissionController.js";

const router = express.Router();

router.get("/users", getAdmins);
router.post("/users", createAdmin);

router.get("/permissions", getPermissions);
router.get("/permissions/admin/:adminId", getAdminPermissions);
router.post("/permissions/update", updateAdminPermissions);

export default router;

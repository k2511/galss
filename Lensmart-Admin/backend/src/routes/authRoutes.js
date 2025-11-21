// src/routes/authRoutes.js
import express from "express";
import { register, login , signup, customerLogin , profile} from "../controllers/authController.js";
import { verifyToken, isSuperAdmin } from "../middleware/authMiddleware.js";

const router = express.Router();

// ==============================
// Public Routes
// ==============================
router.post("/register", register);
router.post("/login", login);

router.post("/signup", signup);
router.post("/customer-login", customerLogin);

router.post('/profile', profile);

// ==============================
// Protected Example Routes
// ==============================
// Only logged-in users can access this
router.get("/profile", verifyToken, (req, res) => {
  res.json({ message: "Welcome!", user: req.user });
});

// Only super admin can access this
router.get("/super-only", verifyToken, isSuperAdmin, (req, res) => {
  res.json({ message: "You are super admin!", user: req.user });
});

export default router;

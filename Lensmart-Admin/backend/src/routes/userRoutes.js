// // backend/src/routes/userRoutes.js
// import express from "express";
// import {
//   createUser,
//   listUsers,
//   getUserById,
//   updateUser,
//   deleteUser,
// } from "../controllers/userController.js";

// const router = express.Router();

// router.post("/", createUser);
// router.get("/", listUsers);
// router.get("/:id", getUserById);
// router.put("/:id", updateUser);
// router.delete("/:id", deleteUser);

// export default router;
// backend/src/routes/userRoutes.js
import express from "express";
import {
  createUser,
  listUsers,
  getUserById,
  updateUser,
  deleteUser,
} from "../controllers/userController.js";

const router = express.Router();

// Create a new user/admin
router.post("/", createUser);

// List users with optional role filter (?role=admin)
router.get("/", listUsers);

// Get user by ID
router.get("/:id", getUserById);

// Update user by ID
router.put("/:id", updateUser);

// Delete user by ID
router.delete("/:id", deleteUser);

export default router;

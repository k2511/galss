// // src/routes/buyingCustRoutes.js
// import express from "express";
// import {
//   getAllBuyingCustomers,
//   createBuyingCustomer,
//   getBuyingCustomerById,
//   updateBuyingCustomer,
//   deleteBuyingCustomer,
// } from "../controllers/buyingCustController.js";

// const router = express.Router();

// router.get("/", getAllBuyingCustomers);
// router.post("/", createBuyingCustomer);
// router.get("/:id", getBuyingCustomerById);
// router.put("/:id", updateBuyingCustomer);
// router.delete("/:id", deleteBuyingCustomer);

// export default router;

// src/routes/customersRoutes.js


import express from "express";
import {
  getAllBuyingCustomers,
  createBuyingCustomer,
  getBuyingCustomerById,
  updateBuyingCustomer,
  deleteBuyingCustomer,
} from "../controllers/buyingCustController.js"; // same controller use kar rahe

const router = express.Router();

/* ----------------------------------------------
   CUSTOMERS ROUTES  
   Base URL: /api/customers  (in server.js)
---------------------------------------------- */

router.get("/", getAllBuyingCustomers);        // GET all customers
router.post("/", createBuyingCustomer);        // CREATE customer
router.get("/:id", getBuyingCustomerById);     // GET single customer
router.put("/:id", updateBuyingCustomer);      // UPDATE customer
router.delete("/:id", deleteBuyingCustomer);   // DELETE customer

export default router;
import express from "express";
import {
  generateInvoice,
  listInvoices,
  getInvoiceById,
  downloadInvoice,
  updateInvoiceStatus
} from "../controllers/invoiceController.js";

import { 
  verifyToken as requireAuth,  // FIXED: verifyToken is your real auth middleware
  requireAdmin                 // FIXED: newly added in middleware
} from "../middleware/authMiddleware.js";

const router = express.Router();

// Generate invoice (admin or after order)
router.post("/generate", requireAuth, generateInvoice);

// List invoices (admin only)
router.get("/", requireAuth, requireAdmin, listInvoices);

// Get invoice (owner OR admin)
router.get("/:id", requireAuth, getInvoiceById);

// Download invoice PDF
router.get("/:id/download", requireAuth, downloadInvoice);

// Update payment status (admin only)
router.patch("/:id/status", requireAuth, requireAdmin, updateInvoiceStatus);

export default router;

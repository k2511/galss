import db from "../config/db.js";
import path from "path";
import fs from "fs/promises";
import { generateInvoicePDF } from "../utils/generateInvoicePDF.js";
import { auditLog } from "../utils/auditLog.js";

/**
 * Create invoice record for order (and optionally generate PDF)
 * POST /api/invoices/generate
 * body: { orderId, generatePdf: boolean }
 */
export const generateInvoice = async (req, res) => {
  try {
    const { orderId, generatePdf: doPdf = true } = req.body;
    const userId = req.user?.id || null; // ensure auth middleware sets req.user

    if (!orderId) return res.status(400).json({ message: "orderId is required" });

    // fetch order
    const [orders] = await db.query("SELECT * FROM orders WHERE id = ?", [orderId]);
    if (orders.length === 0) return res.status(404).json({ message: "Order not found" });

    const order = orders[0];

    // Check if invoice already exists for this order
    const [existing] = await db.query("SELECT * FROM invoices WHERE order_id = ?", [orderId]);
    if (existing.length > 0) {
      const invoice = existing[0];
      return res.status(200).json({ message: "Invoice already exists", invoice });
    }

    // create a unique invoice number (you can replace with better generator)
    const invoiceNumber = `INV-${Date.now()}-${orderId}`;
    const amount = order.total_amount || order.totalAmount || 0;
    const details = {
      orderSnapshot: order
    };

    const [result] = await db.query(
      `INSERT INTO invoices (order_id, invoice_number, amount, payment_status, details, created_by, created_at)
       VALUES (?, ?, ?, ?, ?, ?, NOW())`,
      [orderId, invoiceNumber, amount, order.payment_status || "pending", JSON.stringify(details), userId]
    );

    const invoiceId = result.insertId;
    let invoiceFilePath = null;

    if (doPdf) {
      try {
        // generate PDF and get path
        const pdfPath = await generateInvoicePDF({
          invoiceNumber,
          order,
          invoiceId,
          amount
        });

        // store file path in DB
        await db.query("UPDATE invoices SET invoice_file_path = ? WHERE id = ?", [pdfPath, invoiceId]);
        invoiceFilePath = pdfPath;
      } catch (err) {
        console.error("Invoice PDF generation failed:", err);
        // continue: invoice record exists even if PDF failed
      }
    }

    // Audit log
    await auditLog({
      userId,
      action: "generate_invoice",
      details: { invoiceId, invoiceNumber, orderId },
      req
    });

    const [rows] = await db.query("SELECT * FROM invoices WHERE id = ?", [invoiceId]);
    res.status(201).json({ message: "Invoice created", invoice: rows[0] });
  } catch (err) {
    console.error("❌ generateInvoice error:", err);
    res.status(500).json({ message: "Failed to create invoice" });
  }
};

/**
 * List invoices (admin)
 * GET /api/invoices?search=&status=&page=&limit=
 */
export const listInvoices = async (req, res) => {
  try {
    const { search = "", status = "", page = 1, limit = 20 } = req.query;
    const offset = (Number(page) - 1) * Number(limit);

    let where = "WHERE 1=1";
    const params = [];

    if (status) {
      where += " AND payment_status = ?";
      params.push(status);
    }

    if (search) {
      where += ` AND (invoice_number LIKE ? OR details LIKE ? OR CAST(order_id AS CHAR) LIKE ?)`;
      params.push(`%${search}%`, `%${search}%`, `%${search}%`);
    }

    // total count
    const [countRows] = await db.query(`SELECT COUNT(*) as total FROM invoices ${where}`, params);
    const total = countRows[0]?.total || 0;

    // fetch rows with pagination, join user optionally
    const sql = `
      SELECT i.*, u.email AS created_by_email
      FROM invoices i
      LEFT JOIN users u ON i.created_by = u.id
      ${where}
      ORDER BY i.created_at DESC
      LIMIT ? OFFSET ?
    `;
    params.push(Number(limit), Number(offset));

    const [rows] = await db.query(sql, params);

    res.status(200).json({ total, page: Number(page), limit: Number(limit), invoices: rows });
  } catch (err) {
    console.error("❌ listInvoices error:", err);
    res.status(500).json({ message: "Failed to list invoices" });
  }
};

/**
 * Get single invoice (admin or owner)
 * GET /api/invoices/:id
 */
export const getInvoiceById = async (req, res) => {
  try {
    const { id } = req.params;
    const [rows] = await db.query("SELECT * FROM invoices WHERE id = ?", [id]);
    if (rows.length === 0) return res.status(404).json({ message: "Invoice not found" });

    const invoice = rows[0];

    // Optionally ensure non-admin user can only see own invoices (if req.user exists)
    if (req.user && req.user.role !== "admin" && req.user.id !== invoice.created_by) {
      // if you store order.user_id you may check ownership; using created_by is a simplification
      // Better: fetch order and check order.user_id === req.user.id
      const [orders] = await db.query("SELECT user_id FROM orders WHERE id = ?", [invoice.order_id]);
      const orderOwnerId = orders[0]?.user_id;
      if (orderOwnerId && req.user.id !== orderOwnerId) {
        return res.status(403).json({ message: "Forbidden" });
      }
    }

    res.status(200).json({ invoice });
  } catch (err) {
    console.error("❌ getInvoiceById error:", err);
    res.status(500).json({ message: "Failed to fetch invoice" });
  }
};

/**
 * Download invoice PDF (protected)
 * GET /api/invoices/:id/download
 */
export const downloadInvoice = async (req, res) => {
  try {
    const { id } = req.params;
    const [rows] = await db.query("SELECT * FROM invoices WHERE id = ?", [id]);
    if (rows.length === 0) return res.status(404).json({ message: "Invoice not found" });

    const invoice = rows[0];
    if (!invoice.invoice_file_path) return res.status(404).json({ message: "Invoice PDF not available" });

    // ensure file exists
    const fullPath = path.isAbsolute(invoice.invoice_file_path)
      ? invoice.invoice_file_path
      : path.join(process.cwd(), invoice.invoice_file_path);

    try {
      await fs.access(fullPath);
    } catch (err) {
      return res.status(404).json({ message: "Invoice file missing on server" });
    }

    res.download(fullPath, `${invoice.invoice_number}.pdf`);
  } catch (err) {
    console.error("❌ downloadInvoice error:", err);
    res.status(500).json({ message: "Failed to download invoice" });
  }
};

/**
 * Update invoice payment status (admin)
 * PATCH /api/invoices/:id/status
 * body: { payment_status: 'paid'|'pending'|'failed' }
 */
export const updateInvoiceStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { payment_status } = req.body;
    if (!["pending", "paid", "failed"].includes(payment_status)) {
      return res.status(400).json({ message: "Invalid payment_status" });
    }

    const [result] = await db.query("UPDATE invoices SET payment_status = ?, updated_at = NOW() WHERE id = ?", [
      payment_status,
      id
    ]);

    if (result.affectedRows === 0) return res.status(404).json({ message: "Invoice not found" });

    // audit
    await auditLog({
      userId: req.user?.id || null,
      action: "update_invoice_status",
      details: { invoiceId: id, payment_status },
      req
    });

    res.status(200).json({ message: "Invoice status updated" });
  } catch (err) {
    console.error("❌ updateInvoiceStatus error:", err);
    res.status(500).json({ message: "Failed to update invoice status" });
  }
};

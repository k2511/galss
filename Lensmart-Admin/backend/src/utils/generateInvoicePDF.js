import path from "path";
import fs from "fs/promises";

/**
 * generateInvoicePDF stub
 * Accepts invoice data and returns the saved file path.
 * Replace with real HTML->PDF generator (puppeteer, html-pdf, wkhtmltopdf, pdfkit, etc.)
 */
export async function generateInvoicePDF({ invoiceNumber, order, invoiceId, amount }) {
  // simple placeholder: write a small text file with .pdf extension (replace later)
  const invoicesDir = path.join(process.cwd(), "uploads", "invoices");
  await fs.mkdir(invoicesDir, { recursive: true });

  const filename = `${invoiceNumber}.pdf`;
  const filePath = path.join(invoicesDir, filename);

  const content = `Invoice: ${invoiceNumber}\nOrder ID: ${order.id}\nAmount: ${amount}\nGenerated: ${new Date().toISOString()}\n\n(Replace this stub with a proper PDF generator.)`;

  await fs.writeFile(filePath, content, "utf8");
  return filePath;
}

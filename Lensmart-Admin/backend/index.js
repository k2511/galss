// index.js
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";
import { migrate } from "./src/config/migrate.js";

// Routes (ensure these files exist and export default routers)
import authRoutes from "./src/routes/authRoutes.js";
import productRoutes from "./src/routes/productRoutes.js";
import brandRoutes from "./src/routes/brandRoutes.js";
import categoryRoutes from "./src/routes/categoryRoutes.js";
import couponRoutes from "./src/routes/couponRoutes.js";
import reviewRoutes from "./src/routes/reviewRoutes.js";
import userRoutes from "./src/routes/userRoutes.js";
import buyingCustRoutes from "./src/routes/buyingCustRoutes.js";
import buyingListRoutes from "./src/routes/buyingListRoutes.js";
import newArrivalRoutes from "./src/routes/newArrivalRoutes.js";
// FIXED: use the src path for these routes
import productTypeRoutes from "./src/routes/productTypeRoutes.js";
import productShapeRoutes from "./src/routes/productShapeRoutes.js";
import permissionRoutes from "./src/routes/permissionRoutes.js";
import cartRoutes from './src/routes/cartRoutes.js'

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// ensure uploads folder exists (avoids errors when serving static files)
const uploadsDir = path.join(__dirname,  "uploads");
try {
  fs.mkdirSync(uploadsDir, { recursive: true });
} catch (err) {
  console.error("Failed to ensure uploads directory:", err);
}

// Simple request logger (helpful while developing)
app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} → ${req.method} ${req.originalUrl}`);
  next();
});

// CORS (allow env override) — must be before routes
const corsOptions = {
  origin: process.env.CORS_ORIGIN || true,
  credentials: true,
};
app.use(cors(corsOptions));

// body parsers with reasonable limits — must be before routes that need them
app.use(express.json({ limit: "5mb" }));
app.use(express.urlencoded({ extended: true, limit: "5mb" }));

// serve uploads (static files)
app.use("/uploads", express.static(uploadsDir));

// Run migrations (async IIFE). Do not block server start on migration errors,
// but log them so you can fix schema issues.
(async () => {
  try {
    await migrate();
    console.log("Migration complete (migrate() ran).");
  } catch (err) {
    console.error("Migration error (continuing):", err && err.message ? err.message : err);
  }
})();

// Register API routes (mounted AFTER middleware)
app.use("/api/product-types", productTypeRoutes);
app.use("/api/product-shapes", productShapeRoutes);

app.use("/api/auth", authRoutes);
app.use("/api/products", productRoutes);
app.use("/api/brands", brandRoutes);

// categories: support both /api/category and /api/categories (frontend may call either)
app.use("/api/category", categoryRoutes);
app.use("/api/categories", categoryRoutes);

app.use("/api/coupons", couponRoutes);
app.use("/api/reviews", reviewRoutes);
app.use("/api/users", userRoutes);

//PERMISION ROUTES
app.use("/api/permissions", permissionRoutes);

// Mount buying cust routes — frontend expects POST /api/buyingcust
app.use("/api/buyingcust", buyingCustRoutes);

// Keep existing buying-list routes (if you still use them elsewhere)
app.use("/api/buying-list", buyingListRoutes);
app.use("/api/buyingList", buyingListRoutes);

// New arrivals aliases
app.use("/api/new-arrivals", newArrivalRoutes);
app.use("/api/newArrival", newArrivalRoutes);

app.use("/api/cart", cartRoutes);


// Health check
app.get("/", (req, res) => res.json({ message: "Backend running ✅" }));

// 404 handler (must come AFTER all routes)
app.use((req, res) => {
  res.status(404).json({ error: "Endpoint not found", path: req.originalUrl });
});

// global error handler
app.use((err, req, res, next) => {
  console.error("Unhandled server error:", err && err.stack ? err.stack : err);
  res.status(500).json({ error: "Internal server error" });
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));

// Export app (optional, useful for tests)
export default app;

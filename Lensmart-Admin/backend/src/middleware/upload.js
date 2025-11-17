// backend/src/middleware/upload.js
import multer from "multer";
import path from "path";
import fs from "fs";

const UPLOAD_DIR = path.resolve("uploads");

// ensure uploads folder exists
if (!fs.existsSync(UPLOAD_DIR)) fs.mkdirSync(UPLOAD_DIR, { recursive: true });

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, UPLOAD_DIR),
  filename: (req, file, cb) => {
    // safe unique filename: timestamp-original
    const ext = path.extname(file.originalname);
    const base = path.basename(file.originalname, ext).replace(/\s+/g, "-");
    const name = `${Date.now()}-${base}${ext}`;
    cb(null, name);
  },
});

const fileFilter = (req, file, cb) => {
  // accept common image types
  if (/image\/(jpeg|png|webp|gif|bmp)/.test(file.mimetype)) cb(null, true);
  else cb(new Error("Only image files are allowed"), false);
};

export const uploadSingle = multer({ storage, fileFilter, limits: { fileSize: 5 * 1024 * 1024 } }).single("image");

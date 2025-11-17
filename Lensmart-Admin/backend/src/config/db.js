// backend/src/config/db.js
import mysql from "mysql2/promise";
import dotenv from "dotenv";

dotenv.config();

const {
  DB_HOST = "localhost",
  DB_USER = "root",
  DB_PASSWORD = "amanbankey",
  DB_NAME = "lensmart_admin",
  DB_PORT = 3306,
} = process.env;

// Create a connection pool
export const pool = mysql.createPool({
  host: DB_HOST,
  user: DB_USER,
  password: DB_PASSWORD,
  database: DB_NAME,
  port: DB_PORT,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

// Test connection and log status
(async () => {
  try {
    const connection = await pool.getConnection();
    console.log(`✅ MySQL Connected Successfully to Database: ${DB_NAME}`);
    connection.release();
  } catch (error) {
    console.error("❌ MySQL Connection Failed:", error.message);
    process.exit(1); // Stop app if DB connection fails
  }
})();

// Export pool as default (allows `import db from './db.js'`)
export default pool;

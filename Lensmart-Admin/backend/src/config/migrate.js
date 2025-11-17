// import { pool } from "./db.js";

// /**
//  * Check if an index exists on a table (safe across MySQL versions).
//  * @param {import('mysql2/promise').PoolConnection} conn
//  * @param {string} tableName
//  * @param {string} indexName
//  * @returns {Promise<boolean>}
//  */
// async function indexExists(conn, tableName, indexName) {
//   const [rows] = await conn.query(
//     `SELECT 1 FROM INFORMATION_SCHEMA.STATISTICS
//      WHERE TABLE_SCHEMA = DATABASE() AND TABLE_NAME = ? AND INDEX_NAME = ? LIMIT 1`,
//     [tableName, indexName]
//   );
//   return rows.length > 0;
// }

// export async function migrate() {
//   const conn = await pool.getConnection();
//   try {
//     console.log("🛠️ Running migrations...");
//     await conn.beginTransaction();

//     // -------------------------------------------------
//     // USERS TABLE
//     // -------------------------------------------------
//     await conn.query(`
//       CREATE TABLE IF NOT EXISTS users (
//         id INT AUTO_INCREMENT PRIMARY KEY,
//         name VARCHAR(100),
//         email VARCHAR(150) UNIQUE,
//         password VARCHAR(255),
//         role ENUM('admin','user') DEFAULT 'admin',
//         created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
//       ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
//     `);

//     // -------------------------------------------------
//     // CATEGORIES TABLE
//     // -------------------------------------------------
//     await conn.query(`
//       CREATE TABLE IF NOT EXISTS categories (
//         id INT AUTO_INCREMENT PRIMARY KEY,
//         name VARCHAR(100) NOT NULL UNIQUE,
//         AID TINYINT(1) DEFAULT 1 COMMENT '1 = Active, 0 = Inactive',
//         created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
//         updated_at TIMESTAMP NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP
//       ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
//     `);

//     // -------------------------------------------------
//     // BRANDS TABLE (depends on categories)
//     // -------------------------------------------------
//     await conn.query(`
//       CREATE TABLE IF NOT EXISTS brands (
//         BID INT AUTO_INCREMENT PRIMARY KEY,
//         c_id INT NULL,
//         cname VARCHAR(191) NULL,
//         bname VARCHAR(191) NOT NULL,
//         AID TINYINT NOT NULL DEFAULT 1,
//         created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
//         updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
//         CONSTRAINT fk_brands_category FOREIGN KEY (c_id) REFERENCES categories(id)
//           ON DELETE SET NULL ON UPDATE CASCADE
//       ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
//     `);

//     // -------------------------------------------------
//     // PRODUCTS TABLE (depends on brands & categories)
//     // -------------------------------------------------
//     await conn.query(`
//       CREATE TABLE IF NOT EXISTS products (
//         id INT AUTO_INCREMENT PRIMARY KEY,
//         name VARCHAR(255),
//         sku VARCHAR(100),
//         brand_id INT DEFAULT NULL,
//         category_id INT DEFAULT NULL,
//         price DECIMAL(10,2),
//         stock INT DEFAULT 0,
//         description TEXT,
//         image VARCHAR(255),
//         created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
//         updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
//         CONSTRAINT fk_products_brand FOREIGN KEY (brand_id)
//           REFERENCES brands(BID) ON DELETE SET NULL ON UPDATE CASCADE,
//         CONSTRAINT fk_products_category FOREIGN KEY (category_id)
//           REFERENCES categories(id) ON DELETE SET NULL ON UPDATE CASCADE
//       ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
//     `);

//     // -------------------------------------------------
//     // COUPONS TABLE
//     // -------------------------------------------------
//     await conn.query(`
//       CREATE TABLE IF NOT EXISTS coupons (
//         id INT AUTO_INCREMENT PRIMARY KEY,
//         code VARCHAR(100) UNIQUE,
//         discount_type ENUM('percent','fixed'),
//         value DECIMAL(10,2),
//         expires_at DATETIME
//       ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
//     `);

//     // -------------------------------------------------
//     // REVIEWS TABLE (depends on products & users)
//     // -------------------------------------------------
//     // Use IF NOT EXISTS to avoid failing when the table already exists
//     await conn.query(`
//       CREATE TABLE IF NOT EXISTS reviews (
//         id INT AUTO_INCREMENT PRIMARY KEY,
//         product_id INT,
//         user_id INT,
//         rating INT,
//         comment TEXT,
//         created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
//         updated_at TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP,
//         CONSTRAINT chk_rating CHECK (rating BETWEEN 1 AND 5),
//         CONSTRAINT fk_reviews_product FOREIGN KEY (product_id)
//           REFERENCES products(id) ON DELETE CASCADE ON UPDATE CASCADE,
//         CONSTRAINT fk_reviews_user FOREIGN KEY (user_id)
//           REFERENCES users(id) ON DELETE CASCADE ON UPDATE CASCADE
//       ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
//     `);

//     // -------------------------------------------------
//     // BUYING_LIST TABLE (depends on users)
//     // -------------------------------------------------
//     await conn.query(`
//       CREATE TABLE IF NOT EXISTS buying_list (
//         id INT AUTO_INCREMENT PRIMARY KEY,
//         user_id INT DEFAULT NULL,
//         total DECIMAL(10,2),
//         status VARCHAR(50) DEFAULT 'pending',
//         created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
//         CONSTRAINT fk_buyinglist_user FOREIGN KEY (user_id)
//           REFERENCES users(id) ON DELETE SET NULL ON UPDATE CASCADE
//       ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
//     `);

//     // -------------------------------------------------
//     // NEW_ARRIVALS TABLE (depends on products)
//     // -------------------------------------------------
//     await conn.query(`
//       CREATE TABLE IF NOT EXISTS new_arrivals (
//         id INT AUTO_INCREMENT PRIMARY KEY,
//         product_id INT,
//         featured BOOLEAN DEFAULT 0,
//         created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
//         CONSTRAINT fk_newarrivals_product FOREIGN KEY (product_id)
//           REFERENCES products(id) ON DELETE CASCADE ON UPDATE CASCADE
//       ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
//     `);

//     await conn.query(`CREATE TABLE IF NOT EXISTS buyingcust (
//       id INT AUTO_INCREMENT PRIMARY KEY,
//       name VARCHAR(100),
//       email VARCHAR(100),
//       mobile VARCHAR(20),
//       city VARCHAR(100),
//       product_id INT,
//       pname VARCHAR(200),
//       tprice DECIMAL(10,2),
//       category_id INT,
//       brand_id INT,
//       status VARCHAR(20),
//       cdate DATETIME DEFAULT CURRENT_TIMESTAMP
//     );`);

//     // -------------------------------------------------
//     // INDEX CREATION (safe check)
//     // -------------------------------------------------
//     const indexes = [
//       { table: "products", name: "idx_products_brand", col: "brand_id" },
//       { table: "products", name: "idx_products_category", col: "category_id" },
//       { table: "reviews", name: "idx_reviews_product", col: "product_id" },
//       { table: "reviews", name: "idx_reviews_user", col: "user_id" },
//       { table: "buying_list", name: "idx_buyinglist_user", col: "user_id" },
//       { table: "new_arrivals", name: "idx_newarrivals_product", col: "product_id" },
//     ];

//     for (const idx of indexes) {
//       const exists = await indexExists(conn, idx.table, idx.name);
//       if (!exists) {
//         try {
//           await conn.query(`CREATE INDEX \`${idx.name}\` ON \`${idx.table}\` (\`${idx.col}\`)`);
//           console.log(`✅ Created index ${idx.name} on ${idx.table}(${idx.col})`);
//         } catch (err) {
//           console.warn(`⚠️ Could not create index ${idx.name} on ${idx.table}:`, err.message || err);
//         }
//       } else {
//         console.log(`ℹ️ Index ${idx.name} already exists on ${idx.table}`);
//       }
//     }

//     await conn.commit();
//     console.log("✅ Migration completed successfully.");
//   } catch (error) {
//     await conn.rollback();
//     console.error("❌ Migration failed:", error.message || error);
//     throw error;
//   } finally {
//     conn.release();
//   }
// }

// // -------------------------------------------------
// // Run automatically if file executed directly
// // -------------------------------------------------
// if (import.meta.url === `file://${process.argv[1]}` || process.env.RUN_MIGRATIONS_ON_START === "1") {
//   migrate()
//     .then(() => process.exit(0))
//     .catch((err) => {
//       console.error("Migration run failed:", err);
//       process.exit(1);
//     });
// }


import { pool } from "../config/db.js";

/**
 * Check if an index exists on a table (safe across MySQL versions).
 * @param {import('mysql2/promise').PoolConnection} conn
 * @param {string} tableName
 * @param {string} indexName
 * @returns {Promise<boolean>}
 */
async function indexExists(conn, tableName, indexName) {
  const [rows] = await conn.query(
    `SELECT 1 FROM INFORMATION_SCHEMA.STATISTICS
     WHERE TABLE_SCHEMA = DATABASE() AND TABLE_NAME = ? AND INDEX_NAME = ? LIMIT 1`,
    [tableName, indexName]
  );
  return rows.length > 0;
}

export async function migrate() {
  const conn = await pool.getConnection();
  try {
    console.log("🛠️ Running migrations...");
    await conn.beginTransaction();

    // -------------------------------------------------
    // USERS TABLE (Updated with Super Admin role)
    // -------------------------------------------------
    await conn.query(`
      CREATE TABLE IF NOT EXISTS users (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(100),
        email VARCHAR(150) UNIQUE,
        password VARCHAR(255),
        role ENUM('super_admin','admin','user') DEFAULT 'admin',
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
    `);

    // -------------------------------------------------
    // PERMISSIONS TABLE (New)
    // -------------------------------------------------
    await conn.query(`
      CREATE TABLE IF NOT EXISTS permissions (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(100) NOT NULL UNIQUE,
        page_path VARCHAR(255) NOT NULL,
        description VARCHAR(255) NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
    `);

    // -------------------------------------------------
    // ADMIN_PAGE_ACCESS TABLE (Maps admins to permissions)
    // -------------------------------------------------
    await conn.query(`
      CREATE TABLE IF NOT EXISTS admin_page_access (
        id INT AUTO_INCREMENT PRIMARY KEY,
        admin_id INT NOT NULL,
        permission_id INT NOT NULL,
        granted_by INT DEFAULT NULL,
        granted_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (admin_id) REFERENCES users(id) ON DELETE CASCADE ON UPDATE CASCADE,
        FOREIGN KEY (permission_id) REFERENCES permissions(id) ON DELETE CASCADE ON UPDATE CASCADE,
        FOREIGN KEY (granted_by) REFERENCES users(id) ON DELETE SET NULL ON UPDATE CASCADE
      ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
    `);

    // -------------------------------------------------
    // CATEGORIES TABLE
    // -------------------------------------------------
    await conn.query(`
      CREATE TABLE IF NOT EXISTS categories (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(100) NOT NULL UNIQUE,
        AID TINYINT(1) DEFAULT 1 COMMENT '1 = Active, 0 = Inactive',
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP
      ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
    `);

    // -------------------------------------------------
    // BRANDS TABLE
    // -------------------------------------------------
    await conn.query(`
      CREATE TABLE IF NOT EXISTS brands (
        BID INT AUTO_INCREMENT PRIMARY KEY,
        c_id INT NULL,
        cname VARCHAR(191) NULL,
        bname VARCHAR(191) NOT NULL,
        AID TINYINT NOT NULL DEFAULT 1,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
        CONSTRAINT fk_brands_category FOREIGN KEY (c_id) REFERENCES categories(id)
          ON DELETE SET NULL ON UPDATE CASCADE
      ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
    `);

    // -------------------------------------------------
    // PRODUCTS TABLE
    // -------------------------------------------------
    await conn.query(`
      CREATE TABLE IF NOT EXISTS products (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255),
        sku VARCHAR(100),
        brand_id INT DEFAULT NULL,
        category_id INT DEFAULT NULL,
        price DECIMAL(10,2),
        stock INT DEFAULT 0,
        description TEXT,
        image VARCHAR(255),
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
        CONSTRAINT fk_products_brand FOREIGN KEY (brand_id)
          REFERENCES brands(BID) ON DELETE SET NULL ON UPDATE CASCADE,
        CONSTRAINT fk_products_category FOREIGN KEY (category_id)
          REFERENCES categories(id) ON DELETE SET NULL ON UPDATE CASCADE
      ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
    `);

    // -------------------------------------------------
    // COUPONS TABLE
    // -------------------------------------------------
    await conn.query(`
      CREATE TABLE IF NOT EXISTS coupons (
        id INT AUTO_INCREMENT PRIMARY KEY,
        code VARCHAR(100) UNIQUE,
        discount_type ENUM('percent','fixed'),
        value DECIMAL(10,2),
        expires_at DATETIME
      ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
    `);

    // -------------------------------------------------
    // REVIEWS TABLE
    // -------------------------------------------------
    await conn.query(`
      CREATE TABLE IF NOT EXISTS reviews (
        id INT AUTO_INCREMENT PRIMARY KEY,
        product_id INT,
        user_id INT,
        rating INT,
        comment TEXT,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP,
      
    `);

  // CONSTRAINT chk_rating CHECK (rating BETWEEN 1 AND 5),
  //       CONSTRAINT fk_reviews_product FOREIGN KEY (product_id)
  //         REFERENCES products(id) ON DELETE CASCADE ON UPDATE CASCADE,
  //       CONSTRAINT fk_reviews_user FOREIGN KEY (user_id)
  //         REFERENCES users(id) ON DELETE CASCADE ON UPDATE CASCADE
  //     ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
  
 
    // -------------------------------------------------
    // BUYING LIST TABLE
    // -------------------------------------------------
    await conn.query(`
      CREATE TABLE IF NOT EXISTS buying_list (
        id INT AUTO_INCREMENT PRIMARY KEY,
        user_id INT DEFAULT NULL,
        total DECIMAL(10,2),
        status VARCHAR(50) DEFAULT 'pending',
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        CONSTRAINT fk_buyinglist_user FOREIGN KEY (user_id)
          REFERENCES users(id) ON DELETE SET NULL ON UPDATE CASCADE
      ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
    `);


    await conn.query(`
      CREATE TABLE IF NOT EXISTS orders (
        id INT NOT NULL AUTO_INCREMENT,
        user_id INT NULL,
        total BIGINT NULL,
        no_of_items INT NULL,
        order_status VARCHAR(45) NULL,
        payment_status VARCHAR(45) NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
      )
    `);

    

    await conn.query(`
      CREATE TABLE IF NOT EXISTS cart (
        id INT AUTO_INCREMENT PRIMARY KEY,
        client_id INT,
        product_id INT,
        name VARCHAR(255),
        img VARCHAR(255),
        sell_price DECIMAL(10,2),
        mrp DECIMAL(10,2),
        quantity INT DEFAULT 1,
        rating INT,
        reviews VARCHAR(255),
        gender VARCHAR(50),
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
      );
    `);
    
    await conn.query(`
      CREATE TABLE IF NOT EXISTS customers (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(100),
        email VARCHAR(100),
        password VARCHAR(100)
      );
    `);
    
    // -------------------------------------------------
    // NEW ARRIVALS TABLE
    // -------------------------------------------------
    await conn.query(`
      CREATE TABLE IF NOT EXISTS new_arrivals (
        id INT AUTO_INCREMENT PRIMARY KEY,
        product_id INT,
        featured BOOLEAN DEFAULT 0,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        CONSTRAINT fk_newarrivals_product FOREIGN KEY (product_id)
          REFERENCES products(id) ON DELETE CASCADE ON UPDATE CASCADE
      ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
    `);

    // -------------------------------------------------
    // BUYING CUSTOMER TABLE
    // -------------------------------------------------
    await conn.query(`
      CREATE TABLE IF NOT EXISTS buyingcust (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(100),
        email VARCHAR(100),
        mobile VARCHAR(20),
        city VARCHAR(100),
        product_id INT,
        pname VARCHAR(200),
        tprice DECIMAL(10,2),
        category_id INT,
        brand_id INT,
        status VARCHAR(20),
        cdate DATETIME DEFAULT CURRENT_TIMESTAMP
      ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
    `);

    // -------------------------------------------------
    // INDEX CREATION
    // -------------------------------------------------
    const indexes = [
      { table: "products", name: "idx_products_brand", col: "brand_id" },
      { table: "products", name: "idx_products_category", col: "category_id" },
      { table: "reviews", name: "idx_reviews_product", col: "product_id" },
      { table: "reviews", name: "idx_reviews_user", col: "user_id" },
      { table: "buying_list", name: "idx_buyinglist_user", col: "user_id" },
      { table: "new_arrivals", name: "idx_newarrivals_product", col: "product_id" },
    ];

    for (const idx of indexes) {
      const exists = await indexExists(conn, idx.table, idx.name);
      if (!exists) {
        await conn.query(`CREATE INDEX \`${idx.name}\` ON \`${idx.table}\` (\`${idx.col}\`)`);
        console.log(`✅ Created index ${idx.name} on ${idx.table}(${idx.col})`);
      } else {
        console.log(`ℹ️ Index ${idx.name} already exists on ${idx.table}`);
      }
    }

    await conn.commit();
    console.log("✅ Migration completed successfully with role & permission system.");
  } catch (error) {
    await conn.rollback();
    console.error("❌ Migration failed:", error.message || error);
    throw error;
  } finally {
    conn.release();
  }
}

if (import.meta.url === `file://${process.argv[1]}` || process.env.RUN_MIGRATIONS_ON_START === "1") {
  migrate()
    .then(() => process.exit(0))
    .catch((err) => {
      console.error("Migration run failed:", err);
      process.exit(1);
    });
}


// // src/controllers/authController.js
// import bcrypt from "bcryptjs";
// import jwt from "jsonwebtoken";
// import db from "../config/db.js"; // adjust path if your db connection file differs

// // ==============================
// // Register Controller
// // ==============================
// export async function register(req, res) {
//   try {
//     const { name, email, password } = req.body;

//     if (!name || !email || !password) {
//       return res.status(400).json({ message: "All fields are required." });
//     }

//     // Check if user already exists
//     const [existing] = await db.query("SELECT * FROM users WHERE email = ?", [email]);
//     if (existing.length > 0) {
//       return res.status(400).json({ message: "Email already registered." });
//     }

//     // Hash password
//     const hashedPassword = await bcrypt.hash(password, 10);

//     // Insert new user
//     await db.query("INSERT INTO users (name, email, password) VALUES (?, ?, ?)", [
//       name,
//       email,
//       hashedPassword,
//     ]);

//     res.status(201).json({ message: "User registered successfully." });
//   } catch (err) {
//     console.error("Register Error:", err);
//     res.status(500).json({ message: "Internal Server Error" });
//   }
// }

// // ==============================
// // Login Controller
// // ==============================
// export async function login(req, res) {
//   try {
//     const { email, password } = req.body;

//     // Validate inputs
//     if (!email || !password) {
//       return res.status(400).json({ message: "Email and password are required." });
//     }

//     // Check if user exists
//     const [rows] = await db.query("SELECT * FROM users WHERE email = ?", [email]);
//     if (rows.length === 0) {
//       return res.status(404).json({ message: "User not found." });
//     }

//     const user = rows[0];

//     // Compare password
//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch) {
//       return res.status(401).json({ message: "Invalid credentials." });
//     }

//     // Generate JWT token
//     const token = jwt.sign({ id: user.id, email: user.email }, process.env.JWT_SECRET || "secretkey", {
//       expiresIn: "1d",
//     });

//     res.json({
//       message: "Login successful",
//       token,
//       user: {
//         id: user.id,
//         name: user.name,
//         email: user.email,
//       },
//     });
//   } catch (err) {
//     console.error("Login Error:", err);
//     res.status(500).json({ message: "Internal Server Error" });
//   }
// }
// src/controllers/authController.js

import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { pool } from "../config/db.js"; // adjust path if you use db.js not config/db.js

const JWT_SECRET = process.env.JWT_SECRET || "CHANGE_ME_SECRET";

/**
 * ==============================
 * Register Controller
 * ==============================
 */
export async function register(req, res) {
  try {
    const { name, email, password, role } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ message: "All fields are required." });
    }

    // Check if user already exists
    const [existing] = await pool.query("SELECT * FROM users WHERE email = ?", [
      email,
    ]);
    if (existing.length > 0) {
      return res.status(400).json({ message: "Email already registered." });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Default role = 'admin' (super_admin only manually inserted in DB)
    const userRole = role && role === "super_admin" ? "super_admin" : "admin";

    // Insert new user
    await pool.query(
      "INSERT INTO users (name, email, password, role) VALUES (?, ?, ?, ?)",
      [name, email, hashedPassword, userRole]
    );

    res
      .status(201)
      .json({ message: "User registered successfully.", role: userRole });
  } catch (err) {
    console.error("Register Error:", err);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

/**
 * ==============================
 * Login Controller
 * ==============================
 */
export async function login(req, res) {
  try {
    const { email, password , captchaToken } = req.body;
    console.log(email, password, captchaToken )
    // Validate inputs
    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "Email and password are required." });
    }

    // Check if user exists
    const [rows] = await pool.query("SELECT * FROM users WHERE email = ?", [
      email,
    ]);
    if (rows.length === 0) {
      return res.status(404).json({ message: "User not found." });
    }

    const user = rows[0];
    // console.log('user', user, password, user.password)

    // Compare password
    // const isMatch = await bcrypt.compare(password, user.password);
    // if (!isMatch) {
    //   return res.status(401).json({ message: "Invalid credentials." });
    // }

    // Load permissions if not super_admin
    let permissions = [];
    if (user.role === "super_admin") {
      permissions = [{ id: -1, name: "*", page_path: "*" }];
    } else {
      const [perms] = await pool.query(
        `SELECT p.id, p.name, p.page_path
         FROM admin_page_access apa
         JOIN permissions p ON apa.permission_id = p.id
         WHERE apa.admin_id = ?`,
        [user.id]
      );
      permissions = perms || [];
    }

    // Generate JWT token
    const token = jwt.sign(
      { id: user.id, email: user.email, role: user.role },
      JWT_SECRET,
      { expiresIn: "1d" }
    );

    res.json({
      message: "Login successful",
      token,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
      permissions,
    });
  } catch (err) {
    console.error("Login Error:", err);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

export async function signup(req, res) {
  try {
    const { fullName, email, password } = req.body;

    // console.log('bakcen', fullName, email, password, req.body )
    if (!fullName || !email || !password) {
      return res.status(400).json({ message: "All fields are required." });
    }

    // Check if user already exists
    const [existing] = await pool.query(
      "SELECT * FROM customers WHERE email = ?",
      [email]
    );
    if (existing.length > 0) {
      return res.status(400).json({ message: "Email already registered." });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Insert new user
    await pool.query(
      "INSERT INTO customers (name, email, password ) VALUES (?, ?, ?)",
      [fullName, email, hashedPassword]
    );

    res.status(201).json({ message: "User registered successfully." });
  } catch (err) {
    console.error("Register Error:", err);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

export async function customerLogin(req, res) {
  try {
    const { email, password } = req.body;
    // console.log('user', email, password)

    // Validate inputs
    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "Email and password are required." });
    }

    // Check if user exists
    const [rows] = await pool.query("SELECT * FROM customers WHERE email = ?", [
      email,
    ]);
    if (rows.length === 0) {
      return res.status(404).json({ message: "User not found." });
    }

    const user = rows[0];
    // console.log('user', user ,)

    req.user = user;
    // Compare password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid credentials." });
    } else {
      const token = jwt.sign({ id: user.id, email: user.email }, JWT_SECRET, {
        expiresIn: "2h",
      });

      const options = {
        expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
        httpOnly: true,
      };

      res
        .cookie("token", token, options)
        .status(200)
        .json({
          success: true,
          user: {
            id: user.id,
            name: user.name,
            email: user.email,
            token: token,
          },
          token,
          
          message: "Logged In successfully",
        });
    }

    // res.json({
    //   message: "Login successful",
    //   token,
    //   user: {
    //     id: user.id,
    //     name: user.name,
    //     email: user.email,

    //   },

    // });
  } catch (err) {
    console.error("Login Error:", err);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

export async function profile(req, res) {
  try {
    const { phone, pincode, city, state, address, country } = req.body;
    // console.log("vvv", phone, pincode, city, state, address, country);

    
          const token = req.headers.authorization?.split(" ")[1]; 
          
          const decoded = jwt.verify(token, process.env.JWT_SECRET) || 'mysecretkey';
          
          req.user = decoded;  
          // console.log('req',req.user);
          let id = req.user.id;
          console.log('req',id);

          const [result] =  await pool.query(`UPDATE customers SET phone = ?,
                      pincode = ?,
                      address = ?,
                      state = ?,
                      city = ?,
                      country = ?
                  WHERE id = ? `, 
               [phone, pincode, address, state, city, country,
            id,
          ]);

          res.status(200).json({
            message: "success add address",
            
            success: true,
          });

  } catch (err) {
    console.error("profile:", err);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

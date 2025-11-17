// // backend/src/controllers/userController.js
// import db from "../config/db.js";
// import bcrypt from "bcryptjs";

// /**
//  * users table assumed columns:
//  * id, name, email, password, role, created_at
//  */

// export async function createUser(req, res) {
//   try {
//     const { name, email, password, role } = req.body;
//     if (!name || !email || !password) return res.status(400).json({ message: "name, email and password required" });

//     const [existing] = await db.query("SELECT id FROM users WHERE email = ?", [email]);
//     if (existing.length > 0) return res.status(400).json({ message: "Email already registered" });

//     const hashed = await bcrypt.hash(password, 10);
//     const [result] = await db.query("INSERT INTO users (name, email, password, role) VALUES (?, ?, ?, ?)", [
//       name,
//       email,
//       hashed,
//       role || "user",
//     ]);
//     res.status(201).json({ id: result.insertId, name, email });
//   } catch (err) {
//     console.error("createUser error:", err);
//     res.status(500).json({ message: "Internal Server Error" });
//   }
// }

// export async function listUsers(req, res) {
//   try {
//     const [rows] = await db.query("SELECT id, name, email, role, created_at FROM users ORDER BY id DESC");
//     res.json(rows);
//   } catch (err) {
//     console.error("listUsers error:", err);
//     res.status(500).json({ message: "Internal Server Error" });
//   }
// }

// export async function getUserById(req, res) {
//   try {
//     const id = req.params.id;
//     const [rows] = await db.query("SELECT id, name, email, role, created_at FROM users WHERE id = ?", [id]);
//     if (rows.length === 0) return res.status(404).json({ message: "User not found" });
//     res.json(rows[0]);
//   } catch (err) {
//     console.error("getUserById error:", err);
//     res.status(500).json({ message: "Internal Server Error" });
//   }
// }

// export async function updateUser(req, res) {
//   try {
//     const id = req.params.id;
//     const { name, email, password, role } = req.body;

//     if (password) {
//       const hashed = await bcrypt.hash(password, 10);
//       await db.query("UPDATE users SET name = ?, email = ?, password = ?, role = ? WHERE id = ?", [name, email, hashed, role || "user", id]);
//     } else {
//       await db.query("UPDATE users SET name = ?, email = ?, role = ? WHERE id = ?", [name, email, role || "user", id]);
//     }

//     res.json({ message: "User updated" });
//   } catch (err) {
//     console.error("updateUser error:", err);
//     res.status(500).json({ message: "Internal Server Error" });
//   }
// }

// export async function deleteUser(req, res) {
//   try {
//     const id = req.params.id;
//     await db.query("DELETE FROM users WHERE id = ?", [id]);
//     res.json({ message: "User deleted" });
//   } catch (err) {
//     console.error("deleteUser error:", err);
//     res.status(500).json({ message: "Internal Server Error" });
//   }
// }
// backend/src/controllers/userController.js
import db from "../config/db.js";
import bcrypt from "bcryptjs";

/**
 * users table assumed columns:
 * id, first_name, last_name, email, password, mobile, role, created_at
 * 
 */
export async function listUsers(req, res) {
  try {
    const { role } = req.query;
    let query = "SELECT id, first_name, last_name, email, mobile, role, created_at FROM users";
    const params = [];

    if (role) {
      query += " WHERE role = ?";
      params.push(role);
    }

    query += " ORDER BY id DESC";
    const [rows] = await db.query(query, params);

    res.json(rows);
  } catch (err) {
    console.error("listUsers error:", err);
    res.status(500).json({ message: "Internal Server Error" });
  }
}
export async function createUser(req, res) {
  try {
    const { first_name, last_name, email, password, mobile, role } = req.body;

    // Validation
    if (!first_name || !last_name || !email || !password) {
      return res.status(400).json({ message: "First name, last name, email and password required" });
    }

    // Check if email already exists
    const [existing] = await db.query("SELECT id FROM users WHERE email = ?", [email]);
    if (existing.length > 0) return res.status(400).json({ message: "Email already registered" });

    // Hash password
    const hashed = await bcrypt.hash(password, 10);

    // Insert new user
    const [result] = await db.query(
      `INSERT INTO users (first_name, last_name, email, password, mobile, role, created_at)
       VALUES (?, ?, ?, ?, ?, ?, NOW())`,
      [first_name, last_name, email, hashed, mobile || null, role || "admin"]
    );

    res.status(201).json({
      id: result.insertId,
      first_name,
      last_name,
      email,
      mobile: mobile || null,
      role: role || "admin",
    });
  } catch (err) {
    console.error("createUser error:", err);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

// export async function listUsers(req, res) {
//   try {
//     const [rows] = await db.query(
//       "SELECT id, first_name, last_name, email, mobile, role, created_at FROM users ORDER BY id DESC"
//     );
//     res.json(rows);
//   } catch (err) {
//     console.error("listUsers error:", err);
//     res.status(500).json({ message: "Internal Server Error" });
//   }
// }

export async function getUserById(req, res) {
  try {
    const id = req.params.id;
    const [rows] = await db.query(
      "SELECT id, first_name, last_name, email, mobile, role, created_at FROM users WHERE id = ?",
      [id]
    );
    if (rows.length === 0) return res.status(404).json({ message: "User not found" });
    res.json(rows[0]);
  } catch (err) {
    console.error("getUserById error:", err);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

export async function updateUser(req, res) {
  try {
    const id = req.params.id;
    const { first_name, last_name, email, password, mobile, role } = req.body;

    if (password) {
      const hashed = await bcrypt.hash(password, 10);
      await db.query(
        "UPDATE users SET first_name = ?, last_name = ?, email = ?, password = ?, mobile = ?, role = ? WHERE id = ?",
        [first_name, last_name, email, hashed, mobile || null, role || "user", id]
      );
    } else {
      await db.query(
        "UPDATE users SET first_name = ?, last_name = ?, email = ?, mobile = ?, role = ? WHERE id = ?",
        [first_name, last_name, email, mobile || null, role || "user", id]
      );
    }

    res.json({ message: "User updated" });
  } catch (err) {
    console.error("updateUser error:", err);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

export async function deleteUser(req, res) {
  try {
    const id = req.params.id;
    await db.query("DELETE FROM users WHERE id = ?", [id]);
    res.json({ message: "User deleted" });
  } catch (err) {
    console.error("deleteUser error:", err);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

import { pool } from "../config/db.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

export const addToCart = async (req, res) => {
  try {

    let { img, product_id, name, mrp, sell_price, rating, reviews, gender } = req.body;

      rating = rating || 0;
      reviews = reviews || 0;

      const token = req.headers.authorization?.split(" ")[1]; 
      
      const decoded = jwt.verify(token, process.env.JWT_SECRET) || 'mysecretkey';
      
      req.user = decoded;  
      // console.log('req',req.user);
      let client_id = req.user.id;

      // console.log('cart---', client_id, gender )

    if (!name || !img || !product_id || !name || !sell_price || !rating || !reviews || !client_id || !gender   ) {
      return res.status(400).json({ error: "data are required" });
    }

    const [exist] = await pool.query("SELECT * FROM cart WHERE client_id = ? AND  product_id = ?", [ client_id, product_id]);

    if (exist.length > 0) {
      const [update] = await pool.query(
        `UPDATE cart SET quantity = quantity + 1, updated_at = NOW() WHERE client_id = ? AND product_id = ?`,
        [client_id, product_id ]
      );

      return res.status(200).json({

        message: "Quantity increased",
        data: update
      });
    }

   const [result] = await pool.query( 
      `INSERT INTO cart (img, product_id, name, mrp, sell_price, rating, reviews, quantity, client_id, gender,  created_at, updated_at)
       VALUES (?, ?, ?, ?, ?, ?, ?, 1, ?, ?, NOW(), NOW())`,
       [img, product_id, name, mrp, sell_price, rating, reviews, client_id, gender  ]
    );

    // console.log('result', result) ;
    res.status(201)
      .json({
        len: result.length,
         id: result.insertId,
          message: "Add data in cart successfully" 
      });
  } catch (error) {
    console.error("Error add cart:", error);
    res.status(500).json({ error: "Failed to add cartr" });
  }
};


export const getAllCartItem = async (req, res) => {
    try {
      
    
      const token = req.headers.authorization?.split(" ")[1]; 
      const decoded = jwt.verify(token, process.env.JWT_SECRET) || 'mysecretkey';
      
      req.user = decoded;  
     
      let id = req.user.id; 

      // console.log('id   ',id, req.user )
      const [result] = await pool.query(
        `SELECT * FROM cart WHERE client_id = ?`, [id],
      );
      
      
      // console.log('cart item', result.length,req.user, result);
      res.status(200)
        .json({data: result, qty: result.length, id: result.insertId, message: "Fetched item cart successfully" });
  
    } catch (error) {
      console.error("Error cart:", error);
      res.status(500).json({ error: "Failed to cart item" });
    }
  };


  export const  incQty = async (req, res) => {
    try {
  
      const { id } = req.body;
      // console.log('id ----', id )
      const [result] = await pool.query(
        `UPDATE cart SET quantity = quantity + 1, updated_at = NOW() WHERE product_id = ?`,  [id]
      );

      const [data] = await pool.query(
        `SELECT * FROM cart  WHERE product_id = ?`,  [id]
      );
      
      // console.log('add -----', data)
      // console.log('cart item', result.length, result);
      res.status(201)
        .json({ message: "update qty cart successfully" });
  
    } catch (error) {
      console.error("Error cart:", error);
      res.status(500).json({ error: "Failed to cart item" });
    }
  };


  

  export const  decQty = async (req, res) => {
    try {
  
      const { id } = req.body;
      // console.log('id ----', id )
      const [result] = await pool.query(
        `UPDATE cart SET quantity = quantity - 1, updated_at = NOW() WHERE product_id = ?  AND quantity > 1`,  [id]
      );

      const [data] = await pool.query(
        `SELECT * FROM cart  WHERE product_id = ?`,  [id]
      );
      
      // console.log('add -----', data)
      // console.log('cart item', result.length, result);
      res.status(201)
        .json({ message: "update qty cart successfully" });
  
    } catch (error) {
      console.error("Error cart:", error);
      res.status(500).json({ error: "Failed to cart item" });
    }
  };
 
 


  export const  deleteItem = async (req, res) => {
  
      try {
        const { id, } = req.body;
        
        const token = req.headers.authorization?.split(" ")[1]; 
        // console.log('req', token );


        const decoded = jwt.verify(token, process.env.JWT_SECRET) || 'mysecretkey';
        
        req.user = decoded;  
        
        let client_id = req.user.id;
        // 
        
        const [result] = await pool.query(
          `DELETE FROM cart WHERE client_id = ? AND  product_id = ?`,
          [client_id, id]
        );
    
        res.json({ message: "Item removed from cart" });
      } catch (err) {
        console.log(err);
        res.status(500).json({ error: "Delete failed" });
      }
  };
import React, { useEffect, useState, useRef } from 'react'
import axios from 'axios';
import { useLocation, Link } from "react-router-dom";
import { useContext } from 'react';
import { OrderContext } from '../context/OrderContext';

let API = 'http://localhost:5000/api/buying-list';

const MyOrders = () => {
  const hasRunRef = useRef(false);
  // const { state } = useLocation();

  const [products, setProducts] = useState([]);
  // console.log('state', state)

    const {order, setOrders} = useContext(OrderContext);
    let ids = [];
    let user_id = null;
    let order_id = null;

     console.log(order)

    if(order?.notes) {
        ids = order.notes.productsId;
         order_id = order.id;
        user_id = order.notes.userId;
    }
    

  // console.log('orders', state.orders.notes.productsId)
 
  // console.log(ids);
   
  useEffect(() => {  
    if (hasRunRef.current) return;
    hasRunRef.current = true;

    const fetchAllProducts = async () => {
      try {
    
        const response = await axios.post(`${API}`, { ids, user_id, order_id }); // send whole array once
        // const productsData = response.data;
     
        // setProducts(productsData.products);
        
        // console.log("Fetched products:", productsData.products);
      } catch (err) {
        console.error("Error fetching products:", err);
      }
    };

    fetchAllProducts();
  }, []);

  useEffect(() => {
    const fetchAll = async () => {
      try {
    
        const response = await axios.get(`${API}`); // send whole array once
        const productsData = response.data;
     
        setProducts(productsData);

        console.log("Fetched products:", productsData);
      } catch (err) {
        console.error("Error fetching products:", err);
      }
    };

    fetchAll()
  },[])

  return (

    <div className="max-w-4xl mx-auto p-4">
    <h2 className="text-2xl font-bold mb-4">My Orders</h2>
  
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {products.map((product, index) => (
        <div
          key={index}
          className="bg-white shadow-md rounded-xl p-4 border hover:shadow-lg transition-all duration-300"
        >
          <img
            src={`http://localhost:5000/uploads/${product.image}`}
            alt={product.name}
            className="w-full h-48 object-cover rounded-lg mb-3"
          />
  
          <h3 className="text-lg font-semibold">{product.name}</h3>
          
          <div className="flex items-center space-x-2 my-2">
            <p className="text-teal-600 font-bold text-lg">₹{product.total}</p>
            <p className="line-through text-gray-500 text-sm">₹{product.price}</p>
          </div>
  
          <button className="w-full bg-teal-600 hover:bg-teal-700 text-white py-2 rounded-lg mt-2">
            View Details
          </button>
        </div>
      ))}
    </div>
        {products.length === 0  && ( 
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <img
              src="https://cdn-icons-png.flaticon.com/512/2037/2037458.png"
              className="w-32 h-32 mb-4 opacity-80"
              alt="No orders"
            />

            <h2 className="text-xl font-semibold mb-2">No Orders Yet</h2>
            <p className="text-gray-500 mb-4">
              You haven't purchased anything yet. Start shopping now!
            </p>

            <a
              href="/"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg shadow"
            >
              Shop Now
            </a>
          </div>
        )}
  </div>
  
  )
}

export default MyOrders
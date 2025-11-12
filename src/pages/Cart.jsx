import React, { useContext } from "react";
import ProductList from '../components/ProductList'
import CartSidebar from '../components/CartSidebar'
import { CartContext } from "../context/CartContext";
import { Navigate, useNavigate } from "react-router-dom";
import { Trash2 } from "lucide-react";  
import { ArrowRight } from 'lucide-react';

const Cart = () => {

    const navigate = useNavigate();

    const { handleAddToCart, setCart , cart, increaseQty,
       decreaseQty, removeItem, totalAmount} = useContext(CartContext);

  return (
    // <div className="w-full max-w-2xl mx-auto mt-10 p-4 bg-[#fbf9f7] rounded-xl shadow border ">
    //   <h2 className="text-2xl font-bold mb-4 text-center">🛒 Your Cart</h2>

    //   {cart.length === 0 ? (
    //     <p className="text-center text-gray-500">Your cart is empty 😢</p>
    //   ) : (
    //     <div>
    //       <ul className="space-y-4 max-h-[60vh] overflow-y-auto pr-2">
    //         {cart.map((item) => (
    //           <li
    //             key={item.id}
    //             className="flex justify-between items-center border-b pb-4"
    //           >
    //             <div className="flex items-start gap-4 ">
    //               <img
    //                 src={item.image}
    //                 alt={item.name}
    //                 className="w-20 h-24 object-contain rounded"
    //               />
    //               <div className="">
    //                 <h3 className="font-semibold text-gray-800 sm:text-base text-xs">{item.name}</h3>
    //                 <p className="text-gray-500 sm:text-sm text-xs">₹{item.price}</p>
    //                 <div className="flex items-center justify-around w-24 sm:w-28 mt-2 border rounded-md overflow-hidden">
    //                   <button
    //                     onClick={() => decreaseQty(item.id)}
    //                     className="px-2 py-1 text-xl hover:bg-gray-200"
    //                   >
    //                     –
    //                   </button>
    //                   <span className="sm:px-4 px-2 font-semibold">{item.quantity}</span>
    //                   <button
    //                     onClick={() => increaseQty(item.id)}
    //                     className="px-2  py-1 text-xl hover:bg-gray-200"
    //                   >
    //                     +
    //                   </button>
    //                 </div>
    //               </div>
    //             </div>

    //             <div className="flex flex-col items-end">
    //               <span className="font-semibold text-sky-600 sm:text-sm md:text-base text-xs lg:text-lg">
    //                 ₹{item.price * item.quantity}
    //               </span>
    //               <button
    //                 onClick={() => removeItem(item.id)}
    //                 className="mt-2 bg-sky-500 hover:bg-sky-600 text-white p-2 rounded"
    //               >
    //                 <Trash2 size={16} />
    //               </button>
    //             </div>
    //           </li>
    //         ))}
    //       </ul>

    //       <div className="mt-6 border-t pt-4 flex justify-between items-center">
    //         <span className="font-semibold text-lg">Total:</span>
    //         <span className="text-sky-600 font-bold text-xl">₹{totalAmount}</span>
    //       </div>

    //       <div className="mt-4 flex gap-3">
          
    //             <button onClick={() => {

    //               navigate('/payment-gateway')
                  
    //             }}  className="w-1/2 bg-sky-500 text-white py-2 rounded hover:bg-sky-600">
    //            Buy now
    //         </button>
            
            
    //         <button className="w-1/2 bg-green-500 text-white py-2 rounded hover:bg-green-600">
    //           Checkout
    //         </button>
    //       </div>
    //     </div>
    //   )}
    // </div>
 
  <div className="min-h-screen bg-gray-50 px-4 py-8 sm:px-6 lg:px-8">
  <div className="max-w-7xl mx-auto">
    <h1 className="text-2xl sm:text-3xl font-medium text-gray-900 mb-8 text-center">
      🛒 Your Cart
    </h1>

    {cart.length === 0 ? (
      <div className="flex flex-col items-center justify-center py-12">
        <p className="text-lg sm:text-xl text-gray-700 mb-6 text-center">
          Your cart is empty 😢
        </p>
        <button
          onClick={() => navigate('/')}
          className="bg-teal-400 hover:bg-teal-500 text-gray-900 font-medium px-10 py-3 rounded-full text-base transition-colors"
        >
          Continue Shopping
        </button>
      </div>
    ) : (
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-4">
          <ul className="space-y-4">
            {cart.map((item) => (
              <li
                key={item.id}
                className="bg-white rounded-lg shadow-sm p-4 flex flex-col sm:flex-row justify-between gap-4 items-start"
              >
                <div className="flex items-start gap-4 w-full">
                  <div className="w-28 h-28 bg-gray-50 flex items-center justify-center rounded-md overflow-hidden flex-shrink-0">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-contain"
                    />
                  </div>

                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-gray-900 text-sm sm:text-base truncate">
                      {item.name}
                    </h3>
                    <p className="text-gray-500 mt-1 text-sm">₹{item.price}</p>

                    <div className="mt-3 inline-flex items-center border rounded-full overflow-hidden">
                      <button
                        onClick={() => decreaseQty(item.id)}
                        className="px-3 py-1 text-lg hover:bg-gray-100 focus:outline-none"
                      >
                        –
                      </button>
                      <span className="px-4 font-semibold text-sm">{item.quantity}</span>
                      <button
                        onClick={() => increaseQty(item.id)}
                        className="px-3 py-1 text-lg hover:bg-gray-100 focus:outline-none"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between sm:flex-col sm:items-end gap-3">
                  <span className="font-semibold text-sky-600 text-base sm:text-lg">
                    ₹{item.price * item.quantity}
                  </span>
                  <button
                    onClick={() => removeItem(item.id)}
                    className="mt-0 sm:mt-3 bg-sky-500 hover:bg-sky-600 text-white p-2 rounded-full"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <aside className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Order Summary</h2>
          <div className="flex justify-between items-center text-sm text-gray-600 mb-3">
            <span>Subtotal</span>
            <span className="text-gray-900 font-medium">₹{totalAmount}</span>
          </div>

          <div className="flex justify-between items-center border-t pt-3 pb-4 mb-4">
            <span className="text-gray-700 font-semibold text-base">Total</span>
            <span className="text-teal-600 font-bold text-xl">₹{totalAmount}</span>
          </div>

          <div className="flex flex-col gap-3">
            <button
              onClick={() => {
                navigate('/payment-gateway')
              }}
              className="w-full bg-sky-500 text-white py-3 rounded-full hover:bg-sky-600 transition-colors"
            >
              Buy now
            </button>
            <button className="w-full bg-green-500 text-white py-3 rounded-full hover:bg-green-600 transition-colors">
              Checkout
            </button>
          </div>
        </aside>
      </div>
    )}
  </div>
</div>

  )
}

export default Cart
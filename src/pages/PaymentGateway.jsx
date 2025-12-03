// import { useLocation } from "react-router-dom";

// const PaymentGateway = () => {
//   const location = useLocation();
//   const { items, subtotal, gstAmount, total } = location.state || {};

//   return (
//     <div>
//       <h1>Payment Page</h1>

//       <p>Total Items: {items?.length}</p>
//       <p>Subtotal: ₹{subtotal}</p>
//       <p>GST: ₹{gstAmount}</p>
//       <p>Total Payable: ₹{total}</p>

//       {/* Razorpay button yaha add hoga */}


//     </div>
//   );
// };


import React, { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import axios from "axios";
import { OrderContext } from "../context/OrderContext";


const API = "http://localhost:5000/api/payment";

const PaymentGateway = () => {
  // const [order, setOrders] = useState([]);
  const {order, setOrders} = useContext(OrderContext);


  const navigate = useNavigate();
  const location = useLocation();
  let { items, subtotal, gstAmount, total } = location.state || {};

  gstAmount = Number((gstAmount ?? 0).toFixed(2));

  const loadRazorpay = () => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    document.body.appendChild(script);
  };

  useEffect(() => {
    loadRazorpay();
  }, []);

  const makePayment = async () => {
    
    const res = await axios.post(`${API}/create-order`, {
      userId: 1,
      items,
      subtotal,
      gstAmount,
      amount: total,
      currency: "INR"
    });

    let { order, localOrderId, myOrders } = res.data;
    console.log(' order',  order,    )
    setOrders(order)

    const options = {
      key: 'rzp_test_bzK53YGmR1lrbV',
      amount: order.amount,
      currency: "INR",
      name: "Lensmart Store",
      description: "Order Payment",
      order_id: order.id,
      handler: async function (response) {
        const verify = await axios.post(`${API}/verify-payment`, {
          razorpay_order_id: response.razorpay_order_id,
          razorpay_payment_id: response.razorpay_payment_id,
          razorpay_signature: response.razorpay_signature,
          localOrderId
        });

        // console.log('verity', verify)
        if (verify.data.success) {
          navigate("/order-success");
        } else {
          navigate("/");
        }
      },
      theme: {
        color: "#11daac"
      }
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  if (!items) return <h2 className="text-center mt-10">No items found</h2>;

  //  if(subtotal <= 500){
  //     total = total + 100;
  //  }
  return (
    <div className="min-h-screen bg-gray-50 px-4 py-10 flex justify-center">
      <div className="max-w-4xl w-full bg-white p-6 rounded-xl shadow-md">
        <h1 className="text-2xl font-semibold text-gray-800 mb-6">
          Payment Checkout
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          <div>
            <h2 className="text-lg font-medium text-gray-700 mb-3">Your Items</h2>

            <div className="space-y-4">
              {items.map((item) => (
                <div key={item.product_id} className="flex gap-4 border p-3 rounded-lg">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-20 h-20 object-contain bg-gray-100 rounded-md"
                  />
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">{item.name}</p>
                    <p className="text-gray-600 text-sm">Qty: {item.quantity}</p>
                    <p className="text-teal-600 font-medium text-sm">
                      ₹{item.sell_price * item.quantity}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="border p-6 rounded-lg bg-gray-50">
            <h2 className="text-lg font-medium text-gray-800 mb-4">
              Order Summary
            </h2>

            <div className="flex justify-between text-gray-700 mb-2">
              <span>Subtotal</span>
              <span>₹{subtotal}</span>
            </div>

          
           

            <div className="flex justify-between text-gray-900 text-lg font-semibold border-t pt-3">
              <span>Total Payable</span>
              <span className="text-teal-600">₹{total}</span>
            </div>

            <div className="flex justify-between text-xs text-gray-700 mb-2">
              <span>Delivery Charge</span>
              <span>{subtotal > 500 ? 'Free Delivery' : `₹${100} `}</span>
            </div> 

            <div className="flex justify-between text-xs text-gray-700 mb-2">
              <span>GST (18%)</span>
              <span>₹{gstAmount}</span>
            </div>

            <button
              onClick={makePayment}
              className="w-full mt-6 bg-teal-600 text-white py-3 rounded-full hover:bg-teal-600 transition"
            >
              Pay Now
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default PaymentGateway;


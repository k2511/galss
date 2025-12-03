import { useLocation, Link } from "react-router-dom";
import { CheckCircle } from "react-feather";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { OrderContext } from "../context/OrderContext";
export default function OrderSuccess() {
  const { state } = useLocation();

   const {order, setOrders} = useContext(OrderContext);

  //  console.log('order', state.orders, state)
  // setOrders(state);
   const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="bg-white shadow-2xl rounded-xl p-8 max-w-md w-full text-center">

        {/* Success Icon */}
        <div className="flex justify-center mb-4">
          <CheckCircle className="text-green-600" size={60} />
        </div>

        <h1 className="text-3xl font-bold text-green-600">Payment Successful 🎉</h1>

        <p className="text-gray-700 mt-3 text-lg">
          Thank you! Your payment has been received.
        </p>

        <p className="text-gray-500 mt-2">
          <span className="font-semibold">Order ID:</span> {state?.orderId || "N/A"}
        </p>

        <p className="text-gray-500">
          <span className="font-semibold">Payment ID:</span> {state?.paymentId || "N/A"}
        </p>

        {/* Buttons */}
        <div className="mt-6 flex gap-3 justify-center">
          <Link
            to="/"
            className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Go Home
          </Link>

          <button
          onClick={() => {
            navigate('/my-orders')
          }}
          
            className="border border-blue-600 text-blue-600 px-5 py-2 rounded-lg hover:bg-blue-50 transition"
          >
            View Orders
          </button>
        </div>
      </div>
    </div>
  );
}

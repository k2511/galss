import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const CartSidebar = () => {
  const {
    cart,
    activeCart,
    togglecartbar,
    increaseQty,
    decreaseQty,
    removeItem,
    totalAmount,
  } = useContext(CartContext);

  return (
    <div
      className={`fixed top-0 right-0 h-full w-80 bg-white border-l-2 shadow-xl transition-transform duration-300 z-50 ${
        activeCart ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="flex justify-between items-center p-4 border-b">
        <h2 className="text-lg font-semibold">Your Cart</h2>
        <button onClick={togglecartbar} className="text-gray-600 text-xl">×</button>
      </div>
      <div className="p-4 overflow-y-auto h-[75vh]">
        {cart.length === 0 ? (
          <p className="text-center text-gray-500 mt-10">Your cart is empty</p>
        ) : (
          cart.map((item) => (
            <div key={item.id} className="flex justify-between mb-4 border-b pb-3">
              <img src={item.image} alt={item.name} className="w-16 h-16 object-contain" />
              <div className="flex-1 ml-2">
                <p className="text-sm font-semibold">{item.name}</p>
                <p className="text-sm text-gray-500">₹{item.price}</p>
                <div className="flex gap-2 mt-1 items-center">
                  <button onClick={() => decreaseQty(item.id)} className="px-2 border rounded">–</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => increaseQty(item.id)} className="px-2 border rounded">+</button>
                </div>
              </div>
              <button onClick={() => removeItem(item.id)} className="text-red-500">🗑</button>
            </div>
          ))
        )}
      </div>
      {cart.length > 0 && (
        <div className="p-4 border-t bg-gray-50">
          <div className="flex justify-between mb-3">
            <span>Subtotal</span>
            <span className="font-semibold">₹{totalAmount.toFixed(2)}</span>
          </div>
          <button className="w-full bg-sky-500 text-white py-2 rounded hover:bg-sky-600">Checkout</button>
        </div>
      )}
    </div>
  );
};

export default CartSidebar;

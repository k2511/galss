import { createContext, useState, useEffect } from "react";

export const CartContext = createContext();
import toast from "react-hot-toast";
export const CartProvider = ({ children }) => {
   
  const [cart, setCart] = useState([]);
  const [activeCart, setActiveCart] = useState(false);

  const togglecartbar = () => setActiveCart(!activeCart);

  const handleAddToCart = (product) => {
    setCart((prev) => {
      const exist = prev.find((item) => String(item.id) === String(product.id));
      if (exist) {

        toast.error("already exists, increasing qty");
        return prev.map((item) =>
          String(item.id) === String(product.id)
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        toast.success("adding new item");
        return [...prev, { ...product, quantity: 1 }];
      }
    });
  };

// const handleAddToCart = (product) => {
//   const exist = cart.find((item) => String(item.id) === String(product.id));

//   if (exist) {
//     setCart((prev) =>
//       prev.map((item) =>
//         String(item.id) === String(product.id)
//           ? { ...item, quantity: item.quantity + 1 }
//           : item
//       )
//     );
//     toast.error("already exists, increasing qty");
//   } else {
//     setCart((prev) => [...prev, { ...product, quantity: 1 }]);
//     toast.success("Item added to cart!");
//   }
// };
  const increaseQty = (id) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQty = (id) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const removeItem = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const totalAmount = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(savedCart);
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
        activeCart,
        togglecartbar,
        handleAddToCart,
        increaseQty,
        decreaseQty,
        removeItem,
        totalAmount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

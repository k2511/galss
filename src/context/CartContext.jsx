import { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
   
  const [cart, setCart] = useState([]);
  const [activeCart, setActiveCart] = useState(false);

  const togglecartbar = () => setActiveCart(!activeCart);

  const handleAddToCart = (product) => {
    setCart((prev) => {
      const exist = prev.find((item) => String(item.id) === String(product.id));
      if (exist) {
        console.log("already exists, increasing qty");
        return prev.map((item) =>
          String(item.id) === String(product.id)
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        console.log("adding new item");
        return [...prev, { ...product, quantity: 1 }];
      }
    });
  };

  

// const handleAddToCart = (product) => {
//     console.log('product', product)
//     setCart([...cart, { ...product, quantity: 1 }]);
//   };

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

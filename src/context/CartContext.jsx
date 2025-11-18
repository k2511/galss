import { createContext, useState, useEffect } from "react";
import axios from "axios";

const API = "http://localhost:5000/api/cart";

export const CartContext = createContext();
import toast from "react-hot-toast";
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [activeCart, setActiveCart] = useState(false);

  const togglecartbar = () => setActiveCart(!activeCart);

  const token = localStorage.getItem("token")


  const handleAddToCart = (product) => {
    // setCart((prev) => {
    //   const exist = prev.find((item) => String(item.id) === String(product.id));
    //   if (exist) {
    //     toast.error("already exists, increasing qty");
    //     return prev.map((item) =>
    //       String(item.id) === String(product.id)
    //         ? { ...item, quantity: item.quantity + 1 }
    //         : item
    //     );
    //   } else {
    //     toast.success("adding new item");
    //     return [...prev, { ...product, quantity: 1 }];
    //   }
    // });
  };

  const addToCart = async (matchedReview, item) => {
   
    let obj = {
      img: item.image_url,
      product_id: item.id,
      name: item.name,
      sell_price: item.sell_price,
      mrp: item.price,
      gender: item.gender,
      // client_id: id,
      rating: item?.matchedReview?.rating  ?? 0,
      reviews: item?.matchedReview?.comment ?? 'Good',
  
    }; 
       console.log("add to ", obj);
    try {
      const res = await axios.post( `${API}`, obj,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      toast.success("Item added in cart")
      fetchCartItem();
      
    } catch (err) {
      console.log("err in cart", err);
    }
  };

 
  const fetchCartItem = async () => {
    try {
      const res = await axios.get(`${API}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setCart(res.data.data);
    } catch (err) {
      console.log("Fetch error:", err);
    }
  };

  const increaseQty = async (id) => {
    // setCart((prev) =>
    //   prev.map((item) =>
    //     item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    //   )
    // );
    try {
      const res = await axios.post(`${API}/inc-qty`, { id });
      fetchCartItem();
    } catch (err) {
      console.log("err in cart", err);
    }
  };

  const decreaseQty = async (id) => {
    // setCart((prev) =>
    //   prev.map((item) =>
    //     item.id === id && item.quantity > 1
    //       ? { ...item, quantity: item.quantity - 1 }
    //       : item
    //   )
    // );
    try {
      const res = await axios.post(`${API}/dec-qty`, { id });
      fetchCartItem();
    } catch (err) {
      console.log("err in cart", err);
    }
  };

  const removeItem = async(id) => {
    // console.log("remove", id);
    // setCart((prev) => prev.filter((item) => item.id !== id));
    try {
      await axios.delete( `${API}`,
        {
          data: { id },
          headers: {
            Authorization: `Bearer ${token}`,
          }
        }
      );

      toast.success("Item deleted")
      fetchCartItem();

    } catch (err) {
      console.log("err in cart", err);
    }
  };

  // console.log('cart context', cart )
  const totalAmount = cart.reduce(
    (acc, item) => acc + item.sell_price * item.quantity || 1,
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
        addToCart,
      
        fetchCartItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

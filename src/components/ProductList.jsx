import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const ProductList = () => {
  const { handleAddToCart } = useContext(CartContext);

  const products = [
    { id: 1, name: "Aqua Spherical Lens", price: 1200, image: "https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/480x480/9df78eab33525d08d6e5fb8d27136e95//l/i/lenskart-hustlr-vc-s15999-c6-sunglasses_dsc_0321_20_03_2024.jpg" },
    { id: 2, name: "Pro Toric Lens", price: 1800, image: "https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/480x480/9df78eab33525d08d6e5fb8d27136e95//l/i/lenskart-hustlr-vc-s15999-c6-sunglasses_dsc_0321_20_03_2024.jpg" },
    { id: 3, name: "Ultra Spherical Premium", price: 2000, image: "https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/480x480/9df78eab33525d08d6e5fb8d27136e95//l/i/lenskart-hustlr-vc-s15999-c6-sunglasses_dsc_0321_20_03_2024.jpg" },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {products.map((p) => (
        <div key={p.id} className="border-2 border-gray-200 rounded-lg p-4 text-center bg-white shadow-sm hover:shadow-lg transition">
          <img src={p.image} alt={p.name} className="w-full h-56 object-contain mb-4" />
          <h3 className="font-semibold">{p.name}</h3>
          <p className="text-sky-600 font-bold mt-1">₹{p.price}</p>
          <button
            onClick={() => handleAddToCart(p)}
            className="mt-3 w-full bg-sky-500 text-white py-2 rounded hover:bg-sky-600"
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;

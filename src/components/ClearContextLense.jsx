import React, { useState, useEffect } from "react";
import HeroSliderClearContextLense from './HeroSliderClearContextLense'

const ClearContextLense = () => {

   const [selectedType, setSelectedType] = useState("spherical");
    const [selectedPrice, setSelectedPrice] = useState(null);

  const priceRanges = [
    { label: "₹1 - ₹499", min: 1, max: 499 },
    { label: "₹500 - ₹999", min: 500, max: 999 },
    { label: "₹1000 - ₹1499", min: 1000, max: 1499 },
    { label: "₹1500 - ₹1999", min: 1500, max: 1999 },
    { label: "₹2000 - ₹2499", min: 2000, max: 2499 },
    { label: "₹2500 - ₹2999", min: 2500, max: 2999 },
    { label: "₹3000 - ₹5000", min: 3000, max: 5000 },
  ];

  const products = [
    {
      id: 1,
      name: "Aqua Spherical Lens",
      type: "spherical",
      image: "https://static.lenskart.com/images/circle1.png",
      price: 1200,
      discount: 30, // in percentage
    },
    {
      id: 2,
      name: "Pro Toric Lens",
      type: "toric",
      image: "https://static.lenskart.com/images/circle2.png",
      price: 1800,
      discount: 25,
    },
    {
      id: 3,
      name: "Ultra Spherical Premium",
      type: "spherical",
      image: "https://static.lenskart.com/images/circle3.png",
      price: 2000,
      discount: 20,
    },
    {
      id: 4,
      name: "Aqua Soft Toric Lens",
      type: "toric",
      image: "https://static.lenskart.com/images/circle4.png",
      price: 450,
      discount: 15,
    },
    {
      id: 5,
      name: "Cool Vision Lens",
      type: "spherical",
      image: "https://static.lenskart.com/images/circle5.png",
      price: 800,
      discount: 10,
    },
    {
      id: 6,
      name: "Pro Max Toric Lens",
      type: "toric",
      image: "https://static.lenskart.com/images/circle6.png",
      price: 2100,
      discount: 30,
    },
    {
        id: 7,
        name: "Pro Max Toric Lens",
        type: "toric",
        image: "https://static.lenskart.com/images/circle6.png",
        price: 3200,
        discount: 30,
      },
      {
        id: 8,
        name: "Pro Max Toric Lens",
        type: "toric",
        image: "https://static.lenskart.com/images/circle6.png",
        price: 3800,
        discount: 30,
      },
      {
        id: 9,
        name: "Pro Max Toric Lens",
        type: "sperical",
        image: "https://static.lenskart.com/images/circle6.png",
        price: 4000,
        discount: 30,
      },
      {
        id: 10,
        name: "Pro Max Toric Lens",
        type: "toric",
        image: "https://static.lenskart.com/images/circle6.png",
        price: 2400,
        discount: 30,
      },
      {
        id: 11,
        name: "Pro Max Toric Lens",
        type: "sperical",
        image: "https://static.lenskart.com/images/circle6.png",
        price: 2200,
        discount: 30,
      },
      {
        id: 12,
        name: "Pro Max Toric Lens",
        type: "toric",
        image: "https://static.lenskart.com/images/circle6.png",
        price: 4400,
        discount: 30,
      },
      {
        id: 13,
        name: "Pro Max Toric Lens",
        type: "sperical",
        image: "https://static.lenskart.com/images/circle6.png",
        price: 2700,
        discount: 30,
      },
      {
        id: 14,
        name: "Pro Max Toric Lens",
        type: "sperical",
        image: "https://static.lenskart.com/images/circle6.png",
        price: 2700,
        discount: 30,
      },
      {
        id: 15,
        name: "Pro Max Toric Lens",
        type: "toric",
        image: "https://static.lenskart.com/images/circle6.png",
        price: 2500,
        discount: 40,
      },
  ];

   const filteredProducts = products.filter((p) => {
      const matchesType = p.type === selectedType;
      const matchesPrice =
        !selectedPrice ||
        (p.price >= selectedPrice.min && p.price <= selectedPrice.max);
      return matchesType && matchesPrice;
    });

  return (
    <div>
         <HeroSliderClearContextLense />

         {/* <div className='bg-gray-200 w-full h-8 flex items-center px-3'>
           <h1> Clear Contact lense </h1>
         </div>  */}
        
         <div className="w-11/12 mx-auto py-6 flex flex-row sm:gap-8 gap-1">
        <aside className="w-full lg:w-1/4 rounded-xl shadow-sm bg-white sm:p-4 p-0 h-fit border-2 border-black">
          <h2 className="font-semibold text-lg mb-4 text-gray-800">
            Filter By
          </h2>
          <h3 className="font-semibold mb-2 text-gray-700">Price Range</h3>
          <div className="flex flex-col gap-2">
            {priceRanges.map((range) => (
              <label
                key={range.label}
                className={`cursor-pointer flex items-center gap-2 px-2 py-1 rounded-md text-sm  ${
                  selectedPrice?.label === range.label
                    ? "bg-blue-500 text-white shadow-lg"
                    : " text-gray-700"
                }`}
              >
                <input  className=" appearance-none w-4 h-4 border border-gray-400 rounded checked:bg-blue-500 checked:border-blue-500 relative
  after:content-[''] after:absolute after:top-[1px] after:left-[5px] after:w-[5px] after:h-[10px] after:border-r-2 after:border-b-2 after:border-white after:rotate-45 after:opacity-0 checked:after:opacity-100"
                  type="radio"
                  name="price"
                  checked={selectedPrice?.label === range.label}
                  onChange={() => setSelectedPrice(range)}
                />
                {range.label}
              </label>
            ))}
          </div>

          {selectedPrice && (
            <button
              onClick={() => setSelectedPrice(null)}
              className="mt-4 text-sm text-red-500 underline"
            >
              Clear Price Filter
            </button>
          )}
        </aside>

        <main className="w-full lg:w-3/4 border-2 border-black">
          <div className="flex justify-center gap-4 mb-6">
            {["spherical", "toric"].map((type) => (
              <button
                key={type}
                onClick={() => setSelectedType(type)}
                className={`px-6 py-2  font-semibold text-sm transition ${
                  selectedType === type
                    ? "bg-blue-500 text-white shadow-lg"
                    : "bg-gray-200 text-gray-800 hover:bg-gray-300"
                }`}
              >
                {type.charAt(0).toUpperCase() + type.slice(1)}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((item) => {
                const offPrice =
                  item.price - (item.price * item.discount) / 100;
                return (
                  <div
                    key={item.id}
                    className="border rounded-xl shadow-sm hover:shadow-lg transition p-3 text-center bg-white"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-40 object-contain mb-3"
                    />
                    <h2 className="text-sm font-semibold">{item.name}</h2>
                    <div className="flex justify-center items-center gap-2 text-sm mt-1">
                      <span className="text-gray-500 line-through">
                        ₹{item.price}
                      </span>
                      <span className="text-green-600 font-bold">
                        ₹{offPrice}
                      </span>
                    </div>
                    <p className="text-xs text-[#00bac6]">
                      {item.discount}% off
                    </p>
                  </div>
                );
              })
            ) : (
              <p className="text-center col-span-full text-gray-500">
                No products found in this range 😕
              </p>
            )}
          </div>
        </main>
      </div>

         

    </div>
  )
}

export default ClearContextLense


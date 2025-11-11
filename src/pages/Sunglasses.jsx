import { RxCross1 } from "react-icons/rx";
import { FaChevronDown } from "react-icons/fa";
import React, { useState } from "react";

const Sunglasses = () => {
  const [showFilter, setShowFilter] = useState(false);
  const [priceOpen, setPriceOpen] = useState(false);
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
    { id: 1, name: "Aqua Spherical Lens", type: "spherical", price: 1200, discount: 30, image: "https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/480x480/9df78eab33525d08d6e5fb8d27136e95//l/i/lenskart-hustlr-vc-s15999-c6-sunglasses_dsc_0321_20_03_2024.jpg" },
    { id: 2, name: "Pro Toric Lens", type: "toric", price: 1800, discount: 25, image: "https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/480x480/9df78eab33525d08d6e5fb8d27136e95//l/i/lenskart-hustlr-vc-s15999-c6-sunglasses_dsc_0321_20_03_2024.jpg" },
    { id: 3, name: "Ultra Spherical Premium", type: "spherical", price: 2000, discount: 20, image: "https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/480x480/9df78eab33525d08d6e5fb8d27136e95//l/i/lenskart-hustlr-vc-s15999-c6-sunglasses_dsc_0321_20_03_2024.jpg" },
    { id: 4, name: "Aqua Soft Toric Lens", type: "toric", price: 450, discount: 15, image: "https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/480x480/9df78eab33525d08d6e5fb8d27136e95//l/i/lenskart-hustlr-vc-s15999-c6-sunglasses_dsc_0321_20_03_2024.jpg" },
    { id: 5, name: "Cool Vision Lens", type: "spherical", price: 800, discount: 10, image: "https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/480x480/9df78eab33525d08d6e5fb8d27136e95//l/i/lenskart-hustlr-vc-s15999-c6-sunglasses_dsc_0321_20_03_2024.jpg" },
    { id: 6, name: "Pro Max Toric Lens", type: "toric", price: 2100, discount: 30, image: "https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/480x480/9df78eab33525d08d6e5fb8d27136e95//l/i/lenskart-hustlr-vc-s15999-c6-sunglasses_dsc_0321_20_03_2024.jpg" },
    { id: 7, name: "Pro Max Toric Lens", type: "toric", price: 3200, discount: 30, image: "https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/480x480/9df78eab33525d08d6e5fb8d27136e95//l/i/lenskart-hustlr-vc-s15999-c6-sunglasses_dsc_0321_20_03_2024.jpg" },
    { id: 8, name: "Pro Max Toric Lens", type: "toric", price: 3800, discount: 30, image: "https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/480x480/9df78eab33525d08d6e5fb8d27136e95//l/i/lenskart-hustlr-vc-s15999-c6-sunglasses_dsc_0321_20_03_2024.jpg" },
    { id: 9, name: "Vision Max Spherical Lens", type: "spherical", price: 4000, discount: 30, image: "https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/480x480/9df78eab33525d08d6e5fb8d27136e95//l/i/lenskart-hustlr-vc-s15999-c6-sunglasses_dsc_0321_20_03_2024.jpg" },
    { id: 10, name: "Toric Vision Pro", type: "toric", price: 2400, discount: 30, image: "https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/480x480/9df78eab33525d08d6e5fb8d27136e95//l/i/lenskart-hustlr-vc-s15999-c6-sunglasses_dsc_0321_20_03_2024.jpg" },
  ];

  const filteredProducts = products.filter((p) => {
    const matchesType = p.type === selectedType;
    const matchesPrice =
      !selectedPrice || (p.price >= selectedPrice.min && p.price <= selectedPrice.max);
    return matchesType && matchesPrice;
  });

  return (
    <div className="px-1 py-1 text-center border-2 border-black">
      {!showFilter && (
        <div className="relative w-full mx-auto py-6 flex flex-row justify-between sm:gap-2 gap-1">
          {/* Sidebar Filter */}
          <aside className="hidden lg:block lg:sticky lg:top-0 lg:h-[75vh] lg:w-1/6 rounded-xl shadow-sm bg-white sm:p-4 p-0 border-2 border-black overflow-auto">
            <h2 className="font-semibold text-lg mb-4 text-gray-800">Filter By</h2>
            <div>
              <div
                className="flex items-center w-full justify-between cursor-pointer"
                onClick={() => setPriceOpen(!priceOpen)}
              >
                <h3 className="font-semibold text-gray-700">Price Range</h3>
                <FaChevronDown
                  className={`transition-transform duration-300 ${priceOpen ? "rotate-180" : ""}`}
                />
              </div>

              {priceOpen && (
                <div className="flex flex-col gap-2 mt-2">
                  {priceRanges.map((range) => (
                    <label
                      key={range.label}
                      className={`cursor-pointer flex items-center gap-2 px-2 py-1 rounded-md text-sm ${
                        selectedPrice?.label === range.label
                          ? "bg-blue-500 text-white shadow-lg"
                          : "text-gray-700"
                      }`}
                    >
                      <input
                        type="radio"
                        name="price"
                        checked={selectedPrice?.label === range.label}
                        onChange={() => setSelectedPrice(range)}
                        className="appearance-none w-4 h-4 border border-gray-400 rounded-sm checked:bg-blue-500 checked:border-blue-500 relative after:content-[''] after:absolute after:top-[1px] after:left-[5px] after:w-[5px] after:h-[10px] after:border-r-2 after:border-b-2 after:border-white after:rotate-45 after:opacity-0 checked:after:opacity-100"
                      />
                      {range.label}
                    </label>
                  ))}
                </div>
              )}
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

          {/* Main Product Grid */}
          <main className="w-full lg:w-4/7 mx-auto">
            <div className="flex justify-center gap-4 mb-6">
              {["spherical", "toric"].map((type) => (
                <button
                  key={type}
                  onClick={() => setSelectedType(type)}
                  className={`px-6 py-2 font-semibold text-sm transition ${
                    selectedType === type
                      ? "bg-blue-500 text-white shadow-lg"
                      : "bg-gray-200 text-gray-800 hover:bg-gray-300"
                  }`}
                >
                  {type.charAt(0).toUpperCase() + type.slice(1)}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 xl:gap-6 gap-3">
              {filteredProducts.length > 0 ? (
                filteredProducts.map((item) => {
                  const offPrice = item.price - (item.price * item.discount) / 100;
                  return (
                    <div
                      key={item.id}
                      className="border rounded-xl shadow-sm hover:shadow-lg transition p-3 text-center bg-white"
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-80 object-contain xl:mb-3"
                      />
                      <h2 className="text-sm font-semibold">{item.name}</h2>
                      <div className="flex justify-center items-center gap-2 text-sm mt-1">
                        <span className="text-gray-500 line-through">₹{item.price}</span>
                        <span className="text-green-600 font-bold">₹{offPrice}</span>
                      </div>
                      <p className="text-xs text-[#00bac6]">{item.discount}% off</p>
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
      )}

      {/* Mobile Filter Drawer */}
      {showFilter && (
        <div className="w-full h-[80vh] border-2 z-50 border-black bg-white">
          <div className="h-14 border-2 w-full flex flex-row justify-between px-5 items-center">
            <h1>Filter</h1>
            <RxCross1 className="text-2xl cursor-pointer" onClick={() => setShowFilter(false)} />
          </div>
        </div>
      )}

      {/* Bottom Mobile Filter Button */}
      <div className="lg:hidden fixed bottom-0 left-0 w-full bg-white border-t-2 border-black p-4">
        <h2
          className="text-[0.8rem] font-semibold cursor-pointer"
          onClick={() => setShowFilter(true)}
        >
          Filters
        </h2>
      </div>
    </div>
  );
};

export default Sunglasses;

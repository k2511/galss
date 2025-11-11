import React from "react";
import { FaStar, FaRegHeart } from "react-icons/fa";
import { IoEyeOutline } from "react-icons/io5";

const ColourLens = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#f9f9fb] px-4 py-6">
      {/* Top Tabs */}
      <div className="flex w-full max-w-5xl justify-around items-center bg-white rounded-t-2xl shadow-sm">
        <div className="flex flex-col items-center cursor-pointer border-b-2 border-[#192a56] pb-3 w-1/2 hover:bg-[#f0f3ff] transition">
          <span className="text-[#192a56] text-3xl sm:text-2xl">⌀</span>
          <p className="text-base font-semibold text-[#192a56]">
            Zero Power
          </p>
        </div>
        <div className="flex flex-col items-center cursor-pointer pb-3 w-1/2 hover:bg-[#f0f3ff] transition">
          <span className="text-gray-400 text-3xl sm:text-2xl">⌀±</span>
          <p className="text-base font-semibold text-gray-400">
            With Power
          </p>
        </div>
      </div>

      {/* Product Card Container */}
      <div className="w-full max-w-5xl bg-white rounded-b-2xl shadow-md overflow-hidden mt-2 border border-gray-100 transition-all duration-300 hover:shadow-lg grid md:grid-cols-2 lg:grid-cols-3 gap-6 p-4 sm:p-6">
        {/* Product Card */}
        <div className="w-full bg-white rounded-2xl shadow-sm overflow-hidden border border-gray-100 hover:shadow-lg transition-all duration-300">
          {/* Image Section */}
          <div className="relative">
            <img
              src="https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/480x480/9df78eab33525d08d6e5fb8d27136e95//l/i/lenskart-hustlr-vc-s15999-c6-sunglasses_dsc_0321_20_03_2024.jpg"
              alt="Mocha Brown Lens"
              className="w-full h-60 sm:h-72 object-cover"
            />

            {/* Rating */}
            <div className="absolute top-2 left-2 bg-white bg-opacity-80 text-[#192a56] flex items-center gap-1 px-2 py-[2px] rounded-full text-xs font-semibold shadow-sm">
              <FaStar className="text-[#192a56]" /> 4.9
            </div>

            {/* Wishlist */}
            <button className="absolute top-2 right-2 bg-white bg-opacity-70 p-2 rounded-full shadow-sm hover:bg-opacity-100 transition">
              <FaRegHeart className="text-[#192a56]" />
            </button>

            {/* View Similar */}
            <button className="absolute bottom-2 left-2 bg-white bg-opacity-90 text-[#192a56] flex items-center gap-1 px-3 py-1 text-xs font-semibold rounded-full shadow hover:bg-opacity-100 transition">
              <IoEyeOutline className="text-sm" /> View Similar
            </button>

            {/* Color Option */}
            <div className="absolute bottom-2 right-2 bg-gray-200 bg-opacity-90 text-[#192a56] text-xs px-3 py-1 rounded-full flex items-center gap-1">
              <div className="w-3 h-3 rounded-full border border-[#192a56] bg-gradient-to-br from-[#7b5c43] to-[#5a3e2e]" />
              <span>Mocha Brown</span>
            </div>
          </div>

          {/* Product Details */}
          <div className="p-4 text-left">
            <div className="flex items-center justify-between flex-wrap gap-1">
              <h3 className="text-[0.95rem] font-semibold text-[#192a56] leading-tight">
                Aquacolor Candypack Mocha Brown Zero Power Daily
              </h3>
              <span className="text-xs text-gray-600 bg-gray-100 px-2 py-[2px] rounded-full whitespace-nowrap">
                2 lens/box
              </span>
            </div>

            {/* Price Section */}
            <div className="mt-1">
              <p className="text-lg font-bold text-[#192a56] leading-tight">
                ₹169
              </p>
              <p className="text-sm text-gray-500">
                <span className="line-through">₹188</span>{" "}
                <span className="text-[#0072ff] font-semibold">(10% OFF)</span>
              </p>
            </div>

            {/* Bottom Row */}
            <div className="mt-3 flex flex-col sm:flex-row justify-between items-start sm:items-center border-t pt-2 text-sm gap-2">
              <a
                href="#"
                className="text-[#0072ff] font-semibold hover:underline whitespace-nowrap"
              >
                🔹 Free Trial
              </a>
              <p className="text-gray-700 font-medium text-sm">
                Pay <span className="font-semibold">₹99</span> as Convenience Fee
              </p>
            </div>
          </div>
        </div>
        {/* Duplicate the card if you want multiple items */}
      </div>
    </div>
  );
};

export default ColourLens;

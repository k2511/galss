import React from "react";
import { FaStar, FaRegHeart } from "react-icons/fa";
import { IoEyeOutline } from "react-icons/io5";

const ColourLens = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#f9f9fb] px-2 py-6">
      {/* Top Tabs */}
      <div className="flex w-full max-w-md justify-around items-center bg-white rounded-t-2xl shadow-sm">
        <div className="flex flex-col items-center cursor-pointer border-b-2 border-[#192a56] pb-2 w-1/2">
          <span className="text-[#192a56] text-xl">⌀</span>
          <p className="text-sm font-semibold text-[#192a56]">Zero Power</p>
        </div>
        <div className="flex flex-col items-center cursor-pointer pb-2 w-1/2">
          <span className="text-gray-400 text-xl">⌀±</span>
          <p className="text-sm font-semibold text-gray-400">With Power</p>
        </div>
      </div>

      {/* Product Card */}
      <div className="w-full max-w-md bg-white rounded-2xl shadow-md overflow-hidden mt-2 border border-gray-100">
        {/* Image Section */}
        <div className="relative">
          <img
            src="https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/480x480/9df78eab33525d08d6e5fb8d27136e95//l/i/lenskart-hustlr-vc-s15999-c6-sunglasses_dsc_0321_20_03_2024.jpg"
            alt="Mocha Brown Lens"
            className="w-full h-64 object-cover"
          />

          {/* Rating */}
          <div className="absolute top-2 left-2 bg-white bg-opacity-80 text-[#192a56] flex items-center gap-1 px-2 py-[2px] rounded-full text-xs font-semibold shadow-sm">
            <FaStar className="text-[#192a56]" /> 4.9
          </div>

          {/* Wishlist */}
          <button className="absolute top-2 right-2 bg-white bg-opacity-70 p-2 rounded-full shadow-sm">
            <FaRegHeart className="text-[#192a56]" />
          </button>

          {/* View Similar */}
          <button className="absolute bottom-2 left-2 bg-white bg-opacity-80 text-[#192a56] flex items-center gap-1 px-3 py-1 text-xs font-semibold rounded-full shadow">
            <IoEyeOutline className="text-sm" /> View Similar
          </button>

          {/* Color Option */}
          <div className="absolute bottom-2 right-2 bg-gray-200 bg-opacity-90 text-[#192a56] text-xs px-3 py-1 rounded-full flex items-center gap-1">
            <div className="w-3 h-3 rounded-full border border-[#192a56] bg-gradient-to-br from-[#7b5c43] to-[#5a3e2e]" />
            <span>Mocha Brown</span>
          </div>
        </div>

        {/* Product Details */}
        <div className="p-3 text-left">
          <div className="flex items-center justify-between">
            <h3 className="text-[0.9rem] font-semibold text-[#192a56] leading-tight">
              Aquacolor Candypack Mocha Brown Zero Power Daily
            </h3>
            <span className="text-xs text-gray-600 bg-gray-100 px-2 py-[2px] rounded-full">
              2 lens/box
            </span>
          </div>

          {/* Price Section */}
          <div className="mt-1">
            <p className="text-lg font-bold text-[#192a56] leading-tight">₹169</p>
            <p className="text-sm text-gray-500">
              <span className="line-through">₹188</span>{" "}
              <span className="text-[#0072ff] font-semibold">(10% OFF)</span>
            </p>
          </div>

          {/* Bottom Row */}
          <div className="mt-3 flex justify-between items-center border-t pt-2 text-sm">
            <a href="#" className="text-[#0072ff] font-semibold hover:underline">
              🔹 Free Trial
            </a>
            <p className="text-gray-700 font-medium">
              Pay <span className="font-semibold">₹99</span> as Convenience Fee
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ColourLens;

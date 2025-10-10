import React from "react";

const SummerPicksSection = () => (
  <div className="w-full py-8 md:py-12 bg-gray-50">
    <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center">
      <div className="md:w-1/2 mb-6 md:mb-0 md:pr-8 text-center md:text-left">
        <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4">
          Sunglasses Summer Picks
        </h2>
        <p className="text-gray-600 mb-6 text-sm md:text-base">
          Add a statement piece to your summer wardrobe. Whether you're lounging poolside or exploring the city.
        </p>
        <button className="bg-blue-600 text-white px-6 py-3 rounded-full font-medium hover:bg-blue-700 transition">
          Shop Sunglasses
        </button>
      </div>
      <div className="md:w-1/2">
        <img 
          src="https://via.placeholder.com/400x300/FFA500/FFFFFF?text=Summer+Sunglasses" 
          alt="Summer Sunglasses" 
          className="w-full rounded-lg"
        />
      </div>
    </div>
  </div>
);

export default SummerPicksSection;

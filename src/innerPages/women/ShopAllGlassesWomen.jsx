import React from "react";
import { Link } from "react-router-dom";

import PromoBanner from "../../components/PromoBanner";
import GuaranteeSection from "../../components/GuaranteeSection ";
import Footer from "../../components/Footer";

const ShopAllGlassesWomen = () => {
  const topTabs = ["Designer Glasses", "Rx Sunglasses", "On Sale", "Bestsellers", "RayBan"];
  const filters = ["Shape", "Size", "Features", "Brands", "Color", "Material", "Price"];

  const products = [
    { id: 1, name: "Ray Ban RB5288", color: "Black", image: "https://via.placeholder.com/250x250/000000/FFFFFF?text=Ray+Ban+RB5288", price: "$99" },
    { id: 2, name: "Areli I", color: "Black", image: "https://via.placeholder.com/250x250/000000/FFFFFF?text=Areli+I", price: "$89" },
    { id: 3, name: "Maureen K", color: "Colors", image: "https://via.placeholder.com/250x250/FF69B4/FFFFFF?text=Maureen+K", price: "$95" },
    { id: 4, name: "Muse C", color: "Blue", image: "https://via.placeholder.com/250x250/0000FF/FFFFFF?text=Muse+C", price: "$110" },
  ];

  return (
    <div className="bg-white">
      {/* Promo Banner */}
      <PromoBanner />

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Top Tabs */}
        <div className="flex flex-wrap gap-3 mb-6">
          {topTabs.map((tab, i) => (
            <button
              key={i}
              className="flex items-center gap-2 border border-gray-200 rounded-full px-4 py-2 text-sm hover:bg-gray-100 transition"
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Filters Bar */}
        <div className="bg-gray-100 rounded-lg flex flex-wrap justify-between items-center px-4 py-3 mb-8">
          <div className="flex flex-wrap gap-3">
            {filters.map((filter, i) => (
              <button
                key={i}
                className="bg-white border border-gray-300 rounded-md px-4 py-2 text-sm flex items-center justify-between min-w-[90px]"
              >
                {filter} <span className="ml-1">▾</span>
              </button>
            ))}
          </div>
          <div className="flex items-center gap-3 text-sm">
            <span>Most Relevant ▾</span>
            <div className="flex items-center gap-1">
              <input type="checkbox" id="nextDay" />
              <label htmlFor="nextDay">Next-Day Delivery</label>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12">
          {products.map((product) => (
            <div key={product.id} className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition">
              <img src={product.image} alt={product.name} className="w-full h-60 object-cover" />
              <div className="p-4">
                <h3 className="text-sm font-medium text-gray-900">{product.name}</h3>
                <p className="text-xs text-gray-500 mb-2">{product.color}</p>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-semibold">{product.price}</span>
                  <span className="text-xs text-green-600">incl. lenses</span>
                </div>
                <button className="w-full mt-2 bg-blue-600 text-white py-2 rounded-md text-sm">Add to Cart</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <GuaranteeSection />
      <Footer />
    </div>
  );
};

export default ShopAllGlassesWomen;

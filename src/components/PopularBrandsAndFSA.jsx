import React from "react";

// ✅ Import brand logos from local assets
import rayban from "../assets/brands/rayban.jpg";
import oakley from "../assets/brands/oakley.jpg";
import prada from "../assets/brands/prada.jpg";
import persol from "../assets/brands/persol.jpg";
import versace from "../assets/brands/versace.jpg";
import gucci from "../assets/brands/gucci.jpg";
import oliver from "../assets/brands/oliver.jpg";

const PopularBrandsAndFSA = () => {
  const brands = [
    { name: "Ray-Ban", logo: rayban },
    { name: "Oakley", logo: oakley },
    { name: "Prada", logo: prada },
    { name: "Persol", logo: persol },
    { name: "Versace", logo: versace },
    { name: "Gucci", logo: gucci },
    { name: "Oliver", logo: oliver},
  ];

  return (
    <div className="bg-white py-16 px-6">
      {/* Popular Brands Section */}
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-8">
          Our most popular brands.
        </h2>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {brands.map((brand, index) => (
            <img
              key={index}
              src={brand.logo}
              alt={brand.name}
              className="h-8 md:h-10 object-contain grayscale hover:grayscale-0 transition-all duration-300"
            />
          ))}
        </div>
      </div>

      {/* FSA & HSA Section */}
      <div className="max-w-6xl mx-auto bg-[#f4f7fb] rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 shadow-sm">
        {/* Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src="https://img.freepik.com/free-vector/credit-card-concept-illustration_114360-1625.jpg"
            alt="FSA Card"
            className="max-w-xs md:max-w-sm"
          />
        </div>

        {/* Text Section */}
        <div className="w-full md:w-1/2">
          <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4">
            We accept FSA & HSA
          </h3>
          <p className="text-gray-700 text-lg mb-6 leading-relaxed">
            You can use your flexible spending account (FSA) or health savings account (HSA)
            to buy prescription glasses, prescription sunglasses, and contacts.
          </p>
          <button className="bg-black text-white px-6 py-3 rounded-full font-medium hover:bg-gray-800 transition-all">
            Learn How
          </button>
        </div>
      </div>
    </div>
  );
};

export default PopularBrandsAndFSA;

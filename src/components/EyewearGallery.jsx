import React from "react";
import { Link } from "react-router-dom";
import rayban from "../assets/brands/rayban.jpg";
import oakley from "../assets/brands/oakley.jpg";
import idee from "../assets/brands/idee.jpg";
import titan from "../assets/brands/titan.jpg";
import fastrack from "../assets/brands/fastrack.jpg";

const EyewearGallery = () => {
  const brands = [
    { image: rayban, path: "/brands/rayban" },
    { image: oakley, path: "/brands/oakley" },
    { image: idee, path: "/brands/idee" },
    { image: titan, path: "/brands/titan" },
    { image: fastrack, path: "/brands/fastrack" },
  ];

  return (

    <div className=" bg-gray-50 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Brand Filter Buttons */}

        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {brands.map((brand, index) => (
            <Link key={index} to={brand.path}>
              <button className="px-6 py-2 rounded-full border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:border-gray-400 hover:shadow-sm transition-all flex items-center gap-2">
                <img
                  src={brand.image}
                  alt={`Brand ${index + 1}`}
                  className="h-6 w-auto object-contain"
                />
              </button>
            </Link>
          ))}
        </div>


        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            We’re all about finding you that perfect pair.
          </h1>
          <p className="text-gray-600 mb-8 text-sm md:text-base">
            Stylish, affordable eyewear designed for comfort and confidence.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/prescriptionGlass"
              className="px-8 py-3 rounded-full border-2 border-black bg-white text-black font-medium hover:bg-black hover:text-white transition-all text-center"
            >
              Shop Eyeglasses
            </Link>

            <Link
              to="/sunglasses"
              className="px-8 py-3 rounded-full border-2 border-black bg-white text-black font-medium hover:bg-black hover:text-white transition-all text-center"
            >
              Shop Sunglasses
            </Link>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default EyewearGallery;

import React from "react";

const SummerPicksSection = () => (
  <div className="w-full py-8 md:py-12 bg-gray-50">
    <div className="max-w-6xl mx-auto px-4">
      {/* Collabs Header */}
      <h3 className="text-center text-lg md:text-xl font-semibold text-gray-800 mb-8">
        Collabs
      </h3>
      
      {/* Main Content */}
      <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
        {/* Image Section */}
        <div className="w-full md:w-1/2 order-1 md:order-1">
          <div className="relative overflow-hidden rounded-xl shadow-lg">
            <img 
              src="https://optimaxweb.glassesusa.com/image/upload/f_auto,q_auto/mf-homepage/client/mobileImg/shenseea_ac7933bc0097d6522f13.jpg" 
              alt="Shenseea's Summer Picks" 
              className="w-full h-64 md:h-80 object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
        
        {/* Text Content Section */}
        <div className="w-full md:w-1/2 order-2 md:order-2 text-center md:text-left px-2 md:px-0">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-900 mb-4 leading-tight ">
            Shenseea's Summer Picks
          </h2>
          <p className="text-gray-600 mb-6 text-base md:text-lg leading-relaxed max-w-md mx-auto md:mx-0 ">
            Bold, stylish and made to stand out. Handpicked by Shenseea for the ultimate summer vibe.
          </p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-200 ">
            Shop Collection
          </button>
        </div>
      </div>

    </div>
  </div>
  
);

export default SummerPicksSection;

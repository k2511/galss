import React from "react";

const VirtualTryOnSection = () => (
  <div className="w-full  py-6 md:py-8">
    <div className="max-w-6xl mx-auto px-4">
      <div className="bg-[#E9F5FE] rounded-2xl shadow-lg overflow-hidden">
        <div className="flex flex-col md:flex-row items-center">
          {/* Text Content */}
          <div className="md:w-1/2 p-6 md:p-8 text-center md:text-left order-2 md:order-1">
            <p className="text-sm text-gray-600 mb-2 uppercase tracking-wide font-medium">
              Perfect Frames in 60 Seconds
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 leading-tight">
              Find your perfect pair in 60 seconds!
            </h2>
            <button className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors shadow-md">
              Take a Quiz
            </button>
          </div>
          
          {/* Image */}
          <div className="md:w-1/2 order-1 md:order-2">
            <div className="relative bg-gradient-to-br from-blue-400 to-blue-600 rounded-t-2xl md:rounded-t-none md:rounded-r-2xl">
              <img 
                src="https://www.glassesusa.com/mf-homepage/client/mobileImg/quiz-l_24ca585438ebf6d97d74.png" 
                alt="Virtual Try On" 
                className="w-full h-64 md:h-80 object-cover object-center"
              />
              {/* Overlay decoration */}
              <div className="absolute top-4 right-4 w-16 h-16 bg-white bg-opacity-20 rounded-full"></div>
              <div className="absolute bottom-4 left-4 w-8 h-8 bg-white bg-opacity-30 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default VirtualTryOnSection;

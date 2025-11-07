import React from "react";

const FramingYourWorldSection = () => (
  <div className="w-full py-8 md:py-12 bg-white">
    <div className="max-w-6xl mx-auto px-4">
      <h2 className="text-center text-xl md:text-2xl font-semibold text-gray-900 mb-8">
        Framing your vision, style and in-store.
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-gray-100 rounded-lg p-6 md:p-8">
          <img 
            src="blob:chrome-extension://dbjbempljhcmhlfpfacalomonjpalpko/47a15e38-b712-4a4a-a47c-c2b4ccda3e7f" 
            alt="Finding perfect pair" 
            className="w-full rounded-lg mb-4"
          />
          <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2">
            Finding your perfect pair in our showroom.
          </h3>
          <p className="text-gray-600 mb-4 text-sm md:text-base">
            Explore our collection in person with expert guidance from our opticians.
          </p>
          <div className="flex gap-2">
            <button className="bg-black text-white px-4 py-2 rounded-full text-sm font-medium">
              Book Appointment
            </button>
            <button className="border border-gray-300 px-4 py-2 rounded-full text-sm font-medium">
              Find a Store
            </button>
          </div>
        </div>
        <div className="bg-gray-100 rounded-lg p-6 md:p-8">
          <img 
            src="https://optimaxweb.glassesusa.com/image/upload/f_auto,q_auto/mf-homepage/client/mobileImg/storeImage_78523d191af767121158.jpg" 
            alt="Visit our store" 
            className="w-full rounded-lg mb-4"
          />
          <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2">
            Visit us in one of our stores!
          </h3>
          <p className="text-gray-600 mb-4 text-sm md:text-base">
            Get personalized service and professional fitting at any of our locations.
          </p>
          <button className="bg-black text-white px-4 py-2 rounded-full text-sm font-medium">
            Find a Store
          </button>
        </div>
      </div>
    </div>
  </div>
);

export default FramingYourWorldSection;

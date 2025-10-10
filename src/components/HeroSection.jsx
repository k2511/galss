import React, { useState, useEffect } from "react";
import Hero1 from "../assets/hero1.jpg";
import Hero2 from "../assets/hero2.jpg";
import Hero3 from "../assets/hero3.jpg";
import InsuranceBanner from "../assets/insuranceBanner.jpg"; // Add your top image here

const HeroSection = () => {
  const images = [Hero1, Hero2, Hero3];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [showInsurance, setShowInsurance] = useState(false);
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [dobFocused, setDobFocused] = useState(false);

  // Auto slide every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 4000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative bg-gray-100 overflow-hidden">
      {/* Carousel Section */}
      <div className="relative h-[600px] flex items-center justify-center">
        {/* Image Slide */}
        <div className="absolute inset-0 transition-all duration-700 ease-in-out">
          <img
            src={images[currentIndex]}
            alt="Eyewear"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/30" />

        {/* Text + Buttons */}
        <div className="relative z-10 max-w-7xl mx-auto text-white pr-[45%]">
          <h2 className="text-lg font-medium mb-3">Styles to Fall for</h2>
          <h1 className="text-5xl md:text-6xl font-bold mb-2">30% Off</h1>
          <p className="text-xl mb-8">+ Free Shipping</p>

          <div className="flex space-x-4 mb-6">
            <button className="bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition">
              Shop Men
            </button>
            <button className="bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition">
              Shop Women
            </button>
          </div>

          <a
            href="#"
            className="text-white underline font-medium hover:text-gray-200"
          >
            Take the Pairfect Match Quiz →
          </a>
        </div>

        {/* Left/Right Buttons */}
        <button
          onClick={handlePrev}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white text-gray-700 rounded-full p-3 shadow-md hover:bg-gray-200 transition"
        >
          ❮
        </button>
        <button
          onClick={handleNext}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white text-gray-700 rounded-full p-3 shadow-md hover:bg-gray-200 transition"
        >
          ❯
        </button>

        {/* Save with Insurance */}
        <button
          onClick={() => setShowInsurance(true)}
          className="absolute top-6 right-6 bg-white text-gray-900 font-medium px-5 py-2 rounded-full shadow hover:bg-gray-100 transition flex items-center space-x-2"
        >
          <span>🛡️</span>
          <span>Save with Insurance</span>
        </button>
      </div>

      {/* Insurance Panel */}
      <div
        className={`fixed top-0 right-0 h-full bg-white shadow-2xl transform transition-transform duration-500 ease-in-out z-50 ${
          showInsurance ? "translate-x-0 w-[22%]" : "translate-x-full w-0"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header (Title + Close) */}
          <div className="flex justify-between items-center px-6 py-4 border-b">
            <h3 className="text-lg font-semibold">Check my benefits</h3>
            <button
              onClick={() => setShowInsurance(false)}
              className="text-gray-600 hover:text-gray-800 text-xl"
            >
              ✕
            </button>
          </div>

          {/* Banner Image */}
          <div>
            <img
              src={InsuranceBanner}
              alt="Insurance Banner"
              className="w-full h-48 object-cover"
            />
          </div>

          {/* Content */}
          <div className="p-6 flex-1 overflow-y-auto">
            <h2 className="text-xl font-semibold mb-2">Pay with insurance</h2>
            <p className="text-gray-700 text-sm mb-6">
              Start by entering your info. We'll apply your benefits
              automatically at checkout.
            </p>

            {/* Form */}
            <form className="space-y-4">
              {/* Row 1: First + Last Name */}
              <div className="grid grid-cols-1 gap-3">
                <input
                  type="text"
                  placeholder="* First name"
                  className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 outline-none"
                />
                <input
                  type="text"
                  placeholder="* Last name"
                  className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 outline-none"
                />
              </div>

              {/* Row 2: DOB + Zip */}
              <div className="grid grid-cols-2 gap-3">
                <div className="relative w-full">
                  <input
                    type="date"
                    id="dob"
                    value={dateOfBirth}
                    onChange={(e) => setDateOfBirth(e.target.value)}
                    onFocus={() => setDobFocused(true)}
                    onBlur={() => setDobFocused(!!dateOfBirth)}
                    className={`w-full border border-gray-300 rounded-lg p-3 pt-5 focus:ring-2 focus:ring-blue-500 outline-none appearance-none ${
                      !dateOfBirth ? "text-gray-400" : "text-gray-900"
                    }`}
                  />
                  <label
                    htmlFor="dob"
                    className={`absolute left-3 text-gray-500 transition-all duration-200 ease-in-out pointer-events-none ${
                      dobFocused || dateOfBirth
                        ? "top-1 text-xs text-blue-600"
                        : "top-3 text-sm text-gray-400"
                    }`}
                  >
                    * Date of birth
                  </label>
                </div>

                <input
                  type="text"
                  placeholder="* Zip code"
                  className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 outline-none"
                />
              </div>

              {/* Button */}
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
              >
                Check My Benefits
              </button>
            </form>

            {/* Footer */}
            <p className="text-xs text-gray-500 mt-4">
              By continuing, you agree to our{" "}
              <a href="#" className="underline hover:text-blue-600">
                Terms & Conditions
              </a>
              . Visit our{" "}
              <a href="#" className="underline hover:text-blue-600">
                Privacy Policy
              </a>{" "}
              for more information.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

import React, { useState, useEffect } from "react";
import Hero1 from "../assets/Hero/hero1.jpg";
import Hero2 from "../assets/Hero/hero2.jpg";
import Hero3 from "../assets/Hero/hero3.jpg";
import InsuranceBanner from "../assets/Hero/insuranceBanner.jpg";
import logo from "../assets/Hero/amlialogo.svg";
import logo1 from "../assets/Hero/metallogorb.svg";

const HeroSection = () => {
  const images = [Hero1, Hero2, Hero3];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showInsurance, setShowInsurance] = useState(false);
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [dobFocused, setDobFocused] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const renderHeroContent = () => {
    switch (currentIndex) {
      case 0:
        return (
          <>
            <img src={logo} alt="logo" className="h-8 md:h-10 mb-3 md:mb-4" />
            <h2 className="text-2xl md:text-5xl font-semibold mb-2">
              Eyewear that Dazzles
            </h2>
            <p className="text-base md:text-2xl mb-4">
              Hollywood Glam Meets Fashion Week
            </p>
            <button className="bg-white text-black px-6 py-2 md:px-8 md:py-3 rounded-full font-semibold hover:bg-gray-200 transition text-sm md:text-base">
              Shop Now
            </button>
          </>
        );
      case 1:
        return (
          <>
            <img src={logo1} alt="logo" className="h-8 md:h-10 mb-3 md:mb-4" />
            <h2 className="text-2xl md:text-5xl font-semibold mb-4">
              Meta the new AI glasses
            </h2>
            <button className="bg-white text-black px-6 py-2 md:px-8 md:py-3 rounded-full font-semibold hover:bg-gray-200 transition text-sm md:text-base">
              Shop Now
            </button>
          </>
        );
      case 2:
        return (
          <>
            <h2 className="text-xl md:text-4xl font-medium mb-2 md:mb-3">
              Styles to Fall for
            </h2>
            <h1 className="text-4xl md:text-6xl font-bold mb-2">30% Off</h1>
            <p className="text-lg md:text-2xl mb-4 md:mb-6">+ Free Shipping</p>
            <div className="flex space-x-3 md:space-x-4 mb-4 md:mb-6">
              <button className="bg-white text-black px-4 py-2 md:px-6 md:py-3 rounded-full font-semibold hover:bg-gray-200 transition text-sm md:text-base">
                Shop Men
              </button>
              <button className="bg-white text-black px-4 py-2 md:px-6 md:py-3 rounded-full font-semibold hover:bg-gray-200 transition text-sm md:text-base">
                Shop Women
              </button>
            </div>
            <a
              href="#"
              className="text-white underline font-medium hover:text-gray-200 text-sm md:text-base"
            >
              Take the Pairfect Match Quiz →
            </a>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className="relative bg-gray-100 overflow-hidden">
      {/* --- HERO CAROUSEL --- */}
      <div className="relative h-[500px] md:h-[444px] flex items-center justify-start">
        <div className="absolute inset-0 transition-all duration-700 ease-in-out">
          <img
            src={images[currentIndex]}
            alt="Eyewear"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-black/30" />

        {/* --- Desktop Hero Text --- */}
        <div className="hidden md:block relative z-10 text-white px-10 md:px-20 lg:px-32 max-w-3xl">
          {renderHeroContent()}
        </div>

        {/* --- Mobile Hero Layout --- */}
        <div className="md:hidden w-full">
          {/* Make this container relative, with padding and max width to center */}
          <div className="relative z-10 text-white px-6 py-10 max-w-lg mx-auto">
            {renderHeroContent()}
          </div>
        </div>

        {/* --- Nav Buttons --- */}
        <button
          onClick={handlePrev}
          className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 bg-white text-gray-700 rounded-full p-2 md:p-3 shadow-md hover:bg-gray-200 transition z-10"
          aria-label="Previous slide"
        >
          ❮
        </button>
        <button
          onClick={handleNext}
          className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 bg-white text-gray-700 rounded-full p-2 md:p-3 shadow-md hover:bg-gray-200 transition z-10"
          aria-label="Next slide"
        >
          ❯
        </button>

        {/* --- Save with Insurance --- */}
        <button
          onClick={() => setShowInsurance(true)}
          className="absolute top-4 right-4 md:top-6 md:right-6 bg-white text-gray-900 font-medium px-3 py-1 md:px-5 md:py-2 rounded-full shadow hover:bg-gray-100 transition flex items-center space-x-2 text-sm md:text-base z-10"
        >
          <span>🛡️</span>
          <span className="hidden sm:inline">Save with Insurance</span>
        </button>
      </div>

      {/* --- Feature Bar (Hidden on mobile, visible on desktop) --- */}
      {/* <div className="hidden md:flex relative z-20 bg-white shadow-lg rounded-full mx-auto -mt-6 mb-10 w-[85%] items-center justify-center gap-6 py-4 px-6 text-base font-medium">
        <div className="flex items-center space-x-2">
          <span>🚚</span> <span>Free Shipping</span>
        </div>
        <span className="border-l h-6 border-gray-300"></span>
        <div className="flex items-center space-x-2">
          <span>📦</span> <span>45-days Home Try-on</span>
        </div>
        <span className="border-l h-6 border-gray-300"></span>
        <div className="flex items-center space-x-2">
          <span>🕒</span> <span>365-Days of Warranty</span>
        </div>
        <span className="border-l h-6 border-gray-300"></span>
        <div className="flex items-center space-x-2">
          <span>💳</span> <span>Buy now pay later</span>
        </div>
        <span className="border-l h-6 border-gray-300"></span>
        <div className="flex items-center space-x-2">
          <span>⭐</span> <span>Trustpilot</span> <span>★★★★★</span>{" "}
          <span>111K</span>
        </div>
      </div> */}

      {/* Insurance Panel */}
      {showInsurance && (
        <div className="fixed inset-0 z-50 flex justify-end">
          <div
            className="fixed inset-0 bg-black bg-opacity-50"
            onClick={() => setShowInsurance(false)}
          />
          <div className="relative bg-white w-full max-w-md h-full overflow-y-auto transform transition-transform duration-300">
            <div className="flex flex-col h-full">
              {/* Header */}
              <div className="flex justify-between items-center px-6 py-4 border-b">
                <h3 className="text-lg font-semibold">Check my benefits</h3>
                <button
                  onClick={() => setShowInsurance(false)}
                  className="text-gray-600 hover:text-gray-800 text-xl"
                  aria-label="Close insurance panel"
                >
                  ✕
                </button>
              </div>
              {/* Banner */}
              <img
                src={InsuranceBanner}
                alt="Insurance Banner"
                className="w-full h-48 object-cover"
              />
              {/* Form Content */}
              <div className="p-6 flex-1">
                <h2 className="text-xl font-semibold mb-2">Pay with insurance</h2>
                <p className="text-gray-700 text-sm mb-6">
                  Start by entering your info. We'll apply your benefits
                  automatically at checkout.
                </p>
                <form className="space-y-4">
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
                  <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
                  >
                    Check My Benefits
                  </button>
                </form>
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
      )}
    </div>
  );
};

export default HeroSection;





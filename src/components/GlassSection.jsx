import React from "react";

const GlassSection = () => {
  return (
    <section className="w-full bg-white py-8 flex flex-col items-center">
      <div className="max-w-4xl w-full mx-auto text-center px-4">
        <h2 className="text-2xl md:text-3xl font-semibold mb-3">
          We've got your eyes covered.
        </h2>
        <p className="text-base md:text-lg text-gray-600 mb-6">
          When you shop for glasses online, it should be easy, affordable, and safe. With over 12 years of experience, we're experts in turning your eyewear wish into reality.
        </p>
      </div>
      <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-6 px-4">
        {/* Left Card */}
        <div className="relative rounded-xl overflow-hidden flex flex-col justify-end min-h-[220px] h-[330px] shadow group">
          <img
            src="https://optimaxweb.glassesusa.com/image/upload/f_auto,q_auto/mf-homepage/client/mobileImg/buy-glasses-online_19bd09b66f44e1716ad0.jpg"
            alt="Get Started"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="relative z-10 bg-black/50 p-6 flex flex-col justify-end h-full">
            <h3 className="text-white text-lg font-semibold mb-1">
              Let's get started
            </h3>
            <p className="text-white text-sm mb-3">
              This quick guide will make it easy as 1-2-3.
            </p>
            <button className="bg-white text-black text-base font-medium px-5 py-2 rounded-full shadow hover:scale-105 transition-all w-fit">
              Learn More
            </button>
          </div>
        </div>
        {/* Right Card */}
        <div className="relative rounded-xl overflow-hidden flex flex-col justify-end min-h-[220px] h-[330px] shadow group">
          <img
            src="https://optimaxweb.glassesusa.com/image/upload/f_auto,q_auto/mf-homepage/client/mobileImg/glasses-prescription-app_a110df18512733c408cd.jpg"
            alt="Download App"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="relative z-10 bg-black/50 p-6 flex flex-col justify-end h-full">
            <h3 className="text-white text-lg font-semibold mb-1">
              Download the app
            </h3>
            <p className="text-white text-sm mb-3">
              Get the best experience in our app!
            </p>
            <div className="flex gap-2 mb-3 flex-wrap">
              <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play" className="h-8 w-auto" />
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5vENcZPOiMmRWSTrDnC34W2y0JYDB8cDuuQ&s" alt="App Store" className="h-8 w-auto" />
            </div>
            <button className="bg-white text-black text-base font-medium px-5 py-2 rounded-full shadow hover:scale-105 transition-all w-fit">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlassSection;

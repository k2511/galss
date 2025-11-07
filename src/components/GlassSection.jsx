import React from "react";

const GlassSection = () => {
  return (
    <section className="w-full bg-white py-12 flex flex-col items-center">
      {/* Heading Section */}
      <div className="max-w-4xl w-full mx-auto text-center px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-3 text-gray-900">
          We’ve got your eyes covered.
        </h2>
        <p className="text-base md:text-lg text-gray-600 mb-6">
          At <span className="font-semibold text-black">Lenskmart</span>, we believe buying glasses online should be easy, affordable, and 100% reliable. 
          With over a decade of experience, we’re experts in helping you find the perfect pair — crafted for comfort, style, and clear vision. 
          Your satisfaction and eye health are our top priorities.
        </p>
      </div>

      {/* Cards Section */}
      <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-6 px-4">
        {/* Left Card */}
        <div className="relative rounded-2xl overflow-hidden flex flex-col justify-end min-h-[220px] md:h-[330px] shadow group">
          <img
            src="https://optimaxweb.glassesusa.com/image/upload/f_auto,q_auto/mf-homepage/client/mobileImg/buy-glasses-online_19bd09b66f44e1716ad0.jpg"
            alt="Get Started"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="relative z-10 bg-black/50 p-6 flex flex-col justify-end h-full">
            <h3 className="text-white text-xl font-semibold mb-1">
              Let’s get started
            </h3>
            <p className="text-white text-sm md:text-base mb-3">
              This quick guide makes buying eyewear as easy as 1-2-3.
            </p>
            <button className="bg-white text-black text-sm md:text-base font-medium px-5 py-2 rounded-full shadow hover:scale-105 transition-all w-fit">
              Learn More
            </button>
          </div>
        </div>

        {/* Right Card */}
        <div className="relative rounded-2xl overflow-hidden flex flex-col justify-end min-h-[220px] md:h-[330px] shadow group">
          <img
            src="https://cdn.pixabay.com/photo/2018/04/03/09/32/eyeglasses-3285458_1280.jpg"
            alt="Customer Support"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="relative z-10 bg-black/50 p-6 flex flex-col justify-end h-full">
            <h3 className="text-white text-xl font-semibold mb-1">
              Exceptional Support
            </h3>
            <p className="text-white text-sm md:text-base mb-3">
              Our Lenskmart team is here 24/7 to assist you — from selecting lenses to after-sales care.
            </p>
            <button className="bg-white text-black text-sm md:text-base font-medium px-5 py-2 rounded-full shadow hover:scale-105 transition-all w-fit">
              Contact Us
            </button>
          </div>
        </div>
      </div>

      {/* Experience Section */}
      <div className="max-w-4xl w-full text-center mt-12 px-4">
        <h3 className="text-xl md:text-2xl font-semibold mb-3 text-gray-900">
          Experience the Lenskmart Difference
        </h3>
        <p className="text-base md:text-lg text-gray-600">
          Whether you’re shopping for prescription glasses, sunglasses, or blue-light protection, 
          Lenskmart makes it simple and secure. We combine quality craftsmanship, modern designs, 
          and expert support — all to give you an unmatched eyewear experience.
        </p>
      </div>
    </section>
  );
};

export default GlassSection;

import React from "react";
import about10 from "../assets/AboutUs/about10.svg"; // Update path as needed

const CuttingMiddleman = () => {
  return (
    <section className="w-full flex flex-col items-center py-16 px-6 bg-white text-center">
      {/* Heading */}
      <h2 className="text-3xl font-semibold mb-4">
        Cutting the middleman.
      </h2>

      {/* Description */}
      <p className="text-gray-600 max-w-3xl leading-relaxed mb-8">
        Our business model is transparent and simple. By eliminating distributors and resellers, 
        we control the entire process and save on many traditional expenses. These savings, 
        which can reach up to 70%, are passed directly to our customers, meaning you are truly 
        just paying for your{" "}
        <a href="#" className="text-blue-600 hover:underline">eyeglasses</a>,{" "}
        <a href="#" className="text-blue-600 hover:underline">sunglasses</a>,{" "}
        <a href="#" className="text-blue-600 hover:underline">prescription sunglasses</a>, 
        and{" "}
        <a href="#" className="text-blue-600 hover:underline">progressive glasses</a>.
      </p>

      {/* Single Image */}
      <div className="w-full flex justify-center">
        <img
          src={about10}
          alt="Business Model Diagram"
          className="max-w-4xl w-full object-contain"
        />
      </div>
    </section>
  );
};

export default CuttingMiddleman;

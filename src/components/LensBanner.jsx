import React from "react";
import banner from "../assets/Lenses/banner.jpeg"; // adjust path if needed

const LensBanner = () => {
  return (
    <section
      className="relative w-full h-[550px] bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${banner})` }}
    >
      <div className="absolute inset-0 bg-black/10"></div> {/* dark overlay */}
      <h2 className="relative z-10 text-white text-3xl md:text-4xl font-semibold text-center px-4">
        The perfect pair starts with precision-crafted lenses.
      </h2>
    </section>
  );
};

export default LensBanner;

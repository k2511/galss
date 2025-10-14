// import React, { useState } from "react";
// import { Truck, RotateCcw, ShieldCheck, CreditCard, ChevronLeft, ChevronRight } from "lucide-react";
// import Hero1 from "../assets/Hero/hero1.jpg";

// const PromoBanner = () => {
//   // 🔁 Top bar messages
//   const offers = [
//     {
//       title: "Save 30% Off Frames",
//       code: "SAVE30",
//       details: "More Details",
//     },
//     {
//       title: "Buy One Get One Free",
//       code: "BOGFREE",
//       details: "More Details",
//     },
//   ];

//   const [index, setIndex] = useState(0);

//   const handlePrev = () => setIndex((prev) => (prev === 0 ? offers.length - 1 : prev - 1));
//   const handleNext = () => setIndex((prev) => (prev === offers.length - 1 ? 0 : prev + 1));

//   return (
//     <div className="w-full">
//       {/* 🔝 Top Offer Bar with slider */}
//       <div className="bg-[#000B2A] w-full text-white text-center text-sm py-2 font-medium flex items-center justify-center gap-3 relative overflow-hidden">
//         {/* Left arrow */}
//         <button onClick={handlePrev} className="absolute left-3 hover:text-gray-300">
//           <ChevronLeft size={18} />
//         </button>

//         {/* Animated text */}
//         <div className="transition-all duration-500 ease-in-out">
//           {offers[index].title} &nbsp; | &nbsp; Code:{" "}
//           <span className="font-bold">{offers[index].code}</span> &nbsp; | &nbsp;
//           <a href="#" className="underline">
//             {offers[index].details}
//           </a>
//         </div>

//         {/* Right arrow */}
//         <button onClick={handleNext} className="absolute right-3 hover:text-gray-300">
//           <ChevronRight size={18} />
//         </button>
//       </div>

//       {/* 🖼️ Main Banner */}
//       <div
//         className="relative flex items-center justify-end bg-cover bg-center h-[380px]"
//         style={{
//           backgroundImage: `url(${Hero1})`,
//         }}
//       >
//         <div className="absolute inset-0 bg-gradient-to-l from-[#f7f2eb]/90 to-transparent"></div>

//         <div className="relative text-right pr-20 max-w-xl">
//           <p className="text-xl font-medium text-gray-800">Styles to Fall for</p>
//           <h1 className="text-6xl font-bold text-gray-900 mt-2">30% Off</h1>
//           <p className="text-lg text-gray-700 mt-3">+ Free Shipping</p>
//           <p className="text-sm text-gray-500 mt-2">
//             Available with <span className="font-semibold">Transitions</span>
//           </p>
//         </div>
//       </div>

//       {/* 📦 Bottom Info Bar */}
//       <div className="bg-gray-800 text-white flex flex-wrap justify-center items-center gap-8 py-4 text-sm font-medium">
//         <div className="flex items-center gap-2">
//           <Truck size={18} /> Free Shipping
//         </div>
//         <div className="flex items-center gap-2">
//           <RotateCcw size={18} /> 45-Days Free Returns
//         </div>
//         <div className="flex items-center gap-2">
//           <ShieldCheck size={18} /> 365-Days of Warranty
//         </div>
//         <div className="flex items-center gap-2">
//           <CreditCard size={18} /> Buy now pay later
//         </div>
//         <div className="flex items-center gap-1 text-green-400">
//           ★★★★★ <span className="text-white">110,923+</span>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PromoBanner;
import React, { useState, useEffect } from "react";
import {
  Truck,
  RotateCcw,
  ShieldCheck,
  CreditCard,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

// ✅ Replace this image with your uploaded one (place in /src/assets/Hero/)
import BannerImg from "../assets/Hero/Hero1.jpg"; // rename your uploaded file to bannerimg.png

const PromoBanner = () => {
  // 🔁 Top bar messages
  const offers = [
    {
      title: "Save 30% Off Frames",
      code: "SAVE30",
      details: "More Details",
    },
    {
      title: "Buy One Get One Free",
      code: "BOGFREE",
      details: "More Details",
    },
  ];

  const [index, setIndex] = useState(0);

  const handlePrev = () =>
    setIndex((prev) => (prev === 0 ? offers.length - 1 : prev - 1));
  const handleNext = () =>
    setIndex((prev) => (prev === offers.length - 1 ? 0 : prev + 1));

  // ⏱ Auto slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % offers.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [offers.length]);

  return (
    <div className="w-full">
      {/* 🔝 Top Offer Bar with slider */}
      <div className="bg-[#000B2A] w-full text-white text-center text-sm py-2 font-medium flex items-center justify-center gap-3 relative overflow-hidden">
        {/* Left arrow */}
        <button
          onClick={handlePrev}
          className="absolute left-3 hover:text-gray-300 transition-colors"
        >
          <ChevronLeft size={18} />
        </button>

        {/* Offer text */}
        <div className="transition-all duration-500 ease-in-out">
          {offers[index].title} &nbsp; | &nbsp; Code:{" "}
          <span className="font-bold">{offers[index].code}</span> &nbsp; | &nbsp;
          <a href="#" className="underline">
            {offers[index].details}
          </a>
        </div>

        {/* Right arrow */}
        <button
          onClick={handleNext}
          className="absolute right-3 hover:text-gray-300 transition-colors"
        >
          <ChevronRight size={18} />
        </button>
      </div>

      {/* 🖼️ Main Banner */}
      <div
        className="relative flex items-center justify-end bg-cover bg-center h-[380px]"
        style={{
          backgroundImage: `url(${BannerImg})`,
        }}
      >
        {/* Soft overlay */}
        <div className="absolute inset-0 bg-gradient-to-l from-[#f7f2eb]/90 to-transparent"></div>

        {/* Banner text content */}
        <div className="relative text-right pr-20 max-w-xl">
          <p className="text-xl font-medium text-gray-800">Styles to Fall for</p>
          <h1 className="text-6xl font-bold text-gray-900 mt-2">30% Off</h1>
          <p className="text-lg text-gray-700 mt-3">+ Free Shipping</p>
          <p className="text-sm text-gray-500 mt-2">
            Available with <span className="font-semibold">Transitions</span>
          </p>
        </div>
      </div>

      {/* 📦 Bottom Info Bar */}
      <div className="bg-gray-800 text-white flex flex-wrap justify-center items-center gap-8 py-4 text-sm font-medium">
        <div className="flex items-center gap-2">
          <Truck size={18} /> Free Shipping
        </div>
        <div className="flex items-center gap-2">
          <RotateCcw size={18} /> 45-Days Free Returns
        </div>
        <div className="flex items-center gap-2">
          <ShieldCheck size={18} /> 365-Days of Warranty
        </div>
        <div className="flex items-center gap-2">
          <CreditCard size={18} /> Buy now pay later
        </div>
        <div className="flex items-center gap-1 text-green-400">
          ★★★★★ <span className="text-white">110,923+</span>
        </div>
      </div>
    </div>
  );
};

export default PromoBanner;

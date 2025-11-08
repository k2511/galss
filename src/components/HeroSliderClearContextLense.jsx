import React, { useState, useEffect } from "react";
import lense1 from "../assets/ClearLense/lense1.png";
import lense2 from "../assets/ClearLense/lense2.png";
import lense3 from "../assets/ClearLense/lense3.png";
import { useLocation } from "react-router-dom";

const HeroSliderClearContextLense = () => {
 
  const [current, setCurrent] = useState(0);

  const location = useLocation();

  const slides = [
    {
      id: 1,
      title: "50% OFF Above ₹1000",
      category: "LIMITED TIME OFFER",
      image: lense1,
    },
    {
      id: 2,
      title: "30% OFF On All Pizzas",
      category: "SPECIAL DISCOUNT",
      image: lense2,
    },
    {
      id: 3,
      title: "New Arrivals",
      category: "TRY OUR LATEST MENU",
      image: lense3,
    },
  ];

 
  
 
  //   const filteredProducts = products.filter((p) => p.type === selectedType);

 

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 4000);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <>
      <section
        className={`relative w-full overflow-hidden h-full mt-10 ${
          location.pathname ? "-top-10" : ""
        }`}
      >
        <div
          className="flex h-full transition-transform duration-[1000ms] ease-in-out"
          style={{
            transform: `translateX(-${current * 100}%)`,
          }}
        >
          {slides.map((slide) => (
            <div
              key={slide.id}
              className="relative w-full  sm:h-[70vh] md:h-[75vh] lg:h-screen flex-shrink-0"
            >
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-contain sm:object-cover"
              />

              <div className="absolute inset-0 z-0 "></div>
            </div>
          ))}
        </div>

        <div className="absolute bottom-5 left-0 right-0 flex justify-center space-x-3 z-20">
          {slides.map((_, index) => (
            <div
              key={index}
              onClick={() => setCurrent(index)}
              className={`cursor-pointer w-3 h-1 transition-all ${
                current === index
                  ? "bg-yellow-400 scale-125"
                  : "bg-white/40 hover:bg-white/60"
              }`}
            ></div>
          ))}
        </div>
      </section>
  
    </>
  );
};

export default HeroSliderClearContextLense;

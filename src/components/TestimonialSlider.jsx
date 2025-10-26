import React, { useState } from "react";
import TestimonialCard from "./TestimonialCard";

const reviews = [
  {
    title: "It was so very simple",
    date: "25 Oct, 2025",
    description:
      "It was so very simple I was able to read reviews which made me feel secure. Pls check back with me after I receive my glasses.",
    author: "Sheri Allison",
  },
  {
    title: "Ordering online was straight forward",
    date: "25 Oct, 2025",
    description:
      "Ordering was easy to understand and everything seemed to work as it should.",
    author: "Michael Hanitchak",
  },
  {
    title: "Pretty straight forward way of getting...",
    date: "25 Oct, 2025",
    description:
      "Pretty straight forward way of getting glasses. I hope I get my glasses soon.",
    author: "Angel Ortiz",
  },
  {
    title: "Fantastic Experience",
    date: "26 Oct, 2025",
    description:
      "Service was great! Fast and reliable. Highly recommended.",
    author: "Sarah Jones",
  },
];

const TestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    if (currentIndex < reviews.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  return (
    <div className="py-12 bg-gray-100">
      <h2 className="text-3xl font-semibold text-center mb-10">
        Listen to Fellow Spectacle Enthusiasts Like You!
      </h2>

      <div className="relative flex items-center justify-center">
        
        {/* Left Arrow */}
        <button
          onClick={prevSlide}
          className="absolute left-48 bg-white shadow-md w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-200 transition z-10"
          disabled={currentIndex === 0}
        >
          ←
        </button>

        {/* Slider Container */}
        <div className="overflow-hidden max-w-[1100px]">
          <div
            className="flex transition-transform duration-500"
            style={{ transform: `translateX(-${currentIndex * 360}px)` }}
          >
            {reviews.map((review, i) => (
              <TestimonialCard key={i} review={review} />
            ))}
          </div>
        </div>

        {/* Right Arrow */}
        <button
          onClick={nextSlide}
          className="absolute right-44 bg-white shadow-md w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-200 transition z-10"
          disabled={currentIndex === reviews.length - 1}
        >
          →
        </button>
      </div>
    </div>
  );
};

export default TestimonialSlider;

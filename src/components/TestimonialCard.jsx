import React from "react";

const TestimonialCard = ({ review }) => {
  return (
    <div className="min-w-[350px] max-w-[350px] bg-white shadow-md rounded-xl p-6 mx-3 flex-shrink-0 flex flex-col items-center text-center">
      
      {/* Stars & Date Row */}
      <div className="w-full flex justify-between items-center mb-4">
        <div className="flex gap-1">
          {[...Array(5)].map((_, i) => (
            <span key={i} className="text-green-500 text-lg">★</span>
          ))}
        </div>
        <p className="text-gray-500 text-sm">{review.date}</p>
      </div>

      {/* Title */}
      <h3 className="font-semibold text-lg mb-3">{review.title}</h3>

      {/* Description */}
      <p className="text-gray-600 text-sm leading-relaxed mb-5">
        {review.description}
      </p>

      {/* Author */}
      <p className="text-gray-700 text-sm font-medium">{review.author}</p>
    </div>
  );
};

export default TestimonialCard;

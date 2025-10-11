
// import React, { useState } from "react";

// const reviews = [
//   {
//     name: "John",
//     img: "https://your-image-url-1.jpg", // Replace with actual image URL
//     rating: 5,
//     comment:
//       "Takes me back! Great fit and very useful from the golf course to the beach!",
//     verified: true,
//   },
//   {
//     name: "Shae",
//     img: "https://your-image-url-2.jpg",
//     rating: 5,
//     comment:
//       "This is my first pair of glasses from GlassesUSA and I’ve always wanted a pair that were larger than what I’m used to because they are so cute!!",
//     verified: true,
//   },
//   {
//     name: "Journey",
//     img: "https://your-image-url-3.jpg",
//     rating: 5,
//     comment:
//       "I LOVE these glasses. They are simple and classic yet give a very chic look. I am very picky with my frames and I’m so glad I went with these!",
//     verified: true,
//   },
//   {
//     name: "Alex",
//     img: "https://your-image-url-4.jpg",
//     rating: 5,
//     comment:
//       "Love the fit and style of these glasses, truly a great purchase!",
//     verified: true,
//   },
//   {
//     name: "Morgan",
//     img: "https://your-image-url-5.jpg",
//     rating: 5,
//     comment:
//       "Amazing quality and customer service. Highly recommend GlassesUSA!",
//     verified: true,
//   },
// ];

// function StarRating({ count = 5 }) {
//   return (
//     <span className="flex gap-0.5 ml-2">
//       {[...Array(count)].map((_, i) => (
//         <svg
//           key={i}
//           className="w-5 h-5 text-yellow-400"
//           fill="currentColor"
//           viewBox="0 0 24 24"
//         >
//           <path d="M12 17.75l-6.172 3.246L7.041 14.3.817 9.457 8.13 8.76 12 1.387l3.87 7.373 7.314.697-6.224 4.843 1.213 6.697z" />
//         </svg>
//       ))}
//     </span>
//   );
// }

// const ArrowButton = ({ direction, onClick }) => (
//   <button
//     onClick={onClick}
//     aria-label={direction === "left" ? "Previous" : "Next"}
//     className="w-12 h-12 rounded-full bg-white shadow flex items-center justify-center border border-gray-200 hover:bg-gray-100 transition"
//   >
//     {direction === "left" ? (
//       <svg
//         className="w-6 h-6 text-gray-800"
//         fill="none"
//         stroke="currentColor"
//         strokeWidth="2.5"
//         viewBox="0 0 24 24"
//       >
//         <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
//       </svg>
//     ) : (
//       <svg
//         className="w-6 h-6 text-gray-800"
//         fill="none"
//         stroke="currentColor"
//         strokeWidth="2.5"
//         viewBox="0 0 24 24"
//       >
//         <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
//       </svg>
//     )}
//   </button>
// );

// const ReviewCard = ({ name, img, rating, comment, verified }) => (
//   <div className="bg-white rounded-xl shadow-md px-8 py-6 flex flex-col min-w-[280px] min-h-[180px] w-full mx-auto max-w-sm transition duration-300">
//     <div className="flex items-center mb-2">
//       <img src={img} alt={name} className="w-14 h-14 rounded-full object-cover mr-3" />
//       <div className="flex flex-col">
//         <div className="flex items-center gap-1">
//           <span className="font-bold text-lg">{name}</span>
//           {verified && (
//             <svg
//               className="w-5 h-5 text-blue-600"
//               fill="currentColor"
//               viewBox="0 0 20 20"
//             >
//               <path d="M10 2a2 2 0 011.85 1.25l5.37 10.73a2 2 0 01-.24 2.11A1.99 1.99 0 0116 17H4a2 2 0 01-1.98-2.91l5.37-10.73A2 2 0 0110 2zm0 2.618l-5.37 10.732A.998.998 0 004 17h12a.997.997 0 00.37-1.65L10 4.618z" />
//             </svg>
//           )}
//         </div>
//         <div className="flex items-center">
//           <StarRating count={rating} />
//           <span className="ml-2 text-gray-500 text-sm">Rating: {rating}</span>
//         </div>
//       </div>
//     </div>
//     <p className="text-gray-700 mt-2">{comment}</p>
//   </div>
// );

// const TrustpilotSection = () => {
//   const [startIndex, setStartIndex] = useState(0);

//   const prevReview = () => {
//     setStartIndex((prev) => (prev === 0 ? reviews.length - 3 : prev - 1));
//   };

//   const nextReview = () => {
//     setStartIndex((prev) => (prev >= reviews.length - 3 ? 0 : prev + 1));
//   };

//   // Slice 3 reviews from startIndex for the display
//   const visibleReviews = reviews.slice(startIndex, startIndex + 3);

//   // To allow infinite scroll effect, if slicing is at end, add from start
//   if (visibleReviews.length < 3) {
//     visibleReviews.push(...reviews.slice(0, 3 - visibleReviews.length));
//   }

//   return (
//     <section className="bg-[#f4fffc] w-full flex flex-col items-center py-10 px-4">
//       <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-center">
//         See why over 3 million customers trust us.
//       </h2>
//       <div className="flex flex-col md:flex-row justify-center items-center gap-2 mb-5">
//         <span className="font-bold text-lg text-black">Excellent</span>
//         <img
//           src="https://upload.wikimedia.org/wikipedia/commons/0/09/Trustpilot_Stars_Logo.svg"
//           alt="Trustpilot stars"
//           className="h-6 ml-2"
//         />
//         <span className="text-gray-700 ml-2">4.5 out of 5 · 110,617 reviews on</span>
//         <span className="font-bold text-green-600 ml-2">Trustpilot</span>
//       </div>
//       <div className="flex items-center justify-center gap-4 w-full max-w-6xl relative">
//         <div className="absolute left-0 top-1/2 -translate-y-1/2 -ml-12 z-10">
//           <ArrowButton direction="left" onClick={prevReview} />
//         </div>
//         <div className="flex gap-6 overflow-hidden w-full max-w-5xl">
//           <div className="flex flex-nowrap transition-transform duration-500" style={{ transform: `translateX(-${startIndex * (100 / 3)}%)` }}>
//             {reviews.map((review, idx) => (
//               <div key={idx} className="flex-shrink-0 w-full max-w-xs">
//                 <ReviewCard {...review} />
//               </div>
//             ))}
//           </div>
//         </div>
//         <div className="absolute right-0 top-1/2 -translate-y-1/2 -mr-12 z-10">
//           <ArrowButton direction="right" onClick={nextReview} />
//         </div>
//       </div>
//       <div className="flex justify-center mt-6">
//         {reviews.map((_, i) => (
//           <button
//             key={i}
//             onClick={() => setStartIndex(i)}
//             className={`w-2 h-2 rounded-full mx-1 transition-colors ${
//               i === startIndex ? "bg-blue-400" : "bg-gray-300"
//             }`}
//           />
//         ))}
//       </div>
//     </section>
//   );
// };

// export default TrustpilotSection;




// import React, { useState } from "react";

// const reviews = [
//   {
//     name: "John",
//     img: "https://your-image-url-1.jpg", // Replace with actual image URL
//     rating: 5,
//     comment: "Takes me back! Great fit and very useful from the golf course to the beach!",
//     verified: true,
//   },
//   {
//     name: "Shae",
//     img: "https://your-image-url-2.jpg",
//     rating: 5,
//     comment: "This is my first pair of glasses from GlassesUSA and I’ve always wanted a pair that were larger than what I’m used to because they are so cute!!",
//     verified: true,
//   },
//   {
//     name: "Journey",
//     img: "https://your-image-url-3.jpg",
//     rating: 5,
//     comment: "I LOVE these glasses. They are simple and classic yet give a very chic look. I am very picky with my frames and I’m so glad I went with these!",
//     verified: true,
//   },
//   {
//     name: "Alex",
//     img: "https://your-image-url-4.jpg",
//     rating: 5,
//     comment: "Love the fit and style of these glasses, truly a great purchase!",
//     verified: true,
//   },
//   {
//     name: "Morgan",
//     img: "https://your-image-url-5.jpg",
//     rating: 5,
//     comment: "Amazing quality and customer service. Highly recommend GlassesUSA!",
//     verified: true,
//   },
// ];

// function StarRating({ count = 5 }) {
//   return (
//     <span className="flex gap-0.5 ml-2">
//       {[...Array(count)].map((_, i) => (
//         <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
//           <path d="M12 17.75l-6.172 3.246L7.041 14.3.817 9.457 8.13 8.76 12 1.387l3.87 7.373 7.314.697-6.224 4.843 1.213 6.697z" />
//         </svg>
//       ))}
//     </span>
//   );
// }

// const ArrowButton = ({ direction, onClick }) => (
//   <button
//     onClick={onClick}
//     aria-label={direction === "left" ? "Previous" : "Next"}
//     className="w-12 h-12 rounded-full bg-white shadow flex items-center justify-center border border-gray-200 hover:bg-gray-100 transition"
//   >
//     {direction === "left" ? (
//       <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
//         <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
//       </svg>
//     ) : (
//       <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
//         <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
//       </svg>
//     )}
//   </button>
// );

// const ReviewCard = ({ name, img, rating, comment, verified }) => (
//   <div className="bg-white rounded-xl shadow-md px-8 py-6 flex flex-col w-full max-w-sm min-h-[280px] max-h-[280px] mx-auto transition duration-300">
//     <div className="flex items-center mb-2">
//       <img src={img} alt={name} className="w-14 h-14 rounded-full object-cover mr-3 flex-shrink-0" />
//       <div className="flex flex-col flex-grow">
//         <div className="flex items-center gap-1">
//           <span className="font-bold text-lg">{name}</span>
//           {verified && (
//             <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
//               <path d="M10 2a2 2 0 011.85 1.25l5.37 10.73a2 2 0 01-.24 2.11A1.99 1.99 0 0116 17H4a2 2 0 01-1.98-2.91l5.37-10.73A2 2 0 0110 2zm0 2.618l-5.37 10.732A.998.998 0 004 17h12a.997.997 0 00.37-1.65L10 4.618z" />
//             </svg>
//           )}
//         </div>
//         <div className="flex items-center">
//           <StarRating count={rating} />
//           <span className="ml-2 text-gray-500 text-sm">Rating: {rating}</span>
//         </div>
//       </div>
//     </div>
//     <p className="text-gray-700 mt-2 flex-grow">{comment}</p>
//   </div>
// );

// const TrustpilotSection = () => {
//   const [startIndex, setStartIndex] = useState(0);

//   const prevReview = () => {
//     setStartIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
//   };

//   const nextReview = () => {
//     setStartIndex((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
//   };

//   // Show 3 reviews sliding horizontally, wrapping around
//   let visibleReviews = [];
//   for (let i = 0; i < 3; i++) {
//     visibleReviews.push(reviews[(startIndex + i) % reviews.length]);
//   }

//   return (
//     <section className="bg-[#f4fffc] w-full flex flex-col items-center py-10 px-4">
//       <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-center">
//         See why over 3 million customers trust us.
//       </h2>
//       <div className="flex flex-col md:flex-row justify-center items-center gap-2 mb-5">
//         <span className="font-bold text-lg text-black">Excellent</span>
//         <img
//           src="https://upload.wikimedia.org/wikipedia/commons/0/09/Trustpilot_Stars_Logo.svg"
//           alt="Trustpilot stars"
//           className="h-6 ml-2"
//         />
//         <span className="text-gray-700 ml-2">4.5 out of 5 · 110,617 reviews on</span>
//         <span className="font-bold text-green-600 ml-2">Trustpilot</span>
//       </div>
//       <div className="flex items-center justify-center gap-4 w-full max-w-6xl relative">
//         <div className="absolute left-0 top-1/2 -translate-y-1/2 -ml-12 z-10">
//           <ArrowButton direction="left" onClick={prevReview} />
//         </div>
//         <div className="flex gap-6 overflow-hidden w-full max-w-5xl">
//           <div className="flex flex-nowrap transition-transform duration-500">
//             {visibleReviews.map((review, idx) => (
//               <div key={idx} className="flex-shrink-0 w-full max-w-sm">
//                 <ReviewCard {...review} />
//               </div>
//             ))}
//           </div>
//         </div>
//         <div className="absolute right-0 top-1/2 -translate-y-1/2 -mr-12 z-10">
//           <ArrowButton direction="right" onClick={nextReview} />
//         </div>
//       </div>
//       <div className="flex justify-center mt-6">
//         {reviews.map((_, i) => (
//           <button
//             key={i}
//             onClick={() => setStartIndex(i)}
//             className={`w-2 h-2 rounded-full mx-1 transition-colors ${
//               i === startIndex ? "bg-blue-400" : "bg-gray-300"
//             }`}
//           />
//         ))}
//       </div>
//     </section>
//   );
// };

// export default TrustpilotSection;








import React, { useState, useRef } from "react";
import Trust1 from "../assets/Trust/Trust1.jpg";
import Trust2 from "../assets/Trust/Trust2.jpg";
import Trust3 from "../assets/Trust/Trust3.jpg";
import Trust4 from "../assets/Trust/Trust4.jpg";
import Trust5 from "../assets/Trust/Trust5.jpg"; // Ensure this path is correct

const reviews = [
  {
    name: "Kimberly",
    img: Trust1,
    rating: 5,
    comment:
      "I love my glasses so much I am ordering a different pair from here just for the versatility. The process was quick and easy and I got my glasses just when I was told to expect them.",
    verified: true,
  },
  {
    name: "Mila",
    img: Trust2,
    rating: 5,
    comment:
      "So happy with my purchase, these glasses are so cute and I still get so many compliments when I wear them. I was surprised how good they fit as soon as I put them on.",
    verified: true,
  },
  {
    name: "Bballcoachdp",
    img: Trust3,
    rating: 5,
    comment:
      "Bought these a few weeks ago and added the photochromatic lenses. Could not be happier from the look, comfort or the ease of ordering.",
    verified: true,
  },
  {
    name: "Shae",
    img: Trust4,
    rating: 5,
    comment:
      "This is my first pair of glasses from GlassesUSA and I’ve always wanted a pair that were larger than what I’m used to because they are so cute!!",
    verified: true,
  },
  {
    name: "Cris",
    img: Trust5,
    rating: 5,
    comment: "Love the fit and style of these glasses, truly a great purchase!",
    verified: true,
  },
];

const StarRating = ({ count = 5 }) => (
  <div className="flex gap-0.5 ml-1">
    {[...Array(count)].map((_, i) => (
      <svg
        key={i}
        className="w-5 h-5 text-yellow-400"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M12 17.75l-6.172 3.246L7.041 14.3.817 9.457 8.13 8.76 12 1.387l3.87 7.373 7.314.697-6.224 4.843 1.213 6.697z" />
      </svg>
    ))}
  </div>
);

const ArrowButton = ({ direction, onClick }) => (
  <button
    onClick={onClick}
    aria-label={direction === "left" ? "Previous" : "Next"}
    className={`hidden md:flex w-12 h-12 rounded-full bg-white shadow-lg border border-gray-200 items-center justify-center hover:bg-gray-100 transition absolute top-1/2 -translate-y-1/2 z-10 ${
      direction === "left" ? "left-[-2.5rem]" : "right-[-2.5rem]"
    }`}
  >
    {direction === "left" ? (
      <svg
        className="w-6 h-6 text-gray-800"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
      </svg>
    ) : (
      <svg
        className="w-6 h-6 text-gray-800"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
      </svg>
    )}
  </button>
);

const ReviewCard = ({ name, img, rating, comment, verified }) => (
  <div className="bg-white rounded-xl shadow-md px-6 py-6 flex flex-col w-full max-w-sm min-h-[260px] transition duration-300">
    <div className="flex items-center mb-3">
      <img
        src={img}
        alt={name}
        className="w-14 h-14 rounded-full object-cover mr-3 flex-shrink-0"
      />
      <div>
        <div className="flex items-center gap-1">
          <span className="font-semibold text-lg">{name}</span>
          {verified && (
            <svg
              className="w-5 h-5 text-blue-500"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.707a1 1 0 00-1.414-1.414L9 10.172 7.707 8.879a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
          )}
        </div>
        <div className="flex items-center">
          <StarRating count={rating} />
          <span className="ml-2 text-gray-500 text-sm">Rating: {rating}</span>
        </div>
      </div>
    </div>
    <p className="text-gray-700 leading-relaxed">{comment}</p>
  </div>
);

const TrustpilotSection = () => {
  const [startIndex, setStartIndex] = useState(0);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const prevReview = () => {
    setStartIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  const nextReview = () => {
    setStartIndex((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    touchEndX.current = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX.current;

    if (Math.abs(diff) > 50) {
      if (diff > 0) nextReview();
      else prevReview();
    }
  };

  const visibleReviews = [];
  for (let i = 0; i < 3; i++) {
    visibleReviews.push(reviews[(startIndex + i) % reviews.length]);
  }

  return (
    <section
      className="bg-[#f4fffc] w-full flex flex-col items-center py-12 px-4 relative overflow-hidden"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Header */}
      <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-center text-gray-900">
        See why over 3 million customers trust us.
      </h2>

      <div className="flex flex-col md:flex-row justify-center items-center gap-2 mb-10">
        <span className="font-bold text-lg text-black">Excellent</span>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/0/09/Trustpilot_Stars_Logo.svg"
          alt="Trustpilot stars"
          className="h-6 ml-2"
        />
        <span className="text-gray-700 ml-2">
          4.5 out of 5 · 110,652 reviews on
        </span>
        <span className="font-semibold text-green-600 ml-2">Trustpilot</span>
      </div>

      {/* Carousel */}
      <div className="relative flex items-center justify-center w-full max-w-6xl">
        <ArrowButton direction="left" onClick={prevReview} />
        <div className="flex gap-8 overflow-hidden justify-center">
          {visibleReviews.map((review, idx) => (
            <ReviewCard key={idx} {...review} />
          ))}
        </div>
        <ArrowButton direction="right" onClick={nextReview} />
      </div>

      {/* Dots */}
      <div className="flex justify-center mt-8">
        {reviews.map((_, i) => (
          <button
            key={i}
            onClick={() => setStartIndex(i)}
            className={`w-2.5 h-2.5 rounded-full mx-1 transition-all duration-300 ${
              i === startIndex ? "bg-blue-400 scale-110" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default TrustpilotSection;

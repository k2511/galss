// import React, { useState } from "react";
// import { ChevronLeft, ChevronRight } from "lucide-react";
// import Eye1 from "../assets/EyeGallery/Eye1.jpg";
// import Eye2 from "../assets/EyeGallery/Eye2.jpg";
// import Eye3 from "../assets/EyeGallery/Eye3.jpg";
// import Eye4 from "../assets/EyeGallery/Eye4.jpg";
// import Eye5 from "../assets/EyeGallery/Eye5.jpg";
// import Eye6 from "../assets/EyeGallery/Eye6.jpg";
// import Eye7 from "../assets/EyeGallery/Eye7.jpg";
// import Eye8 from "../assets/EyeGallery/Eye8.jpg";
// import Eye9 from "../assets/EyeGallery/Eye9.jpg";
// import Eye10 from "../assets/EyeGallery/Eye10.jpg";
// import Eye11 from "../assets/EyeGallery/Eye11.jpg";
// import Eye12 from "../assets/EyeGallery/Eye12.jpg";
// import Eye13 from "../assets/EyeGallery/Eye13.jpg";
// import Eye14 from "../assets/EyeGallery/Eye14.jpg";
// import Eye15 from "../assets/EyeGallery/Eye15.jpg";
// import Eye16 from "../assets/EyeGallery/Eye16.jpg";
// import Eye17 from "../assets/EyeGallery/Eye17.jpg";
// import Eye18 from "../assets/EyeGallery/Eye18.jpg";
// import Eye19 from "../assets/EyeGallery/Eye19.jpg";
// import Eye20 from "../assets/EyeGallery/Eye20.jpg";
// import Eye21 from "../assets/EyeGallery/Eye21.jpg";
// import Eye22 from "../assets/EyeGallery/Eye22.jpg";
// import rayban from "../assets/brands/rayban.jpg";
// import oakley from "../assets/brands/oakley.jpg";
// import persol from "../assets/brands/persol.jpg";
// import coach from "../assets/brands/coach.jpg";
// import versace from "../assets/brands/versace.jpg";
// import burberry from "../assets/brands/burberry.jpg";
// import mk from "../assets/brands/mk.jpg";
// import oliver from "../assets/brands/oliver.jpg";

// const EyewearGallery = () => {
//   const brands = [
//     { image: rayban },
//     { image: oakley },
//     { image: persol },
//     { image: coach },
//     { image: versace },
//     { image: burberry },
//     { image: mk },
//     { image: oliver },
//     "All Brand",
//   ];

//   const recentlyViewed = [
//     {
//       name: "Muse Eloquence Tortoise, Beige.",
//       price: "₹ 98 including lenses",
//       image: Eye1,
//     },
//     {
//       name: "Amelia E. Veronique Multicolor, Pink, Blue",
//       price: "₹ 94 including lenses",
//       image: Eye2,
//     },
//     {
//       name: "Amelia E. Nettle Tortoise",
//       price: "₹ 112 including lenses",
//       image: Eye3,
//     },
//     {
//       name: "Muse Hopper Tortoise",
//       price: "₹ 88 including lenses",
//       image: Eye4,
//     },
//     {
//       name: "Muse Campbell Clear",
//       price: "₹ 88 including lenses",
//       image: Eye9,
//     },
//     {
//       name: "Ottoto Bellona Tortoise, Gold",
//       price: "₹ 84 including lenses",
//       image: Eye6,
//     },
//     {
//       name: "Amelia E. Bocian Tortoise, Beige",
//       price: "₹ 104 including lenses",
//       image: Eye7,
//     },
//     {
//       name: "Quay All Nighter Tortoise, Beige",
//       price: "₹ 84 including lenses",
//       image: Eye8,
//     },
//     {
//       name: "Muse Rocky Blue, Tortoise",
//       price: "₹ 120 including lenses",
//       image: Eye5,
//     },
//   ];

//   const recommended = [
//     {
//       name: "Muse Nova Tortoise, Beige",
//       price: "₹ 98 including lenses",
//       image: Eye10,
//     },
//     {
//       name: "Muse Makayla Tortoise, Beige",
//       price: "₹ 94 including lenses",
//       image: Eye11,
//     },
//     {
//       name: "RAEN Pozy Tortoise, Beige",
//       price: "₹ 189.95 including lenses",
//       image: Eye12,
//     },
//     {
//       name: "Police Clue 5 VPLM03M Tortoise, Beige",
//       price: "₹ 250 including lenses",
//       image: Eye13,
//     },
//     {
//       name: "Amelia E. Skyline Tortoise, Beige",
//       price: "₹ 84 including lenses",
//       image: Eye14,
//     },
//     {
//       name: "Amelia E. Aquene Tortoise, Beige",
//       price: "₹ 86 including lenses",
//       image: Eye15,
//     },
//     {
//       name: "Michael Kors MK4030 Vivianna II Tortoise, Beige",
//       price: "₹ 228 including lenses",
//       image: Eye16,
//     },
//     {
//       name: "Le Specs Airy Canary II Tortoise, Beige",
//       price: "₹ 137 including lenses",
//       image: Eye17,
//     },
//     {
//       name: "Botaniq BIS-7005 Tortoise, Beige",
//       price: "₹ 154 including lenses",
//       image: Eye18,
//     },
//     {
//       name: "Tom Ford TF1031 Juliette Tortoise, Beige",
//       price: "₹ 410 including lenses",
//       image: Eye19,
//     },
//     {
//       name: "Miu Miu SMU 03US Tortoise, Beige",
//       price: "₹ 389 including lenses",
//       image: Eye20,
//     },
//     {
//       name: "Amelia E. Moonlit Tortoise, Beige",
//       price: "₹ 98 including lenses",
//       image: Eye21,
//     },
//     {
//       name: "Muse Nancy Gray, Tortoise",
//       price: "₹ 98 including lenses",
//       image: Eye22,
//     },
//   ];

//   const [recentScrollPos, setRecentScrollPos] = useState(0);
//   const [recommendScrollPos, setRecommendScrollPos] = useState(0);

//   const scrollCarousel = (direction, type) => {
//     const scrollAmount = 280;
//     if (type === "recent") {
//       const newPos =
//         direction === "left"
//           ? Math.max(0, recentScrollPos - scrollAmount)
//           : recentScrollPos + scrollAmount;
//       setRecentScrollPos(newPos);
//     } else {
//       const newPos =
//         direction === "left"
//           ? Math.max(0, recommendScrollPos - scrollAmount)
//           : recommendScrollPos + scrollAmount;
//       setRecommendScrollPos(newPos);
//     }
//   };

//   const ProductCard = ({ product }) => (
//     <div className="flex-shrink-0 w-64 px-2">
//       <div className="rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
//         <div className="rounded-lg p-6 mb-3 flex items-center justify-center h-32">
//           <img
//             src={product.image}
//             alt={product.name}
//             className="object-contain h-full"
//           />
//         </div>
//         <h3 className="text-sm font-medium text-gray-900 mb-1 truncate">
//           {product.name}
//         </h3>
//         <p className="text-xs text-gray-600">{product.price}</p>
//       </div>
//     </div>
//   );

//   return (
//     <div className="min-h-screen bg-gray-50 py-8 px-4">
//       <div className="max-w-7xl mx-auto">
//         {/* Brand Filter Pills */}
//         <div className="flex flex-wrap justify-center gap-2 mb-12">
//           {brands.map((brand, index) => (
//             <button
//               key={index}
//               className="px-6 py-2 rounded-full border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:border-gray-400 hover:shadow-sm transition-all whitespace-nowrap flex items-center gap-2"
//             >
//               {typeof brand === "string" ? (
//                 brand
//               ) : (
//                 <img
//                   src={brand.image}
//                   alt="brand"
//                   className="h-6 w-auto object-contain"
//                 />
//               )}
//             </button>
//           ))}
//         </div>

//         {/* Hero Section */}
//         <div className="text-center mb-12">
//           <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
//             We're all about finding you that perfect pair.
//           </h1>
//           <p className="text-gray-600 mb-8 text-sm md:text-base">
//             Stylish, affordable eyewear designed for comfort and confidence.
//           </p>
//           <div className="flex flex-col sm:flex-row gap-4 justify-center">
//             <button className="px-8 py-3 rounded-full border-2 border-black bg-white text-black font-medium hover:bg-black hover:text-white transition-all">
//               Shop Eyeglasses
//             </button>
//             <button className="px-8 py-3 rounded-full border-2 border-black bg-white text-black font-medium hover:bg-black hover:text-white transition-all">
//               Shop Sunglasses
//             </button>
//           </div>
//         </div>

//         {/* Recently Viewed Section */}
//         <div className="mb-16">
//           <h2 className="text-xl font-semibold text-gray-900 text-center mb-8">
//             Recently viewed and more
//           </h2>
//           <div className="relative">
//             <button
//               onClick={() => scrollCarousel("left", "recent")}
//               className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-shadow disabled:opacity-50"
//               disabled={recentScrollPos === 0}
//             >
//               <ChevronLeft className="w-6 h-6 text-gray-700" />
//             </button>

//             <div className="overflow-hidden mx-12">
//               <div
//                 className="flex transition-transform duration-300 ease-in-out"
//                 style={{ transform: `translateX(-${recentScrollPos}px)` }}
//               >
//                 {recentlyViewed.map((product, index) => (
//                   <ProductCard key={index} product={product} />
//                 ))}
//               </div>
//             </div>

//             <button
//               onClick={() => scrollCarousel("right", "recent")}
//               className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-shadow"
//             >
//               <ChevronRight className="w-6 h-6 text-gray-700" />
//             </button>
//           </div>
//         </div>

//         {/* Recommended Section */}
//         <div className="mb-16">
//           <h2 className="text-xl font-semibold text-gray-900 text-center mb-8">
//             Recommended for you
//           </h2>
//           <div className="relative">
//             <button
//               onClick={() => scrollCarousel("left", "recommend")}
//               className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-shadow disabled:opacity-50"
//               disabled={recommendScrollPos === 0}
//             >
//               <ChevronLeft className="w-6 h-6 text-gray-700" />
//             </button>

//             <div className="overflow-hidden mx-12">
//               <div
//                 className="flex transition-transform duration-300 ease-in-out"
//                 style={{ transform: `translateX(-${recommendScrollPos}px)` }}
//               >
//                 {recommended.map((product, index) => (
//                   <ProductCard key={index} product={product} />
//                 ))}
//               </div>
//             </div>

//             <button
//               onClick={() => scrollCarousel("right", "recommend")}
//               className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-shadow"
//             >
//               <ChevronRight className="w-6 h-6 text-gray-700" />
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default EyewearGallery;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Eye1 from "../assets/EyeGallery/Eye1.jpg";
import Eye2 from "../assets/EyeGallery/Eye2.jpg";
import Eye3 from "../assets/EyeGallery/Eye3.jpg";
import Eye4 from "../assets/EyeGallery/Eye4.jpg";
import Eye5 from "../assets/EyeGallery/Eye5.jpg";
import Eye6 from "../assets/EyeGallery/Eye6.jpg";
import Eye7 from "../assets/EyeGallery/Eye7.jpg";
import Eye8 from "../assets/EyeGallery/Eye8.jpg";
import Eye9 from "../assets/EyeGallery/Eye9.jpg";
import Eye10 from "../assets/EyeGallery/Eye10.jpg";
import Eye11 from "../assets/EyeGallery/Eye11.jpg";
import Eye12 from "../assets/EyeGallery/Eye12.jpg";
import Eye13 from "../assets/EyeGallery/Eye13.jpg";
import Eye14 from "../assets/EyeGallery/Eye14.jpg";
import Eye15 from "../assets/EyeGallery/Eye15.jpg";
import Eye16 from "../assets/EyeGallery/Eye16.jpg";
import Eye17 from "../assets/EyeGallery/Eye17.jpg";
import Eye18 from "../assets/EyeGallery/Eye18.jpg";
import Eye19 from "../assets/EyeGallery/Eye19.jpg";
import Eye20 from "../assets/EyeGallery/Eye20.jpg";
import Eye21 from "../assets/EyeGallery/Eye21.jpg";
import Eye22 from "../assets/EyeGallery/Eye22.jpg";
import rayban from "../assets/brands/rayban.jpg";
import oakley from "../assets/brands/oakley.jpg";
import persol from "../assets/brands/persol.jpg";
import coach from "../assets/brands/coach.jpg";
import versace from "../assets/brands/versace.jpg";
import burberry from "../assets/brands/burberry.jpg";
import mk from "../assets/brands/mk.jpg";
import oliver from "../assets/brands/oliver.jpg";

const EyewearGallery = () => {
  const brands = [
    { image: rayban, path: "/brands/rayban" },
    { image: oakley, path: "/brands/oakley" },
    { image: persol, path: "/brands/persol" },
    { image: coach, path: "/brands/coach" },
    { image: versace, path: "/brands/versace" },
    { image: burberry, path: "/brands/burberry" },
    { image: mk, path: "/brands/mk" },
    { image: oliver, path: "/brands/oliver" },
    { text: "All Brand", path: "/brands" },
  ];

  const recentlyViewed = [
    {
      name: "Muse Eloquence Tortoise, Beige.",
      price: "₹ 98 including lenses",
      image: Eye1,
    },
    {
      name: "Amelia E. Veronique Multicolor, Pink, Blue",
      price: "₹ 94 including lenses",
      image: Eye2,
    },
    {
      name: "Amelia E. Nettle Tortoise",
      price: "₹ 112 including lenses",
      image: Eye3,
    },
    {
      name: "Muse Hopper Tortoise",
      price: "₹ 88 including lenses",
      image: Eye4,
    },
    {
      name: "Muse Campbell Clear",
      price: "₹ 88 including lenses",
      image: Eye9,
    },
    {
      name: "Ottoto Bellona Tortoise, Gold",
      price: "₹ 84 including lenses",
      image: Eye6,
    },
    {
      name: "Amelia E. Bocian Tortoise, Beige",
      price: "₹ 104 including lenses",
      image: Eye7,
    },
    {
      name: "Quay All Nighter Tortoise, Beige",
      price: "₹ 84 including lenses",
      image: Eye8,
    },
    {
      name: "Muse Rocky Blue, Tortoise",
      price: "₹ 120 including lenses",
      image: Eye5,
    },
  ];

  const recommended = [
    {
      name: "Muse Nova Tortoise, Beige",
      price: "₹ 98 including lenses",
      image: Eye10,
    },
    {
      name: "Muse Makayla Tortoise, Beige",
      price: "₹ 94 including lenses",
      image: Eye11,
    },
    {
      name: "RAEN Pozy Tortoise, Beige",
      price: "₹ 189.95 including lenses",
      image: Eye12,
    },
    {
      name: "Police Clue 5 VPLM03M Tortoise, Beige",
      price: "₹ 250 including lenses",
      image: Eye13,
    },
    {
      name: "Amelia E. Skyline Tortoise, Beige",
      price: "₹ 84 including lenses",
      image: Eye14,
    },
    {
      name: "Amelia E. Aquene Tortoise, Beige",
      price: "₹ 86 including lenses",
      image: Eye15,
    },
    {
      name: "Michael Kors MK4030 Vivianna II Tortoise, Beige",
      price: "₹ 228 including lenses",
      image: Eye16,
    },
    {
      name: "Le Specs Airy Canary II Tortoise, Beige",
      price: "₹ 137 including lenses",
      image: Eye17,
    },
    {
      name: "Botaniq BIS-7005 Tortoise, Beige",
      price: "₹ 154 including lenses",
      image: Eye18,
    },
    {
      name: "Tom Ford TF1031 Juliette Tortoise, Beige",
      price: "₹ 410 including lenses",
      image: Eye19,
    },
    {
      name: "Miu Miu SMU 03US Tortoise, Beige",
      price: "₹ 389 including lenses",
      image: Eye20,
    },
    {
      name: "Amelia E. Moonlit Tortoise, Beige",
      price: "₹ 98 including lenses",
      image: Eye21,
    },
    {
      name: "Muse Nancy Gray, Tortoise",
      price: "₹ 98 including lenses",
      image: Eye22,
    },
  ];

  const [recentScrollPos, setRecentScrollPos] = useState(0);
  const [recommendScrollPos, setRecommendScrollPos] = useState(0);

  const scrollCarousel = (direction, type) => {
    const scrollAmount = 280;
    if (type === "recent") {
      const newPos =
        direction === "left"
          ? Math.max(0, recentScrollPos - scrollAmount)
          : recentScrollPos + scrollAmount;
      setRecentScrollPos(newPos);
    } else {
      const newPos =
        direction === "left"
          ? Math.max(0, recommendScrollPos - scrollAmount)
          : recommendScrollPos + scrollAmount;
      setRecommendScrollPos(newPos);
    }
  };

  const ProductCard = ({ product }) => (
    <div className="flex-shrink-0 w-64 px-2">
      <div className="rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
        <div className="rounded-lg p-6 mb-3 flex items-center justify-center h-32">
          <img
            src={product.image}
            alt={product.name}
            className="object-contain h-full"
          />
        </div>
        <h3 className="text-sm font-medium text-gray-900 mb-1 truncate">
          {product.name}
        </h3>
        <p className="text-xs text-gray-600">{product.price}</p>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-7xl mx-auto  ">
        {/* Brand Filter Pills */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {brands.map((brand, index) => (
            <Link key={index} to={brand.path}>
              <button className="px-6 py-2 rounded-full border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:border-gray-400 hover:shadow-sm transition-all whitespace-nowrap flex items-center gap-2">
                {brand.image ? (
                  <img
                    src={brand.image}
                    alt="brand"
                    className="h-6 w-auto object-contain"
                  />
                ) : (
                  brand.text
                )}
              </button>
            </Link>
          ))}
        </div>



        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            We're all about finding you that perfect pair.
          </h1>
          <p className="text-gray-600 mb-8 text-sm md:text-base">
            Stylish, affordable eyewear designed for comfort and confidence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/prescriptionGlass"
              className="px-8 py-3 rounded-full border-2 border-black bg-white text-black font-medium hover:bg-black hover:text-white transition-all text-center"
            >
              Shop Eyeglasses
            </Link>

            <Link
              to="/sunglasses"
              className="px-8 py-3 rounded-full border-2 border-black bg-white text-black font-medium hover:bg-black hover:text-white transition-all text-center"
            >
              Shop Sunglasses
            </Link>
          </div>
        </div>

        {/* Recently Viewed Section */}
        <div className="mb-16">
          <h2 className="text-xl font-semibold text-gray-900 text-center mb-8">
            Recently viewed and more
          </h2>
          <div className="relative">
            <button
              onClick={() => scrollCarousel("left", "recent")}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-shadow disabled:opacity-50"
              disabled={recentScrollPos === 0}
            >
              <ChevronLeft className="w-6 h-6 text-gray-700" />
            </button>

            <div className="overflow-hidden mx-12">
              <div
                className="flex transition-transform duration-300 ease-in-out"
                style={{ transform: `translateX(-${recentScrollPos}px)` }}
              >
                {recentlyViewed.map((product, index) => (
                  <ProductCard key={index} product={product} />
                ))}
              </div>
            </div>

            <button
              onClick={() => scrollCarousel("right", "recent")}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-shadow"
            >
              <ChevronRight className="w-6 h-6 text-gray-700" />
            </button>
          </div>
        </div>

        {/* Recommended Section */}
        <div className="mb-16">
          <h2 className="text-xl font-semibold text-gray-900 text-center mb-8">
            Recommended for you
          </h2>
          <div className="relative">
            <button
              onClick={() => scrollCarousel("left", "recommend")}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-shadow disabled:opacity-50"
              disabled={recommendScrollPos === 0}
            >
              <ChevronLeft className="w-6 h-6 text-gray-700" />
            </button>

            <div className="overflow-hidden mx-12">
              <div
                className="flex transition-transform duration-300 ease-in-out"
                style={{ transform: `translateX(-${recommendScrollPos}px)` }}
              >
                {recommended.map((product, index) => (
                  <ProductCard key={index} product={product} />
                ))}
              </div>
            </div>

            <button
              onClick={() => scrollCarousel("right", "recommend")}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-shadow"
            >
              <ChevronRight className="w-6 h-6 text-gray-700" />
            </button>
          </div>
        </div>

        
        
      </div>

    
      
    </div>
  );
};

export default EyewearGallery;

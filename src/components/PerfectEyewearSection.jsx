// import React from "react";

// const PerfectEyewearSection = () => {
//   const eyewearTypes = [
//     {
//       title: "Progressive & Bifocals",
//       subtitle: "Reading glasses",
//       buttons: ["Women", "Men"],
//       bgColor: "bg-gray-800",
//       image: "https://optimaxweb.glassesusa.com/image/upload/f_auto,q_auto/mf-homepage/client/mobileImg/progressive-lenses-online_a827d4620e9af25514d6.jpg"
//     },
//     {
//       title: "Blue Light Glasses",
//       subtitle: "Computer glasses", 
//       buttons: ["Women", "Men"],
//       bgColor: "bg-blue-600",
//       image: "https://optimaxweb.glassesusa.com/image/upload/f_auto,q_auto/mf-homepage/client/mobileImg/sports-glasses-online_70bfb318caa3b560cbce.jpg"
//     },
//     {
//       title: "Safety Glasses",
//       subtitle: "Work & sport",
//       buttons: ["Women", "Men"], 
//       bgColor: "bg-yellow-500",
//       image: "https://optimaxweb.glassesusa.com/image/upload/f_auto,q_auto/mf-homepage/client/mobileImg/kids-glasses-online_844fb7063617d8f02d87.jpg"
//     },
//     {
//       title: "Driving Glasses",
//       subtitle: "Day & night",
//       buttons: ["Women", "Men"],
//       bgColor: "bg-green-600", 
//       image: "https://optimaxweb.glassesusa.com/image/upload/f_auto,q_auto/mf-homepage/client/mobileImg/blue-light-glasses-online_c5e58663e8363700657b.jpg"
//     }
//   ];

//   return (
//     <div className="w-full py-8 md:py-12 bg-white">
//       <div className="max-w-6xl mx-auto px-4">
//         <h2 className="text-center text-xl md:text-2xl font-semibold text-gray-900 mb-8">
//           The Perfect Eyewear for Every Need
//         </h2>
//         <p className="text-center text-gray-600 mb-8">
//           From reading to driving, we have specialized lenses for every lifestyle and need.
//         </p>
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//           {eyewearTypes.map((type, index) => (
//             <div key={index} className="relative rounded-lg overflow-hidden h-64 md:h-80 group cursor-pointer">
//               <img src={type.image} alt={type.title} className="w-full h-full object-cover" />
//               <div className="absolute inset-0 bg-black bg-opacity-40"></div>
//               <div className="relative h-full flex flex-col justify-end p-4 text-white">
//                 <h3 className="text-sm md:text-lg font-semibold mb-1">{type.title}</h3>
//                 <p className="text-xs md:text-sm mb-3 opacity-90">{type.subtitle}</p>
//                 <div className="flex gap-1 md:gap-2">
//                   {type.buttons.map((button, idx) => (
//                     <button
//                       key={idx}
//                       className="flex-1 py-1 md:py-1.5 bg-white bg-opacity-20 border border-white border-opacity-30 rounded text-xs md:text-sm font-medium hover:bg-opacity-30 transition-all"
//                     >
//                       {button}
//                     </button>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PerfectEyewearSection;




import React from "react";

const PerfectEyewearSection = () => {
  const eyewearTypes = [
    {
      title: "Progressive lenses",
      subtitle: "Effortless vision, near and far.",
      buttons: ["Women", "Men"],
      image:
        "https://optimaxweb.glassesusa.com/image/upload/f_auto,q_auto/mf-homepage/client/mobileImg/progressive-lenses-online_a827d4620e9af25514d6.jpg",
    },
    {
      title: "Sports & safety",
      subtitle: "Take your vision up a notch.",
      buttons: ["Shop Now"],
      image:
        "https://optimaxweb.glassesusa.com/image/upload/f_auto,q_auto/mf-homepage/client/mobileImg/sports-glasses-online_70bfb318caa3b560cbce.jpg",
    },
    {
      title: "Kids' glasses",
      subtitle: "Your kids deserve the best.",
      buttons: ["Girls", "Boys"],
      image:
        "https://optimaxweb.glassesusa.com/image/upload/f_auto,q_auto/mf-homepage/client/mobileImg/kids-glasses-online_844fb7063617d8f02d87.jpg",
    },
    {
      title: "Blue light glasses",
      subtitle: "Keep your eyes protected.",
      buttons: ["Shop Now"],
      image:
        "https://optimaxweb.glassesusa.com/image/upload/f_auto,q_auto/mf-homepage/client/mobileImg/blue-light-glasses-online_c5e58663e8363700657b.jpg",
    },
  ];

  return (
    <section className="w-full py-10 md:py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Heading */}
        <h2 className="text-center text-2xl md:text-3xl font-semibold text-gray-900 mb-4">
          The Perfect Eyewear for Every Need
        </h2>
        <p className="text-center text-gray-600 mb-10">
          From reading to driving, we have specialized lenses for every lifestyle and need.
        </p>

        {/* Grid Layout */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6">
          {eyewearTypes.map((type, index) => (
            <div
              key={index}
              className="relative rounded-2xl overflow-hidden h-64 md:h-80 group cursor-pointer shadow-sm hover:shadow-xl transition-shadow duration-300"
            >
              {/* Image */}
              <img
                src={type.image}
                alt={type.title}
                loading="lazy"
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent group-hover:from-black/40 transition-all duration-300" />

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5 text-white">
                <h3 className="text-lg font-bold mb-1">{type.title}</h3>
                <p className="text-sm mb-3 opacity-90">{type.subtitle}</p>

                {/* Buttons */}
                <div className="flex flex-wrap gap-2">
                  {type.buttons.map((button, idx) => (
                    <button
                      key={idx}
                      className="px-3 py-1.5 bg-white/20 border border-white/30 rounded-full text-xs font-medium hover:bg-white/30 backdrop-blur-sm transition-all"
                    >
                      {button}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PerfectEyewearSection;

import React from "react";

const PerfectEyewearSection = () => {
  const eyewearTypes = [
    {
      title: "Progressive & Bifocals",
      subtitle: "Reading glasses",
      buttons: ["Women", "Men"],
      bgColor: "bg-gray-800",
      image: "https://via.placeholder.com/250x300/1F2937/FFFFFF?text=Progressive"
    },
    {
      title: "Blue Light Glasses",
      subtitle: "Computer glasses", 
      buttons: ["Women", "Men"],
      bgColor: "bg-blue-600",
      image: "https://via.placeholder.com/250x300/2563EB/FFFFFF?text=Blue+Light"
    },
    {
      title: "Safety Glasses",
      subtitle: "Work & sport",
      buttons: ["Women", "Men"], 
      bgColor: "bg-yellow-500",
      image: "https://via.placeholder.com/250x300/EAB308/FFFFFF?text=Safety"
    },
    {
      title: "Driving Glasses",
      subtitle: "Day & night",
      buttons: ["Women", "Men"],
      bgColor: "bg-green-600", 
      image: "https://via.placeholder.com/250x300/16A34A/FFFFFF?text=Driving"
    }
  ];

  return (
    <div className="w-full py-8 md:py-12 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-center text-xl md:text-2xl font-semibold text-gray-900 mb-8">
          The Perfect Eyewear for Every Need
        </h2>
        <p className="text-center text-gray-600 mb-8">
          From reading to driving, we have specialized lenses for every lifestyle and need.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {eyewearTypes.map((type, index) => (
            <div key={index} className="relative rounded-lg overflow-hidden h-64 md:h-80 group cursor-pointer">
              <img src={type.image} alt={type.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black bg-opacity-40"></div>
              <div className="relative h-full flex flex-col justify-end p-4 text-white">
                <h3 className="text-sm md:text-lg font-semibold mb-1">{type.title}</h3>
                <p className="text-xs md:text-sm mb-3 opacity-90">{type.subtitle}</p>
                <div className="flex gap-1 md:gap-2">
                  {type.buttons.map((button, idx) => (
                    <button
                      key={idx}
                      className="flex-1 py-1 md:py-1.5 bg-white bg-opacity-20 border border-white border-opacity-30 rounded text-xs md:text-sm font-medium hover:bg-opacity-30 transition-all"
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
    </div>
  );
};

export default PerfectEyewearSection;

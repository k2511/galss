import React from "react";

const BrandShowcaseSection = () => {
  const brands = [
    { name: "Oakley", bg: "bg-gray-800", image: "https://via.placeholder.com/300x200/1F2937/FFFFFF?text=Oakley" },
    { name: "Ray-Ban", bg: "bg-blue-600", image: "https://via.placeholder.com/300x200/2563EB/FFFFFF?text=Ray-Ban" },
    { name: "Persol", bg: "bg-amber-600", image: "https://via.placeholder.com/300x200/D97706/FFFFFF?text=Persol" },
    { name: "Gucci", bg: "bg-green-700", image: "https://via.placeholder.com/300x200/15803D/FFFFFF?text=Gucci" }
  ];

  return (
    <div className="w-full py-8 md:py-12 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-center text-xl md:text-2xl font-semibold text-gray-900 mb-8">
          See what turns us on
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {brands.map((brand, index) => (
            <div key={index} className="relative rounded-lg overflow-hidden h-32 md:h-40 cursor-pointer group">
              <img src={brand.image} alt={brand.name} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-50 transition-all"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <h3 className="text-white text-lg md:text-xl font-bold">{brand.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BrandShowcaseSection;

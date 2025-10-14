<<<<<<< HEAD
// import React from "react";
// import { Link } from "react-router-dom";

// import PromoBanner from "../../components/PromoBanner";
// import GuaranteeSection from "../../components/GuaranteeSection ";
// import Footer from "../../components/Footer";

// const ShopAllGlassesWomen = () => {
//   const topTabs = ["Designer Glasses", "Rx Sunglasses", "On Sale", "Bestsellers", "RayBan"];
//   const filters = ["Shape", "Size", "Features", "Brands", "Color", "Material", "Price"];

//   const products = [
//        { id: 1, name: "Ray Ban RB5288", color: "Black", image: "https://via.placeholder.com/250x250/000000/FFFFFF?text=Ray+Ban+RB5288", price: "$XX" },
//     { id: 2, name: "Areli I", color: "Black", image: "https://via.placeholder.com/250x250/000000/FFFFFF?text=Areli+I", price: "$XX" },
//     { id: 3, name: "Areli K", color: "Colors", image: "https://via.placeholder.com/250x250/8B4513/FFFFFF?text=Areli+K", price: "$XX" },
//     { id: 4, name: "Muse C", color: "Colors", image: "https://via.placeholder.com/250x250/000080/FFFFFF?text=Muse+C", price: "$XX" },
//     { id: 5, name: "Maureen K", color: "Colors", image: "https://via.placeholder.com/250x250/FF69B4/FFFFFF?text=Maureen+K", price: "$XX" },
//     { id: 6, name: "Otto B", color: "Colors", image: "https://via.placeholder.com/250x250/8B4513/FFFFFF?text=Otto+B", price: "$XX" },
//     { id: 7, name: "Areli L", color: "Black", image: "https://via.placeholder.com/250x250/000000/FFFFFF?text=Areli+L", price: "$XX" },
//     { id: 8, name: "Marcela P", color: "Colors", image: "https://via.placeholder.com/250x250/FFFFFF/000000?text=Marcela+P", price: "$XX" },
//     { id: 9, name: "Hugo P", color: "Tortoise", image: "https://via.placeholder.com/250x250/8B4513/FFFFFF?text=Hugo+P", price: "$XX" },
//     { id: 10, name: "Areli V", color: "Colors", image: "https://via.placeholder.com/250x250/000000/FFFFFF?text=Areli+V", price: "$XX" },
//     { id: 11, name: "Otto S", color: "2 Colors", image: "https://via.placeholder.com/250x250/FFFFFF/000000?text=Otto+S", price: "$XX" },
//     { id: 12, name: "Areli EU", color: "Colors", image: "https://via.placeholder.com/250x250/8B4513/FFFFFF?text=Areli+EU", price: "$XX" },
//     { id: 13, name: "Aretha C", color: "Tortoise", image: "https://via.placeholder.com/250x250/A9A9A9/FFFFFF?text=Aretha+C", price: "$XX" },
//     { id: 14, name: "Areli P", color: "Purple", image: "https://via.placeholder.com/250x250/9932CC/FFFFFF?text=Areli+P", price: "$XX" },
//     { id: 15, name: "Otto T", color: "2 Colors", image: "https://via.placeholder.com/250x250/000000/FFFFFF?text=Otto+T", price: "$XX" },
//     { id: 16, name: "Muse A", color: "2 Colors", image: "https://via.placeholder.com/250x250/8B4513/FFFFFF?text=Muse+A", price: "$XX" },
//     { id: 17, name: "Lynna", color: "Colors", image: "https://via.placeholder.com/250x250/0000FF/FFFFFF?text=Lynna", price: "$XX" },
//     { id: 18, name: "Otava W", color: "Tortoise", image: "https://via.placeholder.com/250x250/8B4513/FFFFFF?text=Otava+W", price: "$XX" },
//     { id: 19, name: "Muse Arizona", color: "2 Colors", image: "https://via.placeholder.com/250x250/8B4513/FFFFFF?text=Muse+Arizona", price: "$XX" },
//     { id: 20, name: "Anika K", color: "Blue", image: "https://via.placeholder.com/250x250/0000CD/FFFFFF?text=Anika+K", price: "$XX" },
//   ];

//   return (
//     <div className="bg-white">
//       {/* Promo Banner */}
//       <PromoBanner />

//       <div className="max-w-7xl mx-auto px-4 py-8">
//         {/* Top Tabs */}
//         <div className="flex flex-wrap gap-3 mb-6">
//           {topTabs.map((tab, i) => (
//             <button
//               key={i}
//               className="flex items-center gap-2 border border-gray-200 rounded-full px-4 py-2 text-sm hover:bg-gray-100 transition"
//             >
//               {tab}
//             </button>
//           ))}
//         </div>

//         {/* Filters Bar */}
//         <div className="bg-gray-100 rounded-lg flex flex-wrap justify-between items-center px-4 py-3 mb-8">
//           <div className="flex flex-wrap gap-3">
//             {filters.map((filter, i) => (
//               <button
//                 key={i}
//                 className="bg-white border border-gray-300 rounded-md px-4 py-2 text-sm flex items-center justify-between min-w-[90px]"
//               >
//                 {filter} <span className="ml-1">▾</span>
//               </button>
//             ))}
//           </div>
//           <div className="flex items-center gap-3 text-sm">
//             <span>Most Relevant ▾</span>
//             <div className="flex items-center gap-1">
//               <input type="checkbox" id="nextDay" />
//               <label htmlFor="nextDay">Next-Day Delivery</label>
//             </div>
//           </div>
//         </div>

//         {/* Products Grid */}
//         <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12">
//           {products.map((product) => (
//             <div key={product.id} className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition">
//               <img src={product.image} alt={product.name} className="w-full h-60 object-cover" />
//               <div className="p-4">
//                 <h3 className="text-sm font-medium text-gray-900">{product.name}</h3>
//                 <p className="text-xs text-gray-500 mb-2">{product.color}</p>
//                 <div className="flex justify-between items-center">
//                   <span className="text-lg font-semibold">{product.price}</span>
//                   <span className="text-xs text-green-600">incl. lenses</span>
//                 </div>
//                 <button className="w-full mt-2 bg-blue-600 text-white py-2 rounded-md text-sm">Add to Cart</button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       <GuaranteeSection />
//       <Footer />
//     </div>
//   );
// };

// export default ShopAllGlassesWomen;







=======
import React from "react";
import { Link } from "react-router-dom";
>>>>>>> 0b912e4e97fcf8243c053896792ece70496fab86














import React, { useState } from "react";
import { ChevronDown, X } from "lucide-react";

const ShopAllGlassesWomen = () => {
  const [activeFilter, setActiveFilter] = useState(null);
  const [selectedBrandLetter, setSelectedBrandLetter] = useState(null);

  const topTabs = ["Designer Glasses", "Rx Sunglasses", "On Sale", "Bestsellers", "RayBan"];

  const filterData = {
          shape: {
      title: "Frame Shape",
      options: [
        { name: "Cat Eye", count: 403, icon: "👓" },
        { name: "Square", count: 348, icon: "▢" },
        { name: "Rectangle", count: 248, icon: "▭" },
        { name: "Round", count: 184, icon: "○" },
        { name: "Geometric", count: 92, icon: "◇" },
        { name: "Wrap", count: 74, icon: "⌒" },
        { name: "Oval", count: 59, icon: "⬭" },
        { name: "Aviator", count: 47, icon: "🕶" },
        { name: "Browline", count: 38, icon: "◡" },
        { name: "Oversized", count: 31, icon: "◯" },
        { name: "Wayframe", count: 6, icon: "▬" }
      ],
      extraSection: {
        title: "Frame Type",
        options: [
          { name: "Full-Rim", count: 1340 },
          { name: "Lightweight", count: 65 },
          { name: "Rimless", count: 30 },
          { name: "Semi-Rimless", count: 28 }
        ]
      }
    },
    size: {
      title: "Size",
      options: [
        { name: "Narrow", count: 205 },
        { name: "Average", count: 1085 },
        { name: "Wide", count: 185 },
        { name: "Extra Wide", count: 44 }
      ],
      hasCustom: true
    },
    features: {
      title: "Features",
      options: [
        { name: "Rx Single Vision", count: 1394 },
        { name: "Rx Bifocal/Progressive", count: 1381 },
        { name: "Polycarbonate", count: 88 }
      ]
    },
    brands: {
      title: "Popular Brands",
      showPopular: true,
      popular: [
        { name: "Premium Brands", count: 1033, logo: "✨" },
        { name: "Ray-Ban", count: 90, logo: "RB" },
        { name: "Oakley", count: 14, logo: "O" },
        { name: "Persol", count: 11, logo: "P" },
        { name: "Versace", count: 29, logo: "V" },
        { name: "Coach", count: 77, logo: "C" },
        { name: "ottoto", count: 99, logo: "O" },
        { name: "muse", count: 85, logo: "M" },
        { name: "Armani Exchange", count: 9, logo: "A|X" },
        { name: "Michael Kors", count: 55, logo: "MK" }
      ],
      hasAllBrands: true
    },
    color: {
      title: "Color",
      options: [
        { name: "Tortoise", color: "#8B4513" },
        { name: "Clear", color: "#FFFFFF" },
        { name: "Black", color: "#000000" },
        { name: "Gold", color: "#FFD700" },
        { name: "Brown", color: "#8B4513" },
        { name: "Blue", color: "#0000FF" },
        { name: "Shiny Black", color: "#000000" },
        { name: "Pink", color: "#FFC0CB" },
        { name: "Gray", color: "#808080" },
        { name: "Silver", color: "#C0C0C0" },
        { name: "Green", color: "#008000" },
        { name: "Red", color: "#FF0000" },
        { name: "Gunmetal", color: "#2C3539" },
        { name: "Purple", color: "#800080" },
        { name: "Beige", color: "#F5F5DC" },
        { name: "Rose Gold", color: "#B76E79" },
        { name: "White", color: "#FFFFFF" },
        { name: "Multicolor", color: "linear-gradient(90deg, red, orange, yellow, green, blue, purple)" },
        { name: "Matte Black", color: "#28282B" },
        { name: "Orange", color: "#FFA500" },
        { name: "Yellow", color: "#FFFF00" },
        { name: "Bronze", color: "#CD7F32" },
        { name: "Glitter", color: "#E8E8E8" }
      ]
    },
    material: {
      title: "Material",
      options: [
        { name: "Acetate", count: 676 },
        { name: "Plastic", count: 599 },
        { name: "Metal", count: 334 },
        { name: "Stainless Steel", count: 67 },
        { name: "Titanium", count: 24 }
      ]
    },
    price: {
      title: "Price",
      hasSlider: true,
      range: { min: 29, max: 566 },
      options: [
        { name: "Clearance Sale", count: 126 }
      ]
    }
  };

  const brandLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

  const products = [
    { id: 1, name: "Ray Ban RB5288", color: "Black", image: "https://via.placeholder.com/250x250/000000/FFFFFF?text=Ray+Ban+RB5288", price: "$95" },
    { id: 2, name: "Areli I", color: "Black", image: "https://via.placeholder.com/250x250/000000/FFFFFF?text=Areli+I", price: "$89" },
    { id: 3, name: "Areli K", color: "Tortoise", image: "https://via.placeholder.com/250x250/8B4513/FFFFFF?text=Areli+K", price: "$89" },
    { id: 4, name: "Muse C", color: "Blue", image: "https://via.placeholder.com/250x250/000080/FFFFFF?text=Muse+C", price: "$79" },
    { id: 5, name: "Maureen K", color: "Pink", image: "https://via.placeholder.com/250x250/FF69B4/FFFFFF?text=Maureen+K", price: "$85" },
    { id: 6, name: "Otto B", color: "Brown", image: "https://via.placeholder.com/250x250/8B4513/FFFFFF?text=Otto+B", price: "$92" },
    { id: 7, name: "Areli L", color: "Black", image: "https://via.placeholder.com/250x250/000000/FFFFFF?text=Areli+L", price: "$89" },
    { id: 8, name: "Marcela P", color: "White", image: "https://via.placeholder.com/250x250/FFFFFF/000000?text=Marcela+P", price: "$95" },
    { id: 9, name: "Hugo P", color: "Tortoise", image: "https://via.placeholder.com/250x250/8B4513/FFFFFF?text=Hugo+P", price: "$88" },
    { id: 10, name: "Areli V", color: "Black", image: "https://via.placeholder.com/250x250/000000/FFFFFF?text=Areli+V", price: "$89" },
    { id: 11, name: "Otto S", color: "Clear", image: "https://via.placeholder.com/250x250/FFFFFF/000000?text=Otto+S", price: "$92" },
    { id: 12, name: "Areli EU", color: "Tortoise", image: "https://via.placeholder.com/250x250/8B4513/FFFFFF?text=Areli+EU", price: "$89" },
    { id: 13, name: "Aretha C", color: "Gray", image: "https://via.placeholder.com/250x250/A9A9A9/FFFFFF?text=Aretha+C", price: "$98" },
    { id: 14, name: "Areli P", color: "Purple", image: "https://via.placeholder.com/250x250/9932CC/FFFFFF?text=Areli+P", price: "$89" },
    { id: 15, name: "Otto T", color: "Black", image: "https://via.placeholder.com/250x250/000000/FFFFFF?text=Otto+T", price: "$92" },
    { id: 16, name: "Muse A", color: "Tortoise", image: "https://via.placeholder.com/250x250/8B4513/FFFFFF?text=Muse+A", price: "$79" },
    { id: 17, name: "Lynna", color: "Blue", image: "https://via.placeholder.com/250x250/0000FF/FFFFFF?text=Lynna", price: "$95" },
    { id: 18, name: "Otava W", color: "Tortoise", image: "https://via.placeholder.com/250x250/8B4513/FFFFFF?text=Otava+W", price: "$98" },
    { id: 19, name: "Muse Arizona", color: "Brown", image: "https://via.placeholder.com/250x250/8B4513/FFFFFF?text=Muse+Arizona", price: "$79" },
    { id: 20, name: "Anika K", color: "Blue", image: "https://via.placeholder.com/250x250/0000CD/FFFFFF?text=Anika+K", price: "$102" }
  ];

  const toggleFilter = (filter) => {
    setActiveFilter(activeFilter === filter ? null : filter);
    setSelectedBrandLetter(null);
  };

  const FilterDropdown = ({ filterKey, data }) => {
    if (!data) return null;

    return (
      <div className="absolute top-full left-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-xl z-50 p-6 min-w-[600px] max-h-[500px] overflow-y-auto animate-slideDown">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold">{data.title}</h3>
          <button onClick={() => setActiveFilter(null)} className="text-gray-400 hover:text-gray-600">
            <X size={20} />
          </button>
        </div>

        {/* Shape Filter with Frame Shape & Frame Type */}
        {filterKey === 'shape' && (
          <>
            <div className="mb-6">
              <h4 className="font-semibold mb-4 text-gray-700">Frame Shape</h4>
              <div className="grid grid-cols-6 gap-3">
                {data.options.map((opt, i) => (
                  <button 
                    key={i} 
                    className="border border-gray-200 rounded-lg p-4 hover:border-blue-500 hover:bg-blue-50 transition-all text-center animate-slideRight"
                    style={{ animationDelay: `${i * 50}ms` }}
                  >
                    <div className="text-4xl mb-2">{opt.icon}</div>
                    <div className="text-xs font-medium text-gray-900">{opt.name}</div>
                    <div className="text-xs text-gray-500">({opt.count})</div>
                  </button>
                ))}
              </div>
            </div>
            {data.extraSection && (
              <div>
                <h4 className="font-semibold mb-4 text-gray-700">{data.extraSection.title}</h4>
                <div className="grid grid-cols-6 gap-3">
                  {data.extraSection.options.map((opt, i) => (
                    <button 
                      key={i} 
                      className="border border-gray-200 rounded-lg p-4 hover:border-blue-500 hover:bg-blue-50 transition-all text-center animate-slideRight"
                      style={{ animationDelay: `${(data.options.length + i) * 50}ms` }}
                    >
                      <div className="text-4xl mb-2">👓</div>
                      <div className="text-xs font-medium text-gray-900">{opt.name}</div>
                      <div className="text-xs text-gray-500">({opt.count})</div>
                    </button>
                  ))}
                </div>
              </div>
            )}
            <div className="mt-6 text-right">
              <button className="text-blue-600 hover:underline text-sm">Close</button>
            </div>
          </>
        )}

        {/* Brands Filter with Popular & All Brands */}
        {filterKey === 'brands' && !selectedBrandLetter && (
          <>
            <div className="flex gap-4 mb-4 border-b">
              <button className="pb-2 border-b-2 border-black font-semibold">Popular</button>
              <button className="pb-2 text-gray-500">All Brands</button>
            </div>
            <div className="grid grid-cols-4 gap-3 mb-4">
              {data.popular.map((brand, i) => (
                <button key={i} className="border border-gray-200 rounded-lg p-4 hover:border-blue-500 hover:bg-blue-50 transition text-center">
                  <div className="text-2xl font-bold mb-1">{brand.logo}</div>
                  <div className="text-sm font-medium">{brand.name}</div>
                  <div className="text-xs text-gray-500">({brand.count})</div>
                </button>
              ))}
            </div>
            <button 
              onClick={() => setSelectedBrandLetter('all')}
              className="w-full border border-gray-300 rounded-lg p-3 hover:bg-gray-50 flex items-center justify-between"
            >
              <span className="font-medium">All Brands</span>
              <span>→</span>
            </button>
          </>
        )}

        {/* All Brands Letter Selection */}
        {filterKey === 'brands' && selectedBrandLetter === 'all' && (
          <>
            <button 
              onClick={() => setSelectedBrandLetter(null)}
              className="mb-4 text-blue-600 hover:underline flex items-center"
            >
              ← Back to Popular
            </button>
            <div className="flex flex-wrap gap-2">
              {brandLetters.map(letter => (
                <button 
                  key={letter}
                  onClick={() => setSelectedBrandLetter(letter)}
                  className="w-10 h-10 border border-gray-300 rounded-lg hover:bg-blue-50 hover:border-blue-500 font-semibold"
                >
                  {letter}
                </button>
              ))}
            </div>
          </>
        )}

        {/* Selected Letter Brands */}
        {filterKey === 'brands' && selectedBrandLetter && selectedBrandLetter !== 'all' && (
          <>
            <button 
              onClick={() => setSelectedBrandLetter('all')}
              className="mb-4 text-blue-600 hover:underline flex items-center"
            >
              ← Back to All Letters
            </button>
            <h4 className="text-xl font-bold mb-4">Brands starting with "{selectedBrandLetter}"</h4>
            <div className="space-y-2">
              <div className="p-3 border rounded-lg hover:bg-gray-50">Example Brand {selectedBrandLetter}1</div>
              <div className="p-3 border rounded-lg hover:bg-gray-50">Example Brand {selectedBrandLetter}2</div>
              <div className="p-3 border rounded-lg hover:bg-gray-50">Example Brand {selectedBrandLetter}3</div>
            </div>
          </>
        )}

        {/* Color Filter */}
        {filterKey === 'color' && (
          <div className="grid grid-cols-4 gap-3">
            {data.options.map((opt, i) => (
              <button key={i} className="border border-gray-200 rounded-lg p-3 hover:border-blue-500 hover:bg-blue-50 transition flex items-center gap-3">
                <div 
                  className="w-6 h-6 rounded-full border border-gray-300" 
                  style={{ background: opt.color.includes('gradient') ? opt.color : opt.color }}
                />
                <span className="text-sm font-medium">{opt.name}</span>
              </button>
            ))}
          </div>
        )}

        {/* Price Filter with Slider */}
        {filterKey === 'price' && (
          <>
            <div className="mb-6">
              <h4 className="font-semibold mb-3">Custom price</h4>
              <input type="range" min={data.range.min} max={data.range.max} className="w-full mb-2" />
              <div className="flex justify-between text-sm">
                <span>${data.range.min}</span>
                <span>${data.range.max}</span>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {data.options.map((opt, i) => (
                <button key={i} className="border border-gray-200 rounded-lg p-4 hover:border-blue-500 hover:bg-blue-50 transition">
                  <div className="font-medium">{opt.name}</div>
                  <div className="text-sm text-gray-500">({opt.count})</div>
                </button>
              ))}
            </div>
          </>
        )}

        {/* Simple List Filters (Size, Features, Material) */}
        {['size', 'features', 'material'].includes(filterKey) && (
          <div className="grid grid-cols-2 gap-3">
            {data.options.map((opt, i) => (
              <button key={i} className="border border-gray-200 rounded-lg p-4 hover:border-blue-500 hover:bg-blue-50 transition text-left">
                <div className="font-medium">{opt.name}</div>
                <div className="text-sm text-gray-500">({opt.count})</div>
              </button>
            ))}
            {data.hasCustom && (
              <button className="border border-gray-200 rounded-lg p-4 hover:border-blue-500 hover:bg-blue-50 transition text-left font-medium">
                Custom
              </button>
            )}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="bg-white min-h-screen">
      <style jsx>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slideRight {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        .animate-slideDown {
          animation: slideDown 0.3s ease-out forwards;
        }
        
        .animate-slideRight {
          opacity: 0;
          animation: slideRight 0.4s ease-out forwards;
        }
      `}</style>
      {/* Promo Banner */}
      <div className="bg-blue-600 text-white text-center py-3">
        <p className="text-sm">🎉 Special Offer: Get 50% OFF on your first pair! Use code: WELCOME50</p>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Top Tabs */}
        <div className="flex flex-wrap gap-3 mb-6">
          {topTabs.map((tab, i) => (
            <button key={i} className="border border-gray-200 rounded-full px-4 py-2 text-sm hover:bg-gray-100 transition">
              {tab}
            </button>
          ))}
        </div>

        {/* Filters Bar */}
        <div className="bg-gray-50 rounded-lg flex flex-wrap justify-between items-center px-4 py-3 mb-8 gap-3">
          <div className="flex flex-wrap gap-3 relative">
            {Object.keys(filterData).map((filterKey) => (
              <div key={filterKey} className="relative">
                <button
                  onClick={() => toggleFilter(filterKey)}
                  className={`bg-white border ${activeFilter === filterKey ? 'border-blue-500' : 'border-gray-300'} rounded-md px-4 py-2 text-sm flex items-center gap-2 capitalize hover:border-blue-400 transition`}
                >
                  {filterKey}
                  <ChevronDown size={16} className={`transition-transform ${activeFilter === filterKey ? 'rotate-180' : ''}`} />
                </button>
                {activeFilter === filterKey && <FilterDropdown filterKey={filterKey} data={filterData[filterKey]} />}
              </div>
            ))}
          </div>
          <div className="flex items-center gap-4 text-sm">
            <button className="flex items-center gap-1">
              Most Relevant <ChevronDown size={14} />
            </button>
            <label className="flex items-center gap-2">
              <input type="checkbox" className="rounded" />
              Next-Day Delivery
            </label>
          </div>
        </div>

        {/* Title */}
        <h1 className="text-3xl font-bold mb-6">Women's Eyeglasses (374)</h1>

        {/* Products Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12">
          {products.map((product) => (
            <div key={product.id} className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition group">
              <div className="relative">
                <img src={product.image} alt={product.name} className="w-full h-60 object-cover" />
                <button className="absolute top-2 right-2 bg-white rounded-full p-2 shadow opacity-0 group-hover:opacity-100 transition">
                  ❤️
                </button>
              </div>
              <div className="p-4">
                <h3 className="text-sm font-medium text-gray-900">{product.name}</h3>
                <p className="text-xs text-gray-500 mb-2">{product.color}</p>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-lg font-semibold">{product.price}</span>
                  <span className="text-xs text-green-600">incl. lenses</span>
                </div>
                <button className="w-full bg-blue-600 text-white py-2 rounded-md text-sm hover:bg-blue-700 transition">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mb-12">
          <button className="bg-blue-600 text-white px-10 py-3 rounded-full font-semibold hover:bg-blue-700 transition">
            Showing 20 of 374 - View More
          </button>
        </div>
      </div>

      {/* Footer Placeholder */}
      <div className="bg-gray-900 text-white py-12 text-center">
        <p>© 2024 GlassesUSA. All rights reserved.</p>
      </div>
    </div>
  );
};

export default ShopAllGlassesWomen;
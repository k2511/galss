
// import React, { useState } from "react";
// import { ChevronDown, X } from "lucide-react";
// import PromoBanner from "../../components/PromoBanner";
// import Footer from "../../components/Footer";

// const ShopAllGlassesWomen = () => {
//   const [activeFilter, setActiveFilter] = useState(null);
//   const [selectedBrandLetter, setSelectedBrandLetter] = useState(null);

//   const topTabs = ["Designer Glasses", "Rx Sunglasses", "On Sale", "Bestsellers", "RayBan"];

//   const filterData = {
//     shape: {
//       title: "Frame Shape",
//       options: [
//         { name: "Cat Eye", count: 403, icon: "👓" },
//         { name: "Square", count: 348, icon: "▢" },
//         { name: "Rectangle", count: 248, icon: "▭" },
//         { name: "Round", count: 184, icon: "○" },
//         { name: "Geometric", count: 92, icon: "◇" },
//         { name: "Wrap", count: 74, icon: "⌒" },
//         { name: "Oval", count: 59, icon: "⬭" },
//         { name: "Aviator", count: 47, icon: "🕶" },
//         { name: "Browline", count: 38, icon: "◡" },
//         { name: "Oversized", count: 31, icon: "◯" },
//         { name: "Wayframe", count: 6, icon: "▬" }
//       ],
//       extraSection: {
//         title: "Frame Type",
//         options: [
//           { name: "Full-Rim", count: 1340 },
//           { name: "Lightweight", count: 65 },
//           { name: "Rimless", count: 30 },
//           { name: "Semi-Rimless", count: 28 }
//         ]
//       }
//     },
//     size: {
//       title: "Size",
//       options: [
//         { name: "Narrow", count: 205 },
//         { name: "Average", count: 1085 },
//         { name: "Wide", count: 185 },
//         { name: "Extra Wide", count: 44 }
//       ],
//       hasCustom: true
//     },
//     features: {
//       title: "Features",
//       options: [
//         { name: "Rx Single Vision", count: 1394 },
//         { name: "Rx Bifocal/Progressive", count: 1381 },
//         { name: "Polycarbonate", count: 88 }
//       ]
//     },
//     brands: {
//       title: "Popular Brands",
//       showPopular: true,
//       popular: [
//         { name: "Premium Brands", count: 1033, logo: "✨" },
//         { name: "Ray-Ban", count: 90, logo: "RB" },
//         { name: "Oakley", count: 14, logo: "O" },
//         { name: "Persol", count: 11, logo: "P" },
//         { name: "Versace", count: 29, logo: "V" },
//         { name: "Coach", count: 77, logo: "C" },
//         { name: "ottoto", count: 99, logo: "O" },
//         { name: "muse", count: 85, logo: "M" },
//         { name: "Armani Exchange", count: 9, logo: "A|X" },
//         { name: "Michael Kors", count: 55, logo: "MK" }
//       ],
//       hasAllBrands: true
//     },
//     color: {
//       title: "Color",
//       options: [
//         { name: "Tortoise", color: "#8B4513" },
//         { name: "Clear", color: "#FFFFFF" },
//         { name: "Black", color: "#000000" },
//         { name: "Gold", color: "#FFD700" },
//         { name: "Brown", color: "#8B4513" },
//         { name: "Blue", color: "#0000FF" },
//         { name: "Shiny Black", color: "#000000" },
//         { name: "Pink", color: "#FFC0CB" },
//         { name: "Gray", color: "#808080" },
//         { name: "Silver", color: "#C0C0C0" },
//         { name: "Green", color: "#008000" },
//         { name: "Red", color: "#FF0000" },
//         { name: "Gunmetal", color: "#2C3539" },
//         { name: "Purple", color: "#800080" },
//         { name: "Beige", color: "#F5F5DC" },
//         { name: "Rose Gold", color: "#B76E79" },
//         { name: "White", color: "#FFFFFF" },
//         { name: "Multicolor", color: "linear-gradient(90deg, red, orange, yellow, green, blue, purple)" },
//         { name: "Matte Black", color: "#28282B" },
//         { name: "Orange", color: "#FFA500" },
//         { name: "Yellow", color: "#FFFF00" },
//         { name: "Bronze", color: "#CD7F32" },
//         { name: "Glitter", color: "#E8E8E8" }
//       ]
//     },
//     material: {
//       title: "Material",
//       options: [
//         { name: "Acetate", count: 676 },
//         { name: "Plastic", count: 599 },
//         { name: "Metal", count: 334 },
//         { name: "Stainless Steel", count: 67 },
//         { name: "Titanium", count: 24 }
//       ]
//     },
//     price: {
//       title: "Price",
//       hasSlider: true,
//       range: { min: 29, max: 566 },
//       options: [
//         { name: "Clearance Sale", count: 126 }
//       ]
//     }
//   };

//   const brandLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

//   const products = [
//     { 
//       id: 1, 
//       name: "Muse Decade", 
//       originalPrice: null,
//       salePrice: 39,
//       image: "https://via.placeholder.com/250x250/transparent/white?text=Muse+Decade",
//       colors: 3,
//       isSale: true,
//       isPremium: false
//     },
//     { 
//       id: 2, 
//       name: "Muse Eloquence", 
//       originalPrice: null,
//       salePrice: 98,
//       image: "https://via.placeholder.com/250x250/transparent/white?text=Muse+Eloquence",
//       colors: 4,
//       isSale: false,
//       isPremium: true
//     },
//     { 
//       id: 3, 
//       name: "Michael Kors MK4067 Sant.", 
//       originalPrice: 272,
//       salePrice: 47,
//       image: "https://via.placeholder.com/250x250/transparent/white?text=MK4067+Sant.",
//       colors: 2,
//       isSale: true,
//       isPremium: false
//     }
//   ];

//   const toggleFilter = (filter) => {
//     setActiveFilter(activeFilter === filter ? null : filter);
//     setSelectedBrandLetter(null);
//   };

//   const FilterDropdown = ({ filterKey, data, onClose }) => {
//     if (!data) return null;

//     const handleClose = () => {
//       setActiveFilter(null);
//       if (onClose) onClose();
//     };

//     return (
//       <div className="bg-white border border-gray-200 rounded-lg shadow-md p-6 max-h-[400px] overflow-y-auto">
//         <div className="flex justify-between items-center mb-4">
//           <h3 className="text-lg font-semibold text-gray-900">{data.title}</h3>
//           <button onClick={handleClose} className="text-gray-400 hover:text-gray-600 p-1">
//             <X size={20} />
//           </button>
//         </div>

//         {/* Shape Filter with Frame Shape & Frame Type */}
//         {filterKey === 'shape' && (
//           <>
//             <div className="mb-6">
//               <h4 className="font-semibold mb-4 text-gray-700">Frame Shape</h4>
//               <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
//                 {data.options.map((opt, i) => (
//                   <button 
//                     key={i} 
//                     className="border border-gray-200 rounded-lg p-3 hover:border-blue-500 hover:bg-blue-50 transition-all text-center animate-slideRight"
//                     style={{ animationDelay: `${i * 50}ms` }}
//                   >
//                     <div className="text-2xl sm:text-3xl mb-1">{opt.icon}</div>
//                     <div className="text-xs font-medium text-gray-900">{opt.name}</div>
//                     <div className="text-xs text-gray-500">({opt.count})</div>
//                   </button>
//                 ))}
//               </div>
//             </div>
//             {data.extraSection && (
//               <div className="mb-6">
//                 <h4 className="font-semibold mb-4 text-gray-700">{data.extraSection.title}</h4>
//                 <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
//                   {data.extraSection.options.map((opt, i) => (
//                     <button 
//                       key={i} 
//                       className="border border-gray-200 rounded-lg p-3 hover:border-blue-500 hover:bg-blue-50 transition-all text-center animate-slideRight"
//                       style={{ animationDelay: `${(data.options.length + i) * 50}ms` }}
//                     >
//                       <div className="text-2xl sm:text-3xl mb-1">👓</div>
//                       <div className="text-xs font-medium text-gray-900">{opt.name}</div>
//                       <div className="text-xs text-gray-500">({opt.count})</div>
//                     </button>
//                   ))}
//                 </div>
//               </div>
//             )}
//           </>
//         )}

//         {/* Size Filter */}
//         {filterKey === 'size' && (
//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
//             {data.options.map((opt, i) => (
//               <button key={i} className="border border-gray-200 rounded-lg p-4 hover:border-blue-500 hover:bg-blue-50 transition text-left">
//                 <div className="font-medium text-gray-900">{opt.name}</div>
//                 <div className="text-sm text-gray-500">({opt.count})</div>
//               </button>
//             ))}
//             {data.hasCustom && (
//               <button className="border border-gray-200 rounded-lg p-4 hover:border-blue-500 hover:bg-blue-50 transition text-left font-medium text-blue-600">
//                 Custom Size
//               </button>
//             )}
//           </div>
//         )}

//         {/* Features Filter */}
//         {filterKey === 'features' && (
//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
//             {data.options.map((opt, i) => (
//               <button key={i} className="border border-gray-200 rounded-lg p-4 hover:border-blue-500 hover:bg-blue-50 transition text-left">
//                 <div className="font-medium text-gray-900">{opt.name}</div>
//                 <div className="text-sm text-gray-500">({opt.count})</div>
//               </button>
//             ))}
//           </div>
//         )}

//         {/* Brands Filter with Popular & All Brands */}
//         {filterKey === 'brands' && !selectedBrandLetter && (
//           <>
//             <div className="flex gap-4 mb-4 border-b pb-2">
//               <button className="pb-2 border-b-2 border-black font-semibold">Popular</button>
//               <button className="pb-2 text-gray-500 hover:text-gray-900">All Brands</button>
//             </div>
//             <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 mb-4">
//               {data.popular.map((brand, i) => (
//                 <button key={i} className="border border-gray-200 rounded-lg p-3 hover:border-blue-500 hover:bg-blue-50 transition text-center">
//                   <div className="text-xl font-bold mb-1 text-gray-700">{brand.logo}</div>
//                   <div className="text-xs font-medium text-gray-900">{brand.name}</div>
//                   <div className="text-xs text-gray-500">({brand.count})</div>
//                 </button>
//               ))}
//             </div>
//             <button 
//               onClick={() => setSelectedBrandLetter('all')}
//               className="w-full border border-gray-300 rounded-lg p-3 hover:bg-gray-50 flex items-center justify-between text-sm"
//             >
//               <span className="font-medium text-gray-900">View All Brands</span>
//               <span className="text-gray-500">→</span>
//             </button>
//           </>
//         )}

//         {/* All Brands Letter Selection */}
//         {filterKey === 'brands' && selectedBrandLetter === 'all' && (
//           <>
//             <button 
//               onClick={() => setSelectedBrandLetter(null)}
//               className="mb-4 text-blue-600 hover:underline flex items-center text-sm font-medium"
//             >
//               ← Back to Popular
//             </button>
//             <div className="flex flex-wrap gap-1 mb-4">
//               {brandLetters.map(letter => (
//                 <button 
//                   key={letter}
//                   onClick={() => setSelectedBrandLetter(letter)}
//                   className="w-8 h-8 border border-gray-300 rounded hover:bg-blue-50 hover:border-blue-500 font-semibold text-sm text-gray-700"
//                 >
//                   {letter}
//                 </button>
//               ))}
//             </div>
//           </>
//         )}

//         {/* Selected Letter Brands */}
//         {filterKey === 'brands' && selectedBrandLetter && selectedBrandLetter !== 'all' && (
//           <>
//             <button 
//               onClick={() => setSelectedBrandLetter('all')}
//               className="mb-4 text-blue-600 hover:underline flex items-center text-sm font-medium"
//             >
//               ← Back to Letters
//             </button>
//             <h4 className="text-lg font-bold mb-4 text-gray-900">Brands starting with "{selectedBrandLetter}"</h4>
//             <div className="space-y-2 max-h-48 overflow-y-auto">
//               {Array.from({length: 5}).map((_, i) => (
//                 <div key={i} className="p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
//                   <div className="font-medium text-gray-900">Example Brand {selectedBrandLetter}{i + 1}</div>
//                   <div className="text-xs text-gray-500">45 styles</div>
//                 </div>
//               ))}
//             </div>
//           </>
//         )}

//         {/* Color Filter */}
//         {filterKey === 'color' && (
//           <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-3">
//             {data.options.map((opt, i) => (
//               <button key={i} className="border border-gray-200 rounded-lg p-2 hover:border-blue-500 hover:bg-blue-50 transition flex flex-col items-center gap-2">
//                 <div 
//                   className="w-8 h-8 rounded border border-gray-300 flex items-center justify-center" 
//                   style={{ 
//                     background: opt.color,
//                     backgroundImage: opt.color.includes('gradient') ? opt.color : 'none',
//                     minHeight: '32px'
//                   }}
//                 >
//                   {!opt.color.includes('gradient') && opt.name === 'Clear' && (
//                     <span className="text-xs text-gray-500">C</span>
//                   )}
//                 </div>
//                 <span className="text-xs font-medium text-gray-900 text-center">{opt.name}</span>
//               </button>
//             ))}
//           </div>
//         )}

//         {/* Material Filter */}
//         {filterKey === 'material' && (
//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
//             {data.options.map((opt, i) => (
//               <button key={i} className="border border-gray-200 rounded-lg p-4 hover:border-blue-500 hover:bg-blue-50 transition text-left">
//                 <div className="font-medium text-gray-900">{opt.name}</div>
//                 <div className="text-sm text-gray-500">({opt.count})</div>
//               </button>
//             ))}
//           </div>
//         )}

//         {/* Price Filter with Slider */}
//         {filterKey === 'price' && (
//           <>
//             <div className="mb-6">
//               <h4 className="font-semibold mb-3 text-gray-700">Price Range</h4>
//               <input 
//                 type="range" 
//                 min={data.range.min} 
//                 max={data.range.max} 
//                 defaultValue={data.range.min}
//                 className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
//               />
//               <div className="flex justify-between text-sm text-gray-600 mt-2">
//                 <span>${data.range.min}</span>
//                 <span>${data.range.max}</span>
//               </div>
//             </div>
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
//               {data.options.map((opt, i) => (
//                 <button key={i} className="border border-gray-200 rounded-lg p-4 hover:border-blue-500 hover:bg-blue-50 transition text-left">
//                   <div className="font-medium text-gray-900">{opt.name}</div>
//                   <div className="text-sm text-gray-500">({opt.count})</div>
//                 </button>
//               ))}
//             </div>
//           </>
//         )}
//       </div>
//     );
//   };

//   return (
//     <div className="bg-white min-h-screen">
//       <style jsx>{`
//         @keyframes slideDown {
//           from {
//             opacity: 0;
//             transform: translateY(-10px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }
        
//         @keyframes slideRight {
//           from {
//             opacity: 0;
//             transform: translateX(-20px);
//           }
//           to {
//             opacity: 1;
//             transform: translateX(0);
//           }
//         }
        
//         .animate-slideDown {
//           animation: slideDown 0.3s ease-out forwards;
//         }
        
//         .animate-slideRight {
//           opacity: 0;
//           animation: slideRight 0.4s ease-out forwards;
//         }

//         .slider::-webkit-slider-thumb {
//           appearance: none;
//           height: 20px;
//           width: 20px;
//           border-radius: 50%;
//           background: #3b82f6;
//           cursor: pointer;
//         }

//         .slider::-moz-range-thumb {
//           height: 20px;
//           width: 20px;
//           border-radius: 50%;
//           background: #3b82f6;
//           cursor: pointer;
//           border: none;
//         }

//         .sale-badge {
//           position: absolute;
//           top: 8px;
//           left: 8px;
//           background: #ef4444;
//           color: white;
//           padding: 4px 8px;
//           border-radius: 4px;
//           font-size: 12px;
//           font-weight: bold;
//         }

//         .premium-badge {
//           position: absolute;
//           top: 8px;
//           right: 8px;
//           background: #fbbf24;
//           color: #000;
//           padding: 4px 8px;
//           border-radius: 4px;
//           font-size: 12px;
//           font-weight: bold;
//         }

//         .heart-icon {
//           position: absolute;
//           top: 8px;
//           right: 8px;
//           background: white;
//           border-radius: 50%;
//           width: 32px;
//           height: 32px;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           opacity: 0;
//           transition: opacity 0.3s;
//           cursor: pointer;
//         }

//         .product-card:hover .heart-icon {
//           opacity: 1;
//         }

//         .color-swatches {
//           display: flex;
//           gap: 4px;
//           margin: 8px 0;
//         }

//         .color-swatch {
//           width: 20px;
//           height: 20px;
//           border-radius: 50%;
//           border: 1px solid #ddd;
//           cursor: pointer;
//         }

//         .delivery-badge {
//           background: #10b981;
//           color: white;
//           padding: 2px 6px;
//           border-radius: 4px;
//           font-size: 12px;
//           margin-right: 8px;
//         }

//         .price-sale {
//           display: flex;
//           align-items: baseline;
//           gap: 8px;
//         }

//         .original-price {
//           text-decoration: line-through;
//           color: #9ca3af;
//           font-size: 14px;
//         }

//         .sale-price {
//           font-size: 18px;
//           font-weight: bold;
//           color: #ef4444;
//         }

//         .regular-price {
//           font-size: 18px;
//           font-weight: bold;
//           color: #000;
//         }

//         .action-buttons {
//           display: none;
//           gap: 8px;
//           margin-top: 8px;
//         }

//         .product-card:hover .action-buttons {
//           display: flex;
//         }

//         .action-btn {
//           flex: 1;
//           padding: 6px 12px;
//           border: 1px solid #d1d5db;
//           background: white;
//           border-radius: 6px;
//           font-size: 12px;
//           cursor: pointer;
//           transition: background 0.3s;
//         }

//         .action-btn:hover {
//           background: #f3f4f6;
//         }
//       `}</style>

//       {/* PromoBanner */}
//       <PromoBanner />

//       <div className="max-w-7xl mx-auto px-4 py-8">
//         {/* Top Tabs */}
//         <div className="flex flex-wrap gap-3 mb-6">
//           {topTabs.map((tab, i) => (
//             <button key={i} className="border border-gray-200 rounded-full px-4 py-2 text-sm hover:bg-gray-100 transition-colors">
//               {tab}
//             </button>
//           ))}
//         </div>

//         {/* Filters Bar */}
//         <div className={`bg-gray-50 rounded-lg px-4 py-3 mb-8 transition-all duration-300 ease-in-out overflow-hidden ${
//           activeFilter ? 'min-h-[500px] pb-4' : 'flex flex-wrap justify-between items-center'
//         }`}>
//           <div className={`flex flex-wrap gap-3 ${activeFilter ? 'w-full mb-4' : ''}`}>
//             {Object.keys(filterData).map((filterKey) => (
//               <button
//                 key={filterKey}
//                 onClick={() => toggleFilter(filterKey)}
//                 className={`bg-white border rounded-md px-4 py-2 text-sm flex items-center gap-2 capitalize transition-all hover:shadow-sm ${
//                   activeFilter === filterKey 
//                     ? 'border-blue-500 bg-blue-50 shadow-md' 
//                     : 'border-gray-300 hover:border-gray-400'
//                 }`}
//               >
//                 {filterKey.charAt(0).toUpperCase() + filterKey.slice(1)}
//                 <ChevronDown 
//                   size={16} 
//                   className={`transition-transform duration-200 ${activeFilter === filterKey ? 'rotate-180' : ''}`} 
//                 />
//               </button>
//             ))}
//           </div>
        
//           {activeFilter && (
//             <div className="w-full mb-4 border-t border-gray-200 pt-4 bg-white rounded-md p-4 shadow-inner">
//               <FilterDropdown 
//                 filterKey={activeFilter} 
//                 data={filterData[activeFilter]} 
//                 onClose={() => setActiveFilter(null)}
//               />
//             </div>
//           )}
        
//           <div className={`flex items-center gap-4 text-sm ${activeFilter ? 'justify-end mt-4 pt-2 border-t border-gray-200' : ''}`}>
//             <button className="flex items-center gap-1 text-gray-700 hover:text-gray-900">
//               Most Relevant <ChevronDown size={14} />
//             </button>
//             <label className="flex items-center gap-2 text-gray-700 hover:text-gray-900 cursor-pointer">
//               <input type="checkbox" className="rounded border-gray-300" />
//               <span>Next-Day Delivery</span>
//             </label>
//           </div>
//         </div>

//         {/* Title */}
//         <h1 className="text-3xl font-bold text-gray-900 mb-6">Women's Eyeglasses (374)</h1>

//         {/* Products Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
//           {products.map((product) => (
//             <div key={product.id} className="product-card border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-all relative">
//               <div className="relative bg-gray-100 p-4">
//                 <img src={product.image} alt={product.name} className="w-full h-48 object-cover mx-auto" />
//                 {product.isSale && <div className="sale-badge">Sale</div>}
//                 {product.isPremium && <div className="premium-badge">Premium</div>}
//                 <div className="heart-icon">❤️</div>
//               </div>
//               <div className="p-4">
//                 <div className="flex items-center justify-between mb-2">
//                   <span className="text-xs text-gray-500">{product.colors} colors</span>
//                   <span className="delivery-badge">Next-Day Delivery</span>
//                 </div>
//                 <h3 className="text-sm font-medium text-gray-900 mb-2">{product.name}</h3>
//                 <div className="price-sale mb-3">
//                   {product.originalPrice && (
//                     <span className="original-price">${product.originalPrice}</span>
//                   )}
//                   <span className={product.originalPrice ? 'sale-price' : 'regular-price'}>
//                     ${product.salePrice}
//                   </span>
//                   <span className="text-xs text-gray-500">including lenses</span>
//                 </div>
//                 <div className="color-swatches">
//                   <div className="color-swatch" style={{ backgroundColor: '#8B4513' }}></div>
//                   <div className="color-swatch" style={{ backgroundColor: '#000000' }}></div>
//                   <div className="color-swatch" style={{ backgroundColor: '#FFC0CB' }}></div>
//                 </div>
//                 <div className="action-buttons">
//                   <button className="action-btn">Similar Frames</button>
//                   <button className="action-btn">Live Try On</button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Load More */}
//         <div className="text-center mb-12">
//           <button className="bg-blue-600 text-white px-10 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors">
//             Showing 20 of 374 - View More
//           </button>
//         </div>
//       </div>

//       <Footer />
//     </div>
//   );
// };

// export default ShopAllGlassesWomen;



//******************************************************************* */
//************************* API USES***********************************/
//******************************************************************* */


// import React, { useState, useEffect } from "react";
// import { ChevronDown, X } from "lucide-react";
// import PromoBanner from "../../components/PromoBanner";
// import Footer from "../../components/Footer";
// import axios from "axios";

// const ShopAllGlassesWomen = () => {
//   const [activeFilter, setActiveFilter] = useState(null);
//   const [selectedBrandLetter, setSelectedBrandLetter] = useState(null);
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);

//   const topTabs = [
//     "Designer Glasses",
//     "Rx Sunglasses",
//     "On Sale",
//     "Bestsellers",
//     "RayBan",
//   ];

//   const toggleFilter = (filter) => {
//     setActiveFilter(activeFilter === filter ? null : filter);
//     setSelectedBrandLetter(null);
//   };

//   // ✅ Fetching glasses data from a public API
//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         // 👇 Replace this API with your real backend if available
//         const response = await axios.get(
//           "https://dummyjson.com/products/category/sunglasses"
//         );

//         // Transform API response for your UI
//         const transformed = response.data.products.map((item) => ({
//           id: item.id,
//           name: item.title,
//           image: item.thumbnail,
//           salePrice: item.price,
//           originalPrice: item.discountPercentage
//             ? Math.round(item.price * (1 + item.discountPercentage / 100))
//             : null,
//           colors: Math.floor(Math.random() * 5) + 1,
//           isSale: Math.random() > 0.5,
//           isPremium: Math.random() > 0.7,
//         }));

//         setProducts(transformed);
//       } catch (error) {
//         console.error("Error fetching glasses:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProducts();
//   }, []);

//   return (
//     <div className="bg-white min-h-screen">
//       {/* Promo Banner */}
//       <PromoBanner />

//       <div className="max-w-7xl mx-auto px-4 py-8">
//         {/* Top Tabs */}
//         <div className="flex flex-wrap gap-3 mb-6">
//           {topTabs.map((tab, i) => (
//             <button
//               key={i}
//               className="border border-gray-200 rounded-full px-4 py-2 text-sm hover:bg-gray-100 transition-colors"
//             >
//               {tab}
//             </button>
//           ))}
//         </div>

//         {/* Title */}
//         <h1 className="text-3xl font-bold text-gray-900 mb-6">
//           Women's Eyeglasses
//         </h1>

//         {/* Loader */}
//         {loading && (
//           <div className="text-center py-20 text-gray-500 text-lg">
//             Loading glasses...
//           </div>
//         )}

//         {/* Products Grid */}
//         {!loading && (
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
//             {products.map((product) => (
//               <div
//                 key={product.id}
//                 className="product-card border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-all relative"
//               >
//                 <div className="relative bg-gray-100 p-4">
//                   <img
//                     src={product.image}
//                     alt={product.name}
//                     className="w-full h-48 object-cover mx-auto"
//                   />
//                   {product.isSale && (
//                     <div className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
//                       SALE
//                     </div>
//                   )}
//                   {product.isPremium && (
//                     <div className="absolute top-2 right-2 bg-yellow-400 text-black text-xs px-2 py-1 rounded">
//                       PREMIUM
//                     </div>
//                   )}
//                 </div>

//                 <div className="p-4">
//                   <div className="flex items-center justify-between mb-2">
//                     <span className="text-xs text-gray-500">
//                       {product.colors} colors
//                     </span>
//                     <span className="bg-green-500 text-white px-2 py-1 rounded text-xs">
//                       Next-Day Delivery
//                     </span>
//                   </div>

//                   <h3 className="text-sm font-medium text-gray-900 mb-2">
//                     {product.name}
//                   </h3>

//                   <div className="flex items-baseline gap-2 mb-2">
//                     {product.originalPrice && (
//                       <span className="line-through text-gray-400 text-sm">
//                         ${product.originalPrice}
//                       </span>
//                     )}
//                     <span className="text-red-500 font-semibold text-lg">
//                       ${product.salePrice}
//                     </span>
//                   </div>

//                   <p className="text-xs text-gray-500 mb-2">
//                     including lenses
//                   </p>

//                   {/* Action Buttons */}
//                   <div className="flex gap-2 mt-2">
//                     <button className="flex-1 border border-gray-300 rounded-md py-2 text-xs hover:bg-gray-100">
//                       Similar Frames
//                     </button>
//                     <button className="flex-1 border border-gray-300 rounded-md py-2 text-xs hover:bg-gray-100">
//                       Live Try On
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         )}

//         {/* Load More */}
//         {!loading && (
//           <div className="text-center mb-12">
//             <button className="bg-blue-600 text-white px-10 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors">
//               Showing {products.length} of {products.length} - View More
//             </button>
//           </div>
//         )}
//       </div>

//       <Footer />
//     </div>
//   );
// };

// export default ShopAllGlassesWomen;




import React, { useState, useEffect } from "react";
import axios from "axios";
import { ChevronDown, X } from "lucide-react";
import PromoBanner from "../../components/PromoBanner";
import Footer from "../../components/Footer";

const ShopAllGlassesWomen = () => {
  const [activeFilter, setActiveFilter] = useState(null);
  const [selectedBrandLetter, setSelectedBrandLetter] = useState(null);
  const [products, setProducts] = useState([]);
  const [totalProducts, setTotalProducts] = useState(0);
  const [loading, setLoading] = useState(true);

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

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          "https://dummyjson.com/products/category/sunglasses"
        );

        const transformed = response.data.products.map((item) => {
          const discount = item.discountPercentage || 0;
          const original = discount > 0 ? Math.round(item.price / (1 - discount / 100)) : null;
          return {
            id: item.id,
            name: item.title,
            image: item.thumbnail,
            salePrice: item.price,
            originalPrice: original,
            colors: Math.floor(Math.random() * 5) + 1,
            isSale: discount > 0,
            isPremium: Math.random() > 0.7,
          };
        });

        setProducts(transformed);
        setTotalProducts(response.data.total);
      } catch (error) {
        console.error("Error fetching glasses:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const toggleFilter = (filter) => {
    setActiveFilter(activeFilter === filter ? null : filter);
    setSelectedBrandLetter(null);
  };

  const FilterDropdown = ({ filterKey, data, onClose }) => {
    if (!data) return null;

    const handleClose = () => {
      setActiveFilter(null);
      if (onClose) onClose();
    };

    return (
      <div className="bg-white border border-gray-200 rounded-lg shadow-md p-6 max-h-[400px] overflow-y-auto">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold text-gray-900">{data.title}</h3>
          <button onClick={handleClose} className="text-gray-400 hover:text-gray-600 p-1">
            <X size={20} />
          </button>
        </div>

        {/* Shape Filter with Frame Shape & Frame Type */}
        {filterKey === 'shape' && (
          <>
            <div className="mb-6">
              <h4 className="font-semibold mb-4 text-gray-700">Frame Shape</h4>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
                {data.options.map((opt, i) => (
                  <button 
                    key={i} 
                    className="border border-gray-200 rounded-lg p-3 hover:border-blue-500 hover:bg-blue-50 transition-all text-center animate-slideRight"
                    style={{ animationDelay: `${i * 50}ms` }}
                  >
                    <div className="text-2xl sm:text-3xl mb-1">{opt.icon}</div>
                    <div className="text-xs font-medium text-gray-900">{opt.name}</div>
                    <div className="text-xs text-gray-500">({opt.count})</div>
                  </button>
                ))}
              </div>
            </div>
            {data.extraSection && (
              <div className="mb-6">
                <h4 className="font-semibold mb-4 text-gray-700">{data.extraSection.title}</h4>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
                  {data.extraSection.options.map((opt, i) => (
                    <button 
                      key={i} 
                      className="border border-gray-200 rounded-lg p-3 hover:border-blue-500 hover:bg-blue-50 transition-all text-center animate-slideRight"
                      style={{ animationDelay: `${(data.options.length + i) * 50}ms` }}
                    >
                      <div className="text-2xl sm:text-3xl mb-1">👓</div>
                      <div className="text-xs font-medium text-gray-900">{opt.name}</div>
                      <div className="text-xs text-gray-500">({opt.count})</div>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </>
        )}

        {/* Size Filter */}
        {filterKey === 'size' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {data.options.map((opt, i) => (
              <button key={i} className="border border-gray-200 rounded-lg p-4 hover:border-blue-500 hover:bg-blue-50 transition text-left">
                <div className="font-medium text-gray-900">{opt.name}</div>
                <div className="text-sm text-gray-500">({opt.count})</div>
              </button>
            ))}
            {data.hasCustom && (
              <button className="border border-gray-200 rounded-lg p-4 hover:border-blue-500 hover:bg-blue-50 transition text-left font-medium text-blue-600">
                Custom Size
              </button>
            )}
          </div>
        )}

        {/* Features Filter */}
        {filterKey === 'features' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {data.options.map((opt, i) => (
              <button key={i} className="border border-gray-200 rounded-lg p-4 hover:border-blue-500 hover:bg-blue-50 transition text-left">
                <div className="font-medium text-gray-900">{opt.name}</div>
                <div className="text-sm text-gray-500">({opt.count})</div>
              </button>
            ))}
          </div>
        )}

        {/* Brands Filter with Popular & All Brands */}
        {filterKey === 'brands' && !selectedBrandLetter && (
          <>
            <div className="flex gap-4 mb-4 border-b pb-2">
              <button className="pb-2 border-b-2 border-black font-semibold">Popular</button>
              <button className="pb-2 text-gray-500 hover:text-gray-900">All Brands</button>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 mb-4">
              {data.popular.map((brand, i) => (
                <button key={i} className="border border-gray-200 rounded-lg p-3 hover:border-blue-500 hover:bg-blue-50 transition text-center">
                  <div className="text-xl font-bold mb-1 text-gray-700">{brand.logo}</div>
                  <div className="text-xs font-medium text-gray-900">{brand.name}</div>
                  <div className="text-xs text-gray-500">({brand.count})</div>
                </button>
              ))}
            </div>
            <button 
              onClick={() => setSelectedBrandLetter('all')}
              className="w-full border border-gray-300 rounded-lg p-3 hover:bg-gray-50 flex items-center justify-between text-sm"
            >
              <span className="font-medium text-gray-900">View All Brands</span>
              <span className="text-gray-500">→</span>
            </button>
          </>
        )}

        {/* All Brands Letter Selection */}
        {filterKey === 'brands' && selectedBrandLetter === 'all' && (
          <>
            <button 
              onClick={() => setSelectedBrandLetter(null)}
              className="mb-4 text-blue-600 hover:underline flex items-center text-sm font-medium"
            >
              ← Back to Popular
            </button>
            <div className="flex flex-wrap gap-1 mb-4">
              {brandLetters.map(letter => (
                <button 
                  key={letter}
                  onClick={() => setSelectedBrandLetter(letter)}
                  className="w-8 h-8 border border-gray-300 rounded hover:bg-blue-50 hover:border-blue-500 font-semibold text-sm text-gray-700"
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
              className="mb-4 text-blue-600 hover:underline flex items-center text-sm font-medium"
            >
              ← Back to Letters
            </button>
            <h4 className="text-lg font-bold mb-4 text-gray-900">Brands starting with "{selectedBrandLetter}"</h4>
            <div className="space-y-2 max-h-48 overflow-y-auto">
              {Array.from({length: 5}).map((_, i) => (
                <div key={i} className="p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                  <div className="font-medium text-gray-900">Example Brand {selectedBrandLetter}{i + 1}</div>
                  <div className="text-xs text-gray-500">45 styles</div>
                </div>
              ))}
            </div>
          </>
        )}

        {/* Color Filter */}
        {filterKey === 'color' && (
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-3">
            {data.options.map((opt, i) => (
              <button key={i} className="border border-gray-200 rounded-lg p-2 hover:border-blue-500 hover:bg-blue-50 transition flex flex-col items-center gap-2">
                <div 
                  className="w-8 h-8 rounded border border-gray-300 flex items-center justify-center" 
                  style={{ 
                    background: opt.color,
                    backgroundImage: opt.color.includes('gradient') ? opt.color : 'none',
                    minHeight: '32px'
                  }}
                >
                  {!opt.color.includes('gradient') && opt.name === 'Clear' && (
                    <span className="text-xs text-gray-500">C</span>
                  )}
                </div>
                <span className="text-xs font-medium text-gray-900 text-center">{opt.name}</span>
              </button>
            ))}
          </div>
        )}

        {/* Material Filter */}
        {filterKey === 'material' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {data.options.map((opt, i) => (
              <button key={i} className="border border-gray-200 rounded-lg p-4 hover:border-blue-500 hover:bg-blue-50 transition text-left">
                <div className="font-medium text-gray-900">{opt.name}</div>
                <div className="text-sm text-gray-500">({opt.count})</div>
              </button>
            ))}
          </div>
        )}

        {/* Price Filter with Slider */}
        {filterKey === 'price' && (
          <>
            <div className="mb-6">
              <h4 className="font-semibold mb-3 text-gray-700">Price Range</h4>
              <input 
                type="range" 
                min={data.range.min} 
                max={data.range.max} 
                defaultValue={data.range.min}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
              />
              <div className="flex justify-between text-sm text-gray-600 mt-2">
                <span>${data.range.min}</span>
                <span>${data.range.max}</span>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {data.options.map((opt, i) => (
                <button key={i} className="border border-gray-200 rounded-lg p-4 hover:border-blue-500 hover:bg-blue-50 transition text-left">
                  <div className="font-medium text-gray-900">{opt.name}</div>
                  <div className="text-sm text-gray-500">({opt.count})</div>
                </button>
              ))}
            </div>
          </>
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

        .slider::-webkit-slider-thumb {
          appearance: none;
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: #3b82f6;
          cursor: pointer;
        }

        .slider::-moz-range-thumb {
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: #3b82f6;
          cursor: pointer;
          border: none;
        }

        .sale-badge {
          position: absolute;
          top: 8px;
          left: 8px;
          background: #ef4444;
          color: white;
          padding: 4px 8px;
          border-radius: 4px;
          font-size: 12px;
          font-weight: bold;
        }

        .premium-badge {
          position: absolute;
          top: 8px;
          right: 8px;
          background: #fbbf24;
          color: #000;
          padding: 4px 8px;
          border-radius: 4px;
          font-size: 12px;
          font-weight: bold;
        }

        .heart-icon {
          position: absolute;
          top: 8px;
          right: 8px;
          background: white;
          border-radius: 50%;
          width: 32px;
          height: 32px;
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.3s;
          cursor: pointer;
        }

        .product-card:hover .heart-icon {
          opacity: 1;
        }

        .color-swatches {
          display: flex;
          gap: 4px;
          margin: 8px 0;
        }

        .color-swatch {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          border: 1px solid #ddd;
          cursor: pointer;
        }

        .delivery-badge {
          background: #10b981;
          color: white;
          padding: 2px 6px;
          border-radius: 4px;
          font-size: 12px;
          margin-right: 8px;
        }

        .price-sale {
          display: flex;
          align-items: baseline;
          gap: 8px;
        }

        .original-price {
          text-decoration: line-through;
          color: #9ca3af;
          font-size: 14px;
        }

        .sale-price {
          font-size: 18px;
          font-weight: bold;
          color: #ef4444;
        }

        .regular-price {
          font-size: 18px;
          font-weight: bold;
          color: #000;
        }

        .action-buttons {
          display: none;
          gap: 8px;
          margin-top: 8px;
        }

        .product-card:hover .action-buttons {
          display: flex;
        }

        .action-btn {
          flex: 1;
          padding: 6px 12px;
          border: 1px solid #d1d5db;
          background: white;
          border-radius: 6px;
          font-size: 12px;
          cursor: pointer;
          transition: background 0.3s;
        }

        .action-btn:hover {
          background: #f3f4f6;
        }
      `}</style>

      {/* PromoBanner */}
      <PromoBanner />

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Top Tabs */}
        <div className="flex flex-wrap gap-3 mb-6">
          {topTabs.map((tab, i) => (
            <button key={i} className="border border-gray-200 rounded-full px-4 py-2 text-sm hover:bg-gray-100 transition-colors">
              {tab}
            </button>
          ))}
        </div>

        {/* Filters Bar */}
        <div className={`bg-gray-50 rounded-lg px-4 py-3 mb-8 transition-all duration-300 ease-in-out overflow-hidden ${
          activeFilter ? 'min-h-[500px] pb-4' : 'flex flex-wrap justify-between items-center'
        }`}>
          <div className={`flex flex-wrap gap-3 ${activeFilter ? 'w-full mb-4' : ''}`}>
            {Object.keys(filterData).map((filterKey) => (
              <button
                key={filterKey}
                onClick={() => toggleFilter(filterKey)}
                className={`bg-white border rounded-md px-4 py-2 text-sm flex items-center gap-2 capitalize transition-all hover:shadow-sm ${
                  activeFilter === filterKey 
                    ? 'border-blue-500 bg-blue-50 shadow-md' 
                    : 'border-gray-300 hover:border-gray-400'
                }`}
              >
                {filterKey.charAt(0).toUpperCase() + filterKey.slice(1)}
                <ChevronDown 
                  size={16} 
                  className={`transition-transform duration-200 ${activeFilter === filterKey ? 'rotate-180' : ''}`} 
                />
              </button>
            ))}
          </div>
        
          {activeFilter && (
            <div className="w-full mb-4 border-t border-gray-200 pt-4 bg-white rounded-md p-4 shadow-inner">
              <FilterDropdown 
                filterKey={activeFilter} 
                data={filterData[activeFilter]} 
                onClose={() => setActiveFilter(null)}
              />
            </div>
          )}
        
          <div className={`flex items-center gap-4 text-sm ${activeFilter ? 'justify-end mt-4 pt-2 border-t border-gray-200' : ''}`}>
            <button className="flex items-center gap-1 text-gray-700 hover:text-gray-900">
              Most Relevant <ChevronDown size={14} />
            </button>
            <label className="flex items-center gap-2 text-gray-700 hover:text-gray-900 cursor-pointer">
              <input type="checkbox" className="rounded border-gray-300" />
              <span>Next-Day Delivery</span>
            </label>
          </div>
        </div>

        {/* Title */}
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Women's Eyeglasses ({totalProducts})</h1>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {loading ? (
            <div className="col-span-full text-center py-8 text-gray-500">Loading products...</div>
          ) : (
            products.map((product) => (
              <div key={product.id} className="product-card border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-all relative">
                <div className="relative bg-gray-100 p-4">
                  <img src={product.image} alt={product.name} className="w-full h-48 object-cover mx-auto" />
                  {product.isSale && <div className="sale-badge">Sale</div>}
                  {product.isPremium && <div className="premium-badge">Premium</div>}
                  <div className="heart-icon">❤️</div>
                </div>
                <div className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs text-gray-500">{product.colors} colors</span>
                    <span className="delivery-badge">Next-Day Delivery</span>
                  </div>
                  <h3 className="text-sm font-medium text-gray-900 mb-2">{product.name}</h3>
                  <div className="price-sale mb-3">
                    {product.originalPrice && (
                      <span className="original-price">${product.originalPrice}</span>
                    )}
                    <span className={product.originalPrice ? 'sale-price' : 'regular-price'}>
                      ${product.salePrice}
                    </span>
                    <span className="text-xs text-gray-500">including lenses</span>
                  </div>
                  <div className="color-swatches">
                    <div className="color-swatch" style={{ backgroundColor: '#8B4513' }}></div>
                    <div className="color-swatch" style={{ backgroundColor: '#000000' }}></div>
                    <div className="color-swatch" style={{ backgroundColor: '#FFC0CB' }}></div>
                  </div>
                  <div className="action-buttons">
                    <button className="action-btn">Similar Frames</button>
                    <button className="action-btn">Live Try On</button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Load More */}
        <div className="text-center mb-12">
          <button className="bg-blue-600 text-white px-10 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors">
            Showing {products.length} of {totalProducts} - View More
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ShopAllGlassesWomen;
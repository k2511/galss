import { toast } from "react-hot-toast";
import { RxCross1 } from "react-icons/rx";
import { FaChevronDown } from "react-icons/fa";
import React, { useState, useEffect } from "react";
import { IoCartOutline } from "react-icons/io5";
import { CartContext } from "../context/CartContext";
import { useContext } from "react";

const Eyeglasses = () => {
  const [showFilter, setShowFilter] = useState(false);
  const [priceOpen, setPriceOpen] = useState(false);
  const [selectedType, setSelectedType] = useState("All");
  const [selectedPrice, setSelectedPrice] = useState(null);

  const priceRanges = [
    { label: "₹1 - ₹499", min: 1, max: 499,  },
    { label: "₹500 - ₹999", min: 500, max: 999 },
    { label: "₹1000 - ₹1499", min: 1000, max: 1499 },
    { label: "₹1500 - ₹1999", min: 1500, max: 1999 },
    { label: "₹2000 - ₹2499", min: 2000, max: 2499 },
    { label: "₹2500 - ₹2999", min: 2500, max: 2999 },
    { label: "₹3000 - ₹5000", min: 3000, max: 5000 },
  ];
  const eyeglass = [
    {img:'https://static5.lenskart.com/media/uploads/All-New.png',
      name: 'All'
    },
    {img:'	https://static1.lenskart.com/media/desktop/img/2024/jan/premium.png',
      name: 'Premium'
    },
    {img:'	https://static1.lenskart.com/media/desktop/img/2024/jan/regular-1.png',
      name: 'Budget'
    },

  ]

  const products = [
    {
      id: 1,
      name: "Aqua Spherical Lens",
      type: "eyeglasses",
      image:
        "https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/480x480/9df78eab33525d08d6e5fb8d27136e95//l/i/lenskart-hustlr-vc-s15999-c6-sunglasses_dsc_0321_20_03_2024.jpg",
      price: 1200,
      discount: 30, // in percentage
    },
    {
      id: 2,
      name: "Pro Toric Lens",
      type: "eyeglasses",
      image:
        "https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/480x480/9df78eab33525d08d6e5fb8d27136e95//l/i/lenskart-hustlr-vc-s15999-c6-sunglasses_dsc_0321_20_03_2024.jpg",
      price: 1800,
      discount: 25,
    },
    {
      id: 3,
      name: "Ultra Spherical Premium",
      type: "eyeglasses",
      image:
        "https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/480x480/9df78eab33525d08d6e5fb8d27136e95//l/i/lenskart-hustlr-vc-s15999-c6-sunglasses_dsc_0321_20_03_2024.jpg",
      price: 2000,
      discount: 20,
    },
    {
      id: 4,
      name: "Aqua Soft Toric Lens",
      type: "eyeglasses",
      image:
        "https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/480x480/9df78eab33525d08d6e5fb8d27136e95//l/i/lenskart-hustlr-vc-s15999-c6-sunglasses_dsc_0321_20_03_2024.jpg",
      price: 450,
      discount: 15,
    },
    {
      id: 5,
      name: "Cool Vision Lens",
      type: "eyeglasses",
      image:
        "https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/480x480/9df78eab33525d08d6e5fb8d27136e95//l/i/lenskart-hustlr-vc-s15999-c6-sunglasses_dsc_0321_20_03_2024.jpg",
      price: 800,
      discount: 10,
    },
    {
      id: 6,
      name: "Pro Max Toric Lens",
      type: "eyeglasses",
      image:
        "https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/480x480/9df78eab33525d08d6e5fb8d27136e95//l/i/lenskart-hustlr-vc-s15999-c6-sunglasses_dsc_0321_20_03_2024.jpg",
      price: 2100,
      discount: 30,
    },
    {
      id: 7,
      name: "Pro Max Toric Lens",
      type: "eyeglasses",
      image:
        "https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/480x480/9df78eab33525d08d6e5fb8d27136e95//l/i/lenskart-hustlr-vc-s15999-c6-sunglasses_dsc_0321_20_03_2024.jpg",
      price: 3200,
      discount: 30,
    },
    {
      id: 8,
      name: "Pro Max Toric Lens",
      type: "eyeglasses",
      image:
        "https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/480x480/9df78eab33525d08d6e5fb8d27136e95//l/i/lenskart-hustlr-vc-s15999-c6-sunglasses_dsc_0321_20_03_2024.jpg",
      price: 3800,
      discount: 30,
    },
    {
      id: 9,
      name: "Pro Max Toric Lens",
      type: "eyeglasses",
      image:
        "https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/480x480/9df78eab33525d08d6e5fb8d27136e95//l/i/lenskart-hustlr-vc-s15999-c6-sunglasses_dsc_0321_20_03_2024.jpg",
      price: 4000,
      discount: 30,
    },
    {
      id: 10,
      name: "Pro Max Toric Lens",
      type: "eyeglasses",
      image:
        "https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/480x480/9df78eab33525d08d6e5fb8d27136e95//l/i/lenskart-hustlr-vc-s15999-c6-sunglasses_dsc_0321_20_03_2024.jpg",
      price: 2400,
      discount: 30,
    },
    {
      id: 11,
      name: "Pro Max Toric Lens",
      type: "eyeglasses",
      image:
        "https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/480x480/9df78eab33525d08d6e5fb8d27136e95//l/i/lenskart-hustlr-vc-s15999-c6-sunglasses_dsc_0321_20_03_2024.jpg",
      price: 2200,
      discount: 30,
    },
    {
      id: 12,
      name: "Pro Max Toric Lens",
      type: "eyeglasses",
      image:
        "https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/480x480/9df78eab33525d08d6e5fb8d27136e95//l/i/lenskart-hustlr-vc-s15999-c6-sunglasses_dsc_0321_20_03_2024.jpg",
      price: 4400,
      discount: 30,
    },
    {
      id: 13,
      name: "Pro Max Toric Lens",
      type: "eyeglasses",
      image:
        "https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/480x480/9df78eab33525d08d6e5fb8d27136e95//l/i/lenskart-hustlr-vc-s15999-c6-sunglasses_dsc_0321_20_03_2024.jpg",
      price: 2700,
      discount: 30,
    },
    {
      id: 14,
      name: "Pro Max Toric Lens",
      type: "eyeglasses",
      image:
        "https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/480x480/9df78eab33525d08d6e5fb8d27136e95//l/i/lenskart-hustlr-vc-s15999-c6-sunglasses_dsc_0321_20_03_2024.jpg",
      price: 2700,
      discount: 30,
    },
    {
      id: 15,
      name: "Pro Max Toric Lens",
      type: "eyeglasses",
      image:
        "https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/480x480/9df78eab33525d08d6e5fb8d27136e95//l/i/lenskart-hustlr-vc-s15999-c6-sunglasses_dsc_0321_20_03_2024.jpg",
      price: 2500,
      discount: 40,
    },
  ];

  // const filteredProducts = products.filter((p) => {
  //   const matchesType = p.type === selectedType;
  //   const premium = p.price > 1500;
  //   const matchesPrice =
  //     !selectedPrice ||
  //     (p.price >= selectedPrice.min && p.price <= selectedPrice.max);
  //   return matchesType && matchesPrice;
  // });

  // let cnt  = products.map((p,idx) => {
  //      if(p.price > 
          
  //       )
  // })
  const filteredProducts = products.filter((p) => {
    let matchesType = true;

    if (selectedType === "Premium") {
      matchesType = p.price >  1500;
    } else if (selectedType === "All") {
      matchesType = true;
    }

    const matchesPrice =
      !selectedPrice ||
      (p.price >= selectedPrice.min && p.price <= selectedPrice.max);

    return matchesType && matchesPrice;
  });


  const { handleAddToCart } = useContext(CartContext);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 640) {
        setShowFilter(false);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // run once on mount

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className=" text-center  ">
      {!showFilter && (
        <div className="w-full mx-auto flex flex-row justify-between sm:gap-2 gap-1 items-start">
          <aside className=" hidden lg:block lg:sticky lg:top-0 lg:h-[85vh] lg:w-1/5 min-w-1/4  rounded-xl shadow-sm bg-white sm:p-4 p-0 border-2 overflow-y-scroll scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100">
            <h2 className="font-semibold text-left text-[#605f5f]  text-lg mb-4 ">
              Filter By
            </h2>
            <div>
              <div
                className="flex  items-center w-full justify-between "
                onClick={() => {
                  setPriceOpen(!priceOpen);
                }}
              >
                <h3 className="font-semibold   text-[#8b8b8b] ">Price Range</h3>{" "}
                <FaChevronDown
                  className={`transition-transform duration-300 text-[#8b8b8b]  ${
                    priceOpen ? "rotate-180" : ""
                  }`}
                />
              </div>
              {priceOpen && (
                <div className="flex flex-col gap-2 ">
                  {priceRanges.map((range) => (
                    <div>
                    <label
                      key={range.label}
                      className={`cursor-pointer flex items-center gap-2 px-2 py-1 rounded-md text-sm  ${
                        selectedPrice?.label === range.label
                          ? "bg-blue-500 text-white shadow-lg"
                          : "text-gray-700"
                      }`}
                    >
                      <input
                        className="appearance-none w-4 h-4 border border-gray-400 rounded-sm checked:bg-blue-500 checked:border-blue-500 relative after:content-[''] after:absolute after:top-[1px] after:left-[5px] after:w-[5px] after:h-[10px] after:border-r-2 after:border-b-2 after:border-white after:rotate-45 after:opacity-0 checked:after:opacity-100"
                        type="radio"
                        name="price"
                        checked={selectedPrice?.label === range.label}
                        onChange={() => setSelectedPrice(range)}
                      />
                      {range.label} 
                    </label>
                    
                    <h2> </h2>
                    </div> 
                  ))}
                </div>
              )}
            </div>

            {selectedPrice && (
              <button
                onClick={() => setSelectedPrice(null)}
                className="mt-4 text-sm text-[#000042] text-left underline"
              >
                Clear Price Filter
              </button>
            )}
          </aside>

          <main className="w-full lg:w-4/7  mx-auto">
            <div className="flex justify-center gap-4 mb-6">
              {/* {["All", "Budget", "Premium"].map((type) => (
                <button
                  key={type}
                  onClick={() => setSelectedType(type)}
                  className={`px-6 py-2 font-semibold text-sm transition ${
                    selectedType === type
                      ? "bg-blue-500 text-white shadow-lg"
                      : "bg-gray-200 text-gray-800 hover:bg-gray-300"
                  }`}
                >
                  {type.charAt(0).toUpperCase() + type.slice(1)}
                </button>
              ))} */}
              { eyeglass.map((data,id) => (
                <div className="">
                  <div className=" ">
                     <div className="flex items-center justify-center "> <img src={data.img} className="w-7 h-5"/>
                     </div> 
                  <div>
                 <button
                  key={id}
                  onClick={() => setSelectedType(data.name)}
                  className={`px-6  font-semibold text-sm transition  ${
                    selectedType === data.name
                      ? "border-b-blue-950 border-b-2  text-blue-950 "
                      : " "
                  }`}
                >
                  {data.name}
                </button> </div> </div>
                     
                  </div>
            
              ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:gap-6 gap-3 ">
              {filteredProducts.length > 0 ? (
                filteredProducts.map((item) => {
                  const offPrice =
                    item.price - (item.price * item.discount) / 100;
                  return (
                    <div
                      key={item.id}
                      className=" rounded-xl w-full shadow-sm hover:shadow-lg transition p-3 text-center bg-white border"
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-60 sm:h-72 lg:h-60 object-contain xl:mb-3"
                      />
                      {/* <h2 className="text-sm font-semibold">{item.name}</h2> */}
                      <div className="flex justify-between w-full rounded-md">
                        <div className="lg:flex lg:gap-3 lg:items-center   ">
                          <div className="flex w-auto items-center gap-2 text-sm ">
                            <span className=" font-bold">₹{offPrice}</span>
                          </div>

                          <div className="flex gap-2 items-center ">
                            <span className="text-gray-500 line-through">
                              ₹{item.price}
                            </span>
                            <p className="text-xs font-semibold text-[#00bac6]">
                              ({item.discount}% off)
                            </p>
                          </div>
                        </div>
                        <div className=" flex border-2 border-black rounded-md bg-sky-100 overflow-hidden">
                          <button
                            className="px-2 py-1 flex gap-2 bg-[#5ce2ec]"
                            onClick={() => {
                              handleAddToCart(item);
                             
                            }}
                          >
                            Add to cart
                          </button>
                        </div>{" "}
                      </div>
                    </div>
                  );
                })
              ) : (
                <p className="text-center col-span-full text-gray-500">
                  No products found in this range 😕
                </p>
              )}
            </div>
          </main>
        </div>
      )}

      {showFilter && (
        <div className="w-full  h-[80vh] border-2 z-50 sm:px-1 px-4 border-black">
          <div className=" h-14 w-full flex flex-row justify-between px-3 items-center ">
            <h1>Filter</h1>
            <RxCross1
              className="text-2xl"
              onClick={() => {
                setShowFilter(false);
              }}
            />
          </div>
          <aside className="border-2 border-black  lg:sticky lg:top-0 lg:h-[90vh] w-full px-3 shadow-sm  sm:p-4 p-0  overflow-y-scroll scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100">
            <div>
              <div
                className="flex  items-center w-full justify-between "
                onClick={() => {
                  setPriceOpen(!priceOpen);
                }}
              >
                <h3 className="font-semibold   text-gray-700 ">Price </h3>{" "}
                <FaChevronDown
                  className={`transition-transform duration-300 ${
                    priceOpen ? "rotate-180" : ""
                  }`}
                />
              </div>
              {priceOpen && (
                <div className="flex flex-col gap-2 ">
                  {priceRanges.map((range) => (
                    <label
                      key={range.label}
                      className={`cursor-pointer flex items-center gap-2 px-2 py-1 rounded-md text-sm  ${
                        selectedPrice?.label === range.label
                          ? "bg-blue-500 text-white shadow-lg"
                          : "text-gray-700"
                      }`}
                    >
                      <input
                        className="appearance-none w-4 h-4 border border-gray-400 rounded-sm checked:bg-blue-500 checked:border-blue-500 relative after:content-[''] after:absolute after:top-[1px] after:left-[5px] after:w-[5px] after:h-[10px] after:border-r-2 after:border-b-2 after:border-white after:rotate-45 after:opacity-0 checked:after:opacity-100"
                        type="radio"
                        name="price"
                        checked={selectedPrice?.label === range.label}
                        onChange={() => setSelectedPrice(range)}
                      />
                      {range.label}
                    </label>
                  ))}
                </div>
              )}
            </div>

            {selectedPrice && (
              <div className="flex justify-between items-center mt-3  ">
                {" "}
                <button
                  onClick={() => setSelectedPrice(null)}
                  className="text-sm text-[#000042] border-2 px-3 py-2 rounded-lg border-[#000042]   "
                >
                  Clear All
                </button>
                <button
                  onClick={() => {
                    setShowFilter(false);
                  }}
                  className="bg-[#000042] text-white px-16 py-2 rounded-lg"
                >
                  Apply
                </button>
              </div>
            )}
          </aside>
        </div>
      )}

      {!showFilter && (
        <div className="lg:hidden fixed bottom-0 left-0 w-full z-0 bg-white  p-4">
          <div className="flex items-center gap-2 justify-center">
            <img
              src="https://static.lenskart.com/media/desktop/img/DesignStudioIcons/FilterIcon.svg"
              alt=""
            />
            <h2
              className="text-[0.7rem]"
              onClick={() => {
                setShowFilter(true);
              }}
            >
              Filters
            </h2>
          </div>
        </div>
      )}

      {showFilter && (
        <div className="lg:hidden block fixed bottom-0 left-0 w-full z-0 bg-white border-t-2 border-black p-4">
          <div>
            <div className="flex items-center gap-2 justify-center">
              <img
                src="https://static.lenskart.com/media/desktop/img/DesignStudioIcons/FilterIcon.svg"
                alt=""
              />
              <h2
                className="text-[0.7rem]"
                onClick={() => {
                  setShowFilter(!showFilter);
                }}
              >
                Filters
              </h2>
            </div>
          </div>
        </div>
      )}

      {/* {<div className="lg:hidden fixed bottom-0 left-0 w-full bg-white border-t-2 border-black p-4" >
    <h2 className="font-semibold text-lg mb-2 text-gray-800">Filter By</h2>
    <h3 className="font-semibold mb-2 text-gray-700">Price Range</h3>
    <div className="flex flex-wrap gap-2 justify-center">
      {priceRanges.map((range) => (
        <button
          key={range.label}
          onClick={() => setSelectedPrice(range)}
          className={`px-3 py-1 rounded-md text-sm border ${
            selectedPrice?.label === range.label
              ? "bg-blue-500 text-white border-blue-500"
              : "text-gray-700 border-gray-300"
          }`}
        >
          {range.label}
        </button>
      ))}
    </div>
  </div>} */}
    </div>
  );
};

export default Eyeglasses;


// <div className="px-3 py-3 text-center border-2 border-black ">

//   <div className=" relative w-11/12 mx-auto py-6 flex flex-row justify-between sm:gap-8 gap-1">

//     <aside className="w-full hidden lg:block lg:w-1/4 rounded-xl shadow-sm bg-white sm:p-4 p-0 h-fit border-2 border-black">
//       <h2 className="font-semibold text-lg mb-4 text-gray-800">
//         Filter By
//       </h2>
//       <h3 className="font-semibold mb-2 text-gray-700">Price Range</h3>
//       <div className="flex flex-col gap-2">
//         {priceRanges.map((range) => (
//           <label
//             key={range.label}
//             className={`cursor-pointer flex items-center gap-2 px-2 py-1 rounded-md text-sm  ${
//               selectedPrice?.label === range.label
//                 ? "bg-blue-500 text-white shadow-lg"
//                 : " text-gray-700"
//             }`}
//           >
//             <input  className=" appearance-none w-4 h-4 border border-gray-400 rounded checked:bg-blue-500 checked:border-blue-500 relative
//                after:content-[''] after:absolute after:top-[1px] after:left-[5px] after:w-[5px] after:h-[10px] after:border-r-2 after:border-b-2 after:border-white after:rotate-45 after:opacity-0 checked:after:opacity-100"
//               type="radio"
//               name="price"
//               checked={selectedPrice?.label === range.label}
//               onChange={() => setSelectedPrice(range)}
//             />
//             {range.label}
//           </label>
//         ))}
//       </div>

//       {selectedPrice && (
//         <button
//           onClick={() => setSelectedPrice(null)}
//           className="mt-4 text-sm text-red-500 underline"
//         >
//           Clear Price Filter
//         </button>
//       )}
//     </aside>

//     <main className="w-full lg:w-3/4 border-2 border-black mx-auto">
//       <div className="flex justify-center gap-4 mb-6">
//         {["spherical", "toric"].map((type) => (
//           <button
//             key={type}
//             onClick={() => setSelectedType(type)}
//             className={`px-6 py-2  font-semibold text-sm transition ${
//               selectedType === type
//                 ? "bg-blue-500 text-white shadow-lg"
//                 : "bg-gray-200 text-gray-800 hover:bg-gray-300"
//             }`}
//           >
//             {type.charAt(0).toUpperCase() + type.slice(1)}
//           </button>
//         ))}
//       </div>

//       <div className="grid grid-cols-1 lg:grid-cols-3 xl:gap-6 gap-3">
//         {filteredProducts.length > 0 ? (
//           filteredProducts.map((item) => {
//             const offPrice =
//               item.price - (item.price * item.discount) / 100;
//             return (
//               <div
//                 key={item.id}
//                 className="border rounded-xl shadow-sm hover:shadow-lg transition p-3 text-center bg-white"
//               >
//                 <img
//                   src={item.image}
//                   alt={item.name}
//                   className="w-full h-80 object-contain xl:mb-3"
//                 />
//                 <h2 className="text-sm font-semibold">{item.name}</h2>
//                 <div className="flex justify-center items-center gap-2 text-sm mt-1">
//                   <span className="text-gray-500 line-through">
//                     ₹{item.price}
//                   </span>
//                   <span className="text-green-600 font-bold">
//                     ₹{offPrice}
//                   </span>
//                 </div>
//                 <p className="text-xs text-[#00bac6]">
//                   {item.discount}% off
//                 </p>
//               </div>
//             );
//           })
//         ) : (
//           <p className="text-center col-span-full text-gray-500">
//             No products found in this range 😕
//           </p>
//         )}
//       </div>
//     </main>
//   </div>

// </div>

//     <div className="px-3 py-3 text-center border-2 border-black">
//   <div className="relative w-11/12 mx-auto py-6 flex flex-col lg:flex-row justify-between sm:gap-8 gap-1">

//     <aside className="lg:sticky lg:top-0 lg:h-screen w-full lg:w-1/4 rounded-xl shadow-sm bg-white sm:p-4 p-0 h-fit border-2 border-black">
//       <h2 className="font-semibold text-lg mb-4 text-gray-800">
//         Filter By
//       </h2>
//       <h3 className="font-semibold mb-2 text-gray-700">Price Range</h3>
//       <div className="flex flex-col gap-2">
//         {priceRanges.map((range) => (
//           <label
//             key={range.label}
//             className={`cursor-pointer flex items-center gap-2 px-2 py-1 rounded-md text-sm ${
//               selectedPrice?.label === range.label
//                 ? "bg-blue-500 text-white shadow-lg"
//                 : "text-gray-700"
//             }`}
//           >
//             <input
//               className="appearance-none w-4 h-4 border border-gray-400 rounded-none checked:bg-blue-500 checked:border-blue-500 relative after:content-[''] after:absolute after:top-[1px] after:left-[5px] after:w-[5px] after:h-[10px] after:border-r-2 after:border-b-2 after:border-white after:rotate-45 after:opacity-0 checked:after:opacity-100"
//               type="radio"
//               name="price"
//               checked={selectedPrice?.label === range.label}
//               onChange={() => setSelectedPrice(range)}
//             />
//             {range.label}
//           </label>
//         ))}
//       </div>

//       {selectedPrice && (
//         <button
//           onClick={() => setSelectedPrice(null)}
//           className="mt-4 text-sm text-red-500 underline"
//         >
//           Clear Price Filter
//         </button>
//       )}
//     </aside>

//     <main className="w-full lg:w-3/4 border-2 border-black mx-auto mt-6 lg:mt-0">
//       <div className="flex justify-center gap-4 mb-6">
//         {["spherical", "toric"].map((type) => (
//           <button
//             key={type}
//             onClick={() => setSelectedType(type)}
//             className={`px-6 py-2 font-semibold text-sm transition ${
//               selectedType === type
//                 ? "bg-blue-500 text-white shadow-lg"
//                 : "bg-gray-200 text-gray-800 hover:bg-gray-300"
//             }`}
//           >
//             {type.charAt(0).toUpperCase() + type.slice(1)}
//           </button>
//         ))}
//       </div>

//       <div className="grid grid-cols-1 lg:grid-cols-3 xl:gap-6 gap-3">
//         {filteredProducts.length > 0 ? (
//           filteredProducts.map((item) => {
//             const offPrice = item.price - (item.price * item.discount) / 100;
//             return (
//               <div
//                 key={item.id}
//                 className="border rounded-xl shadow-sm hover:shadow-lg transition p-3 text-center bg-white"
//               >
//                 <img
//                   src={item.image}
//                   alt={item.name}
//                   className="w-full h-80 object-contain xl:mb-3"
//                 />
//                 <h2 className="text-sm font-semibold">{item.name}</h2>
//                 <div className="flex justify-center items-center gap-2 text-sm mt-1">
//                   <span className="text-gray-500 line-through">₹{item.price}</span>
//                   <span className="text-green-600 font-bold">₹{offPrice}</span>
//                 </div>
//                 <p className="text-xs text-[#00bac6]">{item.discount}% off</p>
//               </div>
//             );
//           })
//         ) : (
//           <p className="text-center col-span-full text-gray-500">
//             No products found in this range 😕
//           </p>
//         )}
//       </div>
//     </main>
//   </div>
// </div>


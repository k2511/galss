// import React from 'react'
// import { useParams, useLocation } from "react-router-dom";

// const EyeProductName = () => {
//   const location = useLocation();

//     const { id } = useParams();

//     const itemName = decodeURIComponent(id);
//     const item = location.state;
//     console.log(itemName)

//   return (
//     <div className="min-h-screen flex flex-col md:flex-row items-center justify-center px-4 py-10 bg-gray-50">

//     {/* Left Side - Product Image */}
//     <div className="md:w-1/2 flex justify-center items-center border py-20">
//       <img
//         src="https://res.cloudinary.com/demo/image/upload/v1690000000/sample.jpg"
//         alt="Bausch & Lomb SofLens"
//         className="w-full max-w-md  shadow-lg"
//       />
//     </div>

//     {/* Right Side - Product Details */}
//     <div className="md:w-1/2 mt-8 md:mt-0 md:pl-10">
//       <h2 className="text-2xl font-semibold text-gray-900">
//        {itemName}
//       </h2>
//       {/* <p className="text-gray-500 mt-2">hilafilcon B</p> */}

//       <div className="mt-4">
//         <div className="flex items-center gap-3">
//           <span className="text-3xl font-bold text-[#00bac6]"> <p>Price: {item?.price}</p></span>
//           <span className="line-through text-gray-400">{item?.sell_price}</span>
//           <span className="text-sm text-gray-600">(Incl. GST)</span>
//         </div>

//       </div>

//       <div className="mt-6">
//         <button className="w-full md:w-auto bg-[#11daac] text-[#000042]  px-8 py-3 rounded-xl font-semibold  transition">
//              Select lenses
//         </button>
//       </div>

//       <div className="mt-6 text-sm text-gray-600">
//         <p> Order on Phone: <span className="font-medium">+91 8470007367</span></p>
//       </div>
//     </div>
//   </div>
//   )
// }

// export default EyeProductName


// import { TiStar } from "react-icons/ti";
// import axios from "axios";
// import React, { useState, useEffect, useRef } from "react";
// import { useParams, useLocation } from "react-router-dom";

// import { CartContext } from "../context/CartContext";
// import { useContext } from "react";

// const API = "http://localhost:5000";

// const EyeProductName = () => {
//   const location = useLocation();
//   const { id } = useParams();
//   const [selectedOption, setSelectedOption] = useState(null);
//   const [active, setActive] = useState(0);

//   let item = location.state;

//   const handleScroll = (e) => {
//     const width = e.target.offsetWidth;
//     const index = Math.round(e.target.scrollLeft / width);
//     setActive(index);
//   };

//   if (!item) {
//     const params = new URLSearchParams(location.search);
//     const encoded = params.get("data");
//     if (encoded) {
//       try {
//         item = JSON.parse(decodeURIComponent(encoded));
//         // console.log(item)
//       } catch (e) {
//         // console.log("decode error", e);
//       }
//     }
//   }

//   const startX = useRef(0);
//   const isSliding = useRef(false);

//   const handleTouchStart = (e) => {
//     startX.current = e.touches[0].clientX;
//     isSliding.current = false;
//   };

//   const handleTouchMove = (e) => {
//     const diff = e.touches[0].clientX - startX.current;
//     if (Math.abs(diff) > 50 && !isSliding.current) {
//       if (diff < 0 && active < item.gallery_images.length - 1) {
//         setActive(active + 1);
//       }
//       if (diff > 0 && active > 0) {
//         setActive(active - 1);
//       }
//       isSliding.current = true;
//     }
//   };

//   // console.log("matchedReview", item?.matchedReview);

//   const { handleAddToCart, addToCart, fetchCartItem } = useContext(CartContext);
//   const [open, setOpen] = useState(false);
//   const [step, setStep] = useState(1);
//   const [recently, setRecently] = useState([]);
//   const [showItem, setShowItem] = useState(3);

//   const lensOptions = [
//     {
//       label: "Single Vision",
//       content:
//         "Single vision lenses help you see clearly for one field – distance or reading.",
//     },
//     {
//       label: "Bifocal / Progressive",
//       content:
//         "Bifocal/Progressive lenses give you multi-distance clarity without line separation.",
//     },
//     {
//       label: "Zero Power",
//       content:
//         "Zero power lenses are for fashion use or computer protection with no correction.",
//     },
//     {
//       label: "Frame Only",
//       content: "You can purchase only the frame without any lenses fitted.",
//     },
//   ];

//   // console.log( 'item', item)

//   useEffect(() => {
//     const addRecentlyViews = async () => {
//       try {
//         const res = await axios.post(
//           `http://localhost:5000/api/recently-views`,
//           { item },
//           {
//             headers: {
//               Authorization: `Bearer ${localStorage.getItem("token")}`,
//             },
//           }
//         );
//       } catch (err) {
//         console.log(err);
//       }
//     };

//     addRecentlyViews();
//     const getAllRecentlyViews = async () => {
//       try {
//         const res = await axios.get(
//           `http://localhost:5000/api/recently-views`,
//           {
//             headers: {
//               Authorization: `Bearer ${localStorage.getItem("token")}`,
//             },
//           }
//         );
//         setRecently(res.data.r_viewed);
//       } catch (err) {
//         console.log(err);
//       }
//     };

//     getAllRecentlyViews();
//   }, []);

//   useEffect(() => {
//     const onKey = (e) => {
//       if (e.key === "Escape") setOpen(false);
//     };
//     window.addEventListener("keydown", onKey);
//     return () => window.removeEventListener("keydown", onKey);
//   }, []);

//   return (
//     <div className="flex flex-col ">
//       <div className="h-[80vh] flex flex-col md:flex-row items-center justify-center  px-4  bg-gray-50 relative">
//         <div className="flex flex-col md:flex-row   justify-center ">
//           {/* <div className="md:w-1/2  border-2 grid s grid-cols-2 p-5 border-black ">
//           {item.gallery_images &&
//             item.gallery_images.map((val, i) => (
//               <img
//                 key={i}
//                 src={`${API}/uploads/${val}`}
//                 alt="Gallery"
//                 className="w-full max-w-md "
//               />
//             ))}
//         </div> */}

//           <div className="md:w-1/2   ">
//             <div
//               className="block sm:hidden "
//               onTouchStart={handleTouchStart}
//               onTouchMove={handleTouchMove}
//             >
//               <img
//                 src={`${API}/uploads/${item.gallery_images[active]}`}
//                 alt=""
//                 className="w-full border"
//               />

//               <div className="flex justify-center gap-2 mt-3 ">
//                 {item.gallery_images.map((_, i) => (
//                   <div
//                     key={i}
//                     onClick={() => setActive(i)}
//                     className={`w-3 h-3 rounded-full cursor-pointer ${
//                       active === i ? "bg-black" : ""
//                     }`}
//                   ></div>
//                 ))}
//               </div>
//             </div>

//             <div className="hidden sm:grid grid-cols-2 gap-2 ">
//               {item.gallery_images.map((val, i) => (
//                 <img
//                   key={i}
//                   src={`${API}/uploads/${val}`}
//                   alt=""
//                   className="w-full border"
//                 />
//               ))}
//             </div>
//           </div>

//           <div className="md:w-1/3 mt-8 md:mt-0 md:pl-10 z-0 ">
//             <h2 className="text- font-semibold text-gray-900">{item.name}</h2>

//             <div className="mt-4 ">
//               <div className="flex items-center gap-3 ">
//                 <span className="text-xl font-bold text-[#000042]">
//                   <p> {item?.sell_price}</p>
//                 </span>
//                 <span className="line-through text-gray-400">
//                   {item?.price}
//                 </span>
//                 <span className="text-sm text-gray-600">(Incl. GST)</span>
//               </div>
//             </div>

//             <div className="mt-1 flex  items-center gap-5 ">
//               <button
//                 onClick={() => setOpen(true)}
//                 className="w-full md:w-auto bg-[#11daac] text-[#000042] px-5 py-2 rounded-xl  transition"
//               >
//                 Select lenses
//               </button>

//               <button
//                 className="px-5 py-2 flex gap-2  bg-[#11daac] te-[#000042] rounded-xl"
//                 onClick={() => {
//                   handleAddToCart(item);
//                   addToCart(item?.matchedReview, item);
//                 }}
//               >
//                 Add to cart
//               </button>
//             </div>

//             <div className="mt-6 text-sm text-gray-600">
//               <p>
//                 Product id
//                 <span className="font-medium">
//                   {"   "}
//                   {item?.id}{" "}
//                 </span>
//               </p>
//               <p>
//                 Order on Phone:{" "}
//                 <span className="font-medium">+91 8470007367 </span>
//               </p>
//               <p>
//                 category_id :{" "}
//                 <span className="font-medium">
//                   {"   "}
//                   {item?.category_id}
//                 </span>
//               </p>
//               <p>
//                 gender :{" "}
//                 <span className="font-medium">
//                   {"   "}
//                   {item?.gender}
//                 </span>
//               </p>
//               <p>
//                 brand_name :{" "}
//                 <span className="font-medium">
//                   {"   "}
//                   {item?.brand_name}
//                 </span>
//               </p>
//               <p>
//                 rating :{" "}
//                 <span className="font-medium">
//                   {"   "}
//                   {item.matchedReview?.rating}
//                 </span>
//               </p>
//             </div>
//           </div>
//         </div>
//         {open && (
//           <div className="fixed inset-0 z-50">
//             <div
//               className="fixed inset-0 bg-black bg-opacity-40 transition-opacity "
//               onClick={() => setOpen(false)}
//             />
        

//             <div className="fixed right-0 top-0 h-full w-full sm:w-[420px] bg-white shadow-xl transform transition-transform duration-300 translate-x-0 z-50">
//               <div className="relative p-6 h-full flex flex-col  z-50">
//                 {/* HEADER */}
//                 <div className="flex items-center justify-between ">
//                   <h3 className="text-lg font-semibold">Select Lens Type</h3>
//                   <button
//                     onClick={() => setOpen(false)}
//                     className="text-gray-600 px-3 py-1 rounded hover:bg-gray-100"
//                   >
//                     ✕
//                   </button>
//                 </div>

//                 {/* CONTENT */}
//                 <div className="mt-4 overflow-auto">
//                   <div className="mb-4">
//                     <p className="font-medium">{item?.name || itemName}</p>
//                     <p className="text-sm text-gray-500">
//                       Price: {item?.price}
//                     </p>
//                   </div>

//                   <div className="space-y-3  relative">
//                     {/* OPTIONS LIST */}
//                     <div className="z-40">
//                       {lensOptions.map((option, index) => (
//                         <button
//                           onClick={() => {
//                             setSelectedOption(option.label); // FIXED
//                             console.log(option.label);
//                           }}
//                           key={index}
//                           className="w-full text-left px-4 py-3 border rounded-lg"
//                         >
//                           {option.label}
//                         </button>
//                       ))}
//                     </div>

//                     {/* OVERLAY — Single Vision */}
//                     {selectedOption === "Single Vision" && (
//                       <div className="absolute top-0 right-0 w-full h-full bg-white  z-50 p-5">
//                         <button
//                           className="text-sm mb-3 text-blue-600"
//                           onClick={() => setSelectedOption(null)}
//                         >
//                           ← Back
//                         </button>

//                         <h2 className="text-xl font-semibold mb-2">
//                           Single Vision
//                         </h2>
//                         <p className="text-gray-600">
//                           Single Vision lenses help with distance or reading.
//                         </p>
//                       </div>
//                     )}

//                     {/* OVERLAY — Bifocal */}
//                     {selectedOption === "Bifocal / Progressive" && (
//                       <div className="absolute top-0 right-0 w-full h-full bg-white  z-50 p-5">
//                         <button
//                           className="text-sm mb-3 text-blue-600"
//                           onClick={() => setSelectedOption(null)}
//                         >
//                           ← Back
//                         </button>

//                         <h2 className="text-xl font-semibold mb-2">
//                           Bifocal / Progressive
//                         </h2>
//                         <p className="text-gray-600">
//                           Bifocal & Progressive lenses allow multiple vision
//                           strengths.
//                         </p>
//                       </div>
//                     )}

//                     {/* OVERLAY — Zero Power */}
//                     {selectedOption === "Zero Power" && (
//                       <div className="absolute top-0 right-0 w-full h-full bg-white  z-50 p-5">
//                         <button
//                           className="text-sm mb-3 text-blue-600"
//                           onClick={() => setSelectedOption(null)}
//                         >
//                           ← Back
//                         </button>

//                         <h2 className="text-xl font-semibold mb-2">
//                           Zero Power
//                         </h2>
//                         <p className="text-gray-600">
//                           Zero power lenses for computer or protection.
//                         </p>
//                       </div>
//                     )}

//                     {/* OVERLAY — Frame Only */}
//                     {selectedOption === "Frame Only" && (
//                       <div className="absolute top-0 right-0 w-full h-full bg-white  z-50 p-5">
//                         <button
//                           className="text-sm mb-3 text-blue-600"
//                           onClick={() => setSelectedOption(null)}
//                         >
//                           ← Back
//                         </button>

//                         <h2 className="text-xl font-semibold mb-2">
//                           Frame Only
//                         </h2>
//                         <p className="text-gray-600">
//                           Purchase frame only without lenses.
//                         </p>
//                       </div>
//                     )}
//                   </div>
//                 </div>

//                 {/* FOOTER */}
//                 <div className="mt-auto text-xs text-gray-400">
//                   <p>Need help? Call +91 8470007367</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         )}{" "}
//       </div>

//       {/* <div className='w-11/12 border-2 flex flex-col  border-black  bg-gray-50 mx-auto ' >
//             <div className="border-2 border-black w-11/12 flex p-3">
//               <h1>Recently Viewed </h1>
//             </div>
//             <div className=" sm:grid grid-cols-2 sm:grid-cols-3 gap-3 w-11/12  bg-red-300 border-2 border-black p-3">
//             {recently.length > 0 ? (
//                 recently.map((item) => {
               

//                   const fullUrl =  `http://localhost:5000/uploads/${item.image}` ;
//                   console.log('img', fullUrl, item);

//                   return (

//                     <div
//                       key={item.id}
//                       className=" rounded-xl w-full shadow-sm hover:shadow-lg transition p-5 border gap-3 mx-3 text-center bg-white border-2 border-black   "
//                     >

//                       <img  className="w-full h-60 sm:h-72 lg:h-60 object-contain  "
//                         src={fullUrl} 
//                         alt="product"
//                       />

//                       <div className="bg-[#f5f5ff] flex rounded-xl items-center gap-1 w-12 px-3 py-2" >
                       
//                         <TiStar className="text-[#68d1d9]" />
//                       </div>

//                       <h2 className="text-sm font-semibold text-left pt-3">
//                         {item.name}
//                       </h2>
//                       <div className="flex justify-between w-full rounded-md">
//                         <div className="lg:flex lg:gap-3 lg:items-center   ">
//                           <div className="flex w-auto items-center gap-2 text-sm ">
//                             <span className=" font-bold">₹{item.sell_price}</span>
//                           </div>

//                           <div className="flex gap-2 items-center ">
//                             <span className="text-gray-500 line-through">
//                               ₹{item.price}
//                             </span>
                         
//                           </div>
//                         </div>
//                         <div className=" flex rounded-md bg-sky-100 overflow-hidden">
                        
                       
//                         </div>{" "}
//                       </div>
//                     </div>
//                   );
//                 })
//               ) : (
//                 <p className="text-center col-span-full text-gray-500">
//                   No products found in this range 😕
//                 </p>
//               )}
//             </div>
//       </div> */}

//       <div className="w-full flex flex-col  bg-gray-50 mx-auto">
//         <div className=" w-11/12 px-3 mx-auto mt-3 rounded-md ">
//           <h1 className="text-lg font-semibold">Recently Viewed</h1>
//         </div>

//         <div className="sm:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-11/12 mx-auto   p-5 mt-3 rounded-md">
//           {recently.length > 0 ? (
//             recently.slice(0, showItem).map((item) => {
//               const fullUrl = `http://localhost:5000/uploads/${item.image}`;

//               return (
//                item.category_id === 1 && (  <div
//                   key={item.id}
//                   className="flex flex-col rounded-xl w-full shadow-sm hover:shadow-lg transition p-4 border gap-3 bg-white"
//                 >
//                   {/* Image */}
//                   <img
//                     className="w-full h-56 sm:h-64 lg:h-60 object-contain rounded-md"
//                     src={fullUrl}
//                     alt="product"
//                   />

//                   {/* Rating badge */}
//                   <div className="bg-[#f5f5ff] flex rounded-xl items-center gap-1 w-12 px-3 py-2">
//                     <TiStar className="text-[#68d1d9]" />
//                   </div>

//                   {/* Name */}
//                   <h2 className="text-sm font-semibold text-left pt-1">
//                     {item.name}
//                   </h2>

//                   {/* Price section */}
//                   <div className="flex justify-between w-full rounded-md mt-1">
//                     <div className="flex gap-3 items-center">
//                       <span className="font-bold text-sm">
//                         ₹{item.sell_price}
//                       </span>

//                       <span className="text-gray-500 line-through text-sm">
//                         ₹{item.price}
//                       </span>
//                     </div>
//                   </div>
//                 </div>)
//               );
//             })
//           ) : (
//             <p className="text-center col-span-full text-gray-600">
//               No products found 😕
//             </p>
//           )}
//         </div>

//         <div className="flex items-center justify-center font-semibold mb-4 ">
//        { recently.length > showItem && (   <button
//             className="border rounded-md bg-teal-300 px-3 py-1"
//             onClick={() => setShowItem(showItem + 3)}
//           >
//             View more{" "}
//           </button> )}
//         </div>


//       </div>
//     </div>
//   );
// };

// export default EyeProductName;

import React, { useState, useEffect, useRef, useContext } from "react";
import { useParams, useLocation } from "react-router-dom";
import axios from "axios";
import { TiStar } from "react-icons/ti";
import LensTypeDrawer from "./LensTypeDrawer";
import { CartContext } from "../context/CartContext";

const API = "http://localhost:5000";

const defaultFallbackItem = {
  id: null,
  name: "Product",
  sell_price: "—",
  price: "—",
  gallery_images: ["placeholder.jpg"],
  matchedReview: { rating: 0 },
};

function parseFloatOrNull(v) {
  if (v === "" || v == null) return null;
  const n = parseFloat(String(v).replace(",", "."));
  return Number.isFinite(n) ? n : null;
}

function validateEye(e) {
  const msgs = [];
  if (e.sph == null && e.cyl == null && (e.axis == null || e.axis === "")) return msgs;
  if (e.sph == null) msgs.push("Sphere (SPH) is required.");
  if (e.cyl != null && Math.abs(e.cyl) > 10) msgs.push("Cylinder out of range (>10D).");
  if (e.cyl != null && e.cyl !== 0 && (e.axis == null || e.axis === "")) msgs.push("Axis required when cylinder present.");
  if (e.axis != null && (e.axis < 0 || e.axis > 180)) msgs.push("Axis must be 0–180.");
  return msgs;
}

function calculateLensPrice({ od, os, lensType, material, coatings = [], qty = 1 }) {
  const lensBaseTable = {
    single: 500,
    bifocal: 900,
    progressive: 1500,
    zero: 200,
    frame: 0,
  };
  const lensBase = lensBaseTable[lensType] ?? 500;

  const materialMultiplier = {
    "1.50": 1.0,
    "1.56": 1.1,
    "1.59": 1.12,
    "1.61": 1.3,
    "1.67": 1.6,
    "1.74": 2.0,
  }[material] ?? 1.0;

  const sphVals = [Math.abs(od.sph ?? 0), Math.abs(os.sph ?? 0)];
  const maxSph = Math.max(...sphVals);

  let sphereCharge = 0;
  let manualReview = false;
  if (maxSph <= 3) sphereCharge = 0;
  else if (maxSph <= 6) sphereCharge = 300;
  else if (maxSph <= 10) sphereCharge = 600;
  else {
    sphereCharge = 1200;
    manualReview = true;
  }

  const cylVals = [Math.abs(od.cyl ?? 0), Math.abs(os.cyl ?? 0)];
  const maxCyl = Math.max(...cylVals);
  let cylCharge = 0;
  if (maxCyl <= 1) cylCharge = 0;
  else if (maxCyl <= 2.5) cylCharge = 200;
  else cylCharge = 400;

  const coatPrices = {
    AR: 250,
    "Hard Coat": 100,
    "Blue Light": 300,
    Photo: 800,
    Tint: 150,
  };
  const coatingsTotal = (coatings || []).reduce((s, c) => s + (coatPrices[c] || 0), 0);

  const addPower = Math.max(Math.abs(od.add ?? 0), Math.abs(os.add ?? 0)) || 0;
  const addSurcharge = addPower >= 1.5 ? 250 : 0;

  const perLensPreMaterial = lensBase + sphereCharge + cylCharge + addSurcharge;
  const perLensAfterMaterial = perLensPreMaterial * materialMultiplier + coatingsTotal;
  const subtotal = perLensAfterMaterial * Math.max(1, qty);

  const taxRate = 0.18;
  const tax = parseFloat((subtotal * taxRate).toFixed(2));
  const total = parseFloat((subtotal + tax).toFixed(2));

  const warnings = [];
  if (manualReview) warnings.push("High prescription — manual verification required.");
  if (lensType === "progressive" && addPower === 0) warnings.push("Progressive lenses usually require an ADD value.");
  if ((od.cyl != null && od.cyl !== 0) || (os.cyl != null && os.cyl !== 0)) {
    if (maxCyl > 3.5) warnings.push("High cylinder — may require toric/progressive special lens.");
  }

  return {
    breakdown: {
      lensBase,
      materialMultiplier,
      perLensPreMaterial: parseFloat(perLensPreMaterial.toFixed(2)),
      coatingsTotal,
      perLensAfterMaterial: parseFloat(perLensAfterMaterial.toFixed(2)),
      subtotal: parseFloat(subtotal.toFixed(2)),
      tax,
      total,
      qty: Math.max(1, qty),
      sphereCharge,
      cylCharge,
      addSurcharge,
      maxSph,
      maxCyl,
    },
    warnings,
  };
}

export default function EyeProductName() {
  const location = useLocation();
  const { id } = useParams();
  let item = location.state;
  if (!item) {
    const params = new URLSearchParams(location.search);
    const encoded = params.get("data");
    if (encoded) {
      try {
        item = JSON.parse(decodeURIComponent(encoded));
      } catch (e) {
        // ignore
      }
    }
  }
  item = item || defaultFallbackItem;

  const { handleAddToCart, addToCart } = useContext(CartContext) || {};

  const [open, setOpen] = useState(false);
  const [selectedLensLabel, setSelectedLensLabel] = useState(null);
  const [selectedLensValue, setSelectedLensValue] = useState(null);

  const [od, setOd] = useState({ sph: "", cyl: "", axis: "", add: "" });
  const [os, setOs] = useState({ sph: "", cyl: "", axis: "", add: "" });
  const [pd, setPd] = useState("");
  const [material, setMaterial] = useState("1.56");
  const [coatings, setCoatings] = useState([]);
  const [qty, setQty] = useState(1);

  const [doctorPrescriptions, setDoctorPrescriptions] = useState([]);
  const [newDoctorName, setNewDoctorName] = useState("");
  const [calcResult, setCalcResult] = useState(null);
  const [errors, setErrors] = useState([]);

  const lensOptions = [
    { id: "single", name: "Single Vision", price: 500 },
    { id: "bifocal", name: "Bifocal", price: 900 },
    { id: "progressive", name: "Progressive", price: 1500 },
    { id: "zero", name: "Zero Power", price: 200 },
    { id: "frame", name: "Frame Only", price: 0 },
  ];

  useEffect(() => {
    const raw = localStorage.getItem("doctor_prescriptions_v1");
    if (raw) {
      try {
        setDoctorPrescriptions(JSON.parse(raw));
      } catch (e) {
        setDoctorPrescriptions([]);
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("doctor_prescriptions_v1", JSON.stringify(doctorPrescriptions));
  }, [doctorPrescriptions]);

  const gallery = Array.isArray(item.gallery_images) && item.gallery_images.length > 0
    ? item.gallery_images
    : ["placeholder.jpg"];
  const [active, setActive] = useState(0);

  const startX = useRef(0);
  const isSliding = useRef(false);
  const handleTouchStart = (e) => {
    startX.current = e.touches[0].clientX;
    isSliding.current = false;
  };
  const handleTouchMove = (e) => {
    const diff = e.touches[0].clientX - startX.current;
    if (Math.abs(diff) > 50 && !isSliding.current) {
      if (diff < 0 && active < gallery.length - 1) setActive((a) => a + 1);
      if (diff > 0 && active > 0) setActive((a) => a - 1);
      isSliding.current = true;
    }
  };

  function selectDoctorPrescription(p) {
    setOd({ sph: p.od.sph ?? "", cyl: p.od.cyl ?? "", axis: p.od.axis ?? "", add: p.od.add ?? "" });
    setOs({ sph: p.os.sph ?? "", cyl: p.os.cyl ?? "", axis: p.os.axis ?? "", add: p.os.add ?? "" });
    setPd(p.pd ?? "");
  }

  function saveDoctorPrescription() {
    const name = newDoctorName?.trim() || `Dr. ${new Date().toLocaleString()}`;
    const entry = {
      id: Date.now(),
      name,
      od: { ...od },
      os: { ...os },
      pd,
      createdAt: new Date().toISOString(),
    };
    setDoctorPrescriptions((s) => [entry, ...s]);
    setNewDoctorName("");
  }

  function removeDoctorPrescription(id) {
    setDoctorPrescriptions((s) => s.filter((x) => x.id !== id));
  }

  function toggleCoating(name) {
    setCoatings((s) => (s.includes(name) ? s.filter((x) => x !== name) : [...s, name]));
  }

  function handleCalculate() {
    setErrors([]);
    setCalcResult(null);

    const odParsed = {
      sph: parseFloatOrNull(od.sph),
      cyl: parseFloatOrNull(od.cyl),
      axis: od.axis === "" ? null : parseInt(od.axis, 10),
      add: parseFloatOrNull(od.add),
    };
    const osParsed = {
      sph: parseFloatOrNull(os.sph),
      cyl: parseFloatOrNull(os.cyl),
      axis: os.axis === "" ? null : parseInt(os.axis, 10),
      add: parseFloatOrNull(os.add),
    };

    const msgs = [
      ...validateEye(odParsed).map((m) => `OD: ${m}`),
      ...validateEye(osParsed).map((m) => `OS: ${m}`),
    ];
    if (msgs.length > 0) {
      setErrors(msgs);
      return;
    }

    const selectedLens = selectedLensValue || "single";
    const result = calculateLensPrice({
      od: odParsed,
      os: osParsed,
      lensType: selectedLens,
      material,
      coatings,
      qty: Number(qty) || 1,
    });

    setCalcResult({
      normalized: { od: odParsed, os: osParsed, pd, selectedLens, material, coatings, qty },
      ...result,
    });
  }

  function handleAddToCartWithLens() {
    if (!calcResult) {
      alert("Please calculate price first.");
      return;
    }

    const cartItem = {
      product: item,
      qty: calcResult.breakdown.qty,
      price: calcResult.breakdown.total,
      metadata: {
        rx: calcResult.normalized,
        breakdown: calcResult.breakdown,
        warnings: calcResult.warnings,
      },
    };

    if (typeof handleAddToCart === "function") handleAddToCart(cartItem);
    if (typeof addToCart === "function") addToCart(cartItem);
    console.log("Add to cart (local):", cartItem);
    alert("Added to cart with lens options.");
  }

  function handleLensSelect(opt) {
    setSelectedLensLabel(opt.name);
    setSelectedLensValue(opt.id);
    setOpen(false);
  }

  return (
    <div className="flex flex-col">
      <div className="h-[80vh] flex flex-col md:flex-row items-center justify-center px-4 bg-gray-50 relative">
        <div className="flex flex-col md:flex-row justify-center w-full max-w-6xl">
          <div className="md:w-1/2">
            <div className="block sm:hidden" onTouchStart={handleTouchStart} onTouchMove={handleTouchMove}>
              <img src={`${API}/uploads/${gallery[active]}`} alt={item.name} className="w-full border object-contain" />
              <div className="flex justify-center gap-2 mt-3">
                {gallery.map((_, i) => (
                  <div
                    key={i}
                    onClick={() => setActive(i)}
                    className={`w-3 h-3 rounded-full cursor-pointer ${active === i ? "bg-black" : "bg-gray-300"}`}
                    role="button"
                    aria-label={`jump-to-${i}`}
                  />
                ))}
              </div>
            </div>

            <div className="hidden sm:grid grid-cols-2 gap-2">
              {gallery.map((val, i) => (
                <img key={i} src={`${API}/uploads/${val}`} alt={`${item.name}-${i}`} className="w-full border object-contain" />
              ))}
            </div>
          </div>

          <div className="md:w-1/3 mt-8 md:mt-0 md:pl-10">
            <h2 className="text-lg font-semibold text-gray-900">{item.name}</h2>

            <div className="mt-4">
              <div className="flex items-center gap-3">
                <span className="text-xl font-bold text-[#000042]">
                  <p>₹{item?.sell_price}</p>
                </span>
                <span className="line-through text-gray-400">{item?.price}</span>
                <span className="text-sm text-gray-600">(Incl. GST)</span>
              </div>
            </div>

            <div className="mt-3">
              {selectedLensLabel && (
                <div className="mb-3 inline-block px-3 py-1 bg-green-50 text-green-700 rounded">
                  Selected: {selectedLensLabel}
                </div>
              )}
            </div>

            <div className="mt-3 flex items-center gap-5">
              <button type="button" onClick={() => setOpen(true)} className="w-full md:w-auto bg-[#11daac] text-[#000042] px-5 py-2 rounded-xl transition">
                Select lenses
              </button>

              <button
                type="button"
                className="px-5 py-2 flex gap-2 bg-[#11daac] text-[#000042] rounded-xl"
                onClick={() => {
                  const basicItem = { product: item, qty: 1, price: item.sell_price ?? item.price ?? 0 };
                  if (typeof handleAddToCart === "function") handleAddToCart(basicItem);
                  if (typeof addToCart === "function") addToCart(basicItem);
                }}
              >
                Add to cart
              </button>
            </div>

            <div className="mt-6 text-sm text-gray-600">
              <p>Product id: <span className="font-medium">{item?.id ?? "—"}</span></p>
              <p>Order on Phone: <span className="font-medium">+91 8470007367</span></p>
              <p>category_id: <span className="font-medium">{item?.category_id ?? "—"}</span></p>
              <p>gender: <span className="font-medium">{item?.gender ?? "—"}</span></p>
              <p>brand_name: <span className="font-medium">{item?.brand_name ?? "—"}</span></p>
              <p>rating: <span className="font-medium">{item.matchedReview?.rating ?? 0}</span></p>
            </div>
          </div>
        </div>

        <LensTypeDrawer open={open} onClose={() => setOpen(false)} lensOptions={lensOptions} selectedLens={{ id: selectedLensValue }} onSelect={handleLensSelect} />
      </div>

      <div className="w-full max-w-6xl mx-auto mt-6 p-6 bg-white rounded shadow">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="col-span-1">
            <h3 className="font-semibold mb-2">Doctor Prescriptions</h3>

            <div className="space-y-2 mb-3">
              <input
                value={newDoctorName}
                onChange={(e) => setNewDoctorName(e.target.value)}
                placeholder="Doctor name (optional)"
                className="w-full p-2 border rounded"
              />
              <button type="button" onClick={saveDoctorPrescription} className="w-full bg-blue-600 text-white px-3 py-2 rounded">Save current RX as doctor</button>
            </div>

            <div>
              {doctorPrescriptions.length === 0 && <p className="text-sm text-gray-500">No saved prescriptions</p>}
              {doctorPrescriptions.map((p) => (
                <div key={p.id} className="border p-2 rounded mb-2">
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="font-medium">{p.name}</div>
                      <div className="text-xs text-gray-500">{new Date(p.createdAt).toLocaleString()}</div>
                    </div>
                    <div className="flex gap-2">
                      <button type="button" onClick={() => selectDoctorPrescription(p)} className="text-sm px-2 py-1 bg-green-50 rounded">Use</button>
                      <button type="button" onClick={() => removeDoctorPrescription(p.id)} className="text-sm px-2 py-1 bg-red-50 rounded">Delete</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="col-span-1 md:col-span-2">
            <h3 className="font-semibold mb-3">Prescription & Lens Options</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-3 border rounded">
                <div className="font-medium mb-2">Right Eye (OD)</div>
                <label className="block text-xs">Sphere (SPH)</label>
                <input value={od.sph} onChange={(e) => setOd(s => ({ ...s, sph: e.target.value }))} className="w-full p-2 border rounded mb-2" placeholder="+1.25 or -2.50" />

                <label className="block text-xs">Cylinder (CYL)</label>
                <input value={od.cyl} onChange={(e) => setOd(s => ({ ...s, cyl: e.target.value }))} className="w-full p-2 border rounded mb-2" placeholder="-0.75" />

                <label className="block text-xs">Axis</label>
                <input value={od.axis} onChange={(e) => setOd(s => ({ ...s, axis: e.target.value }))} className="w-full p-2 border rounded mb-2" placeholder="0 - 180" />

                <label className="block text-xs">Add (for multifocal)</label>
                <input value={od.add} onChange={(e) => setOd(s => ({ ...s, add: e.target.value }))} className="w-full p-2 border rounded" placeholder="e.g. +1.50" />
              </div>

              <div className="p-3 border rounded">
                <div className="font-medium mb-2">Left Eye (OS)</div>
                <label className="block text-xs">Sphere (SPH)</label>
                <input value={os.sph} onChange={(e) => setOs(s => ({ ...s, sph: e.target.value }))} className="w-full p-2 border rounded mb-2" placeholder="+1.25 or -2.50" />

                <label className="block text-xs">Cylinder (CYL)</label>
                <input value={os.cyl} onChange={(e) => setOs(s => ({ ...s, cyl: e.target.value }))} className="w-full p-2 border rounded mb-2" placeholder="-0.75" />

                <label className="block text-xs">Axis</label>
                <input value={os.axis} onChange={(e) => setOs(s => ({ ...s, axis: e.target.value }))} className="w-full p-2 border rounded mb-2" placeholder="0 - 180" />

                <label className="block text-xs">Add (for multifocal)</label>
                <input value={os.add} onChange={(e) => setOs(s => ({ ...s, add: e.target.value }))} className="w-full p-2 border rounded" placeholder="e.g. +1.50" />
              </div>
            </div>

            <div className="mt-4 grid grid-cols-1 md:grid-cols-4 gap-3">
              <div>
                <label className="block text-xs">PD (Pupillary Distance)</label>
                <input value={pd} onChange={(e) => setPd(e.target.value)} className="w-full p-2 border rounded" placeholder="e.g. 63" />
              </div>

              <div>
                <label className="block text-xs">Material / Index</label>
                <select value={material} onChange={(e) => setMaterial(e.target.value)} className="w-full p-2 border rounded">
                  <option value="1.50">1.50</option>
                  <option value="1.56">1.56</option>
                  <option value="1.59">1.59</option>
                  <option value="1.61">1.61</option>
                  <option value="1.67">1.67</option>
                  <option value="1.74">1.74</option>
                </select>
              </div>

              <div>
                <label className="block text-xs">Coatings</label>
                <div className="flex flex-wrap gap-2 mt-2">
                  {["AR", "Hard Coat", "Blue Light", "Photo", "Tint"].map((c) => (
                    <button
                      key={c}
                      type="button"
                      onClick={() => toggleCoating(c)}
                      className={`text-xs px-2 py-1 border rounded ${coatings.includes(c) ? "bg-blue-50 border-blue-400" : ""}`}
                    >
                      {c}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs">Quantity</label>
                <input type="number" value={qty} onChange={(e) => setQty(Number(e.target.value) || 1)} min={1} className="w-full p-2 border rounded" />
              </div>
            </div>

            <div className="mt-4 flex gap-3">
              <button type="button" onClick={handleCalculate} className="bg-indigo-600 text-white px-4 py-2 rounded">Calculate Price</button>
              <button type="button" onClick={handleAddToCartWithLens} className="bg-green-600 text-white px-4 py-2 rounded">Add To Cart (with lens)</button>
              <div className="ml-auto text-sm text-gray-500">Selected lens: <span className="font-medium">{selectedLensLabel ?? "None"}</span></div>
            </div>

            {errors.length > 0 && (
              <div className="mt-3 text-red-600">
                {errors.map((e, i) => <div key={i}>• {e}</div>)}
              </div>
            )}

            {calcResult && (
              <div className="mt-4 p-4 border rounded bg-gray-50">
                <div className="flex justify-between items-start">
                  <div>
                    <div className="text-lg font-semibold">Total: ₹{calcResult.breakdown.total.toFixed(2)}</div>
                    <div className="text-sm text-gray-600">Incl. GST (18%)</div>
                  </div>
                  <div className="text-right text-xs text-gray-600">
                    Qty: {calcResult.breakdown.qty}
                  </div>
                </div>

                <div className="mt-3 grid grid-cols-2 gap-2 text-sm">
                  <div>Lens base</div><div>₹{calcResult.breakdown.lensBase}</div>
                  <div>Sphere surcharge</div><div>₹{calcResult.breakdown.sphereCharge}</div>
                  <div>Cylinder surcharge</div><div>₹{calcResult.breakdown.cylCharge}</div>
                  <div>Material multiplier</div><div>x{calcResult.breakdown.materialMultiplier}</div>
                  <div>Coatings</div><div>₹{calcResult.breakdown.coatingsTotal}</div>
                  <div>Tax (18%)</div><div>₹{calcResult.breakdown.tax}</div>
                </div>

                {calcResult.warnings?.length > 0 && (
                  <div className="mt-3 text-yellow-700">
                    {calcResult.warnings.map((w, i) => <div key={i}>⚠ {w}</div>)}
                  </div>
                )}

                <pre className="mt-3 text-xs text-gray-600">
                  {JSON.stringify(calcResult.breakdown, null, 2)}
                </pre>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="w-full flex flex-col bg-gray-50 mx-auto mt-6">
        <div className="w-11/12 px-3 mx-auto mt-3 rounded-md">
          <h1 className="text-lg font-semibold">Recently Viewed</h1>
        </div>

        <RecentlyViewed showItemDefault={3} api={API} recentlyUrl={`${API}/api/recently-views`} />
      </div>
    </div>
  );
}

function RecentlyViewed({ showItemDefault = 3, api, recentlyUrl }) {
  const [recently, setRecently] = useState([]);
  const [showItem, setShowItem] = useState(showItemDefault);

  useEffect(() => {
    async function fetchRV() {
      try {
        const token = localStorage.getItem("token");
        const headers = token ? { Authorization: `Bearer ${token}` } : {};
        const res = await axios.get(recentlyUrl, { headers });
        setRecently(res.data.r_viewed || []);
      } catch (e) {
        setRecently([]);
      }
    }
    fetchRV();
  }, [recentlyUrl]);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-11/12 mx-auto p-5 mt-3 rounded-md">
      {recently.length > 0 ? (
        recently.slice(0, showItem).map((item) => {
          const fullUrl = `${api}/uploads/${item.image}`;
          return (
            item.category_id === 1 && (
              <div key={item.id} className="flex flex-col rounded-xl w-full shadow-sm hover:shadow-lg transition p-4 gap-3 bg-white">
                <img className="w-full h-56 sm:h-64 lg:h-60 object-contain rounded-md" src={fullUrl} alt={item.name} />
                <div className="bg-[#f5f5ff] flex rounded-xl items-center gap-1 w-12 px-3 py-2"><TiStar className="text-[#68d1d9]" /></div>
                <h2 className="text-sm font-semibold text-left pt-1">{item.name}</h2>
                <div className="flex justify-between w-full rounded-md mt-1">
                  <div className="flex gap-3 items-center">
                    <span className="font-bold text-sm">₹{item.sell_price}</span>
                    <span className="text-gray-500 line-through text-sm">₹{item.price}</span>
                  </div>
                </div>
              </div>
            )
          );
        })
      ) : (
        <p className="text-center col-span-full text-gray-600">No products found 😕</p>
      )}
      {recently.length > showItem && (
        <div className="col-span-full flex justify-center mt-4">
          <button type="button" className="border rounded-md bg-teal-300 px-3 py-1" onClick={() => setShowItem(s => s + 3)}>View more</button>
        </div>
      )}
    </div>
  );
}

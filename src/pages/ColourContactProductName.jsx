
import { TiStar } from "react-icons/ti";
import axios from "axios";
import React, { useState, useEffect, useRef } from "react";
import { useParams, useLocation } from "react-router-dom";

import { CartContext } from "../context/CartContext";
import { useContext } from "react";

const API = "http://localhost:5000";

const ColourContactProductName = () => {
  const location = useLocation();
  const { id } = useParams();
  const [selectedOption, setSelectedOption] = useState(null);
  const [active, setActive] = useState(0);

  let item = location.state;
 
  
  const handleScroll = (e) => {
    const width = e.target.offsetWidth;
    const index = Math.round(e.target.scrollLeft / width);
    setActive(index);
  };

  if (!item) {
    const params = new URLSearchParams(location.search);
    const encoded = params.get("data");

    if (encoded) {
      try {
        item = JSON.parse(decodeURIComponent(encoded));
         console.log('item----------', item)
      } catch (e) {
        // console.log("decode error", e);
      }
    }
  }

  const startX = useRef(0);
  const isSliding = useRef(false);

  const handleTouchStart = (e) => {
    startX.current = e.touches[0].clientX;
    isSliding.current = false;
  };

  const handleTouchMove = (e) => {
    const diff = e.touches[0].clientX - startX.current;
    if (Math.abs(diff) > 50 && !isSliding.current) {
      if (diff < 0 && active < item.gallery_images.length - 1) {
        setActive(active + 1);
      }
      if (diff > 0 && active > 0) {
        setActive(active - 1);
      }
      isSliding.current = true;
    }
  };

  // console.log("matchedReview", item?.matchedReview);

  const { handleAddToCart, addToCart, fetchCartItem } = useContext(CartContext);
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState(1);
  const [recently, setRecently] = useState([]);
  const [showItem, setShowItem] = useState(3);

  const lensOptions = [
    {
      label: "Single Vision",
      content:
        "Single vision lenses help you see clearly for one field – distance or reading.",
    },
    {
      label: "Bifocal / Progressive",
      content:
        "Bifocal/Progressive lenses give you multi-distance clarity without line separation.",
    },
    {
      label: "Zero Power",
      content:
        "Zero power lenses are for fashion use or computer protection with no correction.",
    },
    {
      label: "Frame Only",
      content: "You can purchase only the frame without any lenses fitted.",
    },
  ];

  // console.log( 'item', item)

  useEffect(() => {
    const addRecentlyViews = async () => {
      try {
        const res = await axios.post(
          `http://localhost:5000/api/recently-views`,
          { item },
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
      } catch (err) {
        console.log(err);
      }
    };

    addRecentlyViews();
    const getAllRecentlyViews = async () => {
      try {
        const res = await axios.get(
          `http://localhost:5000/api/recently-views`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        
         console.log('ddddddddd=====',res.data.r_viewed)
        setRecently(res.data.r_viewed);
      } catch (err) {
        console.log(err);
      }
    };

    getAllRecentlyViews();
  }, []);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <div className="flex flex-col ">
      <div className="h-[80vh] flex flex-col md:flex-row items-center justify-center  px-4  bg-gray-50 relative">
        <div className="flex flex-col md:flex-row   justify-center ">
         

          <div className="md:w-1/2   ">
            <div
              className="block sm:hidden "
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
            >
              <img
                src={`${API}/uploads/${item.gallery_images[active]}`}
                alt=""
                className="w-full border"
              />

              <div className="flex justify-center gap-2 mt-3 ">
                {item.gallery_images.map((_, i) => (
                  <div
                    key={i}
                    onClick={() => setActive(i)}
                    className={`w-3 h-3 rounded-full cursor-pointer ${
                      active === i ? "bg-black" : ""
                    }`}
                  ></div>
                ))}
              </div>
            </div>

            <div className="hidden sm:grid grid-cols-2 gap-2 ">
              {item.gallery_images.map((val, i) => (
                <img
                  key={i}
                  src={`${API}/uploads/${val}`}
                  alt=""
                  className="w-full border"
                />
              ))}
            </div>
          </div>

          <div className="md:w-1/3 mt-8 md:mt-0 md:pl-10 z-0 ">
            <h2 className="text- font-semibold text-gray-900">{item.name}</h2>

            <div className="mt-4 ">
              <div className="flex items-center gap-3 ">
                <span className="text-xl font-bold text-[#000042]">
                  <p> {item?.sell_price}</p>
                </span>
                <span className="line-through text-gray-400">
                  {item?.price}
                </span>
                <span className="text-sm text-gray-600">(Incl. GST)</span>
              </div>
            </div>

            <div className="mt-1 flex  items-center gap-5 ">
              <button
                onClick={() => setOpen(true)}
                className="w-full md:w-auto bg-[#11daac] text-[#000042] px-5 py-2 rounded-xl  transition"
              >
                Select lenses
              </button>

              <button
                className="px-5 py-2 flex gap-2  bg-[#11daac] te-[#000042] rounded-xl"
                onClick={() => {
                  handleAddToCart(item);
                  addToCart(item?.matchedReview, item);
                }}
              >
                Add to cart
              </button>
            </div>

            <div className="mt-6 text-sm text-gray-600">
              <p>
                Product id
                <span className="font-medium">
                  {"   "}
                  {item?.id}{" "}
                </span>
              </p>
              <p>
                Order on Phone:{" "}
                <span className="font-medium">+91 8470007367 </span>
              </p>
              <p>
                category_id :{" "}
                <span className="font-medium">
                  {"   "}
                  {item?.category_id}
                </span>
              </p>
              <p>
                gender :{" "}
                <span className="font-medium">
                  {"   "}
                  {item?.gender}
                </span>
              </p>
              <p>
                brand_name :{" "}
                <span className="font-medium">
                  {"   "}
                  {item?.brand_name}
                </span>
              </p>
              <p>
                rating :{" "}
                <span className="font-medium">
                  {"   "}
                  {item.matchedReview?.rating}
                </span>
              </p>
            </div>
          </div>
        </div>
        {open && (
          <div className="fixed inset-0 z-50">
            <div
              className="fixed inset-0 bg-black bg-opacity-40 transition-opacity "
              onClick={() => setOpen(false)}
            />
   

            <div className="fixed right-0 top-0 h-full w-full sm:w-[420px] bg-white shadow-xl transform transition-transform duration-300 translate-x-0 z-50">
              <div className="relative p-6 h-full flex flex-col  z-50">
                {/* HEADER */}
                <div className="flex items-center justify-between ">
                  <h3 className="text-lg font-semibold">Select Lens Type</h3>
                  <button
                    onClick={() => setOpen(false)}
                    className="text-gray-600 px-3 py-1 rounded hover:bg-gray-100"
                  >
                    ✕
                  </button>
                </div>

                {/* CONTENT */}
                <div className="mt-4 overflow-auto">
                  <div className="mb-4">
                    <p className="font-medium">{item?.name || itemName}</p>
                    <p className="text-sm text-gray-500">
                      Price: {item?.price}
                    </p>
                  </div>

                  <div className="space-y-3  relative">
                    {/* OPTIONS LIST */}
                    <div className="z-40">
                      {lensOptions.map((option, index) => (
                        <button
                          onClick={() => {
                            setSelectedOption(option.label); // FIXED
                            // console.log(option.label);
                          }}
                          key={index}
                          className="w-full text-left px-4 py-3 border rounded-lg"
                        >
                          {option.label}
                        </button>
                      ))}
                    </div>

                    {/* OVERLAY — Single Vision */}
                    {selectedOption === "Single Vision" && (
                      <div className="absolute top-0 right-0 w-full h-full bg-white  z-50 p-5">
                        <button
                          className="text-sm mb-3 text-blue-600"
                          onClick={() => setSelectedOption(null)}
                        >
                          ← Back
                        </button>

                        <h2 className="text-xl font-semibold mb-2">
                          Single Vision
                        </h2>
                        <p className="text-gray-600">
                          Single Vision lenses help with distance or reading.
                        </p>
                      </div>
                    )}

                    {/* OVERLAY — Bifocal */}
                    {selectedOption === "Bifocal / Progressive" && (
                      <div className="absolute top-0 right-0 w-full h-full bg-white  z-50 p-5">
                        <button
                          className="text-sm mb-3 text-blue-600"
                          onClick={() => setSelectedOption(null)}
                        >
                          ← Back
                        </button>

                        <h2 className="text-xl font-semibold mb-2">
                          Bifocal / Progressive
                        </h2>
                        <p className="text-gray-600">
                          Bifocal & Progressive lenses allow multiple vision
                          strengths.
                        </p>
                      </div>
                    )}

                    {/* OVERLAY — Zero Power */}
                    {selectedOption === "Zero Power" && (
                      <div className="absolute top-0 right-0 w-full h-full bg-white  z-50 p-5">
                        <button
                          className="text-sm mb-3 text-blue-600"
                          onClick={() => setSelectedOption(null)}
                        >
                          ← Back
                        </button>

                        <h2 className="text-xl font-semibold mb-2">
                          Zero Power
                        </h2>
                        <p className="text-gray-600">
                          Zero power lenses for computer or protection.
                        </p>
                      </div>
                    )}

                    {/* OVERLAY — Frame Only */}
                    {selectedOption === "Frame Only" && (
                      <div className="absolute top-0 right-0 w-full h-full bg-white  z-50 p-5">
                        <button
                          className="text-sm mb-3 text-blue-600"
                          onClick={() => setSelectedOption(null)}
                        >
                          ← Back
                        </button>

                        <h2 className="text-xl font-semibold mb-2">
                          Frame Only
                        </h2>
                        <p className="text-gray-600">
                          Purchase frame only without lenses.
                        </p>
                      </div>
                    )}
                  </div>
                </div>

                {/* FOOTER */}
                <div className="mt-auto text-xs text-gray-400">
                  <p>Need help? Call +91 8470007367</p>
                </div>
              </div>
            </div>
          </div>
        )}{" "}
      </div>

    

      <div className="w-full flex flex-col  bg-gray-50 mx-auto">
        <div className=" w-11/12 px-3 mx-auto mt-3 rounded-md ">
          <h1 className="text-lg font-semibold">Recently Viewed</h1>
        </div>

        <div className="sm:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-11/12 mx-auto   p-5 mt-3 rounded-md">
          {recently.length > 0 ? (
            recently.slice(0, showItem).map((item) => {
              const fullUrl = `http://localhost:5000/uploads/${item.image}`;

              return (
               item.category_id === 5 && ( <div
                  key={item.id}
                  className="flex flex-col rounded-xl w-full shadow-sm hover:shadow-lg transition p-4 border gap-3 bg-white"
                >
                  <div > 
                  {/* Image */}
                  <img
                    className="w-full h-56 sm:h-64 lg:h-60 object-contain rounded-md"
                    src={fullUrl}
                    alt="product"
                  />

                  {/* Rating badge */}
                  <div className="bg-[#f5f5ff] flex rounded-xl items-center gap-1 w-12 px-3 py-2">
                    <TiStar className="text-[#68d1d9]" />
                  </div>

                  {/* Name */}
                  <h2 className="text-sm font-semibold text-left pt-1">
                    {item.name}
                  </h2>

                  {/* Price section */}
                  <div className="flex justify-between w-full rounded-md mt-1">
                    <div className="flex gap-3 items-center">
                      <span className="font-bold text-sm">
                        ₹{item.sell_price}
                      </span>

                      <span className="text-gray-500 line-through text-sm">
                        ₹{item.price}
                      </span>
                    </div>
                  </div>
                  </div>
                </div>)
              );
            })
          ) : (
            <p className="text-center col-span-full text-gray-600">
              No products found 😕
            </p>
          )}
        </div>

        <div className="flex items-center justify-center font-semibold mb-4 ">
       { recently.length > showItem && (   <button
            className="border rounded-md bg-teal-300 px-3 py-1"
            onClick={() => setShowItem(showItem + 3)}
          >
            View more{" "}
          </button> )}
        </div>


      </div>
    </div>
  );
};

export default ColourContactProductName;

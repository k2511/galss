
import { toast } from "react-hot-toast";
import { RxCross1 } from "react-icons/rx";
import { FaChevronDown } from "react-icons/fa";
import React, { useState, useEffect } from "react";
import { IoCartOutline } from "react-icons/io5";
import { CartContext } from "../context/CartContext";
import { useContext } from "react";
import axios from "axios";
import { TiStar } from "react-icons/ti";
import { useNavigate } from "react-router-dom";

const API = "http://localhost:5000/api";

const SunglassesWomen = () => {
    
  const [showFilter, setShowFilter] = useState(false);
  const [priceOpen, setPriceOpen] = useState(false);
  const [selectedType, setSelectedType] = useState("All");
  const [selectedPrice, setSelectedPrice] = useState(null);
  const [products, setProducts] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [galImg, setGalImg] = useState([]);
  const [showItem, setShowItem] = useState(6);

  const navigate = useNavigate()

  const priceRanges = [
    { label: "₹1 - ₹499", min: 1, max: 499 },
    { label: "₹500 - ₹999", min: 500, max: 999 },
    { label: "₹1000 - ₹1499", min: 1000, max: 1499 },
    { label: "₹1500 - ₹1999", min: 1500, max: 1999 },
    { label: "₹2000 - ₹2499", min: 2000, max: 2499 },
    { label: "₹2500 - ₹2999", min: 2500, max: 2999 },
    { label: "₹3000 - ₹5000", min: 3000, max: 5000 },
  ];

  const eyeglass = [
    {
      img: "https://static5.lenskart.com/media/uploads/All-New.png",
      name: "All",
    },
    {
      img: "	https://static1.lenskart.com/media/desktop/img/2024/jan/premium.png",
      name: "Premium",
    },
    {
      img: "	https://static1.lenskart.com/media/desktop/img/2024/jan/regular-1.png",
      name: "Budget",
    },
  ];

 
  const updatedRanges = priceRanges.map((range) => {
    const count = products.filter((lens) =>
      Number(
        lens.category_name === "Eyeglasses" &&  lens.gender === 'men' && 
          lens.sell_price >= range.min &&
          Number(lens.sell_price) <= range.max
      )
    ).length;

    return { ...range, count };
  });

  const filteredProducts = products.filter((p) => {
    let matchesType = true;

    if (p.category_name === "Eyeglasses" && p.gender === "men") {
      if (selectedType === "Premium") {
        matchesType = p.sell_price > 1500;
      } else if (selectedType === "All") {
        matchesType = true;
      }

      const matchesPrice =
        !selectedPrice ||
        (Number(p.sell_price) >= selectedPrice.min &&
          Number(p.sell_price) <= selectedPrice.max);
      return matchesType && matchesPrice;
    }
  });

  const { handleAddToCart, addToCart, fetchCartItem } = useContext(CartContext);

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

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get(`${API}/products`);
        // console.log(res.data);
        setProducts(res.data);
      } catch (err) {
        console.error("Error fetching products:", err);
      }
    };

    fetchProducts();
  }, []);


        useEffect(() => {
          const fetchReviews = async () => {
            try {
              const res = await axios.get(`${API}/reviews`);
              // console.log('reviews',res.data);

              setReviews(res.data);
            } catch (err) {
              console.error("Error fetching products:", err);
            }
          };

          fetchReviews();
          fetchCartItem()
          
        }, []);

  // console.log("prodddd----", filteredProducts);

  return (
    <div className=" text-center  ">
      {!showFilter && (
        <div className="w-full  mx-auto flex flex-row overflow-y-auto justify-between sm:gap-2 gap-1 items-start ">
          <aside className="  sticky lg:block hidden top-0 lg:h-[85vh] lg:w-1/5 min-w-1/4 
           rounded-xl shadow-sm bg-white sm:p-4 p-0  overflow-y-auto border
            scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100  ">
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
              {updatedRanges && priceOpen && (
                <div className="flex flex-col gap-2 ">
                  {updatedRanges.map((range) => (
                    <div className="flex justify-between">
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

                      <h5>
                        {" "}
                        <span className="text-[#8b8b8b]">
                          ({range.count})
                        </span>{" "}
                      </h5>
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

          <main className="w-full lg:w-4/7  mx-auto min-h-screen ">
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
              {eyeglass.map((data, id) => (
                <div className="">
                  <div className=" ">
                    <div className="flex items-center justify-center ">
                      {" "}
                      <img src={data.img} className="w-7 h-5" />
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
                      </button>{" "}
                    </div>{" "}
                  </div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:gap-6 gap-3 ">
              {filteredProducts.length > 0 ? (
                filteredProducts.slice(0,showItem).map((item) => {
                  const offPrice = Number(item.sell_price);

                  let matchedReview =
                    item.category_name === "Eyeglasses" && item.gender === "men" && 
                    reviews.find((r) => r.product_id === item.id);
                 

                  const firstImage = item.gallery_images && item.gallery_images.length > 0 
                        ? item.gallery_images[0] 
                        : null;

                        const fullUrl = firstImage ? `http://localhost:5000/uploads/${firstImage}` : "/no-image.png";

                        // console.log("i", fullUrl);
            

                   
                  // item.sell_price - (item.sell_price * item.discount) / 100;
                  return (
                    <div
                      key={item.id}
                      className=" rounded-xl w-full shadow-sm hover:shadow-lg transition p-3 text-center bg-white border group "
                      // onClick={() => {
                      //   navigate(`/eyeglasses/${encodeURIComponent(item.name)}`, { state: item });
                      // }}
                      onClick={() => {
                        const dataToSend = {
                          ...item,
                          matchedReview: matchedReview || null
                        };
                        const encodedState = encodeURIComponent(JSON.stringify(dataToSend));
                        window.open(`/eyeglasses/${encodeURIComponent(item.name)}?data=${encodedState}`, "_blank");
                      }}
                    >
                      <img
                        src={item.image_url}
                        alt={item.name}
                        className="w-full h-60 sm:h-72 lg:h-60 object-contain xl:mb-3 group-hover:hidden"
                      />

                      <img  className="w-full h-60 sm:h-72 lg:h-60 object-contain  hidden group-hover:block"
                        src={fullUrl} 
                        alt="product"
                      />


                      <div className="bg-[#f5f5ff] flex rounded-xl items-center gap-1 w-12 px-3 py-2" >
                        <span className="font-semibold text-xs flex items-center">
                          {matchedReview ? Number(matchedReview.rating) : 0}
                        </span>
                        <TiStar className="text-[#68d1d9]" />
                      </div>

                      <h2 className="text-sm font-semibold text-left pt-3">
                        {item.name}
                      </h2>
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
                        <div className=" flex rounded-md bg-sky-100 overflow-hidden">
                                 {/* <button
                                  className="w-full     py-1 r    transition-colors"
                                >
                                  Buy now
                                </button> */}
                       
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
            <div className="flex items-center justify-center font-semibold my-4 ">
               {/* <button className="border rounded-md bg-teal-300 px-3 py-1"   onClick={() => setShowItem(showItem + 3)} >View more </button> */}
               { filteredProducts.length > showItem && (   <button
            className="border rounded-md bg-teal-300 px-3 py-1"
            onClick={() => setShowItem(showItem + 3)}
          >
            View more{" "}
          </button> )}
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
          <aside className="  lg:sticky lg:top-0 lg:h-[90vh] w-full px-3 shadow-sm  sm:p-4 p-0  overflow-y-scroll scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100">
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

    </div>
  );
};

export default SunglassesWomen;


import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Search, User, ShoppingBag, Heart, ChevronDown , Truck ,LifeBuoy, Accessibility } from "lucide-react";
import { toggleLoginModal } from "../features/user/userSlice";
import { toggleCart } from "../features/cart/cartSlice";
import { Link } from "react-router-dom";
import logo from "../assets/img/logo.png";
import DropdownMenu from "../components/DropdownMenu";
import EyeglassesDropdown from "../innerPages/EyeglassesDropdown";
import SunglassesDropdown from "../innerPages/SunglassesDropdown";
import ContactDropdown from "../innerPages/ContactsDropdown";
import LensesDropdown from "../innerPages/LensesDropdown";
import StoreDropdown from "../innerPages/StoreDropdown";
import BrandsDropdown from "../innerPages/BrandsDropdown";
import SalesDropdown from "../innerPages/SalesDropdown";
import { IoMenu } from "react-icons/io5";
import { X } from "lucide-react";
import { MdKeyboardArrowRight } from "react-icons/md";
import NavbarDropdown from "./NavbarDropdown";
import rooseveltImage from "../assets/stores/store1.avif";
import floridaImage from "../assets/stores/store2.avif";
import natickImage from "../assets/stores/store3.avif";
import glassesSaleImage from "../assets/sales/sales1.avif";
import sunglassesSaleImage from "../assets/sales/sales2.avif";
import designerOutletImage from "../assets/sales/sales3.avif";
import salesCouponsImage from "../assets/sales/sales4.avif";

import rayban from "../assets/brands/rayban.jpg";
import oakley from "../assets/brands/oakley.jpg";
import mk from "../assets/brands/mk.jpg";
import burberry from "../assets/brands/burberry.jpg";
import coach from "../assets/brands/coach.jpg";
import ax from "../assets/brands/ax.jpg";
import versace from "../assets/brands/versace.jpg";

import persol from "../assets/brands/persol.jpg";
import ottoto from "../assets/brands/ottoto.jpg";

import prada from "../assets/brands/prada.jpg";
import gucci from "../assets/brands/gucci.jpg";
import tomford from "../assets/brands/tomford.jpg";
import dolce from "../assets/brands/dolce.jpg";
import oliver from "../assets/brands/oliver.jpg";
import armani from "../assets/brands/armani.jpg";
import garrett from "../assets/brands/garrett.jpg";

// import {RiArrowRightSLine } from "react-icons/ri";
const nav = [
  { name: "Eyeglasses" },
  { name: "Sunglasses" },
  { name: "Brands" },
  { name: "Contacts" },
  { name: "Lenses" },
  { name: "Stores" },
  { name: "Sale" },
];

const BrandTile = ({ brand }) => {
  return (
    <Link
      to={brand.path}
      className="flex items-center justify-center border border-gray-200 rounded-lg py-4 px-6 bg-gray-50 hover:bg-gray-100 transition cursor-pointer"
      title={brand.name}
    >
      <img
        src={brand.img}
        alt={brand.name}
        loading="lazy"
        className="max-h-7 w-full object-contain"
        onError={(e) => {
          e.currentTarget.onerror = null;
          e.currentTarget.src = PLACEHOLDER_SVG;
        }}
      />
    </Link>
  );
};

const Header = () => {
  const dispatch = useDispatch();
  const { totalQuantity } = useSelector((state) => state.cart);
  const [eyeglass, setEyeglass] = useState(false);

  const [sunglass, setSunglass] = useState(false);
  const [brand, setBrand] = useState(false);
  const [contactlense, setContactLense] = useState(false);
  const [lense, setLense] = useState(false);
  const [sale, setSale] = useState(false);
  const [store, setStore] = useState(false);

  const [open, setOpen] = useState(false);

  const [activeMenu, setActiveMenu] = useState(null); // Track which menu is open
  const [showSubMenu, setShowSubMenu] = useState(false);

  const handleMenuClick = (menuName) => {
    setActiveMenu(menuName);
    setShowSubMenu(true);
  };

  const closeSubMenu = () => {
    setShowSubMenu(false);
    setActiveMenu(null);
  };

  const PLACEHOLDER_SVG =
    'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="36"><rect width="100%" height="100%" fill="%23f3f4f6"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23888" font-family="Arial,sans-serif" font-size="12">No image</text></svg>';

  const PREMIUM_BRANDS = [
    { name: "Ray-Ban", img: rayban, path: "/brands/rayban" },
    { name: "Oakley", img: oakley, path: "/brands/oakley" },
    { name: "Michael Kors", img: mk, path: "/brands/michael-kors" },
    { name: "Burberry", img: burberry, path: "/brands/burberry" },
    { name: "Coach", img: coach, path: "/brands/coach" },
    { name: "Kate Spade", img: PLACEHOLDER_SVG, path: "/brands/kate" },
    { name: "Armani Exchange", img: ax, path: "/brands/armani" },
    { name: "Versace", img: versace, path: "/brands/versace" },
    { name: "Muse", img: PLACEHOLDER_SVG, path: "/brands/muse" },
    { name: "Persol", img: persol, path: "/brands/persol" },
    { name: "Ottoto", img: ottoto, path: "/brands/ottoto" },
  ];

  const LUXURY_BRANDS = [
    { name: "Prada", img: prada, path: "/brands/prada" },
    { name: "Gucci", img: gucci, path: "/brands/gucci" },
    { name: "Tom Ford", img: tomford, path: "/brands/tom-ford" },
    { name: "Dolce & Gabbana", img: dolce, path: "/brands/dolce-gabbana" },
    { name: "Oliver Peoples", img: oliver, path: "/brands/oliver-peoples" },
    { name: "Giorgio Armani", img: armani, path: "/brands/giorgio-armani" },
    { name: "Garrett Leight", img: garrett, path: "/brands/garrett-leight" },
  ];

 
  const TEXT_BRANDS_COL1 = [
    { name: "Adidas", path: "/brands/adidas" },
    { name: "Arnette", path: "/brands/arnette" },
    { name: "Calvin Klein", path: "/brands/calvin" },
    { name: "Carrera", path: "/brands/carrera" },
    { name: "Costa", path: "/brands/costa" },
    { name: "Emporio Armani", path: "/brands/emporio" },
    { name: "ONeill", path: "/brands/oneill" },
  ];

  const TEXT_BRANDS_COL2 = [
    { name: "Nike", path: "/brands/nike" },
    { name: "Ralph Lauren", path: "/brands/ralph-lauren" },
    { name: "Saint Laurent", path: "/brands/saint-laurent" },
    { name: "Spy", path: "/brands/spy" },
    { name: "Tory Burch", path: "/brands/tory-burch" },
    { name: "Wiley X", path: "/brands/wiley-x" },
  ];

  return (
    <>
      {/* Desktop Header */}
      <header className="w-full  bg-white border-b shadow-sm flex relative z-50">
        <div className=" mx-auto w-full flex items-center justify-between h-16 xl:px-8 px-2">
          {/* Logo */}
          <div className="flex "> 
          <div className="md:hidden block ">
            <IoMenu className="text-3xl mx-2" onClick={() => setOpen(true)} />
          </div>
          
          <div> 
             <Link to="/">
            <img
              src={logo}
              alt="logo"
              className="h-7 min-w-28 sm:w-32 w-28 lg:mr-8 mr-3"
            />
           </Link>
          </div>
          </div>


          {/* Navigation */}

          <nav className="hidden md:flex flex-1 xl:space-x-5 lg:space-x-4 space-x-2 relative ml-2">
            {nav.map((item) =>
              item.name === "Eyeglasses" ? (
                <DropdownMenu
                  key={item.name}
                  trigger={
                    <span className="flex items-center xl:text-base text-sm font-normal cursor-pointer hover:text-blue-600">
                      Eyeglasses
                      {/* <ChevronDown size={16} className="ml-1" /> */}
                    </span>
                  }
                >
                  <EyeglassesDropdown />
                </DropdownMenu>
              ) : item.name === "Sunglasses" ? (
                <DropdownMenu
                  key={item.name}
                  trigger={
                    <span className="flex items-center xl:text-base text-sm font-normal cursor-pointer hover:text-blue-600">
                      Sunglasses
                      {/* <ChevronDown size={16} className="ml-1" /> */}
                    </span>
                  }
                >
                  <SunglassesDropdown />
                </DropdownMenu>
              ) : item.name === "Brands" ? (
                <DropdownMenu
                  key={item.name}
                  trigger={
                    <span className="flex items-center xl:text-base text-sm font-normal cursor-pointer hover:text-blue-600">
                      Brands
                      {/* <ChevronDown size={16} className="ml-1" /> */}
                    </span>
                  }
                >
                  <BrandsDropdown />
                </DropdownMenu>
              ) : item.name === "Contacts" ? (
                <DropdownMenu
                  key={item.name}
                  trigger={
                    <span className="flex items-center xl:text-base text-sm font-normal cursor-pointer hover:text-blue-600">
                      Contacts
                      {/* <ChevronDown size={16} className="ml-1" /> */}
                    </span>
                  }
                >
                  <ContactDropdown />
                </DropdownMenu>
              ) : item.name === "Lenses" ? (
                <DropdownMenu
                  key={item.name}
                  trigger={
                    <span className="flex items-center xl:text-base text-sm font-normal cursor-pointer hover:text-blue-600">
                      Lenses
                      {/* <ChevronDown size={16} className="ml-1" />       */}
                    </span>
                  }
                >
                  <LensesDropdown />
                </DropdownMenu>
              ) : item.name === "Stores" ? (
                <DropdownMenu
                  key={item.name}
                  trigger={
                    <span className="flex items-center xl:text-base text-sm font-normal cursor-pointer hover:text-blue-600">
                      Stores
                      {/* <ChevronDown size={16} className="ml-1" /> */}
                    </span>
                  }
                >
                  <StoreDropdown />
                </DropdownMenu>
              ) : item.name === "Sale" ? (
                <DropdownMenu
                  key={item.name}
                  trigger={
                    <span className="flex items-center xl:text-base text-sm font-normal cursor-pointer text-red-600 hover:text-blue-600">
                      Sale
                      {/* <ChevronDown size={16} className="ml-1" /> */}
                    </span>
                  }
                >
                  <SalesDropdown />
                </DropdownMenu>
              ) : (
                <Link
                  key={item.name}
                  to={`/${item.name.toLowerCase()}`}
                  className={`xl:text-base text-sm font-normal ${
                    item.name === "Sale"
                      ? "text-red-600"
                      : "text-black hover:text-blue-600"
                  }`}
                >
                  {item.name}
                </Link>
              )
            )}
          </nav>

          {/* Right Icons (Search, Wishlist, Cart, User) */}
          <div className="flex  lg:space-x-3 
           items-center sm:ml-2 ml-0">
            {/* Search Bar */}
            {/* <div className="flex justify-center items-center"> */}
            {/* <div className="flex items-center bg-gray-100 rounded-full lg:px-3 px-0 py-1.5 w-4/6 shadow-sm">
                <Search size={16} className="text-gray-400 xl:mr-2 " />
                <input
                  type="text"
                  placeholder="Search"
                  className="bg-transparent  outline-none w-full min-w-12 text-sm text-gray-700 placeholder-gray-400"
                />
              </div> */}

            <div className="flex items-center  bg-gray-100 h-8 rounded-full lg:px-3 py-1 px-2  w-[100px] sm:w-36 xl:w-44 shadow-sm ">
              {/* Search icon visible only below md */}
              <Search size={24} className="text-gray-400 xl:mr-2 block  ml-1" />

              <input
                type="text"
                placeholder="Search"
                className="bg-transparent outline-none w-full text-sm  text-gray-700 placeholder-gray-400 
                            md:placeholder-opacity-100 placeholder-opacity-0 
                            px-3 md:px-0 "
              />
              {/* </div> */}
            </div>

            {/* Wishlist */}
            <button className="p-1 hover:bg-gray-100 rounded-lg">
              <Heart size={20} className="text-gray-600" />
            </button>

            {/* Cart */}
            <button
              onClick={() => dispatch(toggleCart())}
              className="relative p-1 hover:bg-gray-100 rounded-lg"
            >
              <ShoppingBag size={20} className="text-gray-600" />
              {totalQuantity > 0 && (
                <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {totalQuantity}
                </span>
              )}
            </button>

            {/* Divider */}
            <span className="mx-2 h-7 w-px bg-gray-200" />

            {/* User/Login */}
            <button
              onClick={() => dispatch(toggleLoginModal())}
              className="flex items-center min-w-16 w-20 xl:gap-2 lg:gap-1  hover:bg-gray-100 rounded-lg"
            >
              <User size={20} className="text-gray-700" />
              <span className=" text-sm text-black">Log In </span>
            </button>
          </div>
        </div>
      </header>

      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-40 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        ></div>
      )}

      <div
        className={`fixed top-0 left-0 h-full  w-96  bg-white shadow-lg z-50 transform transition-transform duration-300 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center  bg-[#f8f8f8] justify-between p-4 border-b">
          <div className="">
            <button
              onClick={() => dispatch(toggleLoginModal())}
              className="flex items-center  gap-3 hover:bg-gray-100 rounded-lg"
            >
              <span className="ml-2 text-md text-black ">
                Log In / Sign up{" "}
              </span>
              <User size={20} className="text-gray-700" />
            </button>
          </div>

          <X
            className="cursor-pointer text-gray-600"
            onClick={() => setOpen(false)}
          />
        </div>

        <nav className=" flex flex-1 flex-col gap-10 relative h-[90vh]  overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100 ">
          <div className="space-y-3 font-bold">
            {nav.map((item) =>
              item.name === "Eyeglasses" ? (
                <div
                  className="flex justify-between px-3 pt-4"
                  onClick={() => setEyeglass(true)}
                >
                  <div>
                    <span className="flex items-center  text-lg  font-semibold cursor-pointer hover:text-blue-600">
                      Eyeglasses
                    </span>
                    {/* <EyeglassesDropdown /> */}
                  </div>

                  <div>
                    <MdKeyboardArrowRight className="text-2xl" />
                  </div>
                </div>
              ) : item.name === "Sunglasses" ? (
                <div
                  className="flex justify-between px-3"
                  onClick={() => setSunglass(true)}
                >
                  <div>
                    <span
                      className="flex items-center text-lg  font-semibold  cursor-pointer hover:text-blue-600"
                      onClick={() => handleMenuClick(item.name)}
                    >
                      Sunglasses
                      {/* <ChevronDown size={16} className="ml-1" /> */}
                    </span>

                    {/* <SunglassesDropdown /> */}
                  </div>

                  <div>
                    <MdKeyboardArrowRight className="text-2xl" />
                  </div>
                </div>
              ) : item.name === "Brands" ? (
                <div
                  className="flex justify-between px-3"
                  onClick={() => {
                    setBrand(true);
                  }}
                >
                  <div>
                    {/* <NavbarDropdown
                  key={item.name}
                  trigger={ */}
                    <span className="flex items-center text-lg  font-semibold  cursor-pointer hover:text-blue-600">
                      Brands
                      {/* <ChevronDown size={16} className="ml-1" /> */}
                    </span>
                    {/* }
                > */}
                    {/* <BrandsDropdown /> */}
                    {/* </NavbarDropdown> */}
                  </div>
                  <div>
                    <MdKeyboardArrowRight className="text-2xl" />
                  </div>
                </div>
              ) : item.name === "Contacts" ? (
                <div
                  className="flex justify-between px-3"
                  onClick={() => {
                    setContactLense(true);
                  }}
                >
                  <div>
                    {/* <NavbarDropdown
                  key={item.name}
                  trigger={ */}
                    <span className="flex items-center text-lg  font-semibold cursor-pointer hover:text-blue-600">
                      Contacts
                      {/* <ChevronDown size={16} className="ml-1" /> */}
                    </span>
                    {/* }
                > */}
                    {/* <ContactDropdown /> */}
                    {/* </NavbarDropdown> */}
                  </div>

                  <div>
                    <MdKeyboardArrowRight className="text-2xl" />
                  </div>
                </div>
              ) : item.name === "Lenses" ? (
                <div
                  className="flex justify-between px-3"
                  onClick={() => {
                    setLense(true);
                  }}
                >
                  <div>
                    {/* <NavbarDropdown
                  key={item.name}
                  trigger={ */}
                    <span className="flex items-center  text-lg cursor-pointer hover:text-blue-600">
                      Lenses
                      {/* <ChevronDown size={16} className="ml-1" />       */}
                    </span>
                    {/* }
                >
                  <LensesDropdown />
                </NavbarDropdown> */}
                  </div>
                  <div>
                    {" "}
                    <MdKeyboardArrowRight className="text-2xl" />
                  </div>
                </div>
              ) : item.name === "Stores" ? (
                <div
                  className="flex justify-between px-3"
                  onClick={() => {
                    setStore(true);
                  }}
                >
                  <div>
                    {/* <NavbarDropdown
                  key={item.name}
                  trigger={ */}
                    <span className="flex items-center  text-lg cursor-pointer hover:text-blue-600">
                      Stores
                      {/* <ChevronDown size={16} className="ml-1" /> */}
                    </span>
                    {/* }
                >
                  <StoreDropdown />
                </NavbarDropdown> */}
                  </div>
                  <div>
                    {" "}
                    <MdKeyboardArrowRight className="text-2xl" />
                  </div>
                </div>
              ) : item.name === "Sale" ? (
                <div
                  className="flex justify-between px-3"
                  onClick={() => setSale(true)}
                >
                  <div>
                    {/* <NavbarDropdown
                  key={item.name}         
                  trigger={ */}
                    <span className="flex items-center  text-lg cursor-pointer text-red-600 hover:text-blue-600">
                      Sale
                      {/* <ChevronDown size={16} className="ml-1" /> */}
                    </span>
                    {/* }
                >
                  <SalesDropdown />
                </NavbarDropdown> */}
                  </div>

                  <div>
                    {" "}
                    <MdKeyboardArrowRight className="text-2xl" />
                  </div>
                </div>
              ) : (
                <div className="flex justify-between px-3">
                  <div>
                    <Link
                      key={item.name}
                      to={`/${item.name.toLowerCase()}`}
                      className={` text-lg ${
                        item.name === "Sale"
                          ? "text-red-600"
                          : "text-black hover:text-blue-600"
                      }`}
                    >
                      {item.name}
                    </Link>
                  </div>
                </div>
              )
            )}
          </div>

          {eyeglass && (
            <div className="fixed top-0 right-0 w-full h-full bg-white shadow-2xl z-50 p-5">
              <button
                className="text-gray-600 text-xl mb-4"
                onClick={() => setEyeglass(false)}
              >
                ✕ Close
              </button>
              <div className="text-lg font-normal w-full flex flex-col h-[80vh] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100 p-4 ">
                <div className="flex-1 ">
                  <h3 className="font-semibold text-base mb-4">Eyeglasses</h3>
                  <ul className="space-y-2 text-[15px] text-gray-800 leading-relaxed">
                    <li onClick={() => {
                      setOpen(!open );
                      setEyeglass(!eyeglass)
                    }}>
                      <Link to="/ShopAllGlassesWomen">Shop All Eyeglasses</Link>
                    </li>
                    <li onClick={() => {
                      setOpen(!open );
                      setEyeglass(!eyeglass)
                    }}>
                      <Link to="/BestSellers">Best Sellers</Link>
                    </li>
                    <li onClick={() => {
                      setOpen(!open );
                      setEyeglass(!eyeglass)
                    }}>
                      <Link to="/DesignerGlasses">Designer Eyeglasses</Link>
                    </li>
                    <li onClick={() => {
                      setOpen(!open );
                      setEyeglass(!eyeglass)
                    }}>
                      <Link to="/OnSale">On Sale</Link>
                    </li>
                    <li onClick={() => {
                      setOpen(!open );
                      setEyeglass(!eyeglass)
                    }}>
                      <Link to="/DesignerOutlet">Designer Outlet</Link>
                    </li>
                    <li onClick={() => {
                      setOpen(!open );
                      setEyeglass(!eyeglass)
                    }}>
                      <Link to="/GirlsEyeglasses">Girls' Eyeglasses</Link>
                    </li>
                    <li onClick={() => {
                      setOpen(!open );
                      setEyeglass(!eyeglass)
                    }}>
                      <Link to="/NextDayDelivery">Next Day Delivery</Link>
                    </li>
                  </ul>
                </div>
 
                <div className="flex-1 ">
                  <h3 className="font-semibold text-base mb-4">Men</h3>
                  <ul className="space-y-2 text-[15px] text-gray-800 leading-relaxed   ">
                    <li onClick={() => {
                      setOpen(!open );
                      setEyeglass(!eyeglass)
                    }}>
                      <Link to="/ShopAllGlassesMen">Shop All Eyeglasses</Link>
                    </li>
                    <li onClick={() => {
                      setOpen(!open );
                      setEyeglass(!eyeglass)
                    }}>
                      <Link to="/BestSellers">Best Sellers</Link>
                    </li>
                    <li onClick={() => {
                      setOpen(!open );
                      setEyeglass(!eyeglass)
                    }}>
                      <Link to="/DesignerGlasses">Designer Eyeglasses</Link>
                    </li>
                    <li onClick={() => {
                      setOpen(!open );
                      setEyeglass(!eyeglass)
                    }}>
                      <Link to="/OnSale">On Sale</Link>
                    </li>
                    <li onClick={() => {
                      setOpen(!open );
                      setEyeglass(!eyeglass)
                    }}>
                      <Link to="/DesignerOutlet">Designer Outlet</Link>
                    </li>
                    <li onClick={() => {
                      setOpen(!open );
                      setEyeglass(!eyeglass)
                    }}>
                      <Link to="BoysEyeglasses">Boys' Eyeglasses</Link>
                    </li>
                    <li onClick={() => {
                      setOpen(!open );
                      setEyeglass(!eyeglass)
                    }}>
                      <Link to="/NextDayDelivery">Next Day Delivery</Link>
                    </li>
                  </ul>
                </div>

                {/* Progressive */}
                <div className="flex-1 ">
                  <h3 className="font-semibold text-base mb-4">Progressive</h3>
                  <ul className="space-y-2 text-[15px] text-gray-800 leading-relaxed">
                    <li>
                      <Link to="#">Shop All Progressives</Link>
                    </li>
                    <li>
                      <Link to="#">Women's Progressives</Link>
                    </li>
                    <li>
                      <Link to="#">Men's Progressives</Link>
                    </li>
                    <li>
                      <Link to="#">Bifocal Lenses</Link>
                    </li>
                  </ul>
                </div>

                <div className="flex-1 ">
                  <h3 className="font-semibold text-base mb-4">Featured</h3>
                  <ul className="space-y-2 text-[15px] text-gray-800 leading-relaxed">
                    <li>
                      <Link to="#" className="font-semibold text-blue-600">
                        <span className="italic font-bold">Pair</span>fect
                        Match™ Quiz
                      </Link>
                    </li>
                    <li>
                      <Link to="#">Blue Light Glasses</Link>
                    </li>
                    <li>
                      <Link to="#">Sports Glasses</Link>
                    </li>
                    <li>
                      <Link to="#">Safety Glasses</Link>
                    </li>
                    <li>
                      <Link to="#">Kids' Glasses</Link>
                    </li>
                    <li>
                      <Link to="#">Readers</Link>
                    </li>
                    <li>
                      <Link to="#">Rimless Glasses</Link>
                    </li>
                    <li>
                      <Link to="#">Transitions® Lenses</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {sunglass && (
            <div className="fixed top-0 right-0 w-full h-full bg-white shadow-2xl z-50 p-5">
              <button
                className="text-gray-600 text-xl mb-4"
                onClick={() => setSunglass(false)}
              >
                ✕ Close
              </button>
              <div className="text-lg font-normal w-full flex flex-col h-[80vh] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100 p-4 ">
                <div className="flex-1 ">
                  <h3 className="font-semibold text-base mb-4">Women</h3>
                  <ul className="space-y-2 text-[15px] text-gray-800 leading-relaxed">
                    <li onClick={() => {
                      setOpen(false)
                      setSunglass(false)
                     }}>
                      <Link to="/sunglasses/women/SunGlasses">Sunglasses</Link>
                    </li>
                    <li onClick={() => {
                      setOpen(false)
                      setSunglass(false)
                     }}>
                      <Link to="/sunglasses/women/BestSeller">
                        Best Sellers
                      </Link>
                    </li>
                    <li onClick={() => {
                      setOpen(false)
                      setSunglass(false)
                     }}>
                      <Link to="/sunglasses/women/DesignerSunGlasses">
                        Designer Sunglasses
                      </Link>
                    </li>
                    <li onClick={() => {
                      setOpen(false)
                      setSunglass(false)
                     }}>
                      <Link to="sunglasses/women/OnSale">On Sale</Link>
                    </li>
                    <li onClick={() => {
                      setOpen(false)
                      setSunglass(false)
                     }}>
                      <Link to="/sunglasses/women/RayBan">Ray-Ban</Link>
                    </li>
                    <li onClick={() => {
                      setOpen(false)
                      setSunglass(false)
                     }}>
                      <Link to="/sunglasses/women/ShopAllSunGlasses">
                        Shop All Sunglasses
                      </Link>
                    </li>
                  </ul>
                </div>

                {/* Men */}
                <div className="flex-1 ">
                  <h3 className="font-semibold text-base mb-4">Men</h3>
                  <ul className="space-y-2 text-[15px] text-gray-800 leading-relaxed">
                    <li onClick={() => {
                      setOpen(false)
                      setSunglass(false)
                     }}>
                      <Link to="/sunglasses/men/SunGlasses">Sunglasses</Link>
                    </li>
                    <li onClick={() => {
                      setOpen(false)
                      setSunglass(false)
                     }}>
                      <Link to="/sunglasses/men/BestSeller">Best Sellers</Link>
                    </li>
                    <li onClick={() => {
                      setOpen(false)
                      setSunglass(false)
                     }}>
                      <Link to="/sunglasses/men/DesignerSunGlasses">
                        Designer Sunglasses
                      </Link>
                    </li>
                    <li onClick={() => {
                      setOpen(false)
                      setSunglass(false)
                     }}>
                      <Link to="sunglasses/men/OnSale">On Sale</Link>
                    </li>
                    <li onClick={() => {
                      setOpen(false)
                      setSunglass(false)
                     }}>
                      <Link to="/sunglasses/men/RayBan">Ray-Ban</Link>
                    </li>
                    <li onClick={() => {
                      setOpen(false)
                      setSunglass(false)
                     }}>
                      <Link to="/sunglasses/men/ShopAllSunGlasses">
                        Shop All Sunglasses
                      </Link>
                    </li>
                  </ul>
                </div>

                {/* Special Lenses */}
                <div className="flex-1 ">
                  <h3 className="font-semibold text-base mb-4">
                    Special Lenses
                  </h3>
                  <ul className="space-y-2 text-[15px] text-gray-800 leading-relaxed">
                    <li onClick={() => {
                      setOpen(false)
                      setSunglass(false)
                     }}>
                      <Link to="/sunglasses/SpecialLenses/SportGlasses">
                        Sports Glasses
                      </Link>
                    </li>
                    <li onClick={() => {
                      setOpen(false)
                      setSunglass(false)
                     }}>
                      <Link to="/sunglasses/SpecialLenses/SafetyGlasses">
                        Safety Glasses
                      </Link>
                    </li>
                    <li onClick={() => {
                      setOpen(false)
                      setSunglass(false)
                     }}>
                      <Link to="/sunglasses/SpecialLenses/KidsGlasses">
                        Kids' Glasses
                      </Link>
                    </li>
                    <li onClick={() => {
                      setOpen(false)
                      setSunglass(false)
                     }}>
                      <Link to="/sunglasses/SpecialLenses/TransitionsLenses">
                        Transitions® Lenses
                      </Link>
                    </li>
                    <li onClick={() => {
                      setOpen(false)
                      setSunglass(false)
                     }}>
                      <Link to="/sunglasses/SpecialLenses/Polarized">
                        Polarized
                      </Link>
                    </li>
                    <li onClick={() => {
                      setOpen(false)
                      setSunglass(false)
                     }}>
                      <Link to="/sunglasses/SpecialLenses/PrescriptionSunGlasses">
                        Prescription Sunglasses
                      </Link>
                    </li>
                    <li onClick={() => {
                      setOpen(false)
                      setSunglass(false)
                     }}>
                      <Link to="/sunglasses/SpecialLenses/ClipOns">
                        Clip-Ons
                      </Link>
                    </li>
                    <li onClick={() => {
                      setOpen(false)
                      setSunglass(false)
                     }}>
                      <Link to="/sunglasses/SpecialLenses/Progressive">
                        Progressives
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {brand && (
            <div className="fixed top-0 right-0 w-full h-full bg-white shadow-2xl z-50 p-5">
              <button
                className="text-gray-600 text-xl mb-4"
                onClick={() => setBrand(false)}
              >
                ✕ Close
              </button>
              <div className="text-lg font-normal w-full flex flex-col h-[85vh] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100 ">
                <div>
                  <h1> Designer Brand</h1>
                </div>
                <div className="flex gap-8 flex-col ">
                  {/* LEFT SECTION - Premium Brands */}
                  <div
                    className="flex flex-col  gap-8 border-r border-gray-200"
                    style={{ flex: "0 0 65%" }}
                  >
                    {/* Brand Logo Grid */}
                    <div style={{ flex: "0 0 340px" }} className="">
                      <h3 className="font-semibold text-base mb-5">
                        Premium Brands
                      </h3>
                      <div className="grid grid-cols-3 gap-3">
                        {PREMIUM_BRANDS.map((brand) => (
                          
                          <div  onClick={() => {
                            setBrand(false);
                            setOpen(false)
                            }}> <BrandTile key={brand.name} brand={brand} 
                          />
                            </div>
                          
                        ))}
                        <div onClick={() => {
                          setBrand(false);
                          setOpen(false)
                          }} className="flex items-center justify-center col-span-3">
                                <Link
                                  to="/brands"
                                  className="text-sm font-medium underline hover:text-blue-600"
                                >
                                  Shop All Brands
                                </Link>
                              </div>
                            </div>
                          </div>

                    {/* Text Brand Lists */}
                    <div className="flex gap-12 flex-1  flex-row ">
                      <div className="flex-1">
                        <ul className="space-y-2.5 text-sm mt-11">
                          {TEXT_BRANDS_COL1.map((brand) => (
                            <li key={brand.name} onClick={() => {
                              setBrand(false);
                              setOpen(false)
                              }}>
                              <Link
                                to={brand.path}
                                className="hover:underline text-gray-800"
                              >
                                {brand.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="flex-1">
                        <ul className="space-y-2.5 text-sm mt-11">
                          {TEXT_BRANDS_COL2.map((brand) => (
                            <li key={brand.name} onClick={() => {
                              setBrand(false);
                              setOpen(false)
                              }}>
                              <Link
                                to={brand.path}
                                className="hover:underline text-gray-800"
                              >
                                {brand.name}
                              </Link>
                            </li>
                          ))}
                          <li onClick={() => {
                          setBrand(false);
                          setOpen(false)
                          }}>
                            <Link
                              to="/brands/a-z"
                              className="font-medium underline hover:text-blue-600"
                            >
                              Brands A-Z
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* RIGHT SECTION - Luxury Boutique */}
                  <div className="flex-1   ">
                    <h3 className="font-semibold text-base mb-5 w-52">
                      Ottica - Luxury Boutique
                    </h3>
                    <div className="grid grid-cols-2 gap-3 " >
                      {LUXURY_BRANDS.map((brand) => (
                        <div  onClick={() => {
                          setBrand(false);
                          setOpen(false)
                          }}>
                           <BrandTile key={brand.name} brand={brand}/>
                        </div>
                      ))}
                      <div className="flex items-center justify-center col-span-2 mt-2" onClick={() => {
                          setBrand(false);
                          setOpen(false)
                          }}>
                        <Link
                          to="/brands/luxury"
                          className="text-sm font-medium underline hover:text-blue-600"
                        >
                          Shop All
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {contactlense && (
            <div className="fixed top-0 right-0 w-full h-full bg-white shadow-2xl z-50 p-5">
              <button
                className="text-gray-600 text-xl mb-4"
                onClick={() => setContactLense(false)}
              >
                ✕ Close
              </button>
              <div className="text-lg font-normal w-full space-y-3 flex flex-col h-[80vh] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100 p-4 ">
                <div className="flex-1 min-w-[180px]">
                  <h3 className="font-semibold text-base mb-4">Lens Types</h3>
                  <ul className="space-y-2 text-[15px] text-gray-800 leading-relaxed">
                    <li  onClick={() => {
                    setContactLense(false);
                    setOpen(false)
                  }} >
                      <Link to="/contacts/shopall">Shop All Contacts</Link>
                    </li>
                    <li  onClick={() => {
                    setContactLense(false);
                    setOpen(false)
                  }} >
                      <Link to="/contacts/daily">Daily</Link>
                    </li>
                    <li onClick={() => {
                    setContactLense(false);
                    setOpen(false)
                  }} >
                      <Link to="/contacts/weekly">Weekly</Link>
                    </li>
                    <li onClick={() => {
                    setContactLense(false);
                    setOpen(false)
                  }} >
                      <Link to="/contacts/monthly">Monthly</Link>
                    </li>
                    <li onClick={() => {
                    setContactLense(false);
                    setOpen(false)
                  }} >
                      <Link to="/contacts/single-vision">Single Vision</Link>
                    </li>
                    <li onClick={() => {
                    setContactLense(false);
                    setOpen(false)
                  }} >
                      <Link to="/contacts/multifocal">
                        Multifocal & Bifocal
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {lense && (
            <div className="fixed top-0 right-0 w-full h-full bg-white shadow-2xl z-50 p-5">
              <button
                className="text-gray-600 text-xl mb-4"
                onClick={() => setLense(false)}
              >
                ✕ Close
              </button>

              <div className="text-lg font-normal w-full flex  flex-col h-[80vh] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100 p-4 ">
                <div className="flex-1 min-w-[200px]">
                  <h3 className="font-semibold text-base mb-4">
                    Popular Lenses
                  </h3>
                  <ul className="space-y-2 text-[15px] text-gray-800 leading-relaxed">
                    <li onClick={() => {
                          setLense(false);
                          setOpen(false);
                     }}
                    >
                      <Link to="/lenses/popularlenses/ProgressiveLenses">
                        Progressive Lenses
                      </Link>
                    </li>
                    <li onClick={() => {
                          setLense(false);
                          setOpen(false);
                     }}>
                      <Link to="/lenses/popularlenses/BifocalLenses">
                        Bifocal Lenses
                      </Link>
                    </li>
                    <li onClick={() => {
                          setLense(false);
                          setOpen(false);
                     }}>
                      <Link to="/lenses/popularlenses/BlueLightLenses">
                        Blue Light Lenses
                      </Link>
                    </li>
                    <li onClick={() => {
                          setLense(false);
                          setOpen(false);
                     }}>
                      <Link to="/lenses/popularlenses/TransitionLenses">
                        Transitions® Lenses
                      </Link>
                    </li>
                    <li onClick={() => {
                          setLense(false);
                          setOpen(false);
                     }}>
                      <Link to="/lenses/popularlenses/SafetyLenses">
                        Safety Lenses
                      </Link>
                    </li>
                  </ul>
                </div>

                {/* Special Sunglasses */}
                <div className="flex-1 min-w-[200px] mt-8">
                  <h3 className="font-semibold text-base mb-4">
                    Special Sunglasses
                  </h3>
                  <ul className="space-y-2 text-[15px] text-gray-800 leading-relaxed">
                    <li onClick={() => {
                          setLense(false);
                          setOpen(false);
                     }}>
                      <Link to="/lenses/specialsunglasses/PriscriptionSunglasses">
                        Prescription Sunglasses
                      </Link>
                    </li>
                    <li onClick={() => {
                          setLense(false);
                          setOpen(false);
                     }}>
                      <Link to="/lenses/specialsunglasses/MirroredSunglasses">
                        Mirrored Sunglasses
                      </Link>
                    </li>
                    <li onClick={() => {
                          setLense(false);
                          setOpen(false);
                     }}>
                      <Link to="/lenses/specialsunglasses/PolarizedSunglasses">
                        Polarized Sunglasses
                      </Link>
                    </li>
                    <li onClick={() => {
                          setLense(false);
                          setOpen(false);
                     }}>
                      <Link to="/lenses/specialsunglasses/TintedSunglasses">
                        Tinted Sunglasses
                      </Link>
                    </li>
                  </ul>
                </div>

                {/* Knowledge Center */}
                <div className="flex-1 min-w-[200px]">
                  <h3 className="font-semibold text-base mb-4">
                    Knowledge Center
                  </h3>
                  <ul className="space-y-2 text-[15px] text-gray-800 leading-relaxed">
                    <li onClick={() => {
                          setLense(false);
                          setOpen(false);
                     }}>
                      <Link to="/lenses/knowledgecenter/OurLenses">
                        Our Lenses
                      </Link>
                    </li>
                    <li onClick={() => {
                          setLense(false);
                          setOpen(false);
                     }}>
                      <Link to="/lenses/knowledgecenter/AboutUs">About Us</Link>
                    </li>
                    <li onClick={() => {
                          setLense(false);
                          setOpen(false);
                     }}>
                      <Link to="/lenses/knowledgecenter/LensBlog">
                        "Through the Lens" Blog
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {store && (
            <div className="fixed top-0 right-0 w-full h-full bg-white shadow-2xl z-50 p-5">
              <button
                className="text-gray-600 text-xl mb-4"
                onClick={() => setStore(false)}
              >
                ✕ Close
              </button>
              <div className="text-lg font-normal w-full flex flex-col h-[80vh] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100 p-4">
                <div className="flex-1">
                  <div className="rounded-2xl overflow-hidden shadow-md bg-white border border-gray-100">
                    <img
                      src={rooseveltImage}
                      alt="Roosevelt Field Mall"
                      className="w-full h-80 object-cover"
                    />
                    <div className="px-3 py-3 text-center border-t border-gray-100">
                      <Link
                        to="#"
                        className="text-sm font-medium text-black hover:text-blue-600"
                      >
                        Fatima Nagar
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Florida Mall */}
                <div className="flex-1">
                  <div className="rounded-2xl overflow-hidden shadow-md bg-white border border-gray-100">
                    <img
                      src={floridaImage}
                      alt="Florida Mall"
                      className="w-full h-80 object-cover"
                    />
                    <div className="px-3 py-3 text-center border-t border-gray-100">
                      <Link
                        to="#"
                        className="text-sm font-medium text-black hover:text-blue-600"
                      >
                        Florida Mall
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Natick Mall */}
                <div className="flex-1">
                  <div className="rounded-2xl overflow-hidden shadow-md bg-white border border-gray-100">
                    <img
                      src={natickImage}
                      alt="Natick Mall"
                      className="w-full h-80 object-cover"
                    />
                    <div className="px-3 py-3 text-center border-t border-gray-100">
                      <Link
                        to="#"
                        className="text-sm font-medium text-black hover:text-blue-600"
                      >
                        Natick Mall
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {sale && (
            <div className="fixed top-0 right-0 w-full h-full bg-white shadow-2xl z-50 p-5">
              <button
                className="text-gray-600 text-xl mb-4"
                onClick={() => setSale(false)}
              >
                ✕ Close
              </button>
              <div className="text-lg font-normal w-full flex flex-col h-[80vh] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100 p-4">
                <div className="flex flex-col items-center">
                  <div className="relative w-48 h-48 bg-amber-50 rounded-2xl overflow-hidden mb-2">
                    <img
                      src={glassesSaleImage}
                      alt="Glasses on Sale"
                      className="absolute bottom-0 left-0 w-32 h-32 object-cover"
                    />
                    <div className="absolute top-4 left-4 text-black p-2">
                      <h3 className="font-bold text-sm uppercase">
                        GLASSES ON SALE
                      </h3>
                      <p className="text-xs">Starting at just $19</p>
                    </div>
                  </div>
                  <div className="bg-white rounded-xl px-3 py-2 shadow-sm border border-gray-100">
                    <Link
                      to="#"
                      className="text-xs font-medium text-black hover:text-blue-600"
                    >
                      Glasses On Sale
                    </Link>
                  </div>
                </div>

                {/* Sunglasses Sale */}
                <div className="flex flex-col items-center">
                  <div className="relative w-48 h-48 bg-amber-800 rounded-2xl overflow-hidden mb-2">
                    <img
                      src={sunglassesSaleImage}
                      alt="Sunglasses Sale"
                      className="absolute bottom-0 right-0 w-32 h-32 object-cover"
                    />
                    <div className="absolute top-4 left-4 text-white p-2">
                      <h3 className="font-bold text-sm uppercase">
                        SUNGLASSES SALE
                      </h3>
                      <p className="text-xs">Up to 65% off</p>
                    </div>
                  </div>
                  <div className="bg-white rounded-xl px-3 py-2 shadow-sm border border-gray-100">
                    <Link
                      to="#"
                      className="text-xs font-medium text-black hover:text-blue-600"
                    >
                      Sunglasses Sale
                    </Link>
                  </div>
                </div>

                {/* Designer Outlet */}
                <div className="flex flex-col items-center">
                  <div className="relative w-48 h-48 bg-orange-500 rounded-2xl overflow-hidden mb-2">
                    <img
                      src={designerOutletImage}
                      alt="Designer Outlet"
                      className="absolute top-4 right-4 w-32 h-32 object-cover"
                    />
                    <div className="absolute top-4 left-4 text-white p-2">
                      <h3 className="font-bold text-sm uppercase">
                        DESIGNER OUTLET
                      </h3>
                      <p className="text-xs">Up to 60% off</p>
                    </div>
                  </div>
                  <div className="bg-white rounded-xl px-3 py-2 shadow-sm border border-gray-100">
                    <Link
                      to="#"
                      className="text-xs font-medium text-black hover:text-blue-600"
                    >
                      Designer Outlet
                    </Link>
                  </div>
                </div>

                {/* Sales & Coupons */}
                <div className="flex flex-col items-center">
                  <div className="relative w-48 h-48 bg-amber-400 rounded-2xl overflow-hidden mb-2">
                    <img
                      src={salesCouponsImage}
                      alt="Sales & Coupons"
                      className="absolute top-4 right-4 w-32 h-32 object-cover"
                    />
                    <div className="absolute top-4 left-4 text-black p-2">
                      <h3 className="font-bold text-sm uppercase">
                        SALES & COUPONS
                      </h3>
                      <p className="text-xs">Check out all our promotions</p>
                    </div>
                  </div>
                  <div className="bg-white rounded-xl px-3 py-2 shadow-sm border border-gray-100">
                    <Link
                      to="#"
                      className="text-xs font-medium text-black hover:text-blue-600"
                    >
                      Sales & Coupons
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )}

          <div className=" px-3">
            <ul className="space-y-2 text-[15px] text-gray-800 leading-relaxed">
              <li >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 201 28"
                  width="145"
                  color="#277BDA"
                  aria-label="Pairfect Match Quiz"
                >
                  <path
                    fill="currentColor"
                    d="M13.055 11.48a5.2 5.2 0 0 1-.94 2.24q-.74 1-2.02 1.62-1.26.62-2.98.62h-2.12l-.9 5.04H.674l2.48-14.04h5.54q2.2 0 3.32.98 1.12.96 1.12 2.62 0 .5-.08.92m-5.74 1.8q1.92 0 2.26-1.8.04-.32.04-.46 0-.64-.42-.98-.4-.36-1.24-.36h-1.86l-.62 3.6zm6.16 2.12q.3-1.72 1.18-3.02t2.12-2a5.25 5.25 0 0 1 2.62-.7q1.18 0 1.98.48t1.16 1.26l.28-1.58h3.42L24.255 21h-3.42l.3-1.58a4.8 4.8 0 0 1-1.62 1.26q-.98.48-2.16.48t-2.1-.54a3.7 3.7 0 0 1-1.4-1.52q-.5-1-.5-2.34 0-.64.12-1.36m8.36.02q.06-.36.06-.66 0-.98-.58-1.54-.56-.56-1.44-.56-1.02 0-1.86.74-.84.72-1.06 2-.06.36-.06.66 0 .98.56 1.56.58.56 1.44.56 1.02 0 1.86-.74t1.08-2.02m8.794-6.74q-.8 0-1.28-.42a1.46 1.46 0 0 1-.46-1.1q0-.9.7-1.54t1.7-.64q.8 0 1.26.44.46.42.46 1.1 0 .88-.7 1.52a2.4 2.4 0 0 1-1.68.64m1.48 1.16L30.15 21h-3.42l1.96-11.16zm5.539 2.02q.78-1 1.78-1.56a4.23 4.23 0 0 1 2.12-.58l-.64 3.62h-.94q-1.28 0-2.02.56-.74.54-.98 1.92l-.92 5.18h-3.42l1.96-11.16h3.42zm10.614-4.62q-1.22 0-1.8.48-.56.46-.74 1.54l-.14.78h2.3l-.26 1.5h-2.3L43.642 21h-1.82l1.66-9.46h-1.4l.26-1.5h1.4l.14-.78q.34-1.84 1.44-2.68 1.1-.86 3.2-.86zm6.502 2.62q1.38 0 2.38.54a3.5 3.5 0 0 1 1.54 1.48q.54.94.54 2.16 0 .42-.1 1.02-.08.52-.26 1.08h-8.76q-.04.4-.04.58 0 1.38.82 2.16.84.76 2.18.76 1.18 0 2.06-.54a3.63 3.63 0 0 0 1.36-1.48h1.96q-.72 1.58-2.22 2.58-1.48.98-3.44.98-2.06 0-3.32-1.18-1.24-1.2-1.24-3.26 0-.58.12-1.24.3-1.7 1.22-2.98a6.2 6.2 0 0 1 2.26-1.96 6.3 6.3 0 0 1 2.94-.7m2.52 4.96q.06-.4.06-.74 0-1.28-.82-1.98-.8-.7-2.1-.7-1.4 0-2.54.92-1.14.9-1.54 2.5zm3.463.68q.3-1.7 1.2-2.96a6.4 6.4 0 0 1 2.26-1.98 6.2 6.2 0 0 1 2.9-.7q2.02 0 3.14.98 1.14.98 1.26 2.72h-1.96q-.1-1-.82-1.58-.7-.58-1.9-.58-1.56 0-2.72 1.08-1.14 1.06-1.48 3.02-.1.66-.1 1.1 0 1.46.78 2.26.78.78 2.08.78 1.2 0 2.08-.56.9-.56 1.38-1.6h1.96a6.1 6.1 0 0 1-2.22 2.7q-1.5 1-3.48 1-2.06 0-3.28-1.18-1.2-1.18-1.2-3.22 0-.62.12-1.28M75.375 18q-.06.3-.06.52 0 .5.3.72.32.22 1.02.22h1.34l-.28 1.54h-1.64q-1.3 0-1.96-.5-.64-.5-.64-1.64 0-.44.08-.86l1.14-6.46h-1.4l.26-1.5h1.42l.48-2.76h1.84l-.48 2.76h2.84l-.26 1.5h-2.86zm25.017-10.84V21h-1.82V10.68L93.972 21h-1.28l-4.62-10.34V21h-1.82V7.16h1.96l5.12 11.44 5.12-11.44zm2.407 8.32q0-1.68.68-2.94.68-1.28 1.86-1.98a5.2 5.2 0 0 1 2.66-.7q1.44 0 2.5.62t1.58 1.56v-2h1.84V21h-1.84v-2.04q-.54.96-1.62 1.6-1.06.62-2.48.62-1.461 0-2.64-.72t-1.86-2.02-.68-2.96m9.28.02q0-1.24-.5-2.16a3.45 3.45 0 0 0-1.36-1.4q-.84-.5-1.86-.5t-1.86.48-1.34 1.4-.5 2.16q0 1.26.5 2.2.5.92 1.34 1.42.84.48 1.86.48t1.86-.48a3.6 3.6 0 0 0 1.36-1.42q.5-.94.5-2.18m7.135-3.96V18q0 .8.34 1.14.34.32 1.18.32h1.34V21h-1.64q-1.52 0-2.28-.7t-.76-2.3v-6.46h-1.42v-1.5h1.42V7.28h1.82v2.76h2.86v1.5zm4.386 3.96q0-1.7.68-2.96a4.9 4.9 0 0 1 1.88-1.98q1.22-.7 2.78-.7 2.02 0 3.32.98 1.32.98 1.74 2.72h-1.96a2.8 2.8 0 0 0-1.1-1.58q-.8-.58-2-.58-1.56 0-2.52 1.08-.96 1.06-.96 3.02 0 1.98.96 3.06t2.52 1.08q1.2 0 2-.56t1.1-1.6H134q-.44 1.68-1.76 2.7-1.32 1-3.3 1-1.56 0-2.78-.7a4.9 4.9 0 0 1-1.88-1.98q-.68-1.28-.68-3m18.268-5.66q1.24 0 2.24.54 1 .52 1.56 1.58.58 1.06.58 2.58V21h-1.8v-6.2q0-1.64-.82-2.5-.82-.88-2.24-.88-1.44 0-2.3.9-.84.9-.84 2.62V21h-1.82V6.2h1.82v5.4q.54-.84 1.48-1.3.96-.46 2.14-.46m6.113-4.288h2.904v.672h-1.02v3.552h-.864l.012-3.552h-1.032zm8.4 0v4.224h-.804l-.012-3.06-1.308 3.06h-.612l-1.296-3.108v3.108h-.792V5.552h1.116l1.308 3.204 1.344-3.204zm17.104 8.798q0 2.06-.654 3.554-.654 1.485-1.836 2.325l2.539 1.992-1.279 1.181-2.999-2.383a6 6 0 0 1-1.484.176q-1.68 0-2.978-.82-1.299-.83-2.022-2.354-.712-1.533-.732-3.544V13.45q0-2.05.713-3.623.712-1.572 2.011-2.402 1.31-.84 2.989-.84 1.718 0 3.017.83 1.309.829 2.012 2.393.703 1.553.703 3.632zm-1.875-.918q0-2.51-1.006-3.868-.996-1.367-2.851-1.367-1.769 0-2.793 1.358-1.016 1.347-1.045 3.75v1.045q0 2.441 1.015 3.847 1.026 1.407 2.842 1.407t2.813-1.319q.995-1.327 1.025-3.799zm11.006 6.523q-1.054 1.24-3.096 1.24-1.69 0-2.578-.976-.879-.987-.889-2.91v-6.875h1.807v6.826q0 2.402 1.953 2.402 2.07 0 2.754-1.543v-7.685h1.807V21h-1.719zM189.09 21h-1.806V10.434h1.806zm-1.953-13.37q0-.439.264-.741.273-.303.801-.303.526 0 .801.303.273.302.273.742t-.273.732-.801.293-.801-.293a1.05 1.05 0 0 1-.264-.732m6.553 11.895h6.182V21h-8.389v-1.328l5.83-7.744h-5.742v-1.494h8.008v1.279z"
                  ></path>
                </svg>
              </li>
              <li  onClick={() => {
                setOpen(false)
               
              }} >
                {" "}
                <Link to="/insurance"> Visible Insurance </Link>
              </li>
              <li> Prescription Scanner App </li>
              <li> About us </li>
            </ul>
          </div>

          <div className="flex-1 px-3 bg-[#f8f8f8] pt-5">
            <ul className="space-y-3 text-[15px] text-gray-800 leading-relaxed">
              <div className="flex items-center gap-2">  <svg className="font-bold" xmlns="http://www.w3.org/2000/svg" fill="transparent" viewBox="0 0 18 16" height="16" width="20" color="#020621" aria-label="Order Tracking"><path stroke="currentColor" stroke-linejoin="round" d="M.833 4.889h16.333v10.11H.833V4.89Zm16.334 0H.834L4.064 1h9.931z"></path><path stroke="currentColor" stroke-linecap="round" d="M11.333 7.222H7.055"></path><path stroke="currentColor" d="M8.999 4.889V1"></path></svg>
               <li className=" "> Order Tracking </li> </div>
              <div className="flex  items-center gap-2 "> <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke-width="1" viewBox="0 0 20 16" height="16" width="20"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M14.5 6.56H13M11 3h3.5L19 6.4V12h-2.5M11 12h1.5M11 12V1H1v11h2.78M11 12H7.23m0 0a2 2 0 1 1-3.73 1 2.02 2.02 0 0 1 2.02-2c.73 0 1.37.4 1.71 1m7.29-1a2.01 2.01 0 0 0-2.02 2c0 .53.2 1.03.6 1.41A2 2 0 0 0 16.5 13a2 2 0 0 0-1.98-2"></path></svg> <li>Shipping and Returns </li></div>
              <div className="flex  items-center gap-2 "> <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke-width="2" viewBox="0 0 30 30" height="16" width="20"><path stroke="currentColor" stroke-linejoin="round" d="M4.9 4.9a13.96 13.96 0 0 0-4.1 9.9c0 3.87 1.57 7.37 4.1 9.9m0-19.8A13.96 13.96 0 0 1 14.8.8c3.87 0 7.37 1.57 9.9 4.1m-19.8 0 4.24 4.24m0 0a7.97 7.97 0 0 0 0 11.32m0-11.32a7.97 7.97 0 0 1 11.32 0m0 11.32a7.97 7.97 0 0 0 0-11.32m0 11.32a7.97 7.97 0 0 1-11.32 0m11.32 0 4.24 4.24m0 0a13.96 13.96 0 0 0 4.1-9.9c0-3.87-1.57-7.37-4.1-9.9m0 19.8a13.96 13.96 0 0 1-9.9 4.1c-3.87 0-7.37-1.57-9.9-4.1M24.7 4.9l-4.24 4.24M9.14 20.46 4.9 24.7"></path></svg>    <li> Help center </li></div>
               <div className="flex   items-center gap-2"> <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke-width="2" viewBox="0 0 21 28" height="16" width="20"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M8.78 6.16a2.6 2.6 0 0 0 2.6-2.58A2.59 2.59 0 0 0 8.78 1 2.59 2.59 0 0 0 6.2 3.58a2.59 2.59 0 0 0 2.6 2.58Zm0 0v5.14m11.17 10.52-3.38-5.42H8.78v-5.1m0 0h6.29m.3 12.67a8.08 8.08 0 0 1-14.35-5.54 7.99 7.99 0 0 1 3.29-5.9"></path></svg> <li>Accessibility View </li> </div>
             
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Header;





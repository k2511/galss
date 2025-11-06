import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Search, User, ShoppingBag, Heart, ChevronDown } from "lucide-react";
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
import { FaSearch } from "react-icons/fa";
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
  return (
    <>
      {/* Desktop Header */}
      <header className="w-full  bg-white border-b shadow-sm flex relative z-50">
        <div className=" mx-auto w-full flex items-center justify-between h-[62px] xl:px-8 px-1">
          {/* Logo */}
          <div className="md:hidden block ">
            <IoMenu className="text-3xl mx-2" onClick={() => setOpen(true)} />
          </div>

          <Link to="/">
            <img
              src={logo}
              alt="logo"
              className="h-7 min-w-28 w-32 lg:mr-8 mr-3"
            />
          </Link>

          {/* Navigation */}
          <nav className="hidden sm:flex flex-1 space-x-5  relative ">
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
          <div className="flex  lg:space-x-3  ">
            {/* Search Bar */}
            <div className="flex justify-center">
              {/* <div className="flex items-center bg-gray-100 rounded-full lg:px-3 px-0 py-1.5 w-4/6 shadow-sm">
                <Search size={16} className="text-gray-400 xl:mr-2 " />
                <input
                  type="text"
                  placeholder="Search"
                  className="bg-transparent  outline-none w-full min-w-12 text-sm text-gray-700 placeholder-gray-400"
                />
              </div> */}

              <div className="flex items-center bg-gray-100 rounded-full lg:px-3 px-0 py-1.5 w-4/6 shadow-sm">
                {/* Search icon visible only below md */}
                <Search
                  size={16}
                  className="text-gray-400 xl:mr-2 block  lg:ml-3 ml-1"
                />

                <input
                  type="text"
                  placeholder="Search"
                  className="bg-transparent outline-none w-full text-sm text-gray-700 placeholder-gray-400 
                            md:placeholder-opacity-100 placeholder-opacity-0 
                            px-3 md:px-0"
                />
              </div>
            </div>

            {/* Wishlist */}
            <button className="p-2 hover:bg-gray-100 rounded-lg">
              <Heart size={20} className="text-gray-600" />
            </button>

            {/* Cart */}
            <button
              onClick={() => dispatch(toggleCart())}
              className="relative p-2 hover:bg-gray-100 rounded-lg"
            >
              <ShoppingBag size={20} className="text-gray-600" />
              {totalQuantity > 0 && (
                <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {totalQuantity}
                </span>
              )}
            </button>

            {/* Divider */}
            <span className="mx-3 h-7 w-px bg-gray-200" />

            {/* User/Login */}
            <button
              onClick={() => dispatch(toggleLoginModal())}
              className="flex items-center p-1 hover:bg-gray-100 rounded-lg"
            >
              <User size={21} className="text-gray-700" />
              <span className="ml-2 text-sm text-black">Log In </span>
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
        className={`fixed top-0 left-0 h-full w-96  bg-white shadow-lg z-50 transform transition-transform duration-300 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-lg font-semibold">Menu</h2>
          <X
            className="cursor-pointer text-gray-600"
            onClick={() => setOpen(false)}
          />
        </div>

        <nav className=" flex flex-1 flex-col  relative h-[90vh]  ">
          
            {nav.map((item) =>
              item.name === "Eyeglasses" ? (
                <div
                  className="flex justify-between px-3"
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
                    <li>
                      <Link to="/ShopAllGlassesWomen">Shop All Eyeglasses</Link>
                    </li>
                    <li>
                      <Link to="/BestSellers">Best Sellers</Link>
                    </li>
                    <li>
                      <Link to="/DesignerGlasses">Designer Eyeglasses</Link>
                    </li>
                    <li>
                      <Link to="/OnSale">On Sale</Link>
                    </li>
                    <li>
                      <Link to="/DesignerOutlet">Designer Outlet</Link>
                    </li>
                    <li>
                      <Link to="/GirlsEyeglasses">Girls' Eyeglasses</Link>
                    </li>
                    <li>
                      <Link to="/NextDayDelivery">Next Day Delivery</Link>
                    </li>
                  </ul>
                </div>

                <div className="flex-1 ">
                  <h3 className="font-semibold text-base mb-4">Men</h3>
                  <ul className="space-y-2 text-[15px] text-gray-800 leading-relaxed">
                    <li>
                      <Link to="/ShopAllGlassesMen">Shop All Eyeglasses</Link>
                    </li>
                    <li>
                      <Link to="/BestSellers">Best Sellers</Link>
                    </li>
                    <li>
                      <Link to="/DesignerGlasses">Designer Eyeglasses</Link>
                    </li>
                    <li>
                      <Link to="/OnSale">On Sale</Link>
                    </li>
                    <li>
                      <Link to="/DesignerOutlet">Designer Outlet</Link>
                    </li>
                    <li>
                      <Link to="BoysEyeglasses">Boys' Eyeglasses</Link>
                    </li>
                    <li>
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
                    <li>
                      <Link to="/sunglasses/women/SunGlasses">Sunglasses</Link>
                    </li>
                    <li>
                      <Link to="/sunglasses/women/BestSeller">
                        Best Sellers
                      </Link>
                    </li>
                    <li>
                      <Link to="/sunglasses/women/DesignerSunGlasses">
                        Designer Sunglasses
                      </Link>
                    </li>
                    <li>
                      <Link to="sunglasses/women/OnSale">On Sale</Link>
                    </li>
                    <li>
                      <Link to="/sunglasses/women/RayBan">Ray-Ban</Link>
                    </li>
                    <li>
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
                    <li>
                      <Link to="/sunglasses/men/SunGlasses">Sunglasses</Link>
                    </li>
                    <li>
                      <Link to="/sunglasses/men/BestSeller">Best Sellers</Link>
                    </li>
                    <li>
                      <Link to="/sunglasses/men/DesignerSunGlasses">
                        Designer Sunglasses
                      </Link>
                    </li>
                    <li>
                      <Link to="sunglasses/men/OnSale">On Sale</Link>
                    </li>
                    <li>
                      <Link to="/sunglasses/men/RayBan">Ray-Ban</Link>
                    </li>
                    <li>
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
                    <li>
                      <Link to="/sunglasses/SpecialLenses/SportGlasses">
                        Sports Glasses
                      </Link>
                    </li>
                    <li>
                      <Link to="/sunglasses/SpecialLenses/SafetyGlasses">
                        Safety Glasses
                      </Link>
                    </li>
                    <li>
                      <Link to="/sunglasses/SpecialLenses/KidsGlasses">
                        Kids' Glasses
                      </Link>
                    </li>
                    <li>
                      <Link to="/sunglasses/SpecialLenses/TransitionsLenses">
                        Transitions® Lenses
                      </Link>
                    </li>
                    <li>
                      <Link to="/sunglasses/SpecialLenses/Polarized">
                        Polarized
                      </Link>
                    </li>
                    <li>
                      <Link to="/sunglasses/SpecialLenses/PrescriptionSunGlasses">
                        Prescription Sunglasses
                      </Link>
                    </li>
                    <li>
                      <Link to="/sunglasses/SpecialLenses/ClipOns">
                        Clip-Ons
                      </Link>
                    </li>
                    <li>
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
              <div className="text-lg font-normal w-full flex flex-col h-[80vh] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100 p-4"></div>
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
                    <li>
                      <Link to="/contacts/shopall">Shop All Contacts</Link>
                    </li>
                    <li>
                      <Link to="/contacts/daily">Daily</Link>
                    </li>
                    <li>
                      <Link to="/contacts/weekly">Weekly</Link>
                    </li>
                    <li>
                      <Link to="/contacts/monthly">Monthly</Link>
                    </li>
                    <li>
                      <Link to="/contacts/single-vision">Single Vision</Link>
                    </li>
                    <li>
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
                    <li>
                      <Link to="/lenses/popularlenses/ProgressiveLenses">
                        Progressive Lenses
                      </Link>
                    </li>
                    <li>
                      <Link to="/lenses/popularlenses/BifocalLenses">
                        Bifocal Lenses
                      </Link>
                    </li>
                    <li>
                      <Link to="/lenses/popularlenses/BlueLightLenses">
                        Blue Light Lenses
                      </Link>
                    </li>
                    <li>
                      <Link to="/lenses/popularlenses/TransitionLenses">
                        Transitions® Lenses
                      </Link>
                    </li>
                    <li>
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
                    <li>
                      <Link to="/lenses/specialsunglasses/PriscriptionSunglasses">
                        Prescription Sunglasses
                      </Link>
                    </li>
                    <li>
                      <Link to="/lenses/specialsunglasses/MirroredSunglasses">
                        Mirrored Sunglasses
                      </Link>
                    </li>
                    <li>
                      <Link to="/lenses/specialsunglasses/PolarizedSunglasses">
                        Polarized Sunglasses
                      </Link>
                    </li>
                    <li>
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
                    <li>
                      <Link to="/lenses/knowledgecenter/OurLenses">
                        Our Lenses
                      </Link>
                    </li>
                    <li>
                      <Link to="/lenses/knowledgecenter/AboutUs">About Us</Link>
                    </li>
                    <li>
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
                store Section
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
                sale Section
              </div>
            </div>
          )}

          <div className="flex-1 ">
            <ul className="space-y-2 text-[15px] text-gray-800 leading-relaxed">
              <li> Order Tracking </li>
              <li>Shipping and Returns </li>
              <li> Help center </li>
              <li>Accessibility View </li>
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Header;

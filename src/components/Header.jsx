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
  
  // ✅ TEXT BRANDS WITH PATHS
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
            <div className="flex justify-center items-center">
              {/* <div className="flex items-center bg-gray-100 rounded-full lg:px-3 px-0 py-1.5 w-4/6 shadow-sm">
                <Search size={16} className="text-gray-400 xl:mr-2 " />
                <input
                  type="text"
                  placeholder="Search"
                  className="bg-transparent  outline-none w-full min-w-12 text-sm text-gray-700 placeholder-gray-400"
                />
              </div> */}

              <div className="flex items-center  bg-gray-100 h-8 rounded-full lg:px-3 px-0  w-4/6 shadow-sm ">
                {/* Search icon visible only below md */}
                <Search
                  size={16}
                  className="text-gray-400 xl:mr-2 block md:hidden lg:ml-3 ml-1"
                />

                <input
                  type="text"
                  placeholder="Search"
                  className="bg-transparent outline-none w-full text-sm  text-gray-700 placeholder-gray-400 
                            md:placeholder-opacity-100 placeholder-opacity-0 
                            px-3 md:px-0 "
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
        className={`fixed top-0 left-0 h-full  w-96  bg-white shadow-lg z-50 transform transition-transform duration-300 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-4 border-b">
          <div>
           <button
              onClick={() => dispatch(toggleLoginModal())}
              className="flex items-center  hover:bg-gray-100 rounded-lg"
            >
              
              <span className="ml-2 text-md text-black ">Log In / Sign up </span>
              <User size={20} className="text-gray-700" />
            </button>

           </div>

          <X
            className="cursor-pointer text-gray-600"
            onClick={() => setOpen(false)}
          />
        </div>

        <nav className=" flex flex-1 flex-col  relative h-[90vh]  border-2 border-black">
          
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
              <div className="text-lg font-normal w-full flex flex-col h-[85vh] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100 ">
                      <div>
                        <h1> Designer Brand</h1>
                      </div>
                      <div className="flex gap-8 flex-col ">
                           {/* LEFT SECTION - Premium Brands */}
                           <div
                             className="flex flex-col  gap-8 pr-8 border-r border-gray-200"
                             style={{ flex: "0 0 65%" }}
                           >
                             {/* Brand Logo Grid */}
                             <div style={{ flex: "0 0 340px" }} className="">
                               <h3 className="font-semibold text-base mb-5">Premium Brands</h3>
                               <div className="grid grid-cols-3 gap-3">
                                 {PREMIUM_BRANDS.map((brand) => (
                                   <BrandTile key={brand.name} brand={brand} />
                                 ))}
                                 <div className="flex items-center justify-center col-span-3">
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
                             <div className="flex gap-12 flex-1  flex-row " >
                               <div className="flex-1">
                                 <ul className="space-y-2.5 text-sm mt-11">
                                   {TEXT_BRANDS_COL1.map((brand) => (
                                     <li key={brand.name}>
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
                                     <li key={brand.name}>
                                       <Link
                                         to={brand.path}
                                         className="hover:underline text-gray-800"
                                       >
                                         {brand.name}
                                       </Link>
                                     </li>
                                   ))}
                                   <li>
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
                           <div className="flex-1 pl-4  ">
                             <h3 className="font-semibold text-base mb-5 w-52">
                               Ottica - Luxury Boutique
                             </h3>
                             <div className="grid grid-cols-2 gap-3">
                               {LUXURY_BRANDS.map((brand) => (
                                 <BrandTile key={brand.name} brand={brand} />
                               ))}
                               <div className="flex items-center justify-center col-span-2 mt-2">
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
                                Roosevelt Field Mall
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
                            <h3 className="font-bold text-sm uppercase">GLASSES ON SALE</h3>
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
                            <h3 className="font-bold text-sm uppercase">SUNGLASSES SALE</h3>
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
                            <h3 className="font-bold text-sm uppercase">DESIGNER OUTLET</h3>
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
                            <h3 className="font-bold text-sm uppercase">SALES & COUPONS</h3>
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


         <div className="flex-1 px-3">
            <ul className="space-y-4 text-[15px] text-gray-800 leading-relaxed">
              <li> <Link to="/insurance" > Visible Insurance  </Link></li>
              <li> Prescription Scanner App </li>
              <li> About us </li>
             
            </ul>
          </div>

          <div className="flex-1 px-3">
            <ul className="space-y-3 text-[15px] text-gray-800 leading-relaxed">
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

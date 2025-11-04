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
          <nav className="flex flex-1 space-x-5 relative border-2 border-black">
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

        <nav className=" flex flex-1 flex-col space-x-5 relative h-[90vh] border-2 border-black">
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
              <p className="text-lg font-semibold">Eyeglass Section Content</p>
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
              <p className="text-lg font-semibold">Sun Section </p>
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
              <p className="text-lg font-semibold">brand Section </p>
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
              <div className="text-lg font-semibold ">
                contact lense Section </div>
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
              <p className="text-lg font-semibold"> Lense Section </p>
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
              <p className="text-lg font-semibold"> store Section </p>
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
              <p className="text-lg font-semibold"> sale Section </p>
            </div>
          )}
        </nav>
      </div>
    </>
  );
};

export default Header;

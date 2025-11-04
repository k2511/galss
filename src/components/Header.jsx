
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Search,
  User,
  ShoppingBag,
  Heart,
  ChevronDown,
} from "lucide-react";
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
import BrandsDropdown from "../innerPages/BrandsDropdown"
import SalesDropdown from "../innerPages/SalesDropdown";
import { IoMenu } from "react-icons/io5";
import { X } from "lucide-react";

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

  const [open, setOpen] = useState(false);


  return (
    <>
      {/* Desktop Header */}
      <header className="w-full  bg-white border-b shadow-sm hidden sm:flex relative z-50">
        <div className=" mx-auto w-full flex items-center justify-between h-[62px] xl:px-8 px-1">
          {/* Logo */}
          <div className="hidden sm:block ">
            < IoMenu className="text-3xl mx-2"  onClick={() => setOpen(true)} />
          </div>

          <Link to="/">
            <img src={logo} alt="logo" className="h-7 min-w-28 w-32 lg:mr-8 mr-3" />
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
                  className="text-gray-400 xl:mr-2 block md:hidden lg:ml-3 ml-1"
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
        className={`fixed top-0 left-0 h-full w-64  bg-white shadow-lg z-50 transform transition-transform duration-300 ${
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

        <nav className="flex flex-1 flex-col space-x-5 relative border-2 border-black">
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
      </div>
    </>
  );
};

export default Header;





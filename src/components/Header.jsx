// import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { Search, User, ShoppingBag, Menu, Heart, ChevronDown } from 'lucide-react';
// import { toggleLoginModal } from '../features/user/userSlice';
// import { toggleCart } from '../features/cart/cartSlice';
// import { Link } from 'react-router-dom';
// import logo from '../assets/img/logo.svg';
// import DropdownMenu from '../components/DropdownMenu';
// import EyeglassesDropdown from '../innerPages/EyeglassesDropdown';

// const nav = [
//   { name: "Eyeglasses" },
//   { name: "Sunglasses" },
//   { name: "Brands" },
//   { name: "Contacts" },
//   { name: "Lenses" },
//   { name: "Stores" },
//   { name: "Sale" }
// ];

// const Header = () => {
//   const dispatch = useDispatch();
//   const { totalQuantity } = useSelector((state) => state.cart);

//   return (
//     <>
//       {/* Desktop Header */}
//       <header className="w-full bg-white border-b shadow-sm px-0 py-0 hidden md:flex relative z-50">
//         <div className="max-w-[1420px] mx-auto w-full flex items-center justify-between h-[62px] px-8">
//           <Link to="/">
//             <img src={logo} alt="logo" className="h-7 min-w-[150px] mr-8" />
//           </Link>
//           <nav className="flex flex-1 items-center space-x-5 relative">
//             {nav.map((item) => (
//               item.name === "Eyeglasses" ? (
//                 <DropdownMenu
//                   key={item.name}
//                   trigger={
//                     <>
//                       <span className="flex items-center text-base font-normal cursor-pointer hover:text-blue-600">Eyeglasses<ChevronDown size={16} className="ml-1" /></span>
//                     </>
//                   }
//                 >
//                   <EyeglassesDropdown />
//                 </DropdownMenu>
//               ) : (
//                 <Link
//                   key={item.name}
//                   to={/${item.name.toLowerCase()}}
//                   className={text-base font-normal ${item.name === "Sale" ? "text-red-600" : "text-black"} hover:text-blue-600}
//                 >
//                   {item.name}
//                 </Link>
//               )
//             ))}
//           </nav>
//           {/* ... your icons, search, etc ... */}
//           <div className="flex items-center min-w-0 space-x-3">
//             <div className="flex items-center bg-gray-100 rounded-[24px] px-5 py-2 w-[300px] max-w-[330px]">
//               <Search size={20} className="text-gray-400 mr-2" />
//               <input type="text" placeholder="I'm Searching For..." className="bg-transparent outline-none w-full text-base" />
//             </div>
//             <button className="p-2 hover:bg-gray-100 rounded-lg">
//               <Heart size={20} className="text-gray-600" />
//             </button>
//             <button onClick={() => dispatch(toggleCart())} className="relative p-2 hover:bg-gray-100 rounded-lg">
//               <ShoppingBag size={20} className="text-gray-600" />
//               {totalQuantity > 0 && (
//                 <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">{totalQuantity}</span>
//               )}
//             </button>
//             <span className="mx-3 h-7 w-px bg-gray-200" />
//             <button onClick={() => dispatch(toggleLoginModal())} className="flex items-center p-1 hover:bg-gray-100 rounded-lg">
//               <User size={21} className="text-gray-700" />
//               <span className="ml-2 text-base text-black">Hi, Kshitij</span>
//             </button>
//           </div>
//         </div>
//       </header>
//       {/* Your mobile header (unchanged) */}
//     </>
//   );
// };

// export default Header;




import React from "react";
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

  return (
    <>
      {/* Desktop Header */}
      <header className="w-full bg-white border-b shadow-sm hidden md:flex relative z-50">
        <div className="max-w-[1420px] mx-auto w-full flex items-center justify-between h-[62px] px-8">
          {/* Logo */}
          <Link to="/">
            <img src={logo} alt="logo" className="h-7 min-w-[150px] mr-8" />
          </Link>

          {/* Navigation */}
          <nav className="flex flex-1 space-x-5 relative">
            {nav.map((item) =>
              item.name === "Eyeglasses" ? (
                <DropdownMenu
                  key={item.name}
                  trigger={
                    <span className="flex items-center text-base font-normal cursor-pointer hover:text-blue-600">
                      Eyeglasses
                      <ChevronDown size={16} className="ml-1" />
                    </span>
                  }
                >
                  <EyeglassesDropdown />
                </DropdownMenu>
              ) : item.name === "Sunglasses" ? (
                <DropdownMenu
                  key={item.name}
                  trigger={
                    <span className="flex items-center text-base font-normal cursor-pointer hover:text-blue-600">
                      Sunglasses
                      <ChevronDown size={16} className="ml-1" />
                    </span>
                  }
                >
                  <SunglassesDropdown />
                </DropdownMenu>
              ) : item.name === "Brands" ? (
                <DropdownMenu
                  key={item.name}
                  trigger={
                    <span className="flex items-center text-base font-normal cursor-pointer hover:text-blue-600">
                      Brands
                      <ChevronDown size={16} className="ml-1" />
                    </span>
                  }
                >
                  <BrandsDropdown />
                </DropdownMenu>
              ) : item.name === "Contacts" ? (
                <DropdownMenu
                  key={item.name}
                  trigger={
                    <span className="flex items-center text-base font-normal cursor-pointer hover:text-blue-600">
                      Contacts
                      <ChevronDown size={16} className="ml-1" />
                    </span>
                  }
                >
                  <ContactDropdown />
                </DropdownMenu>
              ) : item.name === "Lenses" ? (
                <DropdownMenu
                  key={item.name}
                  trigger={
                    <span className="flex items-center text-base font-normal cursor-pointer hover:text-blue-600">
                      Lenses
                      <ChevronDown size={16} className="ml-1" />      
                    </span>
                  }
                >
                  <LensesDropdown />
                </DropdownMenu>
              ) : item.name === "Stores" ? (
                <DropdownMenu
                  key={item.name}
                  trigger={
                    <span className="flex items-center text-base font-normal cursor-pointer hover:text-blue-600">
                      Stores
                      <ChevronDown size={16} className="ml-1" />
                    </span>
                  }
                >
                  <StoreDropdown />
                </DropdownMenu>
              ) : item.name === "Sale" ? (
                <DropdownMenu
                  key={item.name}         
                  trigger={
                    <span className="flex items-center text-base font-normal cursor-pointer text-red-600 hover:text-blue-600">
                      Sale
                      <ChevronDown size={16} className="ml-1" />
                    </span>
                  }
                >
                  <SalesDropdown />
                </DropdownMenu>
              ) : (
                <Link
                  key={item.name}
                  to={`/${item.name.toLowerCase()}`}
                  className={`text-base font-normal ${
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
          <div className="flex  space-x-3">
            {/* Search Bar */}
            <div className="flex items-center bg-gray-100 rounded-[24px] px-5 py-2 w-[300px] max-w-[330px]">
              <Search size={20} className="text-gray-400 mr-2" />
              <input
                type="text"
                placeholder="I'm Searching For..."
                className="bg-transparent outline-none w-full text-base"
              />
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
              <span className="ml-2 text-base text-black">Hi, Kshitij</span>
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;





// import React, { useState } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { Search, User, ShoppingBag, Menu, Heart, ChevronDown } from 'lucide-react';
// import { toggleLoginModal } from '../features/user/userSlice';
// import { toggleCart } from '../features/cart/cartSlice';
// import { Link } from 'react-router-dom';
// import logo from '../assets/img/logo.svg';

// // Desktop nav structure with subItems
// const nav = [
//   {
//     name: "Eyeglasses",
//     subItems: ["Men", "Women", "Kids", "Premium"],
//   },
//   {
//     name: "Sunglasses",
//     subItems: ["Polarized", "Aviators", "Sports", "Round"],
//   },
//   {
//     name: "Brands",
//     subItems: ["Ray-Ban", "Oakley", "Gucci", "Carrera"],
//   },
//   {
//     name: "Contacts",
//     subItems: ["Daily", "Monthly", "Toric", "Color"],
//   },
//   {
//     name: "Lenses",
//     subItems: ["Blue Light", "Progressive", "Photochromic"],
//   },
//   {
//     name: "Stores",
//     subItems: ["Find a Store", "Virtual Try-On"],
//   },
//   {
//     name: "Sale",
//     subItems: ["Under ₹999", "Buy 1 Get 1", "50% Off"],
//   },
// ];

// // Mobile nav (flat, simplified, matches your first code)
// const navMobile = [
//   "Eyeglasses", "Sunglasses", "Stores", "Find Your Frame"
// ];

// const Header = () => {
//   const dispatch = useDispatch();
//   const { totalQuantity } = useSelector((state) => state.cart);
//   const [openDropdown, setOpenDropdown] = useState(null);

//   const handleDropdownToggle = (itemName) => {
//     setOpenDropdown(openDropdown === itemName ? null : itemName);
//   };

//   return (
//     <>
//       {/* Desktop Header */}
//       <header className="w-full bg-white border-b shadow-sm px-0 py-0 hidden md:flex relative">
//         <div className="max-w-[1420px] mx-auto w-full flex items-center justify-between h-[62px] px-8">
//           {/* Logo */}
//           <Link to="/">
//             <img src={logo} alt="logo" className="h-7 min-w-[150px] mr-8" />
//           </Link>

//           {/* Nav */}
//           <nav className="flex flex-1 items-center space-x-5 relative">
//             {nav.map((item) => (
//               <div key={item.name} className="relative">
//                 <button
//                   onClick={() => handleDropdownToggle(item.name)}
//                   className={`flex items-center text-base font-normal hover:text-blue-600 transition ${
//                     item.name === "Sale" ? "text-red-600" : "text-black"
//                   }`}
//                 >
//                   {item.name}
//                   <ChevronDown size={16} className="ml-1" />
//                 </button>

//                 {/* Dropdown */}
//                 {openDropdown === item.name && (
//                   <div className="absolute left-0 top-full bg-white shadow-lg border rounded-lg mt-2 min-w-[180px] z-50">
//                     {item.subItems.map((sub) => (
//                       <Link
//                         key={sub}
//                         to={`/${sub.toLowerCase().replace(/\s+/g, '-')}`}
//                         className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
//                         onClick={() => setOpenDropdown(null)}
//                       >
//                         {sub}
//                       </Link>
//                     ))}
//                   </div>
//                 )}
//               </div>
//             ))}
//           </nav>

//           {/* Search & Icons */}
//           <div className="flex items-center min-w-0 space-x-3">
//             <div className="flex items-center bg-gray-100 rounded-[24px] px-5 py-2 w-[300px] max-w-[330px]">
//               <Search size={20} className="text-gray-400 mr-2" />
//               <input
//                 type="text"
//                 placeholder="I'm Searching For..."
//                 className="bg-transparent outline-none w-full text-base"
//               />
//             </div>

//             <button className="p-2 hover:bg-gray-100 rounded-lg">
//               <Heart size={20} className="text-gray-600" />
//             </button>

//             <button
//               onClick={() => dispatch(toggleCart())}
//               className="relative p-2 hover:bg-gray-100 rounded-lg"
//             >
//               <ShoppingBag size={20} className="text-gray-600" />
//               {totalQuantity > 0 && (
//                 <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
//                   {totalQuantity}
//                 </span>
//               )}
//             </button>

//             <span className="mx-3 h-7 w-px bg-gray-200" />

//             <button
//               onClick={() => dispatch(toggleLoginModal())}
//               className="flex items-center p-1 hover:bg-gray-100 rounded-lg"
//             >
//               <User size={21} className="text-gray-700" />
//               <span className="ml-2 text-base text-black">Hi, Kshitij</span>
//             </button>
//           </div>
//         </div>
//       </header>

//       {/* Mobile Header */}
//       <header className="md:hidden flex flex-col border-b shadow-sm bg-white w-full">
//         <div className="flex items-center justify-between px-3 py-2">
//           <Menu size={26} className="text-black" />
//           <img src={logo} alt="logo" className="h-10" />
//           <div className="flex items-center space-x-3">
//             <Search size={24} className="text-black" />

//             {/* Avatar style badge for initial */}
//             <span className="bg-blue-600 text-white font-medium rounded-full w-7 h-7 flex items-center justify-center">K</span>

//             <Heart size={24} className="text-black" />
//             <button
//               onClick={() => dispatch(toggleCart())}
//               className="relative"
//             >
//               <ShoppingBag size={24} className="text-black" />
//               {totalQuantity > 0 && (
//                 <span className="absolute -top-2 -right-3 bg-blue-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
//                   {totalQuantity}
//                 </span>
//               )}
//             </button>
//           </div>
//         </div>
//         <nav className="flex space-x-2 px-2 pb-2 overflow-x-auto">
//           {navMobile.map(item =>
//             <button
//               key={item}
//               className="bg-gray-100 rounded-full px-4 py-2 text-base text-gray-700 whitespace-nowrap"
//             >{item}</button>
//           )}
//         </nav>
//       </header>
//     </>
//   );
// };

// export default Header;








import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Search, User, ShoppingBag, Menu, Heart, ChevronDown } from 'lucide-react';
import { toggleLoginModal } from '../features/user/userSlice';
import { toggleCart } from '../features/cart/cartSlice';
import { Link } from 'react-router-dom';
import logo from '../assets/img/logo.svg';
import DropdownMenu from '../components/DropdownMenu';
import EyeglassesDropdown from '../innerPages/EyeglassesDropdown';

const nav = [
  { name: "Eyeglasses" },
  { name: "Sunglasses" },
  { name: "Brands" },
  { name: "Contacts" },
  { name: "Lenses" },
  { name: "Stores" },
  { name: "Sale" }
];

const Header = () => {
  const dispatch = useDispatch();
  const { totalQuantity } = useSelector((state) => state.cart);

  return (
    <>
      {/* Desktop Header */}
      <header className="w-full bg-white border-b shadow-sm px-0 py-0 hidden md:flex relative z-50">
        <div className="max-w-[1420px] mx-auto w-full flex items-center justify-between h-[62px] px-8">
          <Link to="/">
            <img src={logo} alt="logo" className="h-7 min-w-[150px] mr-8" />
          </Link>
          <nav className="flex flex-1 items-center space-x-5 relative">
            {nav.map((item) => (
              item.name === "Eyeglasses" ? (
                <DropdownMenu
                  key={item.name}
                  trigger={
                    <>
                      <span className="flex items-center text-base font-normal cursor-pointer hover:text-blue-600">Eyeglasses<ChevronDown size={16} className="ml-1" /></span>
                    </>
                  }
                >
                  <EyeglassesDropdown />
                </DropdownMenu>
              ) : (
                <Link
                  key={item.name}
                  to={`/${item.name.toLowerCase()}`}
                  className={`text-base font-normal ${item.name === "Sale" ? "text-red-600" : "text-black"} hover:text-blue-600`}
                >
                  {item.name}
                </Link>
              )
            ))}
          </nav>
          {/* ... your icons, search, etc ... */}
          <div className="flex items-center min-w-0 space-x-3">
            <div className="flex items-center bg-gray-100 rounded-[24px] px-5 py-2 w-[300px] max-w-[330px]">
              <Search size={20} className="text-gray-400 mr-2" />
              <input type="text" placeholder="I'm Searching For..." className="bg-transparent outline-none w-full text-base" />
            </div>
            <button className="p-2 hover:bg-gray-100 rounded-lg">
              <Heart size={20} className="text-gray-600" />
            </button>
            <button onClick={() => dispatch(toggleCart())} className="relative p-2 hover:bg-gray-100 rounded-lg">
              <ShoppingBag size={20} className="text-gray-600" />
              {totalQuantity > 0 && (
                <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">{totalQuantity}</span>
              )}
            </button>
            <span className="mx-3 h-7 w-px bg-gray-200" />
            <button onClick={() => dispatch(toggleLoginModal())} className="flex items-center p-1 hover:bg-gray-100 rounded-lg">
              <User size={21} className="text-gray-700" />
              <span className="ml-2 text-base text-black">Hi, Kshitij</span>
            </button>
          </div>
        </div>
      </header>
      {/* Your mobile header (unchanged) */}
    </>
  );
};

export default Header;

import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Search, User, ShoppingBag, Menu, Heart } from 'lucide-react'
import { toggleLoginModal } from '../features/user/userSlice'
import { toggleCart } from '../features/cart/cartSlice'


const nav = [
  "Eyeglasses", "Sunglasses", "Brands", "Contacts", "Lenses", "Stores", "Sale"
];
const navMobile = [
  "Eyeglasses", "Sunglasses", "Stores", "Find Your Frame"
];

const Header = () => {
  const dispatch = useDispatch();
  const { totalQuantity } = useSelector(state => state.cart);

  return (
    <>
      {/* Desktop */}
      <header className="w-full bg-white border-b shadow-sm px-0 py-0 hidden md:flex">
        <div className="max-w-[1420px] mx-auto w-full flex items-center justify-between h-[62px] px-8">
          {/* Logo */}
          <img src={logo} alt="logo" className="h-7 min-w-[150px] mr-8" />
          {/* Nav */}
          <nav className="flex flex-1 items-center space-x-5">
            {nav.map((item) =>
              <a
                key={item}
                href="#"
                className={`text-base font-normal ${item === "Sale" ? "text-red-600" : "text-black"}`}
              >{item}</a>
            )}
          </nav>
          {/* Search & Icons */}
          <div className="flex items-center min-w-0 space-x-3">
            <div className="flex items-center bg-gray-100 rounded-[24px] px-5 py-2 w-[300px] max-w-[330px]">
              <Search size={20} className="text-gray-400 mr-2" />
              <input
                type="text"
                placeholder="I'm Searching For..."
                className="bg-transparent outline-none w-full text-base"
              />
            </div>
            <button className="p-2 hover:bg-gray-100 rounded-lg">
              <Heart size={20} className="text-gray-600" />
            </button>
            <button
              onClick={() => dispatch(toggleCart())}
              className="relative p-2 hover:bg-gray-100 rounded-lg"
            >
              <ShoppingBag size={20} className="text-gray-600" />
              {totalQuantity > 0 &&
                <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {totalQuantity}
                </span>}
            </button>
            <span className="mx-3 h-7 w-px bg-gray-200" />
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
      {/* Mobile */}
      <header className="md:hidden flex flex-col border-b shadow-sm bg-white w-full">
        <div className="flex items-center justify-between px-3 py-2">
          <Menu size={26} className="text-black" />
          <img src={logo} alt="logo" className="h-10" />
          <div className="flex items-center space-x-3">
            <Search size={24} className="text-black" />
            <span className="bg-blue-600 text-white font-medium rounded-full w-7 h-7 flex items-center justify-center">K</span>
            <Heart size={24} className="text-black" />
            <ShoppingBag size={24} className="text-black" />
          </div>
        </div>
        <nav className="flex space-x-2 px-2 pb-2 overflow-x-auto">
          {navMobile.map(item =>
            <button
              key={item}
              className="bg-gray-100 rounded-full px-4 py-2 text-base text-gray-700 whitespace-nowrap"
            >{item}</button>
          )}
        </nav>
      </header>
    </>
  )
}

export default Header

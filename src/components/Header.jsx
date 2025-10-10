import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Search, User, ShoppingBag, Menu, Heart, MapPin, Phone } from 'lucide-react'
import { toggleLoginModal } from '../features/user/userSlice'
import { toggleCart } from '../features/cart/cartSlice'

const Header = () => {
  const dispatch = useDispatch()
  const { totalQuantity } = useSelector(state => state.cart)
  const { isLoggedIn } = useSelector(state => state.user)

  return (
    <>
      {/* Top Bar */}
      <div className="bg-gray-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-10 text-sm">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-1">
                <Phone size={14} />
                <span>1-844-387-7893</span>
              </div>
              <div className="flex items-center space-x-1">
                <MapPin size={14} />
                <span>Store Locator</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <span>Free Shipping on Orders $99+</span>
              <span>•</span>
              <span>Free Returns</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-blue-600">GlassesUSAWhizfotune</h1>
            </div>

            <nav className="hidden md:flex space-x-8">
              <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">Eyeglasses</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">Sunglasses</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">Reading Glasses</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">Contact Lenses</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">Brands</a>
              <a href="#" className="text-red-600 hover:text-red-700 font-medium">Sale</a>
            </nav>

            <div className="flex items-center space-x-4">
              <div className="hidden md:flex items-center bg-gray-100 rounded-lg px-3 py-2 w-64">
                <Search size={20} className="text-gray-400 mr-2" />
                <input
                  type="text"
                  placeholder="Search for glasses..."
                  className="bg-transparent outline-none w-full text-sm"
                />
              </div>

              <div className="flex items-center space-x-3">
                <button className="p-2 hover:bg-gray-100 rounded-lg">
                  <Heart size={20} className="text-gray-600" />
                </button>
                <button 
                  onClick={() => dispatch(toggleLoginModal())}
                  className="p-2 hover:bg-gray-100 rounded-lg"
                >
                  <User size={20} className="text-gray-600" />
                </button>
                <button 
                  onClick={() => dispatch(toggleCart())}
                  className="p-2 hover:bg-gray-100 rounded-lg relative"
                >
                  <ShoppingBag size={20} className="text-gray-600" />
                  {totalQuantity > 0 && (
                    <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                      {totalQuantity}
                    </span>
                  )}
                </button>
              </div>

              <button className="md:hidden p-2 hover:bg-gray-100 rounded-lg">
                <Menu size={20} className="text-gray-600" />
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header;

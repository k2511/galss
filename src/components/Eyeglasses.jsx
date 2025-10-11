import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Search, User, ShoppingBag, Menu, Heart, ChevronDown, ChevronRight } from 'lucide-react';
import { toggleLoginModal } from '../features/user/userSlice';
import { toggleCart } from '../features/cart/cartSlice';
import logo from '../assets/img/logo.svg';
import glasses1 from '../assets/img/glasses1.jpg'; // Placeholder: Replace with actual image paths
import glasses2 from '../assets/img/glasses2.jpg';
import glasses3 from '../assets/img/glasses3.jpg';
import glasses4 from '../assets/img/glasses4.jpg';
import glasses5 from '../assets/img/glasses5.jpg';
import glasses6 from '../assets/img/glasses6.jpg';
import glasses7 from '../assets/img/glasses7.jpg';
import glasses8 from '../assets/img/glasses8.jpg';
import glasses9 from '../assets/img/glasses9.jpg';
import glasses10 from '../assets/img/glasses10.jpg';
import glasses11 from '../assets/img/glasses11.jpg';
import glasses12 from '../assets/img/glasses12.jpg';
import storeImage from '../assets/img/store.jpg'; // Placeholder for store image
import doctorImage from '../assets/img/doctor.jpg'; // Placeholder for doctor image

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
                href={item === "Eyeglasses" ? "/eyeglasses" : "#"}
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

const CategoryCard = ({ title, subtitle, link }) => (
  <a href="#" className="block bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
    <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
    <p className="text-sm text-gray-600 mb-2">{subtitle}</p>
    <span className="text-blue-600 text-sm font-medium flex items-center">Shop {link} <ChevronRight size={14} className="ml-1" /></span>
  </a>
);

const ProductCard = ({ image, brand, model, price, sale, colors, onSale }) => (
  <div className="group relative bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow">
    <div className="relative">
      <img src={image} alt={`${brand} ${model}`} className="w-full h-64 object-cover" />
      {onSale && <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">Sale</span>}
      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all flex items-center justify-center opacity-0 group-hover:opacity-100">
        <button className="bg-white text-black px-4 py-2 rounded text-sm font-medium">Quick View</button>
      </div>
    </div>
    <div className="p-4">
      <h3 className="text-sm font-semibold text-gray-900 mb-1">{brand}</h3>
      <p className="text-sm text-gray-600 mb-2">{model}</p>
      <div className="flex items-center justify-between">
        <div className="text-lg font-bold text-gray-900">${price}</div>
        {colors && <div className="flex space-x-1">
          {[...Array(4)].map((_, i) => <div key={i} className="w-3 h-3 rounded-full border-2 border-gray-300" style={{ backgroundColor: ['#000', '#fff', '#8B4513', '#FF69B4'][i] }}></div>)}
        </div>}
      </div>
      {sale && <p className="text-xs text-red-600 mt-1">Includes lenses</p>}
    </div>
  </div>
);

const Eyeglasses = () => {
  const products = [
    { image: glasses1, brand: 'Ray-Ban', model: 'RB3025', price: 164, sale: true, colors: true, onSale: true },
    { image: glasses2, brand: 'Oakley', model: 'Holbrook', price: 153, sale: false, colors: true, onSale: false },
    { image: glasses3, brand: 'Prada', model: 'PR 01XS', price: 320, sale: false, colors: true, onSale: false },
    { image: glasses4, brand: 'Gucci', model: 'GG 0001O', price: 380, sale: false, colors: true, onSale: false },
    { image: glasses5, brand: 'Versace', model: 'VE 1227', price: 195, sale: true, colors: true, onSale: true },
    { image: glasses6, brand: 'Tom Ford', model: 'FT 001', price: 425, sale: false, colors: true, onSale: false },
    { image: glasses7, brand: 'Ray-Ban', model: 'RB2132', price: 144, sale: true, colors: true, onSale: true },
    { image: glasses8, brand: 'Coach', model: 'HC 8015', price: 168, sale: false, colors: true, onSale: false },
    { image: glasses9, brand: 'Michael Kors', model: 'MK 1024', price: 130, sale: false, colors: true, onSale: false },
    { image: glasses10, brand: 'Kate Spade', model: 'Lola', price: 145, sale: true, colors: true, onSale: true },
    { image: glasses11, brand: 'Warby Parker', model: 'Thurston', price: 95, sale: false, colors: true, onSale: false },
    { image: glasses12, brand: 'Oliver Peoples', model: 'Cary Grant', price: 385, sale: false, colors: true, onSale: false },
  ];

  const trending = [
    { image: glasses1, brand: 'Ray-Ban', model: 'RB3025', price: 164, colors: ['Black', 'Purple'] },
    { image: glasses2, brand: 'Ralph Lauren', model: 'RA 8170', price: 150, colors: ['Purple', 'Clear'] },
    { image: glasses3, brand: 'Ray-Ban', model: 'RB 3025', price: 164, colors: ['Clear'] },
    { image: glasses4, brand: 'Oakley', model: 'Holbrook', price: 153, colors: ['Clear'] },
  ];

  return (
    <div className="bg-white">
      <Header />
      {/* Hero Banner */}
      <div className="bg-blue-600 text-white py-6 px-8">
        <div className="max-w-[1420px] mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <h1 className="text-2xl font-bold">Designer Eyeglasses (120 items)</h1>
            <span className="bg-white text-blue-600 px-3 py-1 rounded-full text-sm font-semibold">Sale</span>
          </div>
          <div className="flex items-center space-x-4 text-sm">
            <span>Free Shipping</span>
            <span>60-Day Returns</span>
            <span>1-Year Warranty</span>
            <button className="bg-white text-blue-600 px-4 py-2 rounded-lg font-semibold">Buy Now Pay Later</button>
          </div>
        </div>
      </div>

      {/* Filters and Sorting */}
      <div className="max-w-[1420px] mx-auto px-8 py-4 flex justify-between items-center border-b">
        <div className="flex space-x-4 text-sm">
          <button className="flex items-center space-x-1 px-3 py-2 rounded-lg hover:bg-gray-100">
            <ChevronDown size={16} />
            <span>Shape</span>
          </button>
          <button className="flex items-center space-x-1 px-3 py-2 rounded-lg hover:bg-gray-100">
            <ChevronDown size={16} />
            <span>Size</span>
          </button>
          <button className="flex items-center space-x-1 px-3 py-2 rounded-lg hover:bg-gray-100">
            <ChevronDown size={16} />
            <span>Features</span>
          </button>
          <button className="flex items-center space-x-1 px-3 py-2 rounded-lg hover:bg-gray-100">
            <ChevronDown size={16} />
            <span>Brands</span>
          </button>
          <button className="flex items-center space-x-1 px-3 py-2 rounded-lg hover:bg-gray-100">
            <ChevronDown size={16} />
            <span>Colors</span>
          </button>
          <button className="flex items-center space-x-1 px-3 py-2 rounded-lg hover:bg-gray-100">
            <ChevronDown size={16} />
            <span>Price</span>
          </button>
        </div>
        <div className="flex items-center space-x-4 text-sm">
          <span>Sort by: Featured</span>
          <button className="text-blue-600">View: Grid <ChevronDown size={16} className="ml-1" /></button>
        </div>
      </div>

      {/* Product Grid */}
      <div className="max-w-[1420px] mx-auto px-8 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
        <div className="mt-8 flex justify-center">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold">View More</button>
        </div>
      </div>

      {/* Trending Now */}
      <div className="max-w-[1420px] mx-auto px-8 py-8">
        <h2 className="text-2xl font-bold mb-6">Trending Now</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {trending.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
      </div>

      {/* Promo Section */}
      <div className="bg-gray-50 py-12">
        <div className="max-w-[1420px] mx-auto px-8">
          <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-12">
            <div className="flex-1">
              <img src={doctorImage} alt="Doctor" className="w-full max-w-md rounded-lg" />
            </div>
            <div className="flex-1 space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">Look after your eyes now and save up to 50%</h2>
              <p className="text-gray-600">If you're experiencing any of these symptoms, it's time to schedule an eye exam.</p>
              <div className="space-y-2">
                <button className="flex items-center text-blue-600 font-medium">
                  How often should women get eye exams? <ChevronRight size={16} />
                </button>
                <button className="flex items-center text-blue-600 font-medium">
                  What eye glasses are in for women? <ChevronRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Guarantee */}
      <div className="max-w-[1420px] mx-auto px-8 py-8">
        <div className="bg-white border border-gray-200 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Perfect Pair Guarantee</h2>
          <p className="text-gray-600 mb-8">All of our high-quality glasses come with the Perfect Pair Guarantee.</p>
          <div className="flex justify-center space-x-8 text-sm">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xs font-bold">100%</span>
              </div>
              <span>Money Back Guarantee</span>
            </div>
            <div className="flex items-center space-x-2">
              <span>60-Day Returns or Exchange</span>
            </div>
            <div className="flex items-center space-x-2">
              <span>365-Day Warranty</span>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-[1420px] mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            <div>
              <h3 className="text-lg font-bold mb-4">Shop</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-gray-300">Eyeglasses</a></li>
                <li><a href="#" className="hover:text-gray-300">Sunglasses</a></li>
                <li><a href="#" className="hover:text-gray-300">Contacts</a></li>
                <li><a href="#" className="hover:text-gray-300">Designer Brands</a></li>
                <li><a href="#" className="hover:text-gray-300">Virtual Try-On</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Support</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-gray-300">Help Center</a></li>
                <li><a href="#" className="hover:text-gray-300">Live Chat</a></li>
                <li><a href="#" className="hover:text-gray-300">Call Us</a></li>
                <li><a href="#" className="hover:text-gray-300">Email Us</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">About</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-gray-300">Affiliate Program</a></li>
                <li><a href="#" className="hover:text-gray-300">Careers</a></li>
                <li><a href="#" className="hover:text-gray-300">Press</a></li>
                <li><a href="#" className="hover:text-gray-300">Terms of Service</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Lens Guide</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-gray-300">High Index Lenses</a></li>
                <li><a href="#" className="hover:text-gray-300">Polycarbonate Lenses</a></li>
                <li><a href="#" className="hover:text-gray-300">Trifocal Lenses</a></li>
                <li><a href="#" className="hover:text-gray-300">Designer Brands</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Download App</h3>
              <div className="space-y-2 mb-4">
                <a href="#" className="block w-full bg-gray-800 hover:bg-gray-700 rounded px-4 py-2 text-center text-sm">App Store</a>
                <a href="#" className="block w-full bg-gray-800 hover:bg-gray-700 rounded px-4 py-2 text-center text-sm">Google Play</a>
              </div>
              <h3 className="text-lg font-bold mb-4">Track Your Order</h3>
              <input type="text" placeholder="Order #" className="w-full p-2 rounded text-black mb-2" />
              <button className="w-full bg-blue-600 hover:bg-blue-700 rounded px-4 py-2 text-sm">Track Order</button>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex space-x-4">
              <a href="#" className="hover:text-gray-300">Privacy Policy</a>
              <a href="#" className="hover:text-gray-300">Terms of Use</a>
              <a href="#" className="hover:text-gray-300">Accessibility</a>
            </div>
            <div className="flex space-x-4">
              <span>© 2025 GlassesUSA.com. All Rights Reserved.</span>
              <div className="flex space-x-2">
                <img src="https://via.placeholder.com/32x32?text=Visa" alt="Visa" className="h-6" />
                <img src="https://via.placeholder.com/32x32?text=MC" alt="Mastercard" className="h-6" />
                <img src="https://via.placeholder.com/32x32?text=Amex" alt="Amex" className="h-6" />
                <img src="https://via.placeholder.com/32x32?text=PP" alt="PayPal" className="h-6" />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Eyeglasses;
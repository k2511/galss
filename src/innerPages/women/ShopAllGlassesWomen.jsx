import React from "react";
import { Link } from "react-router-dom";
import GuaranteeSection from "../../components/GuaranteeSection ";
import Footer from "../../components/Footer";

const ShopAllGlassesWomen = () => {
  const products = [
    { id: 1, name: "Ray Ban RB5288", color: "Black", image: "https://via.placeholder.com/250x250/000000/FFFFFF?text=Ray+Ban+RB5288", price: "$XX" },
    { id: 2, name: "Areli I", color: "Black", image: "https://via.placeholder.com/250x250/000000/FFFFFF?text=Areli+I", price: "$XX" },
    { id: 3, name: "Areli K", color: "Colors", image: "https://via.placeholder.com/250x250/8B4513/FFFFFF?text=Areli+K", price: "$XX" },
    { id: 4, name: "Muse C", color: "Colors", image: "https://via.placeholder.com/250x250/000080/FFFFFF?text=Muse+C", price: "$XX" },
    { id: 5, name: "Maureen K", color: "Colors", image: "https://via.placeholder.com/250x250/FF69B4/FFFFFF?text=Maureen+K", price: "$XX" },
    { id: 6, name: "Otto B", color: "Colors", image: "https://via.placeholder.com/250x250/8B4513/FFFFFF?text=Otto+B", price: "$XX" },
    { id: 7, name: "Areli L", color: "Black", image: "https://via.placeholder.com/250x250/000000/FFFFFF?text=Areli+L", price: "$XX" },
    { id: 8, name: "Marcela P", color: "Colors", image: "https://via.placeholder.com/250x250/FFFFFF/000000?text=Marcela+P", price: "$XX" },
    { id: 9, name: "Hugo P", color: "Tortoise", image: "https://via.placeholder.com/250x250/8B4513/FFFFFF?text=Hugo+P", price: "$XX" },
    { id: 10, name: "Areli V", color: "Colors", image: "https://via.placeholder.com/250x250/000000/FFFFFF?text=Areli+V", price: "$XX" },
    { id: 11, name: "Otto S", color: "2 Colors", image: "https://via.placeholder.com/250x250/FFFFFF/000000?text=Otto+S", price: "$XX" },
    { id: 12, name: "Areli EU", color: "Colors", image: "https://via.placeholder.com/250x250/8B4513/FFFFFF?text=Areli+EU", price: "$XX" },
    { id: 13, name: "Aretha C", color: "Tortoise", image: "https://via.placeholder.com/250x250/A9A9A9/FFFFFF?text=Aretha+C", price: "$XX" },
    { id: 14, name: "Areli P", color: "Purple", image: "https://via.placeholder.com/250x250/9932CC/FFFFFF?text=Areli+P", price: "$XX" },
    { id: 15, name: "Otto T", color: "2 Colors", image: "https://via.placeholder.com/250x250/000000/FFFFFF?text=Otto+T", price: "$XX" },
    { id: 16, name: "Muse A", color: "2 Colors", image: "https://via.placeholder.com/250x250/8B4513/FFFFFF?text=Muse+A", price: "$XX" },
    { id: 17, name: "Lynna", color: "Colors", image: "https://via.placeholder.com/250x250/0000FF/FFFFFF?text=Lynna", price: "$XX" },
    { id: 18, name: "Otava W", color: "Tortoise", image: "https://via.placeholder.com/250x250/8B4513/FFFFFF?text=Otava+W", price: "$XX" },
    { id: 19, name: "Muse Arizona", color: "2 Colors", image: "https://via.placeholder.com/250x250/8B4513/FFFFFF?text=Muse+Arizona", price: "$XX" },
    { id: 20, name: "Anika K", color: "Blue", image: "https://via.placeholder.com/250x250/0000CD/FFFFFF?text=Anika+K", price: "$XX" },
  ];

  const trending = [
    { name: "Ray Ban", model: "RX532 Shiny Black", image: "https://via.placeholder.com/150x100/000000/FFFFFF?text=Ray-Ban" },
    { name: "Versace", model: "VE3280B Black", image: "https://via.placeholder.com/150x100/000000/FFFFFF?text=Versace" },
    { name: "Burberry", model: "BE2320 Shiny Black", image: "https://via.placeholder.com/150x100/000000/FFFFFF?text=Burberry" },
    { name: "Kate Spade", model: "Hazel Shiny Black", image: "https://via.placeholder.com/150x100/000000/FFFFFF?text=Kate+Spade" },
  ];

  return (
    <div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Promo Banner */}
        <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white py-4 px-4 flex justify-between items-center mb-8 rounded-lg">
          <div className="flex items-center space-x-4">
            <span className="text-2xl font-bold">30% Off</span>
            <span className="text-lg">Frames + Free Shipping</span>
            <span className="text-sm">with Try-On</span>
          </div>
          <Link to="#" className="text-sm underline hover:no-underline">Shop Now</Link>
        </div>

        {/* Title and Filters */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-black">Women's Eyeglasses (374)</h1>
          <div className="flex space-x-4 text-sm text-gray-600">
            <Link to="#" className="hover:underline">Shape</Link>
            <span>|</span>
            <Link to="#" className="hover:underline">Size</Link>
            <span>|</span>
            <Link to="#" className="hover:underline">Features</Link>
            <span>|</span>
            <Link to="#" className="hover:underline">Brand</Link>
            <span>|</span>
            <Link to="#" className="hover:underline">Color</Link>
            <span>|</span>
            <Link to="#" className="hover:underline">Price</Link>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {products.map((product) => (
            <div key={product.id} className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow">
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover"
                />
                <button className="absolute top-2 right-2 bg-white rounded-full p-2 shadow-md opacity-0 hover:opacity-100 transition-opacity">
                  ❤️
                </button>
              </div>
              <div className="p-4">
                <h3 className="text-sm font-medium text-gray-900 mb-1">{product.name}</h3>
                <p className="text-xs text-gray-500 mb-2">{product.color}</p>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-black">{product.price}</span>
                  <span className="text-xs text-green-600">incl. lenses</span>
                </div>
                <button className="w-full mt-2 bg-blue-600 text-white py-2 rounded-md text-sm">Add to Cart</button>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mb-12">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold">
            Showing 20 of 374
            <br />
            View More
          </button>
        </div>

        {/* Trending Now */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Trending Now</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {trending.map((item, index) => (
              <div key={index} className="text-center">
                <img src={item.image} alt={item.name} className="mx-auto mb-2 rounded" />
                <Link to="#" className="text-blue-600 hover:underline block">{item.model}</Link>
              </div>
            ))}
          </div>
        </div>

        {/* Description */}
        <div className="mb-12 p-8 bg-gray-50 rounded-lg">
          <p className="text-gray-700 text-lg">
            Discover our selection of women's eyeglasses. Over 1,000+ glasses from Michael Kors, Prada, Ray-Ban & more.
          </p>
        </div>

        {/* Look After Eyes Section */}
        <div className="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-8 mb-12">
          <div className="md:w-1/2">
            <h3 className="text-xl font-semibold mb-4">Look after your eyes</h3>
            <p className="text-gray-600 mb-4">
              Look after your eyes with regular eye exams. Most medical plans cover an annual exam with $XX copay.
            </p>
            <img 
              src="https://via.placeholder.com/300x200?text=Doctor+Photo" 
              alt="Doctor" 
              className="w-full rounded-lg" 
            />
            <p className="text-sm text-gray-500 mt-2">Freddy Ou</p>
          </div>
          <div className="md:w-1/2 space-y-4">
            <div className="flex items-start space-x-2">
              <span className="text-blue-600">+</span>
              <div>
                <h4 className="font-semibold">How often should women get eye exams?</h4>
                <p className="text-gray-600 text-sm">We recommend annual exams...</p>
              </div>
            </div>
            <div className="flex items-start space-x-2">
              <span className="text-blue-600">+</span>
              <div>
                <h4 className="font-semibold">What GlassesUSA designs are best for women?</h4>
                <p className="text-gray-600 text-sm">We design frames for all styles...</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <GuaranteeSection/>
      <Footer />
    </div>
  );
};

export default ShopAllGlassesWomen;
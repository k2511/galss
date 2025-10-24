import React from "react";
import { Link } from "react-router-dom";
import menuImage from "../assets/EyeGlassees/ourStore.avif";

const EyeglassesDropdown = () => (
  <div className="fixed top-35 left-0 w-screen  bg-white shadow-md border-gray-200
  origin-top transition-transform duration-300 ease-in-out z-50
  scale-y-100 opacity-100">
    <div className="max-w-[1420px] mx-auto flex justify-between px-10 py-10 rounded-b-2xl">
      
      {/* Women */}
      <div className="flex-1 min-w-[180px]">
        <h3 className="font-semibold text-base mb-4">Women</h3>
        <ul className="space-y-2 text-[15px] text-gray-800 leading-relaxed">
          <li><Link to="/ShopAllGlassesWomen">Shop All Eyeglasses</Link></li>
          <li><Link to="/BestSellers">Best Sellers</Link></li>
          <li><Link to="/DesignerGlasses">Designer Eyeglasses</Link></li>
          <li><Link to="/OnSale">On Sale</Link></li>
          <li><Link to="/DesignerOutlet">Designer Outlet</Link></li>
          <li><Link to="/GirlsEyeglasses">Girls' Eyeglasses</Link></li>
          <li><Link to="/NextDayDelivery">Next Day Delivery</Link></li>
        </ul>
      </div>

      {/* Men */}
      <div className="flex-1 min-w-[180px]">
        <h3 className="font-semibold text-base mb-4">Men</h3>
        <ul className="space-y-2 text-[15px] text-gray-800 leading-relaxed">
          <li><Link to="#">Shop All Eyeglasses</Link></li>
          <li><Link to="#">Best Sellers</Link></li>
          <li><Link to="#">Designer Eyeglasses</Link></li>
          <li><Link to="#">On Sale</Link></li>
          <li><Link to="#">Designer Outlet</Link></li>
          <li><Link to="#">Boys' Eyeglasses</Link></li>
          <li><Link to="#">Next Day Delivery</Link></li>
        </ul>
      </div>

      {/* Progressive */}
      <div className="flex-1 min-w-[180px]">
        <h3 className="font-semibold text-base mb-4">Progressive</h3>
        <ul className="space-y-2 text-[15px] text-gray-800 leading-relaxed">
          <li><Link to="#">Shop All Progressives</Link></li>
          <li><Link to="#">Women's Progressives</Link></li>
          <li><Link to="#">Men's Progressives</Link></li>
          <li><Link to="#">Bifocal Lenses</Link></li>
        </ul>
      </div>

      {/* Featured */}
      <div className="flex-1 min-w-[180px]">
        <h3 className="font-semibold text-base mb-4">Featured</h3>
        <ul className="space-y-2 text-[15px] text-gray-800 leading-relaxed">
          <li>
            <Link to="#" className="font-semibold text-blue-600">
              <span className="italic font-bold">Pair</span>fect Match™ Quiz
            </Link>
          </li>
          <li><Link to="#">Blue Light Glasses</Link></li>
          <li><Link to="#">Sports Glasses</Link></li>
          <li><Link to="#">Safety Glasses</Link></li>
          <li><Link to="#">Kids' Glasses</Link></li>
          <li><Link to="#">Readers</Link></li>
          <li><Link to="#">Rimless Glasses</Link></li>
          <li><Link to="#">Transitions® Lenses</Link></li>
        </ul>
      </div>

      {/* Image Section */}
      <div className="flex-shrink-0 ml-12 w-[280px]">
        <div className="rounded-2xl overflow-hidden shadow-md bg-white border border-gray-100">
          <img
            src={menuImage}
            alt="View Our Stores"
            className="w-full h-44 object-cover"
          />
          <div className="px-3 py-3 text-center border-t">
            <Link
              to="#"
              className="text-sm font-medium text-black hover:text-blue-600"
            >
              View Our Stores
            </Link>
          </div>
        </div>
      </div>

    </div>
  </div>
);

export default EyeglassesDropdown;
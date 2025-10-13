import React from "react";
import { Link } from "react-router-dom";
import menuImage from "../assets/EyeGlassees/ourStore.avif";

const EyeglassesDropdown = () => (
  <div className="absolute left-0 top-full max-w-6xl bg-white shadow-lg border border-gray-100 rounded-2xl mt-2 flex px-10 py-10 z-50">
    {/* Women */}
    <div className="flex-1 min-w-[160px]">
      <h3 className="font-semibold text-base mb-4">Women</h3>
      <ul className="space-y-2 text-[15px] text-gray-800 leading-relaxed">
        <li><Link to="#">Shop All Eyeglasses</Link></li>
        <li><Link to="#">Best Sellers</Link></li>
        <li><Link to="#">Designer Eyeglasses</Link></li>
        <li><Link to="#">On Sale</Link></li>
        <li><Link to="#">Designer Outlet</Link></li>
        <li><Link to="#">Girls' Eyeglasses</Link></li>
        <li><Link to="#">Next Day Delivery</Link></li>
      </ul>
    </div>

    {/* Men */}
    <div className="flex-1 min-w-[160px]">
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
    <div className="flex-1 min-w-[160px]">
      <h3 className="font-semibold text-base mb-4">Progressive</h3>
      <ul className="space-y-2 text-[15px] text-gray-800 leading-relaxed">
        <li><Link to="#">Shop All Progressives</Link></li>
        <li><Link to="#">Women's Progressives</Link></li>
        <li><Link to="#">Men's Progressives</Link></li>
        <li><Link to="#">Bifocal Lenses</Link></li>
      </ul>
    </div>

    {/* Featured */}
    <div className="flex-1 min-w-[160px]">
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
    <div className="flex-shrink-0 ml-10 w-[260px]">
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
);

export default EyeglassesDropdown;

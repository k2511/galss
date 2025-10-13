import React from "react";
import { Link } from "react-router-dom";
import saleImg1 from "../assets/Sunglasses/saleImg1.avif";
import saleImg2 from "../assets/Sunglasses/saleImg1.avif";

const SunglassesDropdown = () => (
  <div className="absolute left-0 top-full full bg-white shadow-lg border-t border-gray-100 mt-0 z-50">
    <div className="flex justify-between px-20 py-10 rounded-b-2xl">
      {/* Women */}
      <div className="flex-1 min-w-[180px]">
        <h3 className="font-semibold text-base mb-4">Women</h3>
        <ul className="space-y-2 text-[15px] text-gray-800 leading-relaxed">
          <li><Link to="#">Prescription Sunglasses</Link></li>
          <li><Link to="#">Best Sellers</Link></li>
          <li><Link to="#">Designer Sunglasses</Link></li>
          <li><Link to="#">On Sale</Link></li>
          <li><Link to="#">Ray-Ban</Link></li>
          <li><Link to="#">Shop All Sunglasses</Link></li>
        </ul>
      </div>

      {/* Men */}
      <div className="flex-1 min-w-[180px]">
        <h3 className="font-semibold text-base mb-4">Men</h3>
        <ul className="space-y-2 text-[15px] text-gray-800 leading-relaxed">
          <li><Link to="#">Prescription Sunglasses</Link></li>
          <li><Link to="#">Best Sellers</Link></li>
          <li><Link to="#">Designer Sunglasses</Link></li>
          <li><Link to="#">On Sale</Link></li>
          <li><Link to="#">Ray-Ban</Link></li>
          <li><Link to="#">Shop All Sunglasses</Link></li>
        </ul>
      </div>

      {/* Special Lenses */}
      <div className="flex-1 min-w-[180px]">
        <h3 className="font-semibold text-base mb-4">Special Lenses</h3>
        <ul className="space-y-2 text-[15px] text-gray-800 leading-relaxed">
          <li><Link to="#">Sports Glasses</Link></li>
          <li><Link to="#">Safety Glasses</Link></li>
          <li><Link to="#">Kids' Glasses</Link></li>
          <li><Link to="#">Transitions® Lenses</Link></li>
          <li><Link to="#">Polarized</Link></li>
          <li><Link to="#">Clip-Ons</Link></li>
          <li><Link to="#">Progressives</Link></li>
        </ul>
      </div>

      {/* Offer Cards */}
      <div className="flex-shrink-0 flex gap-6 ml-10">
        {/* Card 1 */}
        <div className="rounded-2xl overflow-hidden shadow-md bg-white border border-gray-100 w-[240px]">
          <div className="relative">
            <img src={saleImg1} alt="Sunglasses Sale" className="w-full h-40 object-cover" />
            <div className="absolute top-4 left-4 text-white text-left">
              <p className="text-xs tracking-wide">SAVE UP TO</p>
              <h3 className="text-4xl font-extrabold leading-none">65<span className="text-xl font-medium align-top">%</span></h3>
              <p className="text-xs">OFF</p>
            </div>
          </div>
          <div className="px-3 py-3 text-center border-t">
            <Link to="#" className="text-sm font-medium text-black hover:text-blue-600">
              Sunglasses Sale
            </Link>
          </div>
        </div>

        {/* Card 2 */}
        <div className="rounded-2xl overflow-hidden shadow-md bg-white border border-gray-100 w-[240px]">
          <div className="relative">
            <img src={saleImg2} alt="Sports Glasses" className="w-full h-40 object-cover" />
            <div className="absolute top-4 left-4 text-white text-left">
              <p className="text-xs tracking-wide">ALL LENSES</p>
              <h3 className="text-4xl font-extrabold leading-none">50<span className="text-xl font-medium align-top">%</span></h3>
              <p className="text-xs">OFF</p>
            </div>
          </div>
          <div className="px-3 py-3 text-center border-t">
            <Link to="#" className="text-sm font-medium text-black hover:text-blue-600">
              Sports Glasses
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default SunglassesDropdown;

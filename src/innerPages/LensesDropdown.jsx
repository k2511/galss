import React from "react";
import { Link } from "react-router-dom";
import lensesImage from "../assets/lenses/lens1.avif";
import labsImage from "../assets/lenses/lens2.avif";

const LensesDropdown = () => (
  <div className="absolute left-0 top-full full bg-white shadow-lg border-t border-gray-100 mt-0 z-50">
    <div className="max-w-[1420px] mx-auto px-10 py-10 rounded-b-2xl">
      
      {/* Lists Section */}
      <div className="flex justify-between mb-10">
        
        {/* Popular Lenses */}
        <div className="flex-1 min-w-[200px]">
          <h3 className="font-semibold text-base mb-4">Popular Lenses</h3>
          <ul className="space-y-2 text-[15px] text-gray-800 leading-relaxed">
            <li><Link to="#">Progressive Lenses</Link></li>
            <li><Link to="#">Bifocal Lenses</Link></li>
            <li><Link to="#">Blue Light Lenses</Link></li>
            <li><Link to="#">Transitions® Lenses</Link></li>
            <li><Link to="#">Safety Lenses</Link></li>
          </ul>
        </div>

        {/* Special Sunglasses */}
        <div className="flex-1 min-w-[200px]">
          <h3 className="font-semibold text-base mb-4">Special Sunglasses</h3>
          <ul className="space-y-2 text-[15px] text-gray-800 leading-relaxed">
            <li><Link to="#">Prescription Sunglasses</Link></li>
            <li><Link to="#">Mirrored Sunglasses</Link></li>
            <li><Link to="#">Polarized Sunglasses</Link></li>
            <li><Link to="#">Tinted Sunglasses</Link></li>
          </ul>
        </div>

        {/* Knowledge Center */}
        <div className="flex-1 min-w-[200px]">
          <h3 className="font-semibold text-base mb-4">Knowledge Center</h3>
          <ul className="space-y-2 text-[15px] text-gray-800 leading-relaxed">
            <li><Link to="#">Our Lenses</Link></li>
            <li><Link to="#">About Us</Link></li>
            <li><Link to="#">"Through the Lens" Blog</Link></li>
          </ul>
        </div>
      </div>

      {/* Images Section */}
      <div className="flex justify-start gap-12">
        
        {/* Explore Our Lenses Image */}
        <div className="w-[280px]">
          <div className="rounded-2xl overflow-hidden shadow-md bg-white border border-gray-100">
            <img
              src={lensesImage}
              alt="Explore Our Lenses"
              className="w-full h-44 object-cover"
            />
            <div className="px-3 py-3 text-center border-t">
              <Link
                to="#"
                className="text-sm font-medium text-black hover:text-blue-600"
              >
                Explore Our Lenses
              </Link>
            </div>
          </div>
        </div>

        {/* Our Optical Labs Image */}
        <div className="w-[280px]">
          <div className="rounded-2xl overflow-hidden shadow-md bg-white border border-gray-100">
            <img
              src={labsImage}
              alt="Our Optical Labs"
              className="w-full h-44 object-cover"
            />
            <div className="px-3 py-3 text-center border-t">
              <div className="text-sm font-medium text-black mb-1">Our Optical Labs</div>
              <Link
                to="#"
                className="text-xs text-gray-600 hover:text-blue-600"
              >
                About Us
              </Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
);

export default LensesDropdown;

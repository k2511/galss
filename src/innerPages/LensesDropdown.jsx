import React from "react";
import { Link } from "react-router-dom";
import lensesImage from "../assets/lenses/lens1.avif";
import labsImage from "../assets/lenses/lens2.avif";

const LensesDropdown = () => (
  <div className="fixed top-35 left-0 w-screen  bg-white shadow-md border-gray-200
  origin-top transition-transform duration-300 ease-in-out z-50
  scale-y-100 opacity-100">
    <div className="max-w-[1420px] mx-auto flex justify-between px-10 py-10 rounded-b-2xl">
      
      {/* Lists Section */}
      <div className="flex justify-between mb-10">
        
        {/* Popular Lenses */}
        <div className="flex-1 min-w-[200px]">
          <h3 className="font-semibold text-base mb-4">Popular Lenses</h3>
          <ul className="space-y-2 text-[15px] text-gray-800 leading-relaxed">
            <li><Link to="/lenses/popularlenses/ProgressiveLenses">Progressive Lenses</Link></li>
            <li><Link to="/lenses/popularlenses/BifocalLenses">Bifocal Lenses</Link></li>
            <li><Link to="/lenses/popularlenses/BlueLightLenses">Blue Light Lenses</Link></li>
            <li><Link to="/lenses/popularlenses/TransitionLenses">Transitions® Lenses</Link></li>
            <li><Link to="/lenses/popularlenses/SafetyLenses">Safety Lenses</Link></li>
          </ul>
        </div>

        {/* Special Sunglasses */}
        <div className="flex-1 min-w-[200px]">
          <h3 className="font-semibold text-base mb-4">Special Sunglasses</h3>
          <ul className="space-y-2 text-[15px] text-gray-800 leading-relaxed">
            <li><Link to="/lenses/specialsunglasses/PriscriptionSunglasses">Prescription Sunglasses</Link></li>
            <li><Link to="/lenses/specialsunglasses/MirroredSunglasses">Mirrored Sunglasses</Link></li>
            <li><Link to="/lenses/specialsunglasses/PolarizedSunglasses">Polarized Sunglasses</Link></li>
            <li><Link to="/lenses/specialsunglasses/TintedSunglasses">Tinted Sunglasses</Link></li>
          </ul>
        </div>

        {/* Knowledge Center */}
        <div className="flex-1 min-w-[200px]">
          <h3 className="font-semibold text-base mb-4">Knowledge Center</h3>
          <ul className="space-y-2 text-[15px] text-gray-800 leading-relaxed">
            <li><Link to="/lenses/knowledgecenter/OurLenses">Our Lenses</Link></li>
            <li><Link to="/lenses/knowledgecenter/AboutUs">About Us</Link></li>
            <li><Link to="/lenses/knowledgecenter/LensBlog">"Through the Lens" Blog</Link></li>
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
                to="/lenses/knowledgecenter/OurLenses"
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
                to="/lenses/knowledgecenter/AboutUs"
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

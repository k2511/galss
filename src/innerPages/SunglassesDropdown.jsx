import React from "react";
import { Link } from "react-router-dom";
import saleImg1 from "../assets/Sunglasses/saleImg1.avif";
import saleImg2 from "../assets/Sunglasses/saleImg1.avif";

const SunglassesDropdown = () => (
  <div className="fixed top-35 left-0 w-screen  bg-white shadow-md border-gray-200
  origin-top transition-transform duration-300 ease-in-out z-50
  scale-y-100 opacity-100">
    <div className="max-w-[1420px] mx-auto flex justify-between px-10 py-10 rounded-b-2xl">
      {/* Women */}
      <div className="flex-1 min-w-[180px]">
        <h3 className="font-semibold text-base mb-4">Women</h3>
        <ul className="space-y-2 text-[15px] text-gray-800 leading-relaxed">
          <li><Link to="/sunglasses/women/SunGlasses">Sunglasses</Link></li>
          <li><Link to="/sunglasses/women/BestSeller">Best Sellers</Link></li>
          <li><Link to="/sunglasses/women/DesignerSunGlasses">Designer Sunglasses</Link></li>
          <li><Link to="sunglasses/women/OnSale">On Sale</Link></li>
          <li><Link to="/sunglasses/women/RayBan">Ray-Ban</Link></li>
          <li><Link to="/sunglasses/women/ShopAllSunGlasses">Shop All Sunglasses</Link></li>
        </ul>
      </div>

      {/* Men */}
      <div className="flex-1 min-w-[180px]">
        <h3 className="font-semibold text-base mb-4">Men</h3>
        <ul className="space-y-2 text-[15px] text-gray-800 leading-relaxed">
          <li><Link to="/sunglasses/men/SunGlasses">Sunglasses</Link></li>
          <li><Link to="/sunglasses/men/BestSeller">Best Sellers</Link></li>
          <li><Link to="/sunglasses/men/DesignerSunGlasses">Designer Sunglasses</Link></li>
          <li><Link to="sunglasses/men/OnSale">On Sale</Link></li>
          <li><Link to="/sunglasses/men/RayBan">Ray-Ban</Link></li>
          <li><Link to="/sunglasses/men/ShopAllSunGlasses">Shop All Sunglasses</Link></li>
        </ul>
      </div>

      {/* Special Lenses */}
      <div className="flex-1 min-w-[180px]">
        <h3 className="font-semibold text-base mb-4">Special Lenses</h3>
        <ul className="space-y-2 text-[15px] text-gray-800 leading-relaxed">
          <li><Link to="/sunglasses/SpecialLenses/SportGlasses">Sports Glasses</Link></li>
          <li><Link to="/sunglasses/SpecialLenses/SafetyGlasses">Safety Glasses</Link></li>
          <li><Link to="/sunglasses/SpecialLenses/KidsGlasses">Kids' Glasses</Link></li>
          <li><Link to="/sunglasses/SpecialLenses/TransitionsLenses">Transitions® Lenses</Link></li>
          <li><Link to="/sunglasses/SpecialLenses/Polarized">Polarized</Link></li>
          <li><Link to="/sunglasses/SpecialLenses/PrescriptionSunGlasses">Prescription Sunglasses</Link></li>
          <li><Link to="/sunglasses/SpecialLenses/ClipOns">Clip-Ons</Link></li>
          <li><Link to="/sunglasses/SpecialLenses/Progressive">Progressives</Link></li>
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

import React from "react";
import { Link } from "react-router-dom";
import glassesSaleImage from "../assets/sales/sales1.avif";
import sunglassesSaleImage from "../assets/sales/sales2.avif";
import designerOutletImage from "../assets/sales/sales3.avif";
import salesCouponsImage from "../assets/sales/sales4.avif";

const SalesDropdown = () => (
  <div className="fixed top-35 left-0 w-screen  bg-white shadow-md border-gray-200
  origin-top transition-transform duration-300 ease-in-out z-50
  scale-y-100 opacity-100">
    <div className="max-w-[1420px] mx-auto flex justify-between px-10 py-10 rounded-b-2xl">
      <div className="flex justify-between gap-6">
        {/* Glasses on Sale */}
        <div className="flex flex-col items-center">
          <div className="relative w-48 h-48 bg-amber-50 rounded-2xl overflow-hidden mb-2">
            <img
              src={glassesSaleImage}
              alt="Glasses on Sale"
              className="absolute bottom-0 left-0 w-32 h-32 object-cover"
            />
            <div className="absolute top-4 left-4 text-black p-2">
              <h3 className="font-bold text-sm uppercase">GLASSES ON SALE</h3>
              <p className="text-xs">Starting at just $19</p>
            </div>
          </div>
          <div className="bg-white rounded-xl px-3 py-2 shadow-sm border border-gray-100">
            <Link
              to="#"
              className="text-xs font-medium text-black hover:text-blue-600"
            >
              Glasses On Sale
            </Link>
          </div>
        </div>

        {/* Sunglasses Sale */}
        <div className="flex flex-col items-center">
          <div className="relative w-48 h-48 bg-amber-800 rounded-2xl overflow-hidden mb-2">
            <img
              src={sunglassesSaleImage}
              alt="Sunglasses Sale"
              className="absolute bottom-0 right-0 w-32 h-32 object-cover"
            />
            <div className="absolute top-4 left-4 text-white p-2">
              <h3 className="font-bold text-sm uppercase">SUNGLASSES SALE</h3>
              <p className="text-xs">Up to 65% off</p>
            </div>
          </div>
          <div className="bg-white rounded-xl px-3 py-2 shadow-sm border border-gray-100">
            <Link
              to="#"
              className="text-xs font-medium text-black hover:text-blue-600"
            >
              Sunglasses Sale
            </Link>
          </div>
        </div>

        {/* Designer Outlet */}
        <div className="flex flex-col items-center">
          <div className="relative w-48 h-48 bg-orange-500 rounded-2xl overflow-hidden mb-2">
            <img
              src={designerOutletImage}
              alt="Designer Outlet"
              className="absolute top-4 right-4 w-32 h-32 object-cover"
            />
            <div className="absolute top-4 left-4 text-white p-2">
              <h3 className="font-bold text-sm uppercase">DESIGNER OUTLET</h3>
              <p className="text-xs">Up to 60% off</p>
            </div>
          </div>
          <div className="bg-white rounded-xl px-3 py-2 shadow-sm border border-gray-100">
            <Link
              to="#"
              className="text-xs font-medium text-black hover:text-blue-600"
            >
              Designer Outlet
            </Link>
          </div>
        </div>

        {/* Sales & Coupons */}
        <div className="flex flex-col items-center">
          <div className="relative w-48 h-48 bg-amber-400 rounded-2xl overflow-hidden mb-2">
            <img
              src={salesCouponsImage}
              alt="Sales & Coupons"
              className="absolute top-4 right-4 w-32 h-32 object-cover"
            />
            <div className="absolute top-4 left-4 text-black p-2">
              <h3 className="font-bold text-sm uppercase">SALES & COUPONS</h3>
              <p className="text-xs">Check out all our promotions</p>
            </div>
          </div>
          <div className="bg-white rounded-xl px-3 py-2 shadow-sm border border-gray-100">
            <Link
              to="#"
              className="text-xs font-medium text-black hover:text-blue-600"
            >
              Sales & Coupons
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default SalesDropdown;
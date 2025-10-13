import React from "react";
import { Link } from "react-router-dom";
import rooseveltImage from "../assets/stores/store1.avif";
import floridaImage from "../assets/stores/store2.avif";
import natickImage from "../assets/stores/store3.avif";

const StoreDropdown = () => (
   <div className="fixed top-35 left-0 w-screen  bg-white shadow-md border-gray-200
  origin-top transition-transform duration-300 ease-in-out z-50
  scale-y-100 opacity-100">
    <div className="max-w-[1420px] mx-auto flex justify-between px-10 py-10 rounded-b-2xl">
      <div className="flex justify-between gap-6">
        {/* Roosevelt Field Mall */}
        <div className="flex-1">
          <div className="rounded-2xl overflow-hidden shadow-md bg-white border border-gray-100">
            <img
              src={rooseveltImage}
              alt="Roosevelt Field Mall"
              className="w-full h-80 object-cover"
            />
            <div className="px-3 py-3 text-center border-t border-gray-100">
              <Link
                to="#"
                className="text-sm font-medium text-black hover:text-blue-600"
              >
                Roosevelt Field Mall
              </Link>
            </div>
          </div>
        </div>

        {/* Florida Mall */}
        <div className="flex-1">
          <div className="rounded-2xl overflow-hidden shadow-md bg-white border border-gray-100">
            <img
              src={floridaImage}
              alt="Florida Mall"
              className="w-full h-80 object-cover"
            />
            <div className="px-3 py-3 text-center border-t border-gray-100">
              <Link
                to="#"
                className="text-sm font-medium text-black hover:text-blue-600"
              >
                Florida Mall
              </Link>
            </div>
          </div>
        </div>

        {/* Natick Mall */}
        <div className="flex-1">
          <div className="rounded-2xl overflow-hidden shadow-md bg-white border border-gray-100">
            <img
              src={natickImage}
              alt="Natick Mall"
              className="w-full h-80 object-cover"
            />
            <div className="px-3 py-3 text-center border-t border-gray-100">
              <Link
                to="#"
                className="text-sm font-medium text-black hover:text-blue-600"
              >
                Natick Mall
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default StoreDropdown;
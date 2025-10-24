import React from "react";
import { Link } from "react-router-dom";

const ContactDropdown = () => (
  <div className="fixed top-35 left-0 w-screen  bg-white shadow-md border-gray-200
  origin-top transition-transform duration-300 ease-in-out z-50
  scale-y-100 opacity-100">
    <div className="max-w-[1420px] mx-auto flex justify-between px-10 py-10 rounded-b-2xl">
      {/* Lens Types */}
      <div className="flex-1 min-w-[180px]">
        <h3 className="font-semibold text-base mb-4">Lens Types</h3>
        <ul className="space-y-2 text-[15px] text-gray-800 leading-relaxed">
          <li><Link to="#">Shop All Contacts</Link></li>
          <li><Link to="#">Daily</Link></li>
          <li><Link to="#">Weekly</Link></li>
          <li><Link to="#">Monthly</Link></li>
          <li><Link to="#">Single Vision</Link></li>
          <li><Link to="#">Multifocal & Bifocal</Link></li>
        </ul>
      </div>

      {/* Shop by Brand */}
      <div className="flex-1 min-w-[180px]">
        <h3 className="font-semibold text-base mb-4">Shop by Brand</h3>
        <div className="grid grid-cols-4 gap-4">
          {/* First row */}
          <div className="rounded-xl p-2 border border-gray-200 text-center bg-white">
            <Link to="#" className="block">
              <div className="font-semibold text-sm">ACUVUE®</div>
            </Link>
          </div>
          <div className="rounded-xl p-2 border border-gray-200 text-center bg-white">
            <Link to="#" className="block">
              <div className="font-semibold text-sm">Biofinity®</div>
            </Link>
          </div>
          <div className="rounded-xl p-2 border border-gray-200 text-center bg-white">
            <Link to="#" className="block">
              <div className="font-semibold text-sm">DAILIES®</div>
              <div className="text-xs text-gray-500 mt-1">brand lenses</div>
            </Link>
          </div>
          <div className="rounded-xl p-2 border border-gray-200 text-center bg-white">
            <Link to="#" className="block">
              <div className="font-semibold text-sm">AIR OPTIX®</div>
            </Link>
          </div>

          {/* Second row */}
          <div className="rounded-xl p-2 border border-gray-200 text-center bg-white">
            <Link to="#" className="block">
              <div className="font-semibold text-sm">ULTRA®</div>
            </Link>
          </div>
          <div className="rounded-xl p-2 border border-gray-200 text-center bg-white">
            <Link to="#" className="block">
              <div className="font-semibold text-sm">Bio</div>
              <div className="text-xs text-gray-500 mt-1">true.</div>
            </Link>
          </div>
          <div className="rounded-xl p-2 border border-gray-200 text-center bg-white">
            <Link to="#" className="block">
              <div className="font-semibold text-sm">clariti</div>
            </Link>
          </div>
          <div className="rounded-xl p-2 border border-gray-200 text-center bg-white">
            <Link to="#" className="block">
              <div className="font-semibold text-sm">Proclear®</div>
            </Link>
          </div>

          {/* Third row */}
          <div className="rounded-xl p-2 border border-gray-200 text-center bg-white">
            <Link to="#" className="block">
              <div className="font-semibold text-sm">Soflens.</div>
              <div className="text-xs text-gray-500 mt-1">daily disposable</div>
            </Link>
          </div>
          <div className="rounded-xl p-2 border border-gray-200 text-center bg-white">
            <Link to="#" className="block">
              <div className="font-semibold text-sm">MyDay™</div>
            </Link>
          </div>
          <div className="rounded-xl p-2 border border-gray-200 text-center bg-white col-span-2">
            <Link to="#" className="block">
              <div className="font-semibold text-sm">Shop All</div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default ContactDropdown;
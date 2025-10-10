import React from "react";
import { ChevronLeft, ChevronRight, Phone, Accessibility } from "lucide-react";

const TopBar = () => (
  <div className="bg-[#0c0e1a] w-full text-white text-[15px] md:text-base py-2 border-b">
    <div className="max-w-[1400px] mx-auto flex items-center justify-between px-4 md:px-8">

      {/* Left side content */}
      <div className="flex items-center space-x-3 w-2/3 min-w-0 md:text-[10px]">
        <ChevronLeft size={19} className="text-gray-300 flex-shrink-0" />
        <span className="truncate">
          100% Money-Back Guarantee + 365 Day Warranty + Free Shipping and Returns
        </span>
        <ChevronRight size={19} className="text-gray-300 flex-shrink-0" />
      </div>

      {/* Right side content, wraps for mobile */}
      <div className="hidden md:flex items-center space-x-6 w-1/3 justify-end md:text-[10px]
">
        <span>
          1-844-244-1186 <span className="mx-2 text-gray-400">Every day 7am - midnight ET</span>
        </span>
        <Accessibility size={18} className="text-gray-300" />
        <span className="border-l pl-4">
          Help &amp; Support <ChevronRight size={14} className="inline ml-1" />
        </span>
      </div>

      {/* Mobile right side simplified */}
      <div className="flex md:hidden items-center space-x-2 w-1/3 justify-end">
        <Phone size={18} className="text-gray-300" />
        <Accessibility size={18} className="text-gray-300" />
        <ChevronRight size={14} className="text-gray-300" />
      </div>
    </div>
  </div>
);

export default TopBar;

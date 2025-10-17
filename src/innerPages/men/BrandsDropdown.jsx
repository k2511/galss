import React from "react";
import { Link } from "react-router-dom";

import rayban from "../assets/brands/rayban.jpg";
import oakley from "../assets/brands/oakley.jpg";
import mk from "../assets/brands/mk.jpg";
import burberry from "../assets/brands/burberry.jpg";
import coach from "../assets/brands/coach.jpg";
import ax from "../assets/brands/ax.jpg";
import versace from "../assets/brands/versace.jpg";
import persol from "../assets/brands/persol.jpg";
import ottoto from "../assets/brands/ottoto.jpg";
import prada from "../assets/brands/prada.jpg";
import gucci from "../assets/brands/gucci.jpg";
import tomford from "../assets/brands/tomford.jpg";
import dolce from "../assets/brands/dolce.jpg";
import oliver from "../assets/brands/oliver.jpg";
import armani from "../assets/brands/armani.jpg";
import garrett from "../assets/brands/garrett.jpg";

const PLACEHOLDER_SVG =
  'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="36"><rect width="100%" height="100%" fill="%23f3f4f6"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23888" font-family="Arial,sans-serif" font-size="12">No image</text></svg>';

const PREMIUM_BRANDS = [
  { name: "Ray-Ban", img: rayban },
  { name: "Oakley", img: oakley },
  { name: "Michael Kors", img: mk },
  { name: "Burberry", img: burberry },
  { name: "Coach", img: coach },
  { name: "Kate Spade", img: PLACEHOLDER_SVG }, // Add Kate Spade image when available
  { name: "Armani Exchange", img: ax },
  { name: "Versace", img: versace },
  { name: "Muse", img: PLACEHOLDER_SVG }, // Add Muse image when available
  { name: "Persol", img: persol },
  { name: "Ottoto", img: ottoto },
];

const LUXURY_BRANDS = [
  { name: "Prada", img: prada },
  { name: "Gucci", img: gucci },
  { name: "Tom Ford", img: tomford },
  { name: "Dolce & Gabbana", img: dolce },
  { name: "Oliver Peoples", img: oliver },
  { name: "Giorgio Armani", img: armani },
  { name: "Garrett Leight", img: garrett },
];

const TEXT_BRANDS_COL1 = [
  "Adidas",
  "Arnette",
  "Calvin Klein",
  "Carrera",
  "Costa",
  "Emporio Armani",
  "O'Neill",
];

const TEXT_BRANDS_COL2 = [
  "Nike",
  "Ralph Lauren",
  "Saint Laurent",
  "Spy",
  "Tory Burch",
  "Wiley X",
];

const BrandTile = ({ brand }) => {
  return (
    <div
      className="flex items-center justify-center border border-gray-200 rounded-lg py-4 px-6 bg-gray-50 hover:bg-gray-100 transition cursor-pointer"
      title={brand.name}
    >
      <img
        src={brand.img}
        alt={brand.name}
        loading="lazy"
        className="max-h-7 w-full object-contain"
        onError={(e) => {
          e.currentTarget.onerror = null;
          e.currentTarget.src = PLACEHOLDER_SVG;
        }}
      />
    </div>
  );
};

const BrandsDropdown = () => {
  return (
    <div className="fixed top-35 left-0 w-screen  bg-white shadow-md border-gray-200
  origin-top transition-transform duration-300 ease-in-out z-50
  scale-y-100 opacity-100">
      <div className="max-w-[1420px] mx-auto px-10 py-8">
        <div className="flex gap-8">
          {/* LEFT SECTION - Premium Brands */}
          <div
            className="flex gap-8 pr-8 border-r border-gray-200"
            style={{ flex: "0 0 65%" }}
          >
            {/* Brand Logo Grid */}
            <div style={{ flex: "0 0 340px" }}>
              <h3 className="font-semibold text-base mb-5">Premium Brands</h3>
              <div className="grid grid-cols-3 gap-3">
                {PREMIUM_BRANDS.map((brand) => (
                  <BrandTile key={brand.name} brand={brand} />
                ))}
                <div className="flex items-center justify-center col-span-3">
                  <Link
                    to="#"
                    className="text-sm font-medium underline hover:text-blue-600"
                  >
                    Shop All Brands
                  </Link>
                </div>
              </div>
            </div>

            {/* Text Brand Lists - Two Columns */}
            <div className="flex gap-12 flex-1">
              <div className="flex-1">
                <ul className="space-y-2.5 text-sm mt-11">
                  {TEXT_BRANDS_COL1.map((brand) => (
                    <li key={brand}>
                      <Link to="#" className="hover:underline text-gray-800">
                        {brand}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex-1">
                <ul className="space-y-2.5 text-sm mt-11">
                  {TEXT_BRANDS_COL2.map((brand) => (
                    <li key={brand}>
                      <Link to="#" className="hover:underline text-gray-800">
                        {brand}
                      </Link>
                    </li>
                  ))}
                  <li>
                    <Link
                      to="#"
                      className="font-medium underline hover:text-blue-600"
                    >
                      Brands A-Z
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* RIGHT SECTION - Luxury Boutique */}
          <div className="flex-1 pl-4">
            <h3 className="font-semibold text-base mb-5 w-52">
              Ottica - Luxury Boutique
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {LUXURY_BRANDS.map((brand) => (
                <BrandTile key={brand.name} brand={brand} />
              ))}
              <div className="flex items-center justify-center col-span-2 mt-2">
                <Link
                  to="#"
                  className="text-sm font-medium underline hover:text-blue-600"
                >
                  Shop All
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandsDropdown;

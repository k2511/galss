import React from "react";
import rayban from "../assets/brands/rayban.jpg";
import gucci from "../assets/brands/gucci.jpg";
import versace from "../assets/brands/versace.jpg";
import persol from "../assets/brands/persol.jpg";
import mk from "../assets/brands/mk.jpg";
import coach from "../assets/brands/coach.jpg";
import oakley from "../assets/brands/oakley.jpg";

const brands = [
  { id: 1, name: "Ray-Ban", img: rayban },
  { id: 2, name: "Gucci", img: gucci },
  { id: 3, name: "Versace", img: versace },
  { id: 5, name: "Persol", img: persol },
  { id: 6, name: "Michael Kors", img: mk },
  { id: 7, name: "Coach", img: coach },
  { id: 9, name: "Oakley", img: oakley },
];

const BrandSection = () => {
  return (
    <section className="bg-[#3B67A5] py-16 text-white text-center">
      <h2 className="text-2xl md:text-3xl font-medium mb-10">
        Available with all your favorite brands.
      </h2>
      <div className="flex flex-wrap justify-center gap-10 px-6">
        {brands.map((brand) => (
          <div key={brand.id} className="flex items-center justify-center">
            <img
              src={brand.img}
              alt={brand.name}
              className="h-10 md:h-12 object-contain opacity-90 hover:opacity-100 transition"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default BrandSection;

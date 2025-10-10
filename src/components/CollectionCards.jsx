import React from "react";

const collections = [
  {
    image: "https://optimaxweb.glassesusa.com/image/upload/f_auto,q_auto/mf-homepage/client/mobileImg/ottoto_7c6a4f20366348aed303.jpg", // Replace with your OTTOTO image URL
    title: "ottoto",
    subtitle: "TITANIUM",
  },
  {
    image: "https://optimaxweb.glassesusa.com/image/upload/f_auto,q_auto/mf-homepage/client/mobileImg/muse-balloon_db9a439dd787f2ac72d4.jpg", // Replace with your blue sunglasses image URL
    title: "GlassesUSA",
    subtitle: "GREAT RENO BALLOONS RACE",
  },
  {
    image: "https://optimaxweb.glassesusa.com/image/upload/f_auto,q_auto/mf-homepage/client/mobileImg/muse_69d10c657bc4e2a67679.jpg", // Replace with MUSE '70s image URL
    title: "MUSE",
    subtitle: "'70s",
  },
  {
    image: "https://optimaxweb.glassesusa.com/image/upload/f_auto,q_auto/mf-homepage/client/mobileImg/oneill_f1e7b80bd06dba3fc4dd.jpg", // Replace with O'NEILL × GlassesUSA image URL
    title: "O'NEILL × GlassesUSA",
    subtitle: "",
  },
];

const CollectionCards = () => (
  <section className="py-12 w-full flex flex-col items-center">
    <h2 className="text-xl md:text-2xl font-semibold mb-8 text-center">
      See what we’re up to.
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-5xl px-4">
      {collections.map((col, idx) => (
        <div
          key={idx}
          className="relative rounded-xl overflow-hidden shadow min-h-[240px] h-[260px] md:h-[320px] flex items-end group"
        >
          <img
            src={col.image}
            alt={col.title}
            className="absolute inset-0 w-full h-full object-cover transition duration-100 group-hover:scale-105"
          />
          <div className="relative z-10 w-full flex flex-col items-start px-6 pb-6 pt-20 bg-gradient-to-t from-black/60 via-transparent to-transparent">
            <span className="text-white font-bold text-xl mb-1">{col.title}</span>
            {col.subtitle && (
              <span className="text-white text-sm mb-3">{col.subtitle}</span>
            )}
            <button className="mt-auto bg-white/70 text-black text-sm font-medium px-5 py-2 rounded-full shadow transition-transform hover:scale-105">
              Shop Collection
            </button>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default CollectionCards;

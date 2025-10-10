import { HiOutlineSearch } from "react-icons/hi";

const logos = [
  { alt: "Forbes", src: "https://upload.wikimedia.org/wikipedia/commons/0/09/Forbes_logo.svg" },
  { alt: "CNN", src: "https://upload.wikimedia.org/wikipedia/commons/b/b1/CNN.svg" },
  { alt: "Business Insider", src: "https://upload.wikimedia.org/wikipedia/commons/0/0b/Business_Insider_Logo.svg" },
  { alt: "InStyle", src: "https://upload.wikimedia.org/wikipedia/commons/2/26/InStyle_logo.svg" },
];

const filters = [
  "Kids Collection",
  "Multifocal",
  "Designer Glasses",
  "Sport Glasses",
  "Gift Card",
  "Sunglasses Sale",
  "Transitions Lenses"
];

const FeaturedAndFilters = () => (
  <section className="w-full flex flex-col items-center py-10 px-2 bg-white">
    <div className="text-center w-full">
      <h3 className="text-xl md:text-2xl font-medium mb-8 mt-2">As featured in</h3>
      <div className="flex flex-wrap justify-center items-center gap-8 opacity-40 mb-10">
        {logos.map((logo, idx) => (
          <img
            key={idx}
            src={logo.src}
            alt={logo.alt}
            className="h-10 md:h-12 object-contain"
            style={{ minWidth: 120, maxWidth: 160 }}
          />
        ))}
      </div>
      <hr className="border-t border-gray-200 w-full max-w-4xl mx-auto mb-8" />
      <h4 className="text-[1.25rem] md:text-xl mb-8 font-normal">
        Still looking? Discover more below.
      </h4>
      <div className="w-full overflow-x-auto pb-3">
        <div className="flex gap-4 min-w-max px-1">
          {filters.map((label, idx) => (
            <button
              key={idx}
              className="flex items-center gap-1 bg-gray-200 text-gray-800 rounded-full px-5 py-2 font-medium transition hover:bg-gray-300 whitespace-nowrap text-[15px]"
            >
              <HiOutlineSearch className="inline-block text-[18px]" />
              {label}
            </button>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default FeaturedAndFilters;

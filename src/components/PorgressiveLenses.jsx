import React from "react";
import { Check, ArrowRight } from "lucide-react";
import lens6 from "../assets/Lenses/lens6.jpeg";
import lens7 from "../assets/Lenses/lens7.jpeg";

const PorgressiveLenses = () => {
  const lensData = [
    {
      id: 1,
      image: lens6,
      features: [
        "Up to 22% thinner lens",
        "Sharp vision",
        "Crystal clear lens",
        "Manually assembled",
        "Enriched colors",
        "Digital Free-Form design",
      ],
      coatings: [
        "UV protection",
        "Scratch resistance",
        "Anti-reflective coating",
      ],
      highlight: false,
    },
    {
      id: 2,
      image: lens7,
      features: [
        "Up to 22% thinner lens",
        "Sharp vision",
        "Crystal clear lens",
        "Manually assembled",
        "Enriched colors",
        "Smooth lens zones transition",
        "Easy accommodation",
      ],
      coatings: [
        "UV400 protection",
        "Premium anti-scratch coating",
        "Enhanced anti-reflective coating",
      ],
      highlight: true,
    },
  ];

  return (
    <section className="w-full bg-white py-16 px-6 md:px-16">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        {/* ✅ LEFT: Description Section */}
        <div className="flex flex-col justify-center order-2 lg:order-1">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">
            Progressive lenses
          </h2>
          <p className="text-gray-700 mb-8 leading-relaxed">
            Expertly made and meticulously designed in our cutting-edge optical
            labs for seamless vision and smooth transition when looking near,
            far and in between.
          </p>

          <div className="space-y-4">
            <p className="text-xs font-semibold text-gray-500 tracking-wide">
              SHOP NOW:
            </p>

            <button className="flex items-center justify-between w-full border-b border-gray-300 pb-2 text-left text-gray-800 hover:text-black transition">
              <span>Progressive Glasses</span>
              <ArrowRight size={18} />
            </button>

            <button className="flex items-center justify-between w-full border-b border-gray-300 pb-2 text-left text-gray-800 hover:text-black transition">
              <span>Prescription Sunglasses</span>
              <ArrowRight size={18} />
            </button>
          </div>
        </div>

        {/* ✅ RIGHT: Lens Cards Section */}
        <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6 order-1 lg:order-2">
          {lensData.map((lens) => (
            <div
              key={lens.id}
              className={`border rounded-2xl shadow-sm p-5 flex flex-col hover:shadow-md transition-all ${
                lens.highlight ? "" : "border-gray-200"
              }`}
            >
              {/* Top Image */}
              <div className="relative mb-4">
                {lens.highlight && (
                  <span className="absolute top-2 left-2 bg-yellow-500 text-white text-xs font-semibold px-2 py-1 rounded-full flex items-center gap-1">
                    👑 Premium
                  </span>
                )}
                <img
                  src={lens.image}
                  alt={lens.title}
                  className="rounded-xl w-full object-cover"
                />
              </div>

              {/* Title */}
              <h3
                className={`text-xl font-semibold mb-1 ${
                  lens.highlight ? "text-yellow-600" : "text-gray-800"
                }`}
              >
                {lens.title}
              </h3>
              <p className="text-gray-500 text-sm mb-4">{lens.subtitle}</p>

              {/* Features */}
              <div className="mb-5">
                <h4
                  className={`text-sm font-semibold mb-2 ${
                    lens.highlight ? "text-yellow-600" : "text-gray-700"
                  }`}
                >
                  LENS
                </h4>
                <ul className="space-y-1 text-gray-700 text-sm">
                  {lens.features.map((f, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Check
                        size={16}
                        className={lens.highlight ? "text-yellow-600" : ""}
                      />
                      <span
                        dangerouslySetInnerHTML={{
                          __html: f.replace(
                            /(\d+% thinner)/g,
                            `<strong class='font-semibold'>$1</strong>`
                          ),
                        }}
                      />
                    </li>
                  ))}
                </ul>
              </div>

              {/* Coatings */}
              <div>
                <h4
                  className={`text-sm font-semibold mb-2 ${
                    lens.highlight ? "text-yellow-600" : "text-gray-700"
                  }`}
                >
                  {lens.highlight ? "PREMIUM COATINGS" : "COATINGS"}
                </h4>
                <ul className="space-y-1 text-gray-700 text-sm">
                  {lens.coatings.map((c, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Check
                        size={16}
                        className={lens.highlight ? "text-yellow-600" : ""}
                      />
                      <span>{c}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PorgressiveLenses;

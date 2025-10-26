import React, { useState } from "react";
import { Flag, ShieldCheck, RefreshCw, Sliders, Users, MessageCircle } from "lucide-react";
import lens3 from "../assets/Lenses/lens3.avif"; // adjust path if needed

const LensTechnologySection = () => {
  const [activeTab, setActiveTab] = useState("Lens Technology");

  const tabs = [
    "Lens Technology",
    "Lens Customization",
    "Customers Reviews",
    "Ask Our Experts",
  ];

  // --- Tab content data ---
  const content = {
    "Lens Technology": {
      title: "State-of-the-art lenses.",
      subtitle: "Made by our top optometrists and engineers.",
      description:
        "In our profession, quality is paramount. Our lenses are meticulously assembled in the US, forged from premium materials. Each pair undergoes a stringent review by our vision specialists, guaranteeing precision for every prescription available.",
      features: [
        { icon: <Flag size={18} />, label: "Assembled in the US" },
        { icon: <ShieldCheck size={18} />, label: "FDA-listed" },
        { icon: <RefreshCw size={18} />, label: "+50 product tests" },
      ],
      image: lens3,
    },
    "Lens Customization": {
      title: "Personalized lenses for every need.",
      subtitle: "Tailored optics, just for you.",
      description:
        "Every eye is unique — that’s why we craft custom lenses for your exact prescription, lifestyle, and frame design. Choose coatings, tints, and digital precision cuts that enhance both comfort and vision.",
      features: [
        { icon: <Sliders size={18} />, label: "Custom lens options" },
        { icon: <ShieldCheck size={18} />, label: "Scratch-resistant coating" },
        { icon: <RefreshCw size={18} />, label: "100% UV protection" },
      ],
      image: lens3,
    },
    "Customers Reviews": {
      title: "Trusted by thousands.",
      subtitle: "Real feedback from real customers.",
      description:
        "Our customers consistently rate our lenses 4.9/5 for clarity, comfort, and precision. We value every review and continuously improve to meet the highest expectations.",
      features: [
        { icon: <Users size={18} />, label: "10k+ happy customers" },
        { icon: <ShieldCheck size={18} />, label: "Verified quality" },
        { icon: <RefreshCw size={18} />, label: "Constant improvement" },
      ],
      image: lens3,
    },
    "Ask Our Experts": {
      title: "Have questions about your lenses?",
      subtitle: "Our optometrists are here to help.",
      description:
        "Need help choosing the right lens or understanding your prescription? Our expert team is available to guide you every step of the way — from consultation to final fit.",
      features: [
        { icon: <MessageCircle size={18} />, label: "Chat with optometrists" },
        { icon: <Flag size={18} />, label: "US-based support" },
        { icon: <ShieldCheck size={18} />, label: "Professional guidance" },
      ],
      image: lens3,
    },
  };

  const current = content[activeTab];

  return (
    <section className="w-full bg-white py-14 px-6 md:px-16 transition-all duration-300">
      {/* Tabs */}
      <div className="flex flex-wrap justify-center  items-center gap-4 border-b pb-3 mb-10 text-gray-700 text-[15px]">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`pb-1 transition-all duration-200 ${
              activeTab === tab
                ? "font-semibold text-black border-b-2 border-black"
                : "hover:text-black"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left Text Section */}
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold mb-2 leading-snug">
            {current.title}
          </h2>
          <h3 className="text-xl md:text-2xl font-normal mb-4 text-gray-800">
            {current.subtitle}
          </h3>
          <p className="text-gray-700 mb-8 leading-relaxed">
            {current.description}
          </p>

          {/* Icons Row */}
          <div className="flex flex-wrap gap-6 text-gray-800 text-[15px]">
            {current.features.map((f, i) => (
              <div key={i} className="flex items-center gap-2">
                {f.icon}
                <span>{f.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Image */}
        <div className="flex justify-center md:justify-end">
          <img
            src={current.image}
            alt="Lens Detail"
            className="rounded-xl w-full max-w-md object-cover transition-all duration-300"
          />
        </div>
      </div>
    </section>
  );
};

export default LensTechnologySection;

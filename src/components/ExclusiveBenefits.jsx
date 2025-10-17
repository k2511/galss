import React from "react";
import {
  DollarSign,
  Headphones,
  Video,
  Truck,
} from "lucide-react";

const benefits = [
  {
    icon: <DollarSign className="w-8 h-8 text-gray-800" />,
    title: "Risk-free shopping",
    description:
      "Get refunds in case of returns, plus full benefits restoration.",
  },
  {
    icon: <Headphones className="w-8 h-8 text-gray-800" />,
    title: "Customer-first",
    description:
      "24/7 customer support. All day, every day.",
  },
  {
    icon: <Video className="w-8 h-8 text-gray-800" />,
    title: "Live Try-On",
    description:
      "See yourself in any of our 10,000+ frames.",
  },
  {
    icon: <Truck className="w-8 h-8 text-gray-800" />,
    title: "Free shipping & returns.",
    description:
      "Enjoy free shipping and returns on all orders (for US & Canada).",
  },
];

const ExclusiveBenefits = () => {
  return (
    <section className="bg-[#f4fffc] py-16 px-6">
      <div className="max-w-6xl mx-auto text-center mb-10">
        <h2 className="text-3xl font-semibold text-gray-900">
          Our Exclusive Benefits
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {benefits.map((benefit, index) => (
          <div
            key={index}
            className="flex items-start gap-4 bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition"
          >
            <div className="flex-shrink-0">{benefit.icon}</div>
            <div className="text-left">
              <h3 className="text-lg font-semibold text-gray-900">
                {benefit.title}
              </h3>
              <p className="text-gray-600 text-sm mt-1">
                {benefit.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExclusiveBenefits;

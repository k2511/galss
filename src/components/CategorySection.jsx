import React from "react";
import { Link } from "react-router-dom";

const CategorySection = () => {
  const desktopCategories = [
    {
      id: 1,
      title: "Best Sellers",
      subtitle: "Save up to 50% off",
      buttons: ["Women", "Men"],
      bgImage:
        "https://optimaxweb.glassesusa.com/image/upload/f_auto,q_auto/mf-homepage/client/mobileImg/popular-glasses-usa_e86b12d8bd8dae5e6e52.jpg",
      bgColor: "bg-amber-900",
    },
    {
      id: 2,
      title: "Designer Outlet",
      subtitle: "Get an extra 40% off",
      buttons: ["Women", "Men"],
      bgImage:
        "https://optimaxweb.glassesusa.com/image/upload/f_auto,q_auto/mf-homepage/client/mobileImg/designer-frames-outlet_ba2cd75af450f59eb006.jpg",
      bgColor: "bg-blue-500",
    },
    {
      id: 3,
      title: "We Accept Vision Insurance",
      subtitle: "",
      buttons: ["Use Your Insurance"],
      bgImage:
        "https://optimaxweb.glassesusa.com/image/upload/f_auto,q_auto/mf-homepage/client/mobileImg/glasses-online-with-insurance_f01fbb412985e4ada8c5.jpg",
      bgColor: "bg-indigo-600",
    },
    {
      id: 4,
      title: "Contact Lenses",
      subtitle: "Get 30% off all brands",
      buttons: ["Find Your Contacts"],
      bgImage:
        "https://optimaxweb.glassesusa.com/image/upload/f_auto,q_auto/mf-homepage/client/mobileImg/contact-lenses-online_a8e20e9b9535e1f2cc2a.jpg",
      bgColor: "bg-cyan-400",
    },
  ];

  const mobileCategories = [
    {
      id: 1,
      title: "Eyeglasses",
      buttons: ["Women", "Men"],
      bgImage:
        "https://via.placeholder.com/300x400/E11D48/000000?text=Eyeglasses",
      bgColor: "bg-amber-500",
    },
    {
      id: 2,
      title: "Sunglasses",
      buttons: ["Women", "Men"],
      bgImage:
        "https://via.placeholder.com/300x400/DC2626/000000?text=Sunglasses",
      bgColor: "bg-red-600",
    },
  ];

  return (
    <div className="w-full py-8 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-2">
            Eyewear for everyone and every need.
          </h2>
          <p className="text-gray-600 text-base">Our featured categories</p>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {desktopCategories.map((category) => (
            <div
              key={category.id}
              className="relative rounded-lg overflow-hidden h-64 group cursor-pointer"
              style={{
                backgroundImage: `url(${category.bgImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-40"></div>
              <div className="relative h-full flex flex-col justify-end p-4 text-white">
                <h3 className="text-lg font-semibold mb-1">
                  {category.title}
                </h3>
                {category.subtitle && (
                  <p className="text-sm mb-3 opacity-90">
                    {category.subtitle}
                  </p>
                )}

                {/* Buttons */}
                <div className="flex gap-2 flex-wrap">
                  {category.buttons.map((button, idx) => {
                    if (button === "Find Your Contacts") {
                      return (
                        <Link
                          key={idx}
                          to="/find-contacts"
                          className="px-4 py-1.5 bg-white bg-opacity-20 border border-white border-opacity-30 rounded-full text-sm font-medium hover:bg-opacity-30 transition-all"
                        >
                          {button}
                        </Link>
                      );
                    }

                    if (category.title === "We Accept Vision Insurance") {
                      return (
                        <Link
                          key={idx}
                          to="/insurance"
                          className="px-4 py-1.5 bg-white bg-opacity-20 border border-white border-opacity-30 rounded-full text-sm font-medium hover:bg-opacity-30 transition-all"
                        >
                          {button}
                        </Link>
                      );
                    }

                    return (
                      <button
                        key={idx}
                        className="px-4 py-1.5 bg-white bg-opacity-20 border border-white border-opacity-30 rounded-full text-sm font-medium hover:bg-opacity-30 transition-all"
                      >
                        {button}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Grid */}
        <div className="md:hidden grid grid-cols-2 gap-3">
          {mobileCategories.map((category) => (
            <div
              key={category.id}
              className="relative rounded-lg overflow-hidden h-80 cursor-pointer"
              style={{
                backgroundImage: `url(${category.bgImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-40"></div>
              <div className="relative h-full flex flex-col justify-end p-3 text-white">
                <h3 className="text-xl font-bold mb-3 text-center">
                  {category.title}
                </h3>
                <div className="flex gap-1">
                  {category.buttons.map((button, idx) => (
                    <button
                      key={idx}
                      className="flex-1 py-2 bg-white bg-opacity-20 border border-white border-opacity-30 rounded text-sm font-medium hover:bg-opacity-30 transition-all"
                    >
                      {button}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Additional Categories */}
        <div className="md:hidden grid grid-cols-2 gap-3 mt-3">
          <div
            className="relative rounded-lg overflow-hidden h-40 cursor-pointer"
            style={{
              backgroundImage: `url(https://via.placeholder.com/300x200/06B6D4/000000?text=Contact+Lenses)`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-40"></div>
            <div className="relative h-full flex flex-col justify-end p-3 text-white">
              <h3 className="text-lg font-bold mb-2">Contact lenses</h3>
              <button className="py-1.5 bg-white bg-opacity-20 border border-white border-opacity-30 rounded text-sm font-medium">
                Shop Now
              </button>
            </div>
          </div>
          <div
            className="relative rounded-lg overflow-hidden h-40 cursor-pointer"
            style={{
              backgroundImage: `url(https://via.placeholder.com/300x200/78716C/000000?text=Glasses+Sale)`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-40"></div>
            <div className="relative h-full flex flex-col justify-end p-3 text-white">
              <h3 className="text-lg font-bold mb-2">Glasses on sale</h3>
              <div className="flex gap-1">
                <button className="flex-1 py-1.5 bg-white bg-opacity-20 border border-white border-opacity-30 rounded text-xs font-medium">
                  Women
                </button>
                <button className="flex-1 py-1.5 bg-white bg-opacity-20 border border-white border-opacity-30 rounded text-xs font-medium">
                  Men
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategorySection;

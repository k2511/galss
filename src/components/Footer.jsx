import React from "react";

const Footer = () => {
  const footerLinks = {
    "Shop": ["Eyeglasses", "Sunglasses", "Reading Glasses", "Blue Light Glasses", "Safety Glasses"],
    "Services": ["Virtual Try-On", "Home Try-On", "Eye Exam", "Insurance", "Prescription Renewal"],
    "About": ["Our Story", "Reviews", "Blog", "Careers", "Press"],
    "Support": ["Contact Us", "FAQs", "Shipping", "Returns", "Size Guide"]
  };

  return (
    <footer className="w-full bg-gray-900 text-white py-8 md:py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-semibold text-lg mb-4">{category}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-gray-300 hover:text-white text-sm transition">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-gray-300 text-sm">© 2025 GlassesUSA. All rights reserved.</p>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-300 hover:text-white text-sm">Privacy Policy</a>
              <a href="#" className="text-gray-300 hover:text-white text-sm">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

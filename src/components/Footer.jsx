import React, { useState } from "react";
import { FiHelpCircle, FiMessageCircle, FiPhone, FiMail } from "react-icons/fi";
import {
  FaFacebookF,
  FaInstagram,
  FaPinterestP,
  FaTwitter,
  FaYoutube,
  FaTiktok,
} from "react-icons/fa";

const helpOptions = [
  {
    icon: <FiHelpCircle className="w-6 h-6" />,
    title: "Help Center",
    desc: "Find answers to all your questions.",
  },
  {
    icon: <FiMessageCircle className="w-6 h-6" />,
    title: "Live Chat",
    desc: "Our agents are available 24-7.",
  },
  {
    icon: <FiPhone className="w-6 h-6" />,
    title: "Call Us",
    desc: "Every day 7am - midnight ET",
  },
  {
    icon: <FiMail className="w-6 h-6" />,
    title: "Email Us",
    desc: "service@glassesusa.com",
  },
];

const linkSections = [
  {
    title: "Shop",
    links: [
      "Men's Eyeglasses",
      "Women's Eyeglasses",
      "Kids' Glasses",
      "Transitions Lenses",
      "Progressive Lenses",
      "Prescription Sunglasses",
      "Blue Light Glasses",
      "Sports Glasses",
      "Safety Glasses",
      "Contact Lens",
    ],
  },
  {
    title: "Shop Brands",
    links: [
      "Ray-Ban Glasses",
      "Oakley Glasses",
      "Gucci Glasses",
      "Tom Ford Glasses",
      "Michael Kors Glasses",
      "Versace Glasses",
      "Prada Glasses",
      "Costa Sunglasses",
      "Designer Glasses",
      "All Brands",
    ],
  },
  {
    title: "Explore",
    links: [
      "FSA/HSA Glasses",
      "Download Our App",
      "Affiliate Program",
      "Ambassadors Program",
      "Glasses Student Discount",
      "Heroes Get Rewarded",
      "GlassesUSA.com Referral",
      "Ottica - Luxury Eyewear",
      "Gift Cards",
      "Coupons and Sales",
    ],
  },
  {
    title: "Customer Care",
    links: [
      "My Account",
      "Track Your Order",
      "Visit our Store",
      "Returns",
      "Help Center",
      "Upload Prescription",
      "Contact Us",
      "Accessibility",
      "UnitedHealthCare Vision",
      "Vision Insurance",
    ],
  },
  {
    title: "About",
    links: [
      "About Us",
      "Our Impact",
      "Through the Lens",
      "Pressroom",
      "Careers",
      "Customer Reviews",
    ],
  },
];

const socialIcons = [
  { icon: <FaFacebookF />, url: "#" },
  { icon: <FaInstagram />, url: "#" },
  { icon: <FaPinterestP />, url: "#" },
  { icon: <FaTwitter />, url: "#" },
  { icon: <FaYoutube />, url: "#" },
  { icon: <FaTiktok />, url: "#" },
];

const trustBadges = [
  { src: "https://static.glassesusa.com/images/pmd/awards/bbb2022.svg", alt: "BBB" },
  { src: "https://static.glassesusa.com/images/pmd/awards/TRUSTPILOT_EN.svg", alt: "Trustpilot" },
  { src: "https://static.glassesusa.com/images/pmd/awards/bizrate.svg", alt: "Bizrate" },
  { src: "https://static.glassesusa.com/images/pmd/awards/reseller-rating.svg", alt: "Reseller Ratings" },
];

const paymentIcons = [
  { src: "https://static.glassesusa.com/images/pmd/payment/visa.svg", alt: "Visa" },
  { src: "https://static.glassesusa.com/images/pmd/payment/amex.svg", alt: "Amex" },
  { src: "https://static.glassesusa.com/images/pmd/payment/discover.svg", alt: "Discover" },
  { src: "https://static.glassesusa.com/images/pmd/payment/gpay.svg", alt: "Google Pay" },
  { src: "https://static.glassesusa.com/images/pmd/payment/klarna.svg", alt: "Klarna" },
  { src: "https://static.glassesusa.com/images/pmd/payment/amazon.svg", alt: "Amazon" },
  { src: "https://static.glassesusa.com/images/pmd/payment/paypal.svg", alt: "PayPal" },
];

function FooterAccordion({ title, links, open, toggleOpen }) {
  return (
    <div className="border-b border-gray-700 md:border-none">
      <button
        className="w-full flex justify-between items-center py-3 md:py-1 text-base font-medium md:font-semibold md:text-lg focus:outline-none md:cursor-default"
        onClick={toggleOpen}
      >
        {title}
        <span className="md:hidden">{open ? "−" : "+"}</span>
      </button>
      <ul
        className={`${open ? "block" : "hidden"} md:block space-y-2 pb-2 md:pb-0`}
      >
        {links.map((link) => (
          <li key={link}>
            <a
              href="#"
              className="block text-gray-300 hover:text-white text-sm transition"
            >
              {link}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

const Footer = () => {
  const [openIndexes, setOpenIndexes] = useState(
    Array(linkSections.length).fill(false)
  );

  const handleAccordion = (idx) => {
    setOpenIndexes((prev) =>
      prev.map((opened, i) => (i === idx ? !opened : false))
    );
  };

  return (
    <footer className="w-full bg-[#151728] text-white pt-10 pb-3">
      {/* Help boxes row */}
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-8">
        {helpOptions.map((opt, idx) => (
          <div
            key={idx}
            className="flex gap-4 items-center bg-[#181A32] rounded-xl p-4"
          >
            <span className="text-primary">{opt.icon}</span>
            <div>
              <div className="font-semibold">{opt.title}</div>
              <div className="text-gray-400 text-sm">{opt.desc}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Footer main grid */}
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-6 gap-8 mb-8">
        {/* Newsletter */}
        <div className="md:col-span-2 flex flex-col gap-5">
          <div>
            <div className="font-semibold mb-2 text-lg">
              Join our newsletter to enjoy more exclusive offers and the latest updates.
            </div>
            <form className="flex gap-2 items-center mb-2">
              <input
                type="email"
                placeholder="Enter your Email"
                className="px-3 py-2 rounded w-full text-black"
              />
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 rounded font-bold"
              >
                Sign Up
              </button>
            </form>
            <p className="text-gray-400 text-xs">
              By clicking "Sign Up" you agree to the Terms of Use & Privacy Policy.<br />Registration from age 17 only.
            </p>
          </div>
          <div className="flex gap-5 mt-4">
            {socialIcons.map((icon, idx) => (
              <a
                href={icon.url}
                key={idx}
                className="text-gray-400 hover:text-white transition text-xl"
              >
                {icon.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Link groups */}
        <div className="col-span-4 grid grid-cols-1 md:grid-cols-4 gap-8">
          {linkSections.map((group, idx) => (
            <FooterAccordion
              key={group.title}
              title={group.title}
              links={group.links}
              open={openIndexes[idx]}
              toggleOpen={() => handleAccordion(idx)}
            />
          ))}
        </div>
      </div>

      {/* Trust badges and payment icons */}
      <div className="max-w-7xl mx-auto px-4 flex flex-wrap gap-6 items-center justify-center mb-6">
        {trustBadges.map((badge, idx) => (
          <img
            key={idx}
            src={badge.src}
            alt={badge.alt}
            className="h-6 mx-2"
          />
        ))}
      </div>
      <div className="max-w-7xl mx-auto px-4 flex flex-wrap gap-4 items-center justify-center mb-8">
        {paymentIcons.map((icon, idx) => (
          <img key={idx} src={icon.src} alt={icon.alt} className="h-8" />
        ))}
      </div>

      {/* Bottom legal and links */}
      <div className="max-w-7xl mx-auto px-4 border-t border-gray-800 pt-4 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400 gap-2">
        <div className="flex gap-4 mb-1 md:mb-0">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Use</a>
          <a href="#">Cookie Policy</a>
          <a href="#">Shipping Policy</a>
          <a href="#">Returns Policy</a>
        </div>
        <div>
          &copy; 2025 GlassesUSA.com. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;

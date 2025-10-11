// import React, { useState } from "react";
// import { FiHelpCircle, FiMessageCircle, FiPhone, FiMail } from "react-icons/fi";
// import {
//   FaFacebookF,
//   FaInstagram,
//   FaPinterestP,
//   FaTwitter,
//   FaYoutube,
//   FaTiktok,
// } from "react-icons/fa";

// const helpOptions = [
//   {
//     icon: <FiHelpCircle className="w-6 h-6" />,
//     title: "Help Center",
//     desc: "Find answers to all your questions.",
//   },
//   {
//     icon: <FiMessageCircle className="w-6 h-6" />,
//     title: "Live Chat",
//     desc: "Our agents are available 24-7.",
//   },
//   {
//     icon: <FiPhone className="w-6 h-6" />,
//     title: "Call Us",
//     desc: "Every day 7am - midnight ET",
//   },
//   {
//     icon: <FiMail className="w-6 h-6" />,
//     title: "Email Us",
//     desc: "service@glassesusa.com",
//   },
// ];

// const linkSections = [
//   {
//     title: "Shop",
//     links: [
//       "Men's Eyeglasses",
//       "Women's Eyeglasses",
//       "Kids' Glasses",
//       "Transitions Lenses",
//       "Progressive Lenses",
//       "Prescription Sunglasses",
//       "Blue Light Glasses",
//       "Sports Glasses",
//       "Safety Glasses",
//       "Contact Lens",
//     ],
//   },
//   {
//     title: "Shop Brands",
//     links: [
//       "Ray-Ban Glasses",
//       "Oakley Glasses",
//       "Gucci Glasses",
//       "Tom Ford Glasses",
//       "Michael Kors Glasses",
//       "Versace Glasses",
//       "Prada Glasses",
//       "Costa Sunglasses",
//       "Designer Glasses",
//       "All Brands",
//     ],
//   },
//   {
//     title: "Explore",
//     links: [
//       "FSA/HSA Glasses",
//       "Download Our App",
//       "Affiliate Program",
//       "Ambassadors Program",
//       "Glasses Student Discount",
//       "Heroes Get Rewarded",
//       "GlassesUSA.com Referral",
//       "Ottica - Luxury Eyewear",
//       "Gift Cards",
//       "Coupons and Sales",
//     ],
//   },
//   {
//     title: "Customer Care",
//     links: [
//       "My Account",
//       "Track Your Order",
//       "Visit our Store",
//       "Returns",
//       "Help Center",
//       "Upload Prescription",
//       "Contact Us",
//       "Accessibility",
//       "UnitedHealthCare Vision",
//       "Vision Insurance",
//     ],
//   },
//   {
//     title: "About",
//     links: [
//       "About Us",
//       "Our Impact",
//       "Through the Lens",
//       "Pressroom",
//       "Careers",
//       "Customer Reviews",
//     ],
//   },
// ];

// const socialIcons = [
//   { icon: <FaFacebookF />, url: "#" },
//   { icon: <FaInstagram />, url: "#" },
//   { icon: <FaPinterestP />, url: "#" },
//   { icon: <FaTwitter />, url: "#" },
//   { icon: <FaYoutube />, url: "#" },
//   { icon: <FaTiktok />, url: "#" },
// ];

// const trustBadges = [
//   { src: "https://static.glassesusa.com/images/pmd/awards/bbb2022.svg", alt: "BBB" },
//   { src: "https://static.glassesusa.com/images/pmd/awards/TRUSTPILOT_EN.svg", alt: "Trustpilot" },
//   { src: "https://static.glassesusa.com/images/pmd/awards/bizrate.svg", alt: "Bizrate" },
//   { src: "https://static.glassesusa.com/images/pmd/awards/reseller-rating.svg", alt: "Reseller Ratings" },
// ];

// const paymentIcons = [
//   { src: "https://static.glassesusa.com/images/pmd/payment/visa.svg", alt: "Visa" },
//   { src: "https://static.glassesusa.com/images/pmd/payment/amex.svg", alt: "Amex" },
//   { src: "https://static.glassesusa.com/images/pmd/payment/discover.svg", alt: "Discover" },
//   { src: "https://static.glassesusa.com/images/pmd/payment/gpay.svg", alt: "Google Pay" },
//   { src: "https://static.glassesusa.com/images/pmd/payment/klarna.svg", alt: "Klarna" },
//   { src: "https://static.glassesusa.com/images/pmd/payment/amazon.svg", alt: "Amazon" },
//   { src: "https://static.glassesusa.com/images/pmd/payment/paypal.svg", alt: "PayPal" },
// ];

// function FooterAccordion({ title, links, open, toggleOpen }) {
//   return (
//     <div className="border-b border-gray-700 md:border-none">
//       <button
//         className="w-full flex justify-between items-center py-3 md:py-1 text-base font-medium md:font-semibold md:text-lg focus:outline-none md:cursor-default"
//         onClick={() => window.innerWidth < 768 && toggleOpen()}
//       >
//         {title}
//         <span className="md:hidden">{open ? "−" : "+"}</span>
//       </button>
//       <ul
//         className={`${open ? "block" : "hidden"} md:block space-y-2 pb-2 md:pb-0`}
//       >
//         {links.map((link) => (
//           <li key={link}>
//             <a
//               href="#"
//               className="block text-gray-300 hover:text-white text-sm transition"
//             >
//               {link}
//             </a>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// const Footer = () => {
//   const [openIndexes, setOpenIndexes] = useState(
//     Array(linkSections.length).fill(false)
//   );
//   const handleAccordion = (idx) => {
//     setOpenIndexes((prev) =>
//       prev.map((opened, i) => (i === idx ? !opened : false))
//     );
//   };

//   return (
//     <footer className="w-full bg-[#151728] text-white pt-10 pb-3">
//       {/* Help boxes row */}
//       <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-8">
//         {helpOptions.map((opt, idx) => (
//           <div
//             key={idx}
//             className="flex gap-4 items-center bg-[#181A32] rounded-xl p-4"
//           >
//             <span className="text-primary">{opt.icon}</span>
//             <div>
//               <div className="font-semibold">{opt.title}</div>
//               <div className="text-gray-400 text-sm">{opt.desc}</div>
//             </div>
//           </div>
//         ))}
//       </div>
//       {/* Footer main grid */}
//       <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-6 gap-8 mb-8">
//         {/* Newsletter */}
//         <div className="md:col-span-2 flex flex-col gap-5">
//           <div>
//             <div className="font-semibold mb-2 text-lg">
//               Join our newsletter to enjoy more exclusive offers and the latest updates.
//             </div>
//             <form className="flex gap-2 items-center mb-2">
//               <input
//                 type="email"
//                 placeholder="Enter your Email"
//                 className="px-3 py-2 rounded w-full text-black"
//               />
//               <button
//                 type="submit"
//                 className="bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 rounded font-bold"
//               >
//                 Sign Up
//               </button>
//             </form>
//             <p className="text-gray-400 text-xs">
//               By clicking "Sign Up" you agree to the Terms of Use & Privacy Policy.<br />Registration from age 17 only.
//             </p>
//           </div>
//           <div className="flex gap-5 mt-4">
//             {socialIcons.map((icon, idx) => (
//               <a
//                 href={icon.url}
//                 key={idx}
//                 className="text-gray-400 hover:text-white transition text-xl"
//               >
//                 {icon.icon}
//               </a>
//             ))}
//           </div>
//         </div>
//         {/* Link groups */}
//         <div className="col-span-4 grid grid-cols-1 md:grid-cols-4 gap-8">
//           {linkSections.map((group, idx) => (
//             <FooterAccordion
//               key={group.title}
//               title={group.title}
//               links={group.links}
//               open={openIndexes[idx]}
//               toggleOpen={() => handleAccordion(idx)}
//             />
//           ))}
//         </div>
//       </div>
//       {/* Trust badges and payment icons */}
//       <div className="max-w-7xl mx-auto px-4 flex flex-wrap gap-6 items-center justify-center mb-6">
//         {trustBadges.map((badge, idx) => (
//           <img
//             key={idx}
//             src={badge.src}
//             alt={badge.alt}
//             className="h-6 mx-2"
//           />
//         ))}
//       </div>
//       <div className="max-w-7xl mx-auto px-4 flex flex-wrap gap-4 items-center justify-center mb-8">
//         {paymentIcons.map((icon, idx) => (
//           <img key={idx} src={icon.src} alt={icon.alt} className="h-8" />
//         ))}
//       </div>
//       {/* Bottom legal and links */}
//       <div className="max-w-7xl mx-auto px-4 border-t border-gray-800 pt-4 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400 gap-2">
//         <div className="flex gap-4 mb-1 md:mb-0">
//           <a href="#">Privacy Policy</a>
//           <a href="#">Terms of Use</a>
//           <a href="#">Cookie Policy</a>
//           <a href="#">Shipping Policy</a>
//           <a href="#">Returns Policy</a>
//         </div>
//         <div>
//           &copy; 2025 GlassesUSA.com. All Rights Reserved.
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

// import React, { useState } from "react";
// import Footer1 from "../assets/Footer/Footer1.png";
// import Footer2 from "../assets/Footer/Footer2.png";
// import Footer3 from "../assets/Footer/Footer3.png";
// import Footer4 from "../assets/Footer/Footer4.png";
// import Footer5 from "../assets/Footer/Footer5.png";
// import Footer6 from "../assets/Footer/Footer6.png";
// import Footer7 from "../assets/Footer/Footer7.png";
// import Footer8 from "../assets/Footer/Footer8.png";
// import Footer9 from "../assets/Footer/Footer9.png";
// import Footer10 from "../assets/Footer/Footer10.png";
// import Footer11 from "../assets/Footer/Footer11.png";
// import Footer12 from "../assets/Footer/Footer12.png";

// import { FiHelpCircle, FiMessageCircle, FiPhone, FiMail } from "react-icons/fi";
// import {
//   FaFacebookF,
//   FaInstagram,
//   FaPinterestP,
//   FaTwitter,
//   FaYoutube,
//   FaTiktok,
// } from "react-icons/fa";

// const helpOptions = [
//   {
//     icon: <FiHelpCircle className="w-6 h-6" />,
//     title: "Help Center",
//     desc: "Find answers to all your questions.",
//   },
//   {
//     icon: <FiMessageCircle className="w-6 h-6" />,
//     title: "Live Chat",
//     desc: "Our agents are available 24-7.",
//   },
//   {
//     icon: <FiPhone className="w-6 h-6" />,
//     title: "Call Us",
//     desc: "Every day 7am - midnight ET",
//   },
//   {
//     icon: <FiMail className="w-6 h-6" />,
//     title: "Email Us",
//     desc: "service@glassesusa.com",
//   },
// ];

// const linkSections = [
//   {
//     title: "Shop",
//     links: [
//       "Men's Eyeglasses",
//       "Women's Eyeglasses",
//       "Kids' Glasses",
//       "Transitions Lenses",
//       "Progressive Lenses",
//       "Prescription Sunglasses",
//       "Blue Light Glasses",
//       "Sports Glasses",
//       "Safety Glasses",
//       "Contact Lens",
//     ],
//   },
//   {
//     title: "Shop Brands",
//     links: [
//       "Ray-Ban Glasses",
//       "Oakley Glasses",
//       "Gucci Glasses",
//       "Tom Ford Glasses",
//       "Michael Kors Glasses",
//       "Versace Glasses",
//       "Prada Glasses",
//       "Costa Sunglasses",
//       "Designer Glasses",
//       "All Brands",
//     ],
//   },
//   {
//     title: "Explore",
//     links: [
//       "FSA/HSA Glasses",
//       "Download Our App",
//       "Affiliate Program",
//       "Ambassadors Program",
//       "Glasses Student Discount",
//       "Heroes Get Rewarded",
//       "GlassesUSA.com Referral",
//       "Ottica - Luxury Eyewear",
//       "Gift Cards",
//       "Coupons and Sales",
//     ],
//   },
//   {
//     title: "Customer Care",
//     links: [
//       "My Account",
//       "Track Your Order",
//       "Visit our Store",
//       "Returns",
//       "Help Center",
//       "Upload Prescription",
//       "Contact Us",
//       "Accessibility",
//       "UnitedHealthCare Vision",
//       "Vision Insurance",
//     ],
//   },
//   {
//     title: "About",
//     links: [
//       "About Us",
//       "Our Impact",
//       "Through the Lens",
//       "Pressroom",
//       "Careers",
//       "Customer Reviews",
//     ],
//   },
// ];

// const socialIcons = [
//   { icon: <FaFacebookF />, url: "#" },
//   { icon: <FaInstagram />, url: "#" },
//   { icon: <FaPinterestP />, url: "#" },
//   { icon: <FaTwitter />, url: "#" },
//   { icon: <FaYoutube />, url: "#" },
//   { icon: <FaTiktok />, url: "#" },
// ];

// const trustBadges = [
//   {
//     src: Footer1,
//     alt: "Best",
//   },
//   {
//     src: Footer2,
//     alt: "BBB",
//   },
//   {
//     src: Footer3,
//     name: "Trustpilot",
//     alt: "Trustpilot",
//   },
//   {

//     name: "bizrate insights",
//     alt: "Bizrate",
//   },
//   {
//     name: "Reseller Ratings",
//     src: Footer4,
//     alt: "Reseller Ratings",
//   },
// ];

// const paymentIcons = [
//   {
//     src: Footer5,
//     alt: "Visa",
//   },
//   {
//     src: Footer6,
//     alt: "Amex",
//   },
//   {
//     src: Footer7,
//     alt: "MasterCard",
//   },
//   {
//     src: Footer8,
//     alt: "Discover",
//   },
//   {
//     src: Footer9,
//     alt: "Google Pay",
//   },
//   {
//     src: Footer10,
//     alt: "Klarna",
//   },
//   {
//     src: Footer11,
//     alt: "Amazon",
//   },
//   {
//     src: Footer12,
//     alt: "PayPal",
//   },
// ];

// function FooterAccordion({ title, links, open, toggleOpen }) {
//   return (
//     <div className="border-b border-gray-700 md:border-none">
//       <button
//         className="w-full flex justify-between items-center py-3 md:py-1 text-base font-medium md:font-semibold md:text-lg focus:outline-none md:cursor-default"
//         onClick={() => window.innerWidth < 768 && toggleOpen()}
//       >
//         {title}
//         <span className="md:hidden">{open ? "−" : "+"}</span>
//       </button>
//       <ul
//         className={`${
//           open ? "block" : "hidden"
//         } md:block space-y-2 pb-2 md:pb-0`}
//       >
//         {links.map((link) => (
//           <li key={link}>
//             <a
//               href="#"
//               className="block text-gray-300 hover:text-white text-sm transition"
//             >
//               {link}
//             </a>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// const Footer = () => {
//   const [openIndexes, setOpenIndexes] = useState(
//     Array(linkSections.length).fill(false)
//   );
//   const handleAccordion = (idx) => {
//     setOpenIndexes((prev) =>
//       prev.map((opened, i) => (i === idx ? !opened : false))
//     );
//   };

//   return (
//     <footer className="w-full bg-[#0C0E23] text-white pt-12 pb-6 text-sm">
//       {/* Help boxes row */}
//       <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-12">
//         {helpOptions.map((opt, idx) => (
//           <div
//             key={idx}
//             className="flex gap-4 items-center bg-[#181A32] rounded-xl p-4"
//           >
//             <span className="text-primary">{opt.icon}</span>
//             <div>
//               <div className="font-semibold">{opt.title}</div>
//               <div className="text-gray-400 text-sm">{opt.desc}</div>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Footer main grid */}
//       <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-5 lg:grid-cols-6 gap-10 mb-10">
//         {/* Left side: Links */}
//         <div className="col-span-3 lg:col-span-4 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
//           {linkSections.map((group, idx) => (
//             <FooterAccordion
//               key={group.title}
//               title={group.title}
//               links={group.links}
//               open={openIndexes[idx]}
//               toggleOpen={() => handleAccordion(idx)}
//             />
//           ))}
//         </div>

//         {/* Right side: Newsletter */}
//         <div className="col-span-2 lg:col-span-2 flex flex-col justify-between">
//           <div>
//             <h3 className="font-semibold text-lg mb-2">
//               Join our newsletter to enjoy more exclusive offers and the latest
//               updates.
//             </h3>
//             <form className="flex gap-2 items-center mb-2">
//               <input
//                 type="email"
//                 placeholder="Enter your Email"
//                 className="px-3 py-2 rounded w-full text-black focus:outline-none"
//               />
//               <button
//                 type="submit"
//                 className="bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 rounded font-bold whitespace-nowrap"
//               >
//                 Sign Up
//               </button>
//             </form>
//             <p className="text-gray-400 text-xs leading-snug">
//               By clicking "Sign Up" you agree to the Terms of Use & Privacy
//               Policy.
//               <br />
//               Registration from age 17 only.
//             </p>
//           </div>

//           <div className="flex gap-8 mb-60 mt-8">
//             {socialIcons.map((icon, idx) => (
//               <a
//                 href={icon.url}
//                 key={idx}
//                 className="text-gray-400 hover:text-white transition text-xl"
//               >
//                 {icon.icon}
//               </a>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Trust badges */}
//       <div className="max-w-7xl mx-auto px-4 flex flex-wrap gap-6 items-center justify-center mb-6">
//         {trustBadges.map((badge, idx) => (
//           <img key={idx} src={badge.src} alt={badge.alt} className="h-6 mx-2" />
//         ))}

//         {/* Payment icons */}
//         {paymentIcons.map((icon, idx) => (
//           <img
//             key={idx}
//             src={icon.src}
//             alt={icon.alt}
//             className=" h-8 rounded-md"
//           />
//         ))}
//       </div>

//       {/* Bottom legal links */}
//       <div className="max-w-7xl mx-auto px-4 border-t border-gray-800 pt-5 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400 gap-2">
//         <div className="flex flex-wrap justify-center gap-4 mb-1 md:mb-0">
//           <a href="#">Privacy Policy</a>
//           <a href="#">Terms of Use</a>
//           <a href="#">Cookie Policy</a>
//           <a href="#">Shipping Policy</a>
//           <a href="#">Returns Policy</a>
//           <a href="#">Do Not Sell or Share My Personal Information</a>
//           <a href="#">Cart ID</a>
//         </div>
//         <div>&copy; 2025 GlassesUSA.com. All Rights Reserved.</div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import React, { useState } from "react";
import { Star, StarHalf } from "lucide-react"; // ⭐ For rating stars

import Footer1 from "../assets/Footer/Footer1.png";
import Footer2 from "../assets/Footer/Footer2.png";
import Footer3 from "../assets/Footer/Footer3.png";
import Footer4 from "../assets/Footer/Footer4.png";
import Footer5 from "../assets/Footer/Footer5.png";
import Footer6 from "../assets/Footer/Footer6.png";
import Footer7 from "../assets/Footer/Footer7.png";
import Footer8 from "../assets/Footer/Footer8.png";
import Footer9 from "../assets/Footer/Footer9.png";
import Footer10 from "../assets/Footer/Footer10.png";
import Footer11 from "../assets/Footer/Footer11.png";
import Footer12 from "../assets/Footer/Footer12.png";

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
  {
    src: Footer1,
    alt: "Best Online Shops",
    
  },
  {
    src: Footer2,
    alt: "BBB Accredited",
    
  },
  {
    // src: Footer3,
    alt: "Trustpilot",
    name: "Trustpilot",
    rating: 4.5,
  },
  {
    name: (
      <>
        <span className="font-bold">Bizrate</span>{" "}
        <span className="font-normal">Insights</span>
      </>
    ),
    rating: 5,
  },
  {
     name: "Reseller Ratings",
    // src: Footer4,
    alt: "Reseller Ratings",
    rating: 4,
  },
];

const paymentIcons = [
  { src: Footer5, alt: "Visa" },
  { src: Footer6, alt: "Amex" },
  { src: Footer7, alt: "MasterCard" },
  { src: Footer8, alt: "Discover" },
  { src: Footer9, alt: "Google Pay" },
  { src: Footer10, alt: "Klarna" },
  { src: Footer11, alt: "Amazon" },
  { src: Footer12, alt: "PayPal" },
];

// ⭐ Helper function to render stars
const renderStars = (rating) => {
  const fullStars = Math.floor(rating);
  const hasHalf = rating % 1 !== 0;

  return (
    <div className="flex items-center justify-center mt-1">
      {[...Array(fullStars)].map((_, i) => (
        <Star key={i} size={14} className="fill-yellow-400 text-yellow-400" />
      ))}
      {hasHalf && (
        <StarHalf size={14} className="fill-yellow-400 text-yellow-400" />
      )}
    </div>
  );
};

function FooterAccordion({ title, links, open, toggleOpen }) {
  return (
    <div className="border-b border-gray-700 md:border-none">
      <button
        className="w-full flex justify-between items-center py-3 md:py-1 text-base font-medium md:font-semibold md:text-lg focus:outline-none md:cursor-default"
        onClick={() => window.innerWidth < 768 && toggleOpen()}
      >
        {title}
        <span className="md:hidden">{open ? "−" : "+"}</span>
      </button>
      <ul
        className={`${
          open ? "block" : "hidden"
        } md:block space-y-2 pb-2 md:pb-0`}
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
    <footer className="w-full bg-[#0C0E23] text-white pt-12 pb-6 text-sm">
      {/* Help boxes row */}
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-12">
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
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-5 lg:grid-cols-6 gap-10 mb-10">
        {/* Left side: Links */}
        <div className="col-span-3 lg:col-span-4 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
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

        {/* Right side: Newsletter */}
        <div className="col-span-2 lg:col-span-2 flex flex-col justify-between">
          <div>
            <h3 className="font-semibold text-lg mb-2">
              Join our newsletter to enjoy more exclusive offers and the latest
              updates.
            </h3>
            <form className="flex gap-2 items-center mb-2">
              <input
                type="email"
                placeholder="Enter your Email"
                className="px-3 py-2 rounded w-full text-black focus:outline-none"
              />
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 rounded font-bold whitespace-nowrap"
              >
                Sign Up
              </button>
            </form>
            <p className="text-gray-400 text-xs leading-snug">
              By clicking "Sign Up" you agree to the Terms of Use & Privacy
              Policy.
              <br />
              Registration from age 17 only.
            </p>
          </div>

          <div className="flex gap-8 mb-60 mt-8">
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
      </div>

      {/* ⭐ Trust badges + Payment icons */}
      <div className="max-w-7xl mx-auto px-4 flex flex-wrap gap-6 items-center justify-center mb-6">
        {trustBadges.map((badge, idx) => (
          <div
            key={idx}
            className="flex items-center gap-2 text-center min-w-[100px]"
          >
            {badge.src && (
              <img
                src={badge.src}
                alt={badge.alt}
                className="h-8 object-contain"
                loading="lazy"
              />
            )}
            <div className="flex flex-col items-start">
              <p className="text-xs text-gray-300">{badge.name}</p>
              {badge.rating && (
                <div className="flex items-center">
                  {Array.from({ length: Math.floor(badge.rating) }).map(
                    (_, i) => (
                      <Star
                        key={i}
                        size={12}
                        className="fill-yellow-400 text-yellow-400"
                      />
                    )
                  )}
                  {badge.rating % 1 !== 0 && (
                    <StarHalf
                      size={12}
                      className="fill-yellow-400 text-yellow-400"
                    />
                  )}
                </div>
              )}
            </div>
          </div>
        ))}

        {paymentIcons.map((icon, idx) => (
          <img
            key={idx}
            src={icon.src}
            alt={icon.alt}
            className="h-7 w-auto rounded-md"
            loading="lazy"
          />
        ))}
      </div>

      {/* Bottom legal links */}
      <div className="max-w-7xl mx-auto px-4 border-t border-gray-800 pt-5 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400 gap-2">
        <div className="flex flex-wrap justify-center gap-4 mb-1 md:mb-0">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Use</a>
          <a href="#">Cookie Policy</a>
          <a href="#">Shipping Policy</a>
          <a href="#">Returns Policy</a>
          <a href="#">Do Not Sell or Share My Personal Information</a>
          <a href="#">Cart ID</a>
        </div>
        <div>&copy; 2025 GlassesUSA.com. All Rights Reserved.</div>
      </div>
    </footer>
  );
};

export default Footer;

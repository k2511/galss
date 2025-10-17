// import React from "react";
// import { Search, Truck, Shield, CheckCircle } from "lucide-react";
// import banner1 from "../assets/ContactLenses/banner1.jpg"; // ✅ Import the image

// export default function ContactLensBanner() {
//   return (
//     <div className="w-full bg-gradient-to-br from-gray-50 to-blue-50">
//       <div className="max-w-7xl mx-auto px-6 py-16 relative">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
//           {/* Left Content */}
//           <div className="space-y-8">
//             <h1 className="text-4xl lg:text-5xl font-bold text-gray-900">
//               <span className="text-blue-600">See better. Save more.</span>{" "}
//               <span className="text-gray-700">30% off your first order.</span>
//             </h1>

//             {/* Search Bar */}
//             <div className="relative">
//               <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
//                 <Search className="h-5 w-5 text-gray-400" />
//               </div>
//               <input
//                 type="text"
//                 placeholder="Find my contacts"
//                 className="w-full pl-12 pr-4 py-4 text-lg rounded-full border border-gray-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//               />
//             </div>
//           </div>

//           {/* Right Image */}
//           <div className="flex justify-center lg:justify-end">
//             <div className="relative">
//               <div className="w-80 h-80 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full opacity-20 absolute -top-10 -right-10"></div>
//               <img
//                 src={banner1} // ✅ Correct usage
//                 alt="Smiling woman"
//                 className="relative rounded-lg shadow-xl w-80 h-80 object-cover"
//               />
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Trust Bar */}
//       <div className="bg-blue-700 text-white">
//         <div className="max-w-7xl mx-auto px-6 py-4">
//           <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 items-center text-center lg:text-left">
//             <div className="flex items-center justify-center lg:justify-start gap-3">
//               <Truck className="h-6 w-6" />
//               <span className="text-sm font-medium">Free shipping & returns</span>
//             </div>

//             <div className="flex items-center justify-center lg:justify-start gap-3">
//               <Shield className="h-6 w-6" />
//               <span className="text-sm font-medium">Money-back guarantee</span>
//             </div>

//             <div className="flex items-center justify-center lg:justify-start gap-3">
//               <CheckCircle className="h-6 w-6" />
//               <span className="text-sm font-medium">Authorized reseller</span>
//             </div>

//             <div className="flex items-center justify-center lg:justify-start gap-2 col-span-2 lg:col-span-1">
//               <div className="flex gap-1">
//                 {[...Array(5)].map((_, i) => (
//                   <svg key={i} className="w-5 h-5 fill-green-400" viewBox="0 0 20 20">
//                     <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
//                   </svg>
//                 ))}
//               </div>
//               <span className="text-xs">Trustpilot</span>
//               <span className="text-xs opacity-75">• 111,229+</span>
//               <span className="text-xs font-semibold">Excellent</span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }





















import React from "react";
import { Search, Truck, Shield, CheckCircle } from "lucide-react";
import banner1 from "../assets/ContactLenses/banner1.jpg"; // ✅ imported image

export default function ContactLensBanner() {
  return (
    <div className="w-full">
      {/* Hero Section with Background Image */}
      <div
        className="relative w-full bg-cover bg-center h-[80vh] flex items-center justify-center"
        style={{
          backgroundImage: `url(${banner1})`, // ✅ background image
        }}
      >
        {/* Overlay (soft gradient for readability) */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 to-blue-800/40"></div>

        {/* Text + Search Bar */}
        <div className="relative z-10 text-center text-white px-6 max-w-3xl">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-snug">
            <span className="text-blue-300">See better. Save more.</span>{" "}
            <br />
            <span className="text-white">30% off your first order.</span>
          </h1>

          {/* Search Bar */}
          <div className="relative max-w-xl mx-auto">
            <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Find my contacts"
              className="w-full pl-12 pr-4 py-4 text-lg rounded-full border border-gray-300 bg-white/90 text-gray-900 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>
      </div>

      {/* Trust Bar */}
      <div className="bg-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 items-center text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start gap-3">
              <Truck className="h-6 w-6" />
              <span className="text-sm font-medium">Free shipping & returns</span>
            </div>

            <div className="flex items-center justify-center lg:justify-start gap-3">
              <Shield className="h-6 w-6" />
              <span className="text-sm font-medium">Money-back guarantee</span>
            </div>

            <div className="flex items-center justify-center lg:justify-start gap-3">
              <CheckCircle className="h-6 w-6" />
              <span className="text-sm font-medium">Authorized reseller</span>
            </div>

            <div className="flex items-center justify-center lg:justify-start gap-2 col-span-2 lg:col-span-1">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 fill-green-400"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>
              <span className="text-xs">Trustpilot</span>
              <span className="text-xs opacity-75">• 111,229+</span>
              <span className="text-xs font-semibold">Excellent</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

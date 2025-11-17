// import React from 'react'
// import { useParams, useLocation } from "react-router-dom";



// const EyeProductName = () => {
//   const location = useLocation();

//     const { id } = useParams();

//     const itemName = decodeURIComponent(id);
//     const item = location.state;
//     console.log(itemName)


//   return (
//     <div className="min-h-screen flex flex-col md:flex-row items-center justify-center px-4 py-10 bg-gray-50">
      
//     {/* Left Side - Product Image */}
//     <div className="md:w-1/2 flex justify-center items-center border py-20">
//       <img
//         src="https://res.cloudinary.com/demo/image/upload/v1690000000/sample.jpg"
//         alt="Bausch & Lomb SofLens"
//         className="w-full max-w-md  shadow-lg"
//       />
//     </div>

//     {/* Right Side - Product Details */}
//     <div className="md:w-1/2 mt-8 md:mt-0 md:pl-10">
//       <h2 className="text-2xl font-semibold text-gray-900">
//        {itemName}
//       </h2>
//       {/* <p className="text-gray-500 mt-2">hilafilcon B</p> */}

//       <div className="mt-4">
//         <div className="flex items-center gap-3">
//           <span className="text-3xl font-bold text-[#00bac6]"> <p>Price: {item?.price}</p></span>
//           <span className="line-through text-gray-400">{item?.sell_price}</span>
//           <span className="text-sm text-gray-600">(Incl. GST)</span>
//         </div>
         
//       </div>

       

//       <div className="mt-6">
//         <button className="w-full md:w-auto bg-[#11daac] text-[#000042]  px-8 py-3 rounded-xl font-semibold  transition">
//              Select lenses
//         </button>
//       </div>

//       <div className="mt-6 text-sm text-gray-600">
//         <p> Order on Phone: <span className="font-medium">+91 8470007367</span></p>
//       </div>
//     </div>
//   </div>
//   )
// }

// export default EyeProductName


import React, { useState, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";

const EyeProductName = () => {
    const location = useLocation();
    const { id } = useParams();
    const [selectedOption, setSelectedOption] = useState(null);

    let item = location.state;
    
    if (!item) {
      const params = new URLSearchParams(location.search);
      const encoded = params.get("data");
      if (encoded) {
        try {
          item = JSON.parse(decodeURIComponent(encoded));
        } catch (e) {
          console.log("decode error", e);
        }
      }
    }

    
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState(1);  


  const lensOptions = [
  {
    label: "Single Vision",
    content: "Single vision lenses help you see clearly for one field – distance or reading."
  },
  {
    label: "Bifocal / Progressive",
    content: "Bifocal/Progressive lenses give you multi-distance clarity without line separation."
  },
  {
    label: "Zero Power",
    content: "Zero power lenses are for fashion use or computer protection with no correction."
  },
  {
    label: "Frame Only",
    content: "You can purchase only the frame without any lenses fitted."
  }
];

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <div className="min-h-screen flex flex-col md:flex-row items-center justify-center px-4 py-10 bg-gray-50 relative ">
      <div className="md:w-1/2 flex justify-center items-center border py-20 ">
        <img
          src={ item.image_url}
          alt="Bausch & Lomb SofLens"
          className="w-full max-w-md shadow-lg"
        />
      </div>

      <div className="md:w-1/2 mt-8 md:mt-0 md:pl-10 z-0">
        <h2 className="text-2xl font-semibold text-gray-900">{item.name}</h2>

        <div className="mt-4">
          <div className="flex items-center gap-3">
            <span className="text-3xl font-bold text-[#00bac6]">
              <p>Price: {item?.price}</p>
            </span>
            <span className="line-through text-gray-400">{item?.sell_price}</span>
            <span className="text-sm text-gray-600">(Incl. GST)</span>
          </div>
        </div>

        <div className="mt-6">
          <button
            onClick={() => setOpen(true)}
            className="w-full md:w-auto bg-[#11daac] text-[#000042] px-8 py-3 rounded-xl font-semibold transition"
          >
            Select lenses
          </button>
        </div>

        <div className="mt-6 text-sm text-gray-600">
          <p>
            Order on Phone: <span className="font-medium">+91 8470007367</span>
          </p>
        </div>
      </div>

      {open && (
        <div className="fixed inset-0 z-50">
          <div
            className="fixed inset-0 bg-black bg-opacity-40 transition-opacity "
            onClick={() => setOpen(false)}
          />
          {/* <div className="fixed right-0 top-0 h-full w-full sm:w-[420px]  bg-white shadow-xl transform transition-transform duration-300 translate-x-0 z-50">
            <div className="relative p-6 h-full flex flex-col border-2 border-black">
              <div className="flex items-center justify-between ">
                <h3 className="text-lg font-semibold">Select Lens Type</h3>
                <button
                  onClick={() => setOpen(false)}
                  className="text-gray-600 px-3 py-1 rounded hover:bg-gray-100"
                  aria-label="Close panel"
                >
                  ✕
                </button>
              </div>

              <div className="mt-4 overflow-auto">
                <div className="mb-4">
                  <p className="font-medium">{item?.name || itemName}</p>
                  <p className="text-sm text-gray-500">Price: {item?.price}</p>
                </div>

              <div className=" space-y-3 border-2 border-black">
                <div className="z-40 ">
                  
                {lensOptions.map((option, index) => (
                    <button onClick={() => {
                       setSelectedOption(() => {option.label
                      console.log(option.label) })
                    }}
                    key={index}
                    className="w-full text-left px-4 py-3 border rounded-lg"
                    >
                    {option.label}
                    </button>
                ))} 
                </div>


               {selectedOption === 'Single Vision' && ( <div className="absolute border-2 border-black w-full h-full top-0 right-0 z-50" > 
                Single Vision
                </div> )}

                
               {selectedOption === 'Bifocal / Progressive' && ( <div> 
                Bifocal / Progressive
                </div> )}
                
               {selectedOption === 'Zero Power' && ( <div> 
                Zero Power
                </div> )}
                
          
                </div>

             
              </div>

              <div className="mt-auto text-xs text-gray-400">
                <p>Need help? Call +91 8470007367</p>
              </div>
            </div>
          </div> */}

        <div className="fixed right-0 top-0 h-full w-full sm:w-[420px] bg-white shadow-xl transform transition-transform duration-300 translate-x-0 z-50">
          <div className="relative p-6 h-full flex flex-col border-2 border-black z-50">

            {/* HEADER */}
            <div className="flex items-center justify-between ">
              <h3 className="text-lg font-semibold">Select Lens Type</h3>
              <button
                onClick={() => setOpen(false)}
                className="text-gray-600 px-3 py-1 rounded hover:bg-gray-100"
              >
                ✕
              </button>
            </div>

            {/* CONTENT */}
            <div className="mt-4 overflow-auto">
              <div className="mb-4">
                <p className="font-medium">{item?.name || itemName}</p>
                <p className="text-sm text-gray-500">Price: {item?.price}</p>
              </div>

              <div className="space-y-3 border-2 border-black relative">

                {/* OPTIONS LIST */}
                <div className="z-40">
                  {lensOptions.map((option, index) => (
                    <button
                      onClick={() => {
                        setSelectedOption(option.label); // FIXED
                        console.log(option.label);
                      }}
                      key={index}
                      className="w-full text-left px-4 py-3 border rounded-lg"
                    >
                      {option.label}
                    </button>
                  ))}
                </div>

                {/* OVERLAY — Single Vision */}
                {selectedOption === "Single Vision" && (
                  <div className="absolute top-0 right-0 w-full h-full bg-white border-2 border-black z-50 p-5">
                    <button
                      className="text-sm mb-3 text-blue-600"
                      onClick={() => setSelectedOption(null)}
                    >
                      ← Back
                    </button>

                    <h2 className="text-xl font-semibold mb-2">Single Vision</h2>
                    <p className="text-gray-600">
                      Single Vision lenses help with distance or reading.  
                    </p>
                  </div>
                )}

                {/* OVERLAY — Bifocal */}
                {selectedOption === "Bifocal / Progressive" && (
                  <div className="absolute top-0 right-0 w-full h-full bg-white border-2 border-black z-50 p-5">
                    <button
                      className="text-sm mb-3 text-blue-600"
                      onClick={() => setSelectedOption(null)}
                    >
                      ← Back
                    </button>

                    <h2 className="text-xl font-semibold mb-2">Bifocal / Progressive</h2>
                    <p className="text-gray-600">
                      Bifocal & Progressive lenses allow multiple vision strengths.  
                    </p>
                  </div>
                )}

                {/* OVERLAY — Zero Power */}
                {selectedOption === "Zero Power" && (
                  <div className="absolute top-0 right-0 w-full h-full bg-white border-2 border-black z-50 p-5">
                    <button
                      className="text-sm mb-3 text-blue-600"
                      onClick={() => setSelectedOption(null)}
                    >
                      ← Back
                    </button>

                    <h2 className="text-xl font-semibold mb-2">Zero Power</h2>
                    <p className="text-gray-600">
                      Zero power lenses for computer or protection.  
                    </p>
                  </div>
                )}

                {/* OVERLAY — Frame Only */}
                {selectedOption === "Frame Only" && (
                  <div className="absolute top-0 right-0 w-full h-full bg-white border-2 border-black z-50 p-5">
                    <button
                      className="text-sm mb-3 text-blue-600"
                      onClick={() => setSelectedOption(null)}
                    >
                      ← Back
                    </button>

                    <h2 className="text-xl font-semibold mb-2">Frame Only</h2>
                    <p className="text-gray-600">
                      Purchase frame only without lenses.  
                    </p>
                  </div>
                )}

              </div>
            </div>

            {/* FOOTER */}
            <div className="mt-auto text-xs text-gray-400">
              <p>Need help? Call +91 8470007367</p>
            </div>

          </div>
        </div>

        </div>
      )}
    </div>
  );
};

export default EyeProductName;

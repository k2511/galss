import React from 'react'

const Payment = () => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row items-center justify-center px-4 py-10 bg-gray-50">
      
      {/* Left Side - Product Image */}
      <div className="md:w-1/2 flex justify-center items-center border py-20">
        <img
          src="https://res.cloudinary.com/demo/image/upload/v1690000000/sample.jpg"
          alt="Bausch & Lomb SofLens"
          className="w-full max-w-md  shadow-lg"
        />
      </div>

      {/* Right Side - Product Details */}
      <div className="md:w-1/2 mt-8 md:mt-0 md:pl-10">
        <h2 className="text-2xl font-semibold text-gray-900">
          Bausch & Lomb Soflens 59 (6 Lens Per Box)
        </h2>
        <p className="text-gray-500 mt-2">hilafilcon B</p>

        <div className="mt-4">
          <div className="flex items-center gap-3">
            <span className="text-3xl font-bold text-[#00bac6]">₹1149</span>
            <span className="line-through text-gray-400">₹1499</span>
            <span className="text-sm text-gray-600">(Incl. GST)</span>
          </div>
           
        </div>

         

        <div className="mt-6">
          <button className="w-full md:w-auto bg-[#11daac]  px-8 py-3 rounded-xl font-semibold  transition">
            Proceed to Pay
          </button>
        </div>

        <div className="mt-6 text-sm text-gray-600">
          <p> Order on Phone: <span className="font-medium">+91 8470007367</span></p>
        </div>
      </div>
    </div>
  )
}

export default Payment
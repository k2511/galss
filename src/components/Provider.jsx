import React from 'react'
import providers from "../assets/providers/providers.png"; // adjust path if needed

const Provider = () => {
  return (
    <div className="flex flex-col items-center mt-8">
      <h2 className="text-2xl font-semibold mb-4">Choose your provider.</h2>
      <p className="text-gray-500 mb-6">
        Click on your provider's logo to check your eligibility.
      </p>
      <img
        src={providers}
        alt="Vision insurance providers"
        className="w-full max-w-5xl rounded-2xl shadow-md"
      />
      <p className="text-sm mt-6">
        <strong>Can't find your provider?</strong> You can apply for
        reimbursement directly with your insurance company.
      </p>
    </div>
  )
}

export default Provider

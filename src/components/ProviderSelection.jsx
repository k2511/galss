import React from "react";

const providers = [
  { name: "UnitedHealthcare", logo: "https://upload.wikimedia.org/wikipedia/commons/2/20/UnitedHealthcare_Logo.svg" },
  { name: "Spectera", logo: "https://via.placeholder.com/150x50?text=Spectera" },
  { name: "VSP", logo: "https://via.placeholder.com/150x50?text=VSP" },
  { name: "EyeMed", logo: "https://via.placeholder.com/150x50?text=EyeMed" },
  { name: "Cigna", logo: "https://via.placeholder.com/150x50?text=Cigna" },
  { name: "DavisVision", logo: "https://via.placeholder.com/150x50?text=DavisVision" },
  { name: "Anthem", logo: "https://via.placeholder.com/150x50?text=Anthem" },
  { name: "Aetna", logo: "https://via.placeholder.com/150x50?text=Aetna" },
  { name: "NVA", logo: "https://via.placeholder.com/150x50?text=NVA" },
  { name: "Humana", logo: "https://via.placeholder.com/150x50?text=Humana" },
  { name: "Lincoln", logo: "https://via.placeholder.com/150x50?text=Lincoln" },
  { name: "MediGold", logo: "https://via.placeholder.com/150x50?text=MediGold" },
  { name: "Solstice", logo: "https://via.placeholder.com/150x50?text=Solstice" },
];

const ProviderSelection = () => {
  return (
    <div className="flex flex-col items-center justify-center py-10 px-4 bg-white">
      <h1 className="text-3xl font-semibold mb-2 text-gray-800">
        Choose your provider.
      </h1>
      <p className="text-gray-600 mb-8 text-center">
        Click on your provider's logo to check your eligibility.
      </p>

      {/* Provider Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 max-w-5xl">
        {providers.map((provider, index) => (
          <button
            key={index}
            className="bg-white border rounded-xl shadow-sm hover:shadow-md p-6 flex items-center justify-center transition-transform transform hover:scale-105 duration-200"
          >
            <img
              src={provider.logo}
              alt={provider.name}
              className="max-h-10 object-contain"
            />
          </button>
        ))}
      </div>

      {/* Reimbursement Text */}
      <div className="mt-10 text-gray-600 text-center">
        <p>
          <span className="font-semibold">Can't find your provider?</span>{" "}
          You can apply for reimbursement directly with your insurance company.
        </p>
      </div>
    </div>
  );
};

export default ProviderSelection;

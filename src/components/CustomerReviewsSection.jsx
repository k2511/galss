import React from "react";

const CustomerReviewsSection = () => {
  const reviews = [
    {
      name: "Jessica L.",
      rating: 5,
      text: "Love my new glasses! Perfect fit and fast delivery.",
      avatar: "JL"
    },
    {
      name: "Mike R.",
      rating: 5, 
      text: "Great quality and amazing customer service.",
      avatar: "MR"
    },
    {
      name: "Amanda K.",
      rating: 5,
      text: "Best online glasses experience I've ever had!",
      avatar: "AK"
    }
  ];

  return (
    <div className="w-full py-8 md:py-12 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-center text-xl md:text-2xl font-semibold text-gray-900 mb-2">
          See why over 3 million customers trust us
        </h2>
        <p className="text-center text-gray-600 mb-8">
          Real reviews from real customers
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-sm">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  {review.avatar}
                </div>
                <div className="ml-3">
                  <h4 className="font-semibold text-gray-900">{review.name}</h4>
                  <div className="flex text-yellow-400 text-sm">
                    {[...Array(review.rating)].map((_, i) => (
                      <span key={i}>★</span>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-700 text-sm">{review.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CustomerReviewsSection;

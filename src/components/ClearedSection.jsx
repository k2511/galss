import React from "react";

const ClearedSection = () => {
  const testimonials = [
    {
      name: "Sarah M.",
      rating: 5,
      text: "Amazing selection and great customer service!",
      image: "https://via.placeholder.com/300x200/EC4899/FFFFFF?text=Customer+1"
    },
    {
      name: "John D.", 
      rating: 5,
      text: "Fast shipping and perfect fit. Highly recommended!",
      image: "blob:chrome-extension://dbjbempljhcmhlfpfacalomonjpalpko/47a15e38-b712-4a4a-a47c-c2b4ccda3e7f"
    }
  ];

  return (
    <div className="w-full py-8 md:py-12 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-center text-xl md:text-2xl font-semibold text-gray-900 mb-8">
          We've got your eyes covered.
        </h2>
        <p className="text-center text-gray-600 mb-8">
          Join thousands of satisfied customers who trust us with their vision.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-sm">
              <img 
                src={testimonial.image} 
                alt={testimonial.name}
                className="w-full h-32 object-cover rounded-lg mb-4"
              />
              <div className="flex items-center mb-2">
                <div className="flex text-yellow-400">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>
                <span className="ml-2 text-sm text-gray-600">{testimonial.name}</span>
              </div>
              <p className="text-gray-700 text-sm">{testimonial.text}</p>
              <button className="mt-4 text-blue-600 text-sm font-medium">Learn More</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClearedSection;

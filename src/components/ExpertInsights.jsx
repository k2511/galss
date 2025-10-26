import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function ExpertInsights() {
  const articles = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1574258495973-f010dfbb5371?w=400&h=300&fit=crop",
      title: "Cleaning your eyeglasses",
      description: "Washing your eyeglasses is not such a tricky thing. Here is a step-by-step guide t...",
      bgColor: "bg-purple-200"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1516534775068-ba3e7458af70?w=400&h=300&fit=crop",
      title: "5 easy tips on how to measure pupillary distance",
      description: "A few easy tips on how to effectively measure pupillary distance, what it is & st...",
      bgColor: "bg-teal-600"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1509695507497-903c140c43b0?w=400&h=300&fit=crop",
      title: "20/20 Vision: What does it mean?",
      description: "What is 20/20 vision? What it is and the best tips to support eye wellness.",
      bgColor: "bg-amber-500"
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1556656793-08538906a9f8?w=400&h=300&fit=crop",
      title: "New app is changing how people are buying glasses",
      description: "What our prescription scanner app is and how to use it.",
      bgColor: "bg-gray-200"
    }
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-16">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          Experts Insights
        </h2>
        <p className="text-gray-600 text-lg">
          Dive in to find expert knowledge, useful tips and insightful articles.
        </p>
      </div>

      {/* Articles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {articles.map((article) => (
          <div 
            key={article.id}
            className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <div className="flex flex-col sm:flex-row">
              {/* Image */}
              <div className={`sm:w-2/5 ${article.bgColor} min-h-[240px]`}>
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="sm:w-3/5 p-6 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {article.description}
                  </p>
                </div>
                
                <a 
                  href="#"
                  className="text-blue-500 hover:text-blue-600 font-semibold inline-flex items-center gap-2 transition-colors group"
                >
                  Continue Reading
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* View All Button */}
      <div className="text-center">
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-12 py-4 rounded-full text-lg transition-colors shadow-lg hover:shadow-xl">
          View All
        </button>
      </div>
    </div>
  );
}
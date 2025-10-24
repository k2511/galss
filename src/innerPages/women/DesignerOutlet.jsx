import React, { useState, useEffect } from "react";
import axios from "axios";
import { ChevronDown } from "lucide-react";

// Components
import PromoBanner from "../../components/PromoBanner";
import Footer from "../../components/Footer";

// ✅ Reusable Product Card Component
const ProductCard = ({ product }) => (
  <div className="product-card border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-all relative">
    <div className="relative bg-gray-100 p-4">
      <img
        src={product.image}
        alt={product.name}
        className="w-full aspect-[4/3] object-cover mx-auto"
      />
      {product.isSale && <div className="sale-badge">Sale</div>}
      {product.isPremium && <div className="premium-badge">Premium</div>}
    </div>
    <div className="p-4">
      <div className="flex items-center justify-between mb-2">
        <span className="text-xs text-gray-500">{product.colors} colors</span>
        <span className="bg-green-500 text-white px-2 py-0.5 rounded text-xs">
          Next-Day Delivery
        </span>
      </div>
      <h2 className="text-sm font-medium text-gray-900 mb-2">{product.name}</h2>
      <div className="flex items-baseline gap-2 mb-3">
        {product.originalPrice && (
          <span className="line-through text-gray-400 text-sm">
            ${product.originalPrice}
          </span>
        )}
        <span
          className={
            product.originalPrice
              ? "text-red-600 font-semibold"
              : "text-black font-semibold"
          }
        >
          ${product.salePrice}
        </span>
      </div>
    </div>
  </div>
);

// ✅ Simple Skeleton Loader Component
const ProductSkeleton = () => (
  <div className="animate-pulse border border-gray-200 rounded-lg overflow-hidden">
    <div className="bg-gray-200 h-48 w-full"></div>
    <div className="p-4 space-y-2">
      <div className="bg-gray-200 h-3 w-3/4"></div>
      <div className="bg-gray-200 h-3 w-1/2"></div>
      <div className="bg-gray-200 h-4 w-1/3"></div>
    </div>
  </div>
);

const DesignerOutlet = () => {
  const [activeFilter, setActiveFilter] = useState(null);
  const [products, setProducts] = useState([]);
  const [visibleCount, setVisibleCount] = useState(6);
  const [totalProducts, setTotalProducts] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const topTabs = ["Designer Glasses", "Rx Sunglasses", "On Sale", "Bestsellers", "RayBan"];
  const filterOptions = ["shape", "size", "features", "brands", "color", "material", "price"];

  // ✅ Fetch Products
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("https://dummyjson.com/products/category/sunglasses");
        const items = response.data?.products || [];

        const transformed = items.map((item) => {
          const discount = item.discountPercentage || 0;
          const original = discount > 0 ? Math.round(item.price / (1 - discount / 100)) : null;

          return {
            id: item.id,
            name: item.title,
            image: item.thumbnail || "https://via.placeholder.com/300x200?text=No+Image",
            salePrice: item.price,
            originalPrice: original,
            colors: Math.floor(Math.random() * 5) + 1,
            isSale: discount > 0,
            isPremium: Math.random() > 0.7,
          };
        });

        setProducts(transformed);
        setTotalProducts(response.data?.total || transformed.length);
      } catch (err) {
        console.error("Error fetching products:", err);
        setError("Failed to load products. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const toggleFilter = (filter) => {
    setActiveFilter((prev) => (prev === filter ? null : filter));
  };

  return (
    <div className="bg-white min-h-screen">
      <PromoBanner />

      <style>{`
        .sale-badge {
          position: absolute; top: 8px; left: 8px;
          background: #ef4444; color: white;
          padding: 4px 8px; border-radius: 4px;
          font-size: 12px; font-weight: bold;
        }
        .premium-badge {
          position: absolute; top: 8px; right: 8px;
          background: #fbbf24; color: #000;
          padding: 4px 8px; border-radius: 4px;
          font-size: 12px; font-weight: bold;
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* ✅ Page Title */}
        <h1 className="text-3xl font-bold text-gray-900 mb-6">
          Designer Outlet ({totalProducts})
        </h1>

        {/* ✅ Top Tabs */}
        <div className="flex flex-wrap gap-3 mb-6">
          {topTabs.map((tab, i) => (
            <button
              key={i}
              className="border border-gray-200 rounded-full px-4 py-2 text-sm hover:bg-gray-100 transition-colors"
            >
              {tab}
            </button>
          ))}
        </div>

        {/* ✅ Filter Bar */}
        <div
          className={`bg-gray-50 rounded-lg px-4 py-3 mb-8 transition-all duration-300 ease-in-out overflow-hidden ${
            activeFilter ? "min-h-[300px]" : "flex flex-wrap justify-between items-center"
          }`}
        >
          <div className={`flex flex-wrap gap-3 ${activeFilter ? "w-full mb-4" : ""}`}>
            {filterOptions.map((key) => (
              <button
                key={key}
                onClick={() => toggleFilter(key)}
                className={`bg-white border rounded-md px-4 py-2 text-sm flex items-center gap-2 capitalize transition-all hover:shadow-sm ${
                  activeFilter === key
                    ? "border-blue-500 bg-blue-50 shadow-md"
                    : "border-gray-300 hover:border-gray-400"
                }`}
              >
                {key}
                <ChevronDown
                  size={16}
                  className={`transition-transform duration-200 ${
                    activeFilter === key ? "rotate-180" : ""
                  }`}
                />
              </button>
            ))}
          </div>

          {activeFilter && (
            <div className="mt-4 bg-white border rounded-md p-4 text-gray-700 text-sm shadow-sm">
              Showing options for: <strong>{activeFilter}</strong>
            </div>
          )}

          <div
            className={`flex items-center gap-4 text-sm ${
              activeFilter ? "justify-end mt-4 pt-2 border-t border-gray-200" : ""
            }`}
          >
            <button className="flex items-center gap-1 text-gray-700 hover:text-gray-900">
              Most Relevant <ChevronDown size={14} />
            </button>
            <label className="flex items-center gap-2 text-gray-700 hover:text-gray-900 cursor-pointer">
              <input type="checkbox" className="rounded border-gray-300" />
              <span>Next-Day Delivery</span>
            </label>
          </div>
        </div>

        {/* ✅ Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {loading ? (
            Array.from({ length: 6 }).map((_, i) => <ProductSkeleton key={i} />)
          ) : error ? (
            <div className="col-span-full text-center py-8 text-red-500">{error}</div>
          ) : products.length === 0 ? (
            <div className="col-span-full text-center py-8 text-gray-500">
              No products found.
            </div>
          ) : (
            products.slice(0, visibleCount).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          )}
        </div>

        {/* ✅ Load More Button */}
        {!loading && products.length > visibleCount && (
          <div className="text-center mb-12">
            <button
              onClick={() => setVisibleCount((prev) => prev + 6)}
              className="bg-blue-600 text-white px-10 py-3 rounded-full font-semibold hover:bg-blue-700 transition"
            >
              Showing {Math.min(visibleCount, products.length)} of {totalProducts} — View More
            </button>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default DesignerOutlet;

import React, { useEffect, useState } from "react";
import axios from "axios";

const Dashboard = () => {
  const [stats, setStats] = useState({});
  const [brands, setBrands] = useState([]);
  const [expandedBrands, setExpandedBrands] = useState({});
  const [loadingProducts, setLoadingProducts] = useState({});
  const [loadingBrands, setLoadingBrands] = useState(false);

  useEffect(() => {
    // Fetch sales summary
    const fetchStats = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/sales/summary");
        setStats(res.data);
      } catch (err) {
        console.error("Error fetching sales summary:", err);
      }
    };

    // Fetch all brands without products
    const fetchBrands = async () => {
      try {
        setLoadingBrands(true);
        const res = await axios.get("http://localhost:5000/api/inventory/brands");
        setBrands(res.data);
      } catch (err) {
        console.error("Error fetching brands:", err);
      } finally {
        setLoadingBrands(false);
      }
    };

    fetchStats();
    fetchBrands();
  }, []);

  // Toggle brand section and fetch products if not loaded
  const toggleBrand = async (BID) => {
    setExpandedBrands((prev) => ({ ...prev, [BID]: !prev[BID] }));

    const brand = brands.find((b) => b.BID === BID);
    if (!brand.products) {
      try {
        setLoadingProducts((prev) => ({ ...prev, [BID]: true }));
        const res = await axios.get(
          `http://localhost:5000/api/inventory/brand/${BID}/products`
        );
        setBrands((prev) =>
          prev.map((b) =>
            b.BID === BID ? { ...b, products: res.data.products } : b
          )
        );
      } catch (err) {
        console.error(`Error fetching products for brand ${BID}:`, err);
      } finally {
        setLoadingProducts((prev) => ({ ...prev, [BID]: false }));
      }
    }
  };

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-semibold">Dashboard</h1>
      </div>

      {/* Sales Summary */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        <div className="p-6 bg-white rounded-2xl shadow-lg border border-gray-200">
          <h3 className="text-lg font-bold text-gray-700">Today’s Sale</h3>
          <p className="text-gray-500">{stats.today?.count ?? 0} orders</p>
          <p className="text-xl font-extrabold text-red-600">
            ₹ {stats.today?.amount ?? 0}
          </p>
        </div>
        <div className="p-6 bg-white rounded-2xl shadow-lg border border-gray-200">
          <h3 className="text-lg font-bold text-gray-700">Yesterday’s Sale</h3>
          <p className="text-gray-500">{stats.yesterday?.count ?? 0} orders</p>
          <p className="text-xl font-extrabold text-yellow-600">
            ₹ {stats.yesterday?.amount ?? 0}
          </p>
        </div>
        <div className="p-6 bg-white rounded-2xl shadow-lg border border-gray-200">
          <h3 className="text-lg font-bold text-gray-700">Monthly Sale</h3>
          <p className="text-gray-500">{stats.monthly?.count ?? 0} orders</p>
          <p className="text-xl font-extrabold text-green-600">
            ₹ {stats.monthly?.amount ?? 0}
          </p>
        </div>
        <div className="p-6 bg-white rounded-2xl shadow-lg border border-gray-200">
          <h3 className="text-lg font-bold text-gray-700">Total Sale</h3>
          <p className="text-gray-500">{stats.total?.count ?? 0} orders</p>
          <p className="text-xl font-extrabold text-purple-600">
            ₹ {((stats.total?.amount ?? 0) / 100000).toFixed(2)} Lac
          </p>
        </div>
      </div>

      {/* Inventory Section */}
      <div>
        <h2 className="text-lg font-bold text-gray-800 mb-6">Stock Inventory</h2>
        {loadingBrands ? (
          <p>Loading brands...</p>
        ) : (
          brands.map((brand) => (
            <div
              key={brand.BID}
              className="mb-4 bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300"
            >
              <button
                onClick={() => toggleBrand(brand.BID)}
                className="w-full text-left flex justify-between items-center bg-white text-gray-800 px-6 py-4 font-semibold hover:bg-gray-200 transition-colors duration-300"
              >
                <span className="text-sm">{brand.bname}</span>
                <span className="text-xl transform transition-transform duration-300">
                  {expandedBrands[brand.BID] ? "▲" : "▼"}
                </span>
              </button>

              {expandedBrands[brand.BID] && (
                <div className="p-4 border-t border-gray-200">
                  {loadingProducts[brand.BID] ? (
                    <p className="text-center py-4 text-gray-500">
                      Loading products...
                    </p>
                  ) : (
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm text-left text-gray-700">
                        <thead className="text-xs text-gray-900 uppercase bg-gray-100">
                          <tr>
                            <th className="py-3 px-6 rounded-l-lg">ID</th>
                            <th className="py-3 px-6">Product Name</th>
                            <th className="py-3 px-6">Price</th>
                            <th className="py-3 px-6">Stock</th>
                            <th className="py-3 px-6 rounded-r-lg">Sold</th>
                          </tr>
                        </thead>
                        <tbody>
                          {(brand.products || []).map((p) => (
                            <tr
                              key={p.PID}
                              className={`bg-white border-b hover:bg-gray-50 transition-colors duration-200 ${
                                p.stock <= 5 ? "bg-red-50 text-red-800" : ""
                              }`}
                            >
                              <td className="py-4 px-6 font-medium text-gray-900">
                                {p.PID}
                              </td>
                              <td className="py-4 px-6">{p.pname}</td>
                              <td className="py-4 px-6">₹{p.price}</td>
                              <td className="py-4 px-6 font-semibold">{p.stock}</td>
                              <td className="py-4 px-6">{p.sold}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}
                </div>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Dashboard;

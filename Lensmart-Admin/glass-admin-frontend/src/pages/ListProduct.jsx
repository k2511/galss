// src/pages/ListProduct.jsx
import React, { useEffect, useState, useMemo } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";

const API = "http://localhost:5000";
const IMAGE_BASE_URL = `${API}/uploads/`;

const ActionDropdown = ({ onEdit, onDelete }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={() => setOpen((s) => !s)}
        className="flex items-center border rounded-md px-3 py-1 text-green-600 border-green-600 hover:bg-green-50"
      >
        Info
        <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-28 rounded-md bg-white shadow-lg border z-10">
          <ul className="py-1">
            <li>
              <button onClick={() => { setOpen(false); onEdit(); }} className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100">
                Edit
              </button>
            </li>
            <li>
              <button onClick={() => { setOpen(false); onDelete(); }} className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100 text-red-600">
                Delete
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default function ListProduct() {
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const res = await axios.get(`${API}/api/products`);
      //  console.log('fetch product', res.data)
      // backend should return category_name and brand_name (joined). Also may return image_url
      setProducts(Array.isArray(res.data) ? res.data : []);
    } catch (err) {
      console.error("Error fetching products:", err);
      setProducts([]);
    }
  };

  // Filtered products memoized for performance — search by name, sku, id, category_name, brand_name
  const filteredProducts = useMemo(() => {
    const q = (searchQuery || "").trim().toLowerCase();
    if (!q) return products;
    return products.filter((p) => {
      const name = (p.name || "").toString().toLowerCase();
      const sku = (p.sku || "").toString().toLowerCase();
      const idStr = (p.id || "").toString();
      const cat = (p.category_name || "").toString().toLowerCase();
      const brand = (p.brand_name || "").toString().toLowerCase();
      return name.includes(q) || sku.includes(q) || idStr.includes(q) || cat.includes(q) || brand.includes(q);
    });
  }, [products, searchQuery]);

  // Pagination derived values
  const totalPages = Math.max(1, Math.ceil(filteredProducts.length / (itemsPerPage === 0 ? 1 : itemsPerPage)));
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedProducts = itemsPerPage === filteredProducts.length || itemsPerPage === 0
    ? filteredProducts
    : filteredProducts.slice(startIndex, startIndex + itemsPerPage);

  // Handlers
  const handleEdit = (id) => {
    navigate(`/add-product/${id}`);
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this product?");
    if (!confirmDelete) return;

    try {
      await axios.delete(`${API}/api/products/${id}`);
      setProducts((prev) => prev.filter((p) => p.id !== id));
      alert("Product deleted successfully");
    } catch (err) {
      console.error("Error deleting product:", err);
      alert("Failed to delete product");
    }
  };

  const handlePageChange = (page) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
  };

  const getPageNumbers = () => {
    const pages = [];
    const maxVisible = 5;
    if (totalPages <= maxVisible) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
      return pages;
    }
    pages.push(1);
    let start = Math.max(2, currentPage - 1);
    let end = Math.min(totalPages - 1, currentPage + 1);
    if (currentPage <= 2) end = 3;
    if (currentPage >= totalPages - 1) start = totalPages - 2;
    if (start > 2) pages.push("...");
    for (let i = start; i <= end; i++) pages.push(i);
    if (end < totalPages - 1) pages.push("...");
    pages.push(totalPages);
    return pages;
  };

  // Adjust itemsPerPage "All" behavior
  const handleItemsPerPageChange = (val) => {
    if (val === "all") {
      setItemsPerPage(filteredProducts.length || 1);
    } else {
      setItemsPerPage(Number(val));
    }
    setCurrentPage(1);
  };

  return (
    <div className="p-4">
      <div className="flex justify-between items-center py-5">
        <h2 className="text-xl font-semibold">Product List</h2>
        <div className="flex items-center space-x-4">
          <input
            type="text"
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="border rounded-lg p-2 w-64"
          />
          <Button text="Add Product" onClick={() => navigate("/add-product")} />
        </div>
      </div>

      <div className="flex items-center mb-4">
        <span className="mr-2">Show</span>
        <select
          value={itemsPerPage === filteredProducts.length ? "all" : itemsPerPage}
          onChange={(e) => handleItemsPerPageChange(e.target.value)}
          className="border rounded-lg p-2"
        >
          <option value={10}>10</option>
          <option value={20}>20</option>
          <option value={50}>50</option>
          <option value={75}>75</option>
          <option value="all">All</option>
        </select>
        <span className="ml-2">entries</span>
      </div>

      <div className="overflow-x-auto bg-white rounded-lg shadow">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-100">
              <th className="border p-2 text-left">No</th>
              <th className="border p-2 text-left">Image</th>
              <th className="border p-2 text-left">Product</th>
              <th className="border p-2 text-left">Category</th>
              <th className="border p-2 text-left">Brand</th>
              <th className="border p-2 text-left">Price</th>
              <th className="border p-2 text-left">Status</th>
              <th className="border p-2 text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {paginatedProducts.length === 0 ? (
              <tr>
                <td colSpan="8" className="text-center p-4">
                  {searchQuery ? "No products found matching your search" : "No products found"}
                </td>
              </tr>
            ) : (
              paginatedProducts.map((item, idx) => (
                <tr key={item.id} className="hover:bg-gray-50">
                  <td className="border p-2">{item.id}</td>
                   
                  <td className="border p-2">
                    <img
                      src={
                        item.image_url ? item.image_url : item.image ? `${IMAGE_BASE_URL}${item.image}` : `${IMAGE_BASE_URL}placeholder.png`
                      }
                      alt={item.name || "product"}
                      className="h-12 w-12 object-contain mx-auto"
                    />
                  </td>

                  <td className="border p-2">
                    <div className="font-medium">{item.name}</div>
                    <div className="text-sm text-gray-500">SKU: {item.sku}</div>
                  </td>

                  <td className="border p-2">{item.category_name ?? item.category_id ?? "-"}</td>
                  <td className="border p-2">{item.brand_name ?? item.brand_id ?? "-"}</td>

                  <td className="border p-2">
                    <div>Price: {item.price ?? "-"}</div>
                    <div className="text-sm text-gray-500">Stock: {item.stock ?? 0}</div>
                  </td>

                  <td className="border p-2">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-semibold ${
                        String(item.status) === "1" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                      }`}
                    >
                      {String(item.status) === "1" ? "Active" : "Inactive"}
                    </span>
                  </td>

                  <td className="border p-2">
                    <ActionDropdown onEdit={() => handleEdit(item.id)} onDelete={() => handleDelete(item.id)} />
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      <div className="flex justify-between items-center mt-4">
        <div>
          Showing {filteredProducts.length === 0 ? 0 : Math.min(filteredProducts.length, startIndex + 1)} to{" "}
          {Math.min(startIndex + (itemsPerPage === filteredProducts.length ? filteredProducts.length : itemsPerPage), filteredProducts.length)}{" "}
          of {filteredProducts.length} entries
        </div>

        <div className="flex space-x-1">
          <button onClick={() => handlePageChange(1)} disabled={currentPage === 1} className={`px-3 py-1 border rounded ${currentPage === 1 ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-100"}`}>
            First
          </button>
          <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1} className={`px-3 py-1 border rounded ${currentPage === 1 ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-100"}`}>
            Previous
          </button>

          {getPageNumbers().map((page, index) =>
            page === "..." ? (
              <span key={`ellipsis-${index}`} className="px-3 py-1">
                ...
              </span>
            ) : (
              <button key={page} onClick={() => handlePageChange(page)} className={`px-3 py-1 border rounded ${currentPage === page ? "bg-red-500 text-white" : "hover:bg-gray-100"}`}>
                {page}
              </button>
            )
          )}

          <button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages} className={`px-3 py-1 border rounded ${currentPage === totalPages ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-100"}`}>
            Next
          </button>
          <button onClick={() => handlePageChange(totalPages)} disabled={currentPage === totalPages} className={`px-3 py-1 border rounded ${currentPage === totalPages ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-100"}`}>
            Last
          </button>
        </div>
      </div>
    </div>
  );
}

// src/pages/Reviews.jsx
import React, { useEffect, useState, useRef } from "react";
import axios from "axios";

const API = "http://localhost:5000";
const PRODUCTS_ENDPOINT = `${API}/api/products`;
const REVIEWS_ENDPOINT = `${API}/api/reviews`;

/* -------------------------- Action Dropdown -------------------------- */
const ActionDropdown = ({ onEdit, onDelete }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef();
  useEffect(() => {
    const onDoc = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, []);
  return (
    <div className="relative inline-block text-left" ref={ref}>
      <button
        onClick={() => setOpen((s) => !s)}
        className="flex items-center border rounded px-3 py-1 text-green-600 border-green-600 hover:bg-green-50"
      >
        Info
        <svg
          className={`ml-1 h-4 w-4 transition-transform ${
            open ? "rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-28 rounded-md bg-white shadow-lg border z-10">
          <ul className="py-1">
            <li>
              <button
                onClick={() => {
                  setOpen(false);
                  onEdit();
                }}
                className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                Edit
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  setOpen(false);
                  onDelete();
                }}
                className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-100"
              >
                Delete
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

/* -------------------------- Main Reviews Page -------------------------- */
export default function Reviews() {
  const [products, setProducts] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [form, setForm] = useState({
    product_id: "",
    user_id: "",
    rating: 5,
    comment: "",
  });
  const [editingId, setEditingId] = useState(null);
  const [loading, setLoading] = useState(true);

  /* -------------------- Load Products and Reviews -------------------- */
  useEffect(() => {
    const load = async () => {
      try {
        const [prodRes, revRes] = await Promise.all([
          axios.get(PRODUCTS_ENDPOINT),
          axios.get(REVIEWS_ENDPOINT),
        ]);
        setProducts(prodRes.data);
        setReviews(revRes.data);
      } catch (err) {
        console.error("Error loading data:", err);
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

  /* -------------------------- Handlers -------------------------- */
  const handleChange = (e) => {
    const { name, value } = e.target;
    // console.log('value', name, value )
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const resetForm = () => {
    setForm({ product_id: "", user_id: "", rating: 5, comment: "" });
    setEditingId(null);
  };

  const fetchReviews = async () => {
    const res = await axios.get(REVIEWS_ENDPOINT);
    setReviews(res.data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.product_id || !form.comment) {
      alert("Please select a product and enter a comment");
      return;
    }

    // console.log('form---', form, editingId)

    try {
      if (editingId) {
        await axios.put(`${REVIEWS_ENDPOINT}/${editingId}`, form);
        alert("Review updated successfully!");
      } else {
        await axios.post(REVIEWS_ENDPOINT, form);
        alert("Review added successfully!");
      }
      await fetchReviews();
      resetForm();
    } catch (err) {
      console.error("Save error:", err);
      alert("Failed to save review");
    }
  };

  const handleEdit = (review) => {
    setForm({
      product_id: review.product_id || "",
      user_id: review.user_id || "",
      rating: review.rating || 5,
      comment: review.comment || "",
    });
    setEditingId(review.id);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this review?")) return;
    try {
      await axios.delete(`${REVIEWS_ENDPOINT}/${id}`);
      alert("Deleted successfully");
      await fetchReviews();
    } catch (err) {
      console.error("Delete failed:", err);
    }
  };

  if (loading)
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin h-12 w-12 border-b-2 border-red-600 rounded-full"></div>
      </div>
    );

  /* -------------------------- Render -------------------------- */
  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Left Form */}
        <div className="bg-white p-6 rounded shadow border">
          <h2 className="text-xl font-semibold mb-4">
            {editingId ? "Edit Review" : "Add Review"}
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="text-sm">Product</label>
              <select
                name="product_id"
                value={form.product_id}
                onChange={handleChange}
                required
                className="w-full border p-2 rounded bg-gray-50"
              >
                <option value="">Select Product</option>
                {products.map((p) => (
                  <option key={p.id} value={p.id}>
                    {p.name}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="text-sm">User ID (optional)</label>
              <input
                type="number"
                name="user_id"
                value={form.user_id}
                onChange={handleChange}
                placeholder="Enter user ID"
                className="w-full border p-2 rounded bg-gray-50"
              />
            </div>

            <div>
              <label className="text-sm">Rating</label>
              <input
                type="number"
                name="rating"
                min="1"
                max="5"
                value={form.rating}
                onChange={handleChange}
                className="w-full border p-2 rounded bg-gray-50"
              />
            </div>

            <textarea
              name="comment"
              value={form.comment}
              onChange={handleChange}
              placeholder="Enter review comment"
              required
              rows={4}
              className="w-full border p-2 rounded bg-gray-50"
            />

            <div className="flex gap-2">
              <button
                type="submit"
                className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
              >
                {editingId ? "Update" : "Submit"}
              </button>
              {editingId && (
                <button
                  type="button"
                  onClick={resetForm}
                  className="bg-gray-200 px-4 py-2 rounded"
                >
                  Cancel
                </button>
              )}
            </div>
          </form>
        </div>

        {/* Right Table */}
        <div className="md:col-span-2 bg-white p-6 rounded shadow border">
          <h2 className="text-lg font-semibold mb-4">All Reviews</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full border border-gray-200 divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-2 text-left text-xs font-medium text-gray-600 uppercase">
                    ID
                  </th>
                  <th className="px-4 py-2 text-left text-xs font-medium text-gray-600 uppercase">
                    Product
                  </th>
                  <th className="px-4 py-2 text-left text-xs font-medium text-gray-600 uppercase">
                    Rating
                  </th>
                  <th className="px-4 py-2 text-left text-xs font-medium text-gray-600 uppercase">
                    Comment
                  </th>
                  <th className="px-4 py-2 text-right text-xs font-medium text-gray-600 uppercase">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {reviews.length ? (
                  reviews.map((r) => (
                    <tr key={r.id} className="hover:bg-gray-50">
                      <td className="px-4 py-2 text-sm text-gray-700">{r.id}</td>
                      <td className="px-4 py-2 text-sm text-gray-700">
                        {products.find((p) => p.id === r.product_id)?.name ||
                          "N/A"}
                      </td>
                      <td className="px-4 py-2 text-sm text-gray-700">
                        {r.rating}
                      </td>
                      <td className="px-4 py-2 text-sm text-gray-700 truncate max-w-xs">
                        {r.comment}
                      </td>
                      <td className="px-4 py-2 text-right">
                        <ActionDropdown
                          onEdit={() => handleEdit(r)}
                          onDelete={() => handleDelete(r.id)}
                        />
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td
                      colSpan="5"
                      className="px-4 py-4 text-center text-gray-500 text-sm"
                    >
                      No reviews found
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

// src/pages/NewArrival.jsx
import React, { useEffect, useState, useRef } from "react";
import axios from "axios";

const API = "http://localhost:5000";
const API_BASE = `${API}/api`;
const UPLOADS_BASE = `${API}/uploads/`;

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
        <div className="absolute right-0 mt-2 w-32 rounded-md bg-white shadow-lg border z-10">
          <ul className="py-1">
            <li>
              <button
                onClick={() => {
                  setOpen(false);
                  onEdit();
                }}
                className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
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
                className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100 text-red-600"
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

export default function NewArrival() {
  const [products, setProducts] = useState([]);
  const [arrivals, setArrivals] = useState([]);
  const [filteredArrivals, setFilteredArrivals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const [form, setForm] = useState({
    product: "",
    mrp: "",
    offerPrice: "",
    status: "Active",
  });

  const [file, setFile] = useState(null);
  const [editingId, setEditingId] = useState(null);
  const fileInputRef = useRef(null);

  // Search & pagination
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [sortConfig, setSortConfig] = useState({ key: null, direction: "ascending" });

  useEffect(() => {
    // load products + arrivals in parallel
    let mounted = true;
    (async () => {
      setLoading(true);
      try {
        const [prodRes, arrRes] = await Promise.all([
          axios.get(`${API_BASE}/products`),
          axios.get(`${API_BASE}/new-arrivals`),
        ]);
        if (!mounted) return;
        setProducts(Array.isArray(prodRes.data) ? prodRes.data : []);
        setArrivals(Array.isArray(arrRes.data) ? arrRes.data : []);
        setFilteredArrivals(Array.isArray(arrRes.data) ? arrRes.data : []);
      } catch (err) {
        console.error("Failed to load products or arrivals:", err);
        setProducts([]);
        setArrivals([]);
        setFilteredArrivals([]);
      } finally {
        if (mounted) setLoading(false);
      }
    })();
    return () => {
      mounted = false;
    };
  }, []);

  useEffect(() => {
    // filter arrivals by search term
    const q = (searchTerm || "").trim().toLowerCase();
    if (!q) {
      setFilteredArrivals(arrivals);
    } else {
      const filtered = arrivals.filter((item) => {
        // support various possible shapes returned by backend:
        // item.id, item.product (id or name), item.product_name, item.mrp, item.offerPrice, item.status
        const idStr = String(item.id ?? "");
        const productName = (item.product_name || item.product || item.product_id || "").toString().toLowerCase();
        const mrp = String(item.mrp ?? "");
        const offer = String(item.offerPrice ?? item.offer_price ?? "");
        const status = String(item.status ?? "").toLowerCase();

        return (
          idStr.includes(q) ||
          productName.includes(q) ||
          mrp.includes(q) ||
          offer.includes(q) ||
          status.includes(q)
        );
      });
      setFilteredArrivals(filtered);
    }
    setCurrentPage(1);
  }, [searchTerm, arrivals]);

  // sorting
  const handleSort = (key) => {
    let direction = "ascending";
    if (sortConfig.key === key && sortConfig.direction === "ascending") {
      direction = "descending";
    }
    setSortConfig({ key, direction });

    const sorted = [...filteredArrivals].sort((a, b) => {
      const av = a[key] ?? "";
      const bv = b[key] ?? "";
      if (typeof av === "number" && typeof bv === "number") {
        return direction === "ascending" ? av - bv : bv - av;
      }
      const as = String(av).toLowerCase();
      const bs = String(bv).toLowerCase();
      if (as < bs) return direction === "ascending" ? -1 : 1;
      if (as > bs) return direction === "ascending" ? 1 : -1;
      return 0;
    });

    setFilteredArrivals(sorted);
  };

  const getSortIndicator = (key) => {
    if (sortConfig.key === key) return sortConfig.direction === "ascending" ? "↑" : "↓";
    return null;
  };

  const fetchArrivals = async () => {
    try {
      const res = await axios.get(`${API_BASE}/new-arrivals`);
      setArrivals(Array.isArray(res.data) ? res.data : []);
      setFilteredArrivals(Array.isArray(res.data) ? res.data : []);
    } catch (err) {
      console.error("Failed to refresh arrivals:", err);
    }
  };

  const resetForm = () => {
    setForm({ product: "", mrp: "", offerPrice: "", status: "Active" });
    setFile(null);
    setEditingId(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.product) {
      alert("Please select a product");
      return;
    }
    setSaving(true);
    try {
      const fd = new FormData();
      // send field names that backend can accept; backend may also expect product_id
      fd.append("product_id", form.product);
      fd.append("mrp", form.mrp ?? "");
      fd.append("offer_price", form.offerPrice ?? "");
      fd.append("status", form.status ?? "Active");
      if (file) fd.append("image", file);

      if (editingId) {
        await axios.put(`${API_BASE}/new-arrivals/${editingId}`, fd, {
          headers: { "Content-Type": "multipart/form-data" },
        });
        alert("New-arrival updated");
      } else {
        await axios.post(`${API_BASE}/new-arrivals`, fd, {
          headers: { "Content-Type": "multipart/form-data" },
        });
        alert("New-arrival added");
      }

      await fetchArrivals();
      resetForm();
    } catch (err) {
      console.error("Save Error:", err);
      alert(err?.response?.data?.message || "Save failed");
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this record?")) return;
    try {
      await axios.delete(`${API_BASE}/new-arrivals/${id}`);
      await fetchArrivals();
      alert("Deleted");
    } catch (err) {
      console.error("Delete failed:", err);
      alert("Delete failed");
    }
  };

  const handleEdit = (item) => {
    // map possible backend fields to form
    setForm({
      product: item.product_id ?? item.product ?? "",
      mrp: item.mrp ?? "",
      offerPrice: item.offer_price ?? item.offerPrice ?? "",
      status: item.status ?? "Active",
    });
    setEditingId(item.id ?? item.ID ?? null);
    // set preview file not necessary here because file preview handled in table only
  };

  // Pagination values
  const totalFiltered = filteredArrivals.length;
  const computedItemsPerPage = itemsPerPage === "all" ? totalFiltered || 1 : Number(itemsPerPage);
  const totalPages = Math.max(1, Math.ceil(totalFiltered / computedItemsPerPage));
  const indexOfLastItem = currentPage * computedItemsPerPage;
  const indexOfFirstItem = indexOfLastItem - computedItemsPerPage;
  const currentItems =
    itemsPerPage === "all" ? filteredArrivals : filteredArrivals.slice(indexOfFirstItem, indexOfLastItem);

  // loading state
  if (loading) {
    return <div className="p-6">Loading…</div>;
  }

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <header className="flex justify-between items-center mb-6 text-gray-800">
        <h2 className="text-2xl font-bold">New Arrivals</h2>
        <div className="text-sm breadcrumbs">
          <ul className="flex space-x-1">
            <li className="text-red-500">
              <a href="#">Home</a>
            </li>
            <li className="text-gray-400">/</li>
            <li>New Arrivals</li>
          </ul>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Form */}
        <div className="bg-white shadow-lg p-6 rounded-lg md:col-span-1">
          <h3 className="font-semibold text-lg mb-4 text-gray-800">{editingId ? "Edit Arrival" : "Add Arrival"}</h3>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-gray-700">Product</label>
              <select
                className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                value={form.product}
                onChange={(e) => setForm({ ...form, product: e.target.value })}
                required
              >
                <option value="">Select Product</option>
                {products.map((p) => (
                  // frontend product object might be { id, name } or { id, pname, PID }
                  <option key={p.id ?? p.PID} value={p.id ?? p.PID}>
                    {p.name ?? p.pname ?? `#${p.id ?? p.PID}`}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-gray-700">Product Image (800×700 recommended)</label>
              <input
                ref={fileInputRef}
                onChange={(e) => setFile(e.target.files?.[0] ?? null)}
                type="file"
                accept="image/*"
                className="w-full border border-gray-300 p-2 rounded-md"
              />
            </div>

            <div>
              <label className="block text-gray-700">MRP</label>
              <input
                type="number"
                placeholder="MRP"
                value={form.mrp}
                onChange={(e) => setForm({ ...form, mrp: e.target.value })}
                className="w-full border border-gray-300 p-2 rounded-md"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700">Offer Price</label>
              <input
                type="number"
                placeholder="Offer Price"
                value={form.offerPrice}
                onChange={(e) => setForm({ ...form, offerPrice: e.target.value })}
                className="w-full border border-gray-300 p-2 rounded-md"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700">Status</label>
              <select
                className="w-full border border-gray-300 p-2 rounded-md"
                value={form.status}
                onChange={(e) => setForm({ ...form, status: e.target.value })}
                required
              >
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
              </select>
            </div>

            <button
              type="submit"
              disabled={saving}
              className="w-full bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700"
            >
              {saving ? "Saving..." : editingId ? "Update" : "Submit"}
            </button>

            {editingId && (
              <button
                type="button"
                onClick={() => {
                  resetForm();
                }}
                className="w-full mt-2 bg-gray-200 text-gray-700 px-4 py-2 rounded-md"
              >
                Cancel Edit
              </button>
            )}
          </form>
        </div>

        {/* Table */}
        <div className="bg-white shadow-lg p-6 rounded-lg md:col-span-2">
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center space-x-2 text-gray-600">
              <span>Show</span>
              <select
                className="border border-gray-300 p-1 rounded-md"
                value={itemsPerPage}
                onChange={(e) => {
                  const v = e.target.value === "all" ? "all" : Number(e.target.value);
                  setItemsPerPage(v);
                  setCurrentPage(1);
                }}
              >
                <option value={10}>10</option>
                <option value={20}>20</option>
                <option value={50}>50</option>
                <option value={75}>75</option>
                <option value="all">All</option>
              </select>
              <span>entries</span>
            </div>

            <div className="flex items-center space-x-2 text-gray-600">
              <span>Search:</span>
              <input
                type="text"
                className="border border-gray-300 p-1 rounded-md"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="search id / product / price / status"
              />
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full bg-white rounded-lg">
              <thead className="bg-gray-100">
                <tr>
                  <th
                    className="py-3 px-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider cursor-pointer"
                    onClick={() => handleSort("id")}
                  >
                    ID {getSortIndicator("id")}
                  </th>
                  <th
                    className="py-3 px-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider cursor-pointer"
                    onClick={() => handleSort("product")}
                  >
                    Product {getSortIndicator("product")}
                  </th>
                  <th className="py-3 px-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Image</th>
                  <th
                    className="py-3 px-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider cursor-pointer"
                    onClick={() => handleSort("offer_price")}
                  >
                    Offer {getSortIndicator("offer_price")}
                  </th>
                  <th
                    className="py-3 px-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider cursor-pointer"
                    onClick={() => handleSort("mrp")}
                  >
                    MRP {getSortIndicator("mrp")}
                  </th>
                  <th
                    className="py-3 px-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider cursor-pointer"
                    onClick={() => handleSort("status")}
                  >
                    Status {getSortIndicator("status")}
                  </th>
                  <th className="py-3 px-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {currentItems.length > 0 ? (
                  currentItems.map((item) => {
                    // derive display values defensively
                    const id = item.id ?? item.ID ?? "";
                    const productDisplay = item.product_name ?? item.product_name_s ?? item.product ?? item.product_id ?? "";
                    const imageSrc =
                      item.image
                        ? item.image.startsWith("http")
                          ? item.image
                          : `${UPLOADS_BASE}${item.image}`
                        : null;
                    const offer = item.offer_price ?? item.offerPrice ?? item.offer ?? "";
                    const mrp = item.mrp ?? "";
                    const statusVal = item.status ?? "";

                    return (
                      <tr key={id} className="hover:bg-gray-50">
                        <td className="py-3 px-4 text-sm text-gray-800">{id}</td>
                        <td className="py-3 px-4 text-sm text-gray-800">{productDisplay}</td>
                        <td className="py-3 px-4">
                          {imageSrc ? (
                            <img src={imageSrc} alt="Product" className="h-10 w-10 object-cover rounded-md" />
                          ) : (
                            <div className="h-10 w-10 bg-gray-100 rounded-md flex items-center justify-center text-xs text-gray-400">No</div>
                          )}
                        </td>
                        <td className="py-3 px-4 text-sm text-gray-800">{offer}</td>
                        <td className="py-3 px-4 text-sm text-gray-800">{mrp}</td>
                        <td className="py-3 px-4 text-sm text-gray-800">
                          <span className={`px-2 py-1 text-xs font-semibold rounded-full ${String(statusVal).toLowerCase().includes("active") ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`}>
                            {statusVal || "—"}
                          </span>
                        </td>
                        <td className="py-3 px-4 relative">
                          <ActionDropdown
                            onEdit={() => {
                              handleEdit(item);
                            }}
                            onDelete={() => {
                              handleDelete(id);
                            }}
                          />
                        </td>
                      </tr>
                    );
                  })
                ) : (
                  <tr>
                    <td colSpan="7" className="py-4 text-center text-gray-500">
                      No arrivals found
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          <div className="flex justify-between items-center mt-4 text-gray-600 text-sm">
            <span>
              Showing {totalFiltered === 0 ? 0 : indexOfFirstItem + 1} to{" "}
              {Math.min(indexOfLastItem, totalFiltered)} of {totalFiltered} entries
            </span>

            <div className="flex space-x-2">
              <button
                className="px-3 py-1 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-100 disabled:opacity-50"
                onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                disabled={currentPage === 1}
              >
                Previous
              </button>

              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`px-3 py-1 rounded-md border ${currentPage === page ? "border-red-500 bg-red-500 text-white" : "border-gray-300 text-gray-700 hover:bg-gray-100"}`}
                >
                  {page}
                </button>
              ))}

              <button
                className="px-3 py-1 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-100 disabled:opacity-50"
                onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                disabled={currentPage === totalPages}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

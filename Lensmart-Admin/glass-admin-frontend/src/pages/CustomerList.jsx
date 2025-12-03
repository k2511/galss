// src/pages/CustomerList.jsx
import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const API_BASE = "http://localhost:5000/api";

// create axios instance
const api = axios.create({
  baseURL: API_BASE,
  timeout: 10000,
});

// Attach token via interceptor so each request includes it automatically
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers = config.headers || {};
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
}, (err) => Promise.reject(err));

export default function CustomerList() {
  const [customers, setCustomers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [openActionId, setOpenActionId] = useState(null);
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const [error, setError] = useState(null);

  const navigate = useNavigate();
  const mountedRef = useRef(true);

  useEffect(() => {
    mountedRef.current = true;
    return () => {
      mountedRef.current = false;
    };
  }, []);

  // Normalizes many common response shapes to an array of customer objects
  const normalizeResponse = (resData) => {
    if (!resData) return [];
    // axios returns { data: ... } already stripped when we pass res.data
    if (Array.isArray(resData)) return resData;
    if (Array.isArray(resData.customers)) return resData.customers;
    if (Array.isArray(resData.data)) return resData.data;
    if (Array.isArray(resData.rows)) return resData.rows;
    if (resData.customer && !Array.isArray(resData.customer)) return [resData.customer];
    // sometimes payload is { results: [...] }
    if (Array.isArray(resData.results)) return resData.results;
    // fallback: if object has numeric-indexed entries, convert to array
    if (typeof resData === "object") {
      const vals = Object.values(resData).filter((v) => Array.isArray(v) || typeof v === "object");
      if (vals.length && Array.isArray(vals[0])) return vals[0];
    }
    return [];
  };

  const loadCustomers = async (signal) => {
    try {
      setLoading(true);
      setError(null);

      const res = await api.get("/customers", { signal });

      const data = normalizeResponse(res.data);
      if (mountedRef.current) {
        setCustomers(data);
      }
    } catch (err) {
      if (axios.isCancel?.(err) || err?.name === "CanceledError") {
        // request was cancelled - ignore
        return;
      }
      console.error("Fetch customers error:", err);

      const msg =
        err?.response?.data?.message ||
        err?.response?.data?.error ||
        err?.message ||
        "Failed to fetch customers";

      if (mountedRef.current) {
        setError(msg);
        setCustomers([]);
      }
    } finally {
      if (mountedRef.current) setLoading(false);
      setOpenActionId(null);
    }
  };

  // initial load
  useEffect(() => {
    const controller = new AbortController();
    loadCustomers(controller.signal);
    return () => controller.abort();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const formatDate = (dt) => {
    if (!dt) return "-";
    const d = new Date(dt);
    if (isNaN(d.getTime())) return `${dt}`;
    return d.toLocaleString();
  };

  const toggleActionMenu = (id) =>
    setOpenActionId((prev) => (prev === id ? null : id));

  const handleEdit = (id) => {
    setOpenActionId(null);
    if (!id) return;
    navigate(`/customers/edit/${id}`);
  };

  const handleDelete = async (id) => {
    setOpenActionId(null);
    if (!window.confirm("Are you sure you want to delete this customer?")) return;

    try {
      await api.delete(`/customers/${id}`);
      if (selectedCustomer?.id === id || selectedCustomer?.ID === id) {
        setSelectedCustomer(null);
      }
      // reload
      const controller = new AbortController();
      await loadCustomers(controller.signal);
      window.alert("Customer deleted successfully");
    } catch (err) {
      console.error("Delete error:", err);
      window.alert(err?.response?.data?.message || "Failed to delete customer");
    }
  };

  const getRowId = (c, index) => {
    // try various common id shapes
    return c.id ?? c.ID ?? c._id ?? c.customer_id ?? index;
  };

  const safeNumber = (v) => {
    const n = Number(v);
    return Number.isFinite(n) ? n : null;
  };

  if (loading) {
    return (
      <div className="p-6 flex justify-center items-center h-40">
        <div className="animate-spin h-10 w-10 border-b-2 border-sky-600 rounded-full" />
      </div>
    );
  }

  return (
    <div className="p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold">Customer List</h2>

        <div className="flex gap-3">
          <button
            onClick={() => navigate("/customers/new")}
            className="bg-sky-600 text-white px-4 py-2 rounded hover:bg-sky-700"
          >
            Add Customer
          </button>

          <button
            onClick={() => {
              const controller = new AbortController();
              loadCustomers(controller.signal);
            }}
            className={`border px-3 py-2 rounded hover:bg-gray-50 ${loading ? "opacity-60 cursor-not-allowed" : ""}`}
            disabled={loading}
          >
            Refresh
          </button>
        </div>
      </div>

      {error && <div className="mb-4 text-red-600">{error}</div>}

      {/* Table */}
      <div className="bg-white rounded shadow overflow-x-auto">
        <table className="min-w-full text-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-3 text-left">#</th>
              <th className="px-4 py-3 text-left">Name</th>
              <th className="px-4 py-3 text-left">Email</th>
              <th className="px-4 py-3 text-left">Mobile</th>
              <th className="px-4 py-3 text-left">City</th>
           
              <th className="px-4 py-3 text-left">Created</th>
              <th className="px-4 py-3 text-left">Actions</th>
            </tr>
          </thead>

          <tbody>
            {customers.length === 0 ? (
              <tr>
                <td colSpan="9" className="text-center py-6 text-gray-500">
                  No customers found
                </td>
              </tr>
            ) : (
              customers.map((c, index) => {
                const id = getRowId(c, index);
                const tprice = c.tprice ?? c.total_price ?? c.t_price ?? "";
                const mobile = c.mobile ?? c.phone ?? "";

                const numericPrice = safeNumber(tprice);

                return (
                  <tr key={id ?? index} className="border-b hover:bg-gray-50">
                    <td className="px-4 py-3">{index + 1}</td>
                    <td className="px-4 py-3">{c.name ?? c.full_name ?? "-"}</td>
                    <td className="px-4 py-3">{c.email ?? "-"}</td>
                    <td className="px-4 py-3">{mobile || "-"}</td>
                    <td className="px-4 py-3">{c.city ?? "-"}</td>
               
            
                    <td className="px-4 py-3">
                      {formatDate(c.cdate ?? c.created_at ?? c.created)}
                    </td>

                    <td className="relative px-4 py-3">
                      <button
                        onClick={() => toggleActionMenu(id)}
                        className="px-3 py-1 bg-sky-50 border text-sky-700 rounded hover:bg-sky-100"
                      >
                        Info
                      </button>

                      {openActionId === id && (
                        <div className="absolute right-0 mt-2 bg-white border rounded shadow w-40 z-50">
                          <button
                            onClick={() => {
                              setSelectedCustomer(c);
                              setOpenActionId(null);
                            }}
                            className="w-full text-left px-4 py-2 hover:bg-gray-50"
                          >
                            View
                          </button>

                          <button
                            onClick={() => handleEdit(id)}
                            className="w-full text-left px-4 py-2 hover:bg-gray-50"
                          >
                            Edit
                          </button>

                          <button
                            onClick={() => handleDelete(id)}
                            className="w-full text-left px-4 py-2 text-red-600 hover:bg-gray-50"
                          >
                            Delete
                          </button>
                        </div>
                      )}
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>

      {/* View Modal */}
      {selectedCustomer && (
        <div
          className="fixed inset-0 bg-black/40 flex items-center justify-center z-50"
          onClick={() => setSelectedCustomer(null)}
        >
          <div
            className="bg-white rounded-lg p-6 shadow max-w-lg w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Customer Details</h3>
              <button
                onClick={() => setSelectedCustomer(null)}
                className="text-gray-600 hover:text-black"
              >
                ✕
              </button>
            </div>

            <div className="grid gap-2 text-sm">
              <p><strong>Name:</strong> {selectedCustomer.name ?? selectedCustomer.full_name ?? "-"}</p>
              <p><strong>Email:</strong> {selectedCustomer.email ?? "-"}</p>
              <p><strong>Mobile:</strong> {selectedCustomer.mobile ?? selectedCustomer.phone ?? "-"}</p>
              <p><strong>City:</strong> {selectedCustomer.city ?? "-"}</p>
              <p><strong>Product:</strong> {selectedCustomer.pname ?? selectedCustomer.product_name ?? "-"}</p>
              <p>
                <strong>Total Price:</strong>{" "}
                {safeNumber(selectedCustomer.tprice ?? selectedCustomer.total_price) !== null
                  ? Number(selectedCustomer.tprice ?? selectedCustomer.total_price).toFixed(2)
                  : "-"}
              </p>
              <p>
                <strong>Created:</strong>{" "}
                {formatDate(selectedCustomer.cdate ?? selectedCustomer.created_at ?? selectedCustomer.created)}
              </p>
            </div>

            <div className="mt-6 flex justify-end gap-2">
              <button
                onClick={() => setSelectedCustomer(null)}
                className="px-4 py-2 rounded border"
              >
                Close
              </button>

              <button
                onClick={() => {
                  const id = selectedCustomer.id ?? selectedCustomer.ID ?? selectedCustomer._id;
                  setSelectedCustomer(null);
                  handleEdit(id);
                }}
                className="px-4 py-2 bg-sky-600 text-white rounded"
              >
                Edit
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
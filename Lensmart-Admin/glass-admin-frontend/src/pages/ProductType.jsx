// src/pages/ProductShape.jsx
import React, { useEffect, useRef, useState } from "react";
import axios from "axios";

/**
 * Safe environment helper:
 * Supports both Vite (import.meta.env) and CRA (process.env),
 * without triggering syntax errors or undefined process issues.
 */
function getEnv(key) {
  // Vite style (import.meta.env)
  if (typeof import.meta !== "undefined" && import.meta.env && key in import.meta.env) {
    return import.meta.env[key];
  }
  // CRA / fallback
  if (typeof process !== "undefined" && process.env && key in process.env) {
    return process.env[key];
  }
  // Optional global window fallback
  if (typeof window !== "undefined" && key in window) {
    return window[key];
  }
  return undefined;
}

// ✅ Define API safely with fallbacks
const API =
  getEnv("VITE_API_BASE") ||
  getEnv("REACT_APP_API_BASE") ||
  getEnv("API_BASE") ||
  "http://localhost:5000";

const BASE_PATH = `${API.replace(/\/$/, "")}/api/product-shapes`;

// Mock data for demo mode
const MOCK_PRODUCT_SHAPES = [
  { id: 1, name: "Round", code: "RND", status: 1 },
  { id: 2, name: "Square", code: "SQR", status: 1 },
  { id: 3, name: "Rectangle", code: "RECT", status: 1 },
  { id: 4, name: "Aviator", code: "AVI", status: 1 },
  { id: 5, name: "Cat Eye", code: "CAT", status: 1 },
];

export default function ProductShape() {
  const mountedRef = useRef(true);

  useEffect(() => {
    mountedRef.current = true;
    return () => {
      mountedRef.current = false;
    };
  }, []);

  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState("");
  const [error, setError] = useState(null);

  const forcedMock =
    String(
      getEnv("VITE_USE_MOCK") ?? getEnv("REACT_APP_USE_MOCK") ?? ""
    ).trim() === "1";
  const [useMock, setUseMock] = useState(forcedMock);

  const [showModal, setShowModal] = useState(false);
  const [editing, setEditing] = useState(null);
  const [submitting, setSubmitting] = useState(false);

  const [form, setForm] = useState({
    name: "",
    code: "",
    status: "1",
  });

  const resetForm = () => setForm({ name: "", code: "", status: "1" });

  const nextMockId = () =>
    items.reduce((m, it) => Math.max(m, Number(it.id || 0)), 0) + 1;

  const fetchList = async () => {
    setLoading(true);
    setError(null);

    if (forcedMock) {
      setUseMock(true);
      setItems(MOCK_PRODUCT_SHAPES);
      setLoading(false);
      return;
    }

    try {
      const res = await axios.get(BASE_PATH);
      if (!mountedRef.current) return;
      setItems(Array.isArray(res.data) ? res.data : res.data.items ?? []);
      setUseMock(false);
    } catch (err) {
      console.warn("Backend unavailable — switching to mock:", err.message);
      setUseMock(true);
      setItems(MOCK_PRODUCT_SHAPES);
      setError("Backend offline — using mock data for demo");
    } finally {
      if (mountedRef.current) setLoading(false);
    }
  };

  useEffect(() => {
    fetchList();
  }, []);

  const openCreate = () => {
    resetForm();
    setEditing(null);
    setShowModal(true);
  };

  const openEdit = (item) => {
    setEditing(item);
    setForm({
      name: item.name ?? item.shape_name ?? "",
      code: item.code ?? item.shape_code ?? "",
      status: String(item.status ?? "1"),
    });
    setShowModal(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((p) => ({ ...p, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      if (!form.name.trim()) return alert("Name required");
      const payload = {
        name: form.name.trim(),
        code: form.code?.trim() || null,
        status: Number(form.status),
      };

      if (useMock) {
        if (editing) {
          const id = editing.id;
          setItems((prev) =>
            prev.map((it) => (it.id === id ? { ...it, ...payload } : it))
          );
          alert("Updated (mock)");
        } else {
          const id = nextMockId();
          setItems((prev) => [{ id, ...payload }, ...prev]);
          alert("Created (mock)");
        }
      } else {
        if (editing) {
          await axios.put(`${BASE_PATH}/${editing.id}`, payload);
          setItems((prev) =>
            prev.map((it) => (it.id === editing.id ? { ...it, ...payload } : it))
          );
          alert("Updated");
        } else {
          const res = await axios.post(BASE_PATH, payload);
          const created = res.data?.shape || res.data?.item || res.data;
          setItems((prev) => [created, ...prev]);
          alert("Created");
        }
      }

      setShowModal(false);
      resetForm();
    } catch (err) {
      console.error("Save failed:", err);
      alert(err.message || "Save failed");
    } finally {
      setSubmitting(false);
    }
  };

  const handleDelete = async (item) => {
    if (!window.confirm(`Delete "${item.name}"?`)) return;
    try {
      if (useMock) {
        setItems((prev) => prev.filter((it) => it.id !== item.id));
        alert("Deleted (mock)");
      } else {
        await axios.delete(`${BASE_PATH}/${item.id}`);
        setItems((prev) => prev.filter((it) => it.id !== item.id));
        alert("Deleted");
      }
    } catch (err) {
      console.error("Delete failed:", err);
      alert(err.message || "Delete failed");
    }
  };

  const filtered = items.filter((it) =>
    query
      ? (it.name ?? "").toLowerCase().includes(query.toLowerCase()) ||
        (it.code ?? "").toLowerCase().includes(query.toLowerCase())
      : true
  );

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Product Shapes</h2>
        <div className="flex items-center gap-3">
          <input
            type="text"
            placeholder="Search shapes..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="border rounded px-3 py-1"
          />
          <button onClick={fetchList} className="px-3 py-1 border rounded bg-gray-100">
            Refresh
          </button>
          <button onClick={openCreate} className="px-3 py-1 bg-red-600 text-white rounded">
            Add Shape
          </button>
        </div>
      </div>

      {useMock && (
        <div className="mb-4 p-3 rounded border bg-yellow-50 text-yellow-900">
          <strong>Demo mode:</strong> Using mock data (backend not connected)
        </div>
      )}

      <div className="bg-white p-4 rounded shadow">
        {loading ? (
          <div className="p-4">Loading…</div>
        ) : error ? (
          <div className="p-4 text-red-600">{error}</div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-left border-b">
                  <th className="py-2">Name</th>
                  <th className="py-2">Code</th>
                  <th className="py-2">Status</th>
                  <th className="py-2">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filtered.length === 0 ? (
                  <tr>
                    <td colSpan={4} className="py-4 text-center text-gray-500">
                      No shapes found
                    </td>
                  </tr>
                ) : (
                  filtered.map((it) => (
                    <tr key={it.id} className="border-b">
                      <td className="py-2">{it.name}</td>
                      <td className="py-2">{it.code || "-"}</td>
                      <td className="py-2">
                        {String(it.status) === "1" ? "Active" : "Inactive"}
                      </td>
                      <td className="py-2">
                        <div className="flex gap-2">
                          <button
                            onClick={() => openEdit(it)}
                            className="px-2 py-1 border rounded text-sm"
                          >
                            Edit
                          </button>
                          <button
                            onClick={() => handleDelete(it)}
                            className="px-2 py-1 border rounded text-sm text-red-600"
                          >
                            Delete
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
          <div className="w-full max-w-md bg-white rounded shadow p-6">
            <h3 className="text-lg font-medium mb-4">
              {editing ? "Edit Shape" : "Add Shape"}
            </h3>
            <form onSubmit={handleSubmit} className="space-y-3">
              <div>
                <label className="block text-sm mb-1">Name</label>
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  className="w-full border p-2 rounded"
                  required
                />
              </div>
              <div>
                <label className="block text-sm mb-1">Code (optional)</label>
                <input
                  name="code"
                  value={form.code}
                  onChange={handleChange}
                  className="w-full border p-2 rounded"
                />
              </div>
              <div>
                <label className="block text-sm mb-1">Status</label>
                <select
                  name="status"
                  value={form.status}
                  onChange={handleChange}
                  className="w-full border p-2 rounded"
                >
                  <option value="1">Active</option>
                  <option value="0">Inactive</option>
                </select>
              </div>

              <div className="flex justify-end gap-3 mt-4">
                <button
                  type="button"
                  onClick={() => {
                    setShowModal(false);
                    resetForm();
                  }}
                  className="px-4 py-2 bg-gray-200 rounded"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={submitting}
                  className="px-4 py-2 bg-red-600 text-white rounded"
                >
                  {submitting
                    ? "Saving..."
                    : editing
                    ? "Update"
                    : "Create"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

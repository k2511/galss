// src/pages/ProductType.jsx
import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button"; // optional - fallback to regular button if not present

const API =
  typeof process !== "undefined" && process?.env && process.env.REACT_APP_API_BASE
    ? process.env.REACT_APP_API_BASE
    : (typeof window !== "undefined" && window.REACT_APP_API_BASE) || "http://localhost:5000";

const BASE_PATH = `${API}/api/product-types`;

export default function ProductType() {
  const navigate = useNavigate();
  const mountedRef = useRef(true);

  useEffect(() => {
    mountedRef.current = true;
    return () => {
      mountedRef.current = false;
    };
  }, []);

  const [items, setItems] = useState([]);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(null);

  // modal state
  const [showModal, setShowModal] = useState(false);
  const [editing, setEditing] = useState(null); // null => create, object => edit

  const [form, setForm] = useState({
    name: "",
    slug: "",
    description: "",
    status: "1",
  });

  const resetForm = () =>
    setForm({
      name: "",
      slug: "",
      description: "",
      status: "1",
    });

  const fetchList = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await axios.get(BASE_PATH);
      if (!mountedRef.current) return;
      setItems(Array.isArray(res.data) ? res.data : res.data.items ?? []);
    } catch (err) {
      console.error("Failed to fetch product types:", err);
      setError(err?.response?.data?.message || err.message || "Failed to load");
    } finally {
      if (mountedRef.current) setLoading(false);
    }
  };

  useEffect(() => {
    fetchList();
  }, []); // load on mount

  const openCreate = () => {
    resetForm();
    setEditing(null);
    setShowModal(true);
  };

  const openEdit = (item) => {
    setEditing(item);
    setForm({
      name: item.name ?? item.type_name ?? "",
      slug: item.slug ?? item.type_slug ?? "",
      description: item.description ?? "",
      status: item.status !== undefined && item.status !== null ? String(item.status) : "1",
    });
    setShowModal(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((p) => ({ ...p, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e && e.preventDefault();
    setSubmitting(true);
    try {
      if (!form.name || !form.name.trim()) {
        alert("Name is required");
        return;
      }

      const payload = {
        name: form.name.trim(),
        slug: form.slug ? String(form.slug).trim() : undefined,
        description: form.description || "",
        status: form.status ?? "1",
      };

      if (editing && editing.id) {
        await axios.put(`${BASE_PATH}/${editing.id}`, payload);
        // optimistic update
        setItems((prev) => prev.map((it) => (it.id === editing.id ? { ...it, ...payload } : it)));
        alert("Updated successfully");
      } else {
        const res = await axios.post(BASE_PATH, payload);
        const created = res.data?.type || res.data?.item || res.data || null;
        // add to list
        if (created) {
          setItems((prev) => [created, ...prev]);
        } else {
          // fallback: reload
          await fetchList();
        }
        alert("Created successfully");
      }
      setShowModal(false);
      resetForm();
    } catch (err) {
      console.error("Save failed:", err);
      alert(err?.response?.data?.message || err.message || "Save failed");
    } finally {
      if (mountedRef.current) setSubmitting(false);
    }
  };

  const handleDelete = async (item) => {
    if (!confirm(`Delete "${item.name || item.type_name || "this item"}"?`)) return;
    try {
      await axios.delete(`${BASE_PATH}/${item.id ?? item.BID ?? item.type_id}`);
      setItems((prev) => prev.filter((it) => (it.id ?? it.BID ?? it.type_id) !== (item.id ?? item.BID ?? item.type_id)));
      alert("Deleted");
    } catch (err) {
      console.error("Delete failed:", err);
      alert(err?.response?.data?.message || err.message || "Delete failed");
    }
  };

  const filtered = items.filter((it) => {
    if (!query) return true;
    const q = query.toLowerCase();
    return (it.name ?? it.type_name ?? "").toLowerCase().includes(q) || (it.slug ?? "").toLowerCase().includes(q);
  });

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Product Types</h2>
        <div className="flex items-center gap-3">
          <input
            type="text"
            placeholder="Search types..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="border rounded px-3 py-1"
          />
          <button onClick={fetchList} className="px-3 py-1 border rounded bg-gray-100">Refresh</button>
          <button onClick={openCreate} className="px-3 py-1 bg-red-600 text-white rounded">Add Type</button>
        </div>
      </div>

      <div className="bg-white p-4 rounded shadow">
        {loading ? (
          <div className="p-4">Loading…</div>
        ) : error ? (
          <div className="p-4 text-red-600">Error: {error}</div>
        ) : (
          <>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="text-left border-b">
                    <th className="py-2">Name</th>
                    <th className="py-2">Slug</th>
                    <th className="py-2">Status</th>
                    <th className="py-2">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filtered.length === 0 ? (
                    <tr><td colSpan={4} className="py-4 text-center text-gray-500">No types found</td></tr>
                  ) : (
                    filtered.map((it) => {
                      const id = it.id ?? it.BID ?? it.type_id;
                      return (
                        <tr key={id} className="border-b">
                          <td className="py-2">{it.name ?? it.type_name}</td>
                          <td className="py-2">{it.slug ?? it.type_slug ?? "-"}</td>
                          <td className="py-2">{String(it.status ?? "1") === "1" ? "Active" : "Inactive"}</td>
                          <td className="py-2">
                            <div className="flex gap-2">
                              <button onClick={() => openEdit({ ...it, id })} className="px-2 py-1 border rounded text-sm">Edit</button>
                              <button onClick={() => handleDelete(it)} className="px-2 py-1 border rounded text-sm text-red-600">Delete</button>
                            </div>
                          </td>
                        </tr>
                      );
                    })
                  )}
                </tbody>
              </table>
            </div>
          </>
        )}
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
          <div className="w-full max-w-lg bg-white rounded shadow p-6">
            <h3 className="text-lg font-medium mb-4">{editing ? "Edit Product Type" : "Add Product Type"}</h3>
            <form onSubmit={handleSubmit} className="space-y-3">
              <div>
                <label className="block text-sm mb-1">Name</label>
                <input name="name" value={form.name} onChange={handleChange} className="w-full border p-2 rounded" required />
              </div>
              <div>
                <label className="block text-sm mb-1">Slug (optional)</label>
                <input name="slug" value={form.slug} onChange={handleChange} className="w-full border p-2 rounded" />
              </div>
              <div>
                <label className="block text-sm mb-1">Description</label>
                <textarea name="description" value={form.description} onChange={handleChange} className="w-full border p-2 rounded" rows={3} />
              </div>
              <div>
                <label className="block text-sm mb-1">Status</label>
                <select name="status" value={form.status} onChange={handleChange} className="w-full border p-2 rounded">
                  <option value="1">Active</option>
                  <option value="0">Inactive</option>
                </select>
              </div>

              <div className="flex justify-end gap-3 mt-4">
                <button type="button" onClick={() => { setShowModal(false); resetForm(); }} className="px-4 py-2 bg-gray-200 rounded">Cancel</button>
                <button type="submit" disabled={submitting} className="px-4 py-2 bg-red-600 text-white rounded">
                  {submitting ? "Saving..." : editing ? "Update" : "Create"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

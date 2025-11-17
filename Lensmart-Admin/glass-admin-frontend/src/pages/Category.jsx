// src/pages/Category.jsx
import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import Button from "../components/Button";

/**
 * Safe API base resolution:
 * - If running in an environment that provided process.env (like CRA), use REACT_APP_API_BASE.
 * - Otherwise allow a window-level override (window.REACT_APP_API_BASE) useful for quick debugging.
 * - Finally fall back to http://localhost:5000/api
 */
const safeProcessEnv =
  typeof process !== "undefined" && process && process.env ? process.env : undefined;
const API_BASE =
  (safeProcessEnv && safeProcessEnv.REACT_APP_API_BASE) ||
  (typeof window !== "undefined" && window.REACT_APP_API_BASE) ||
  "http://localhost:5000/api";

// We'll try these variants (frontend sends API_BASE + variant)
const PATH_VARIANTS = ["/category", "/categories"];

/* helper wrappers that try multiple path variants */
async function tryGet(pathVariants) {
  for (const p of pathVariants) {
    const url = `${API_BASE}${p}`;
    try {
      const res = await axios.get(url);
      return { ok: true, data: res.data, used: p, url };
    } catch (err) {
      if (!err.response || err.response.status !== 404) {
        return { ok: false, error: err, used: p, url };
      }
      console.warn(`tryGet: ${url} returned 404, trying next variant...`);
    }
  }
  return { ok: false, notFound: true, tried: pathVariants };
}

async function tryPost(pathVariants, payload) {
  for (const p of pathVariants) {
    const url = `${API_BASE}${p}`;
    try {
      const res = await axios.post(url, payload);
      return { ok: true, data: res.data, used: p, url };
    } catch (err) {
      if (!err.response || err.response.status !== 404) {
        return { ok: false, error: err, used: p, url };
      }
      console.warn(`tryPost: ${url} returned 404, trying next variant...`);
    }
  }
  return { ok: false, notFound: true, tried: pathVariants };
}

async function tryPut(pathVariants, id, payload) {
  for (const p of pathVariants) {
    const url = `${API_BASE}${p}/${id}`;
    try {
      const res = await axios.put(url, payload);
      return { ok: true, data: res.data, used: p, url };
    } catch (err) {
      if (!err.response || err.response.status !== 404) {
        return { ok: false, error: err, used: p, url };
      }
      console.warn(`tryPut: ${url} returned 404, trying next variant...`);
    }
  }
  return { ok: false, notFound: true, tried: pathVariants };
}

async function tryDelete(pathVariants, id) {
  for (const p of pathVariants) {
    const url = `${API_BASE}${p}/${id}`;
    try {
      const res = await axios.delete(url);
      return { ok: true, data: res.data, used: p, url };
    } catch (err) {
      if (!err.response || err.response.status !== 404) {
        return { ok: false, error: err, used: p, url };
      }
      console.warn(`tryDelete: ${url} returned 404, trying next variant...`);
    }
  }
  return { ok: false, notFound: true, tried: pathVariants };
}

export default function CategoryPage() {
  const [categories, setCategories] = useState([]);
  const [filteredCategories, setFilteredCategories] = useState([]);
  const [categoryName, setCategoryName] = useState("");
  const [AID, setAID] = useState("Active");
  // editId stores numeric id (or null)
  const [editId, setEditId] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const [itemsPerPage, setItemsPerPage] = useState(10); // number or "all"
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [apiAvailable, setApiAvailable] = useState(true);
  const [serverError, setServerError] = useState(null);

  const mounted = useRef(true);
  useEffect(() => {
    mounted.current = true;
    fetchCategories();
    return () => {
      mounted.current = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // debounce search (300ms)
  useEffect(() => {
    const t = setTimeout(() => setDebouncedSearch(searchQuery.trim()), 300);
    return () => clearTimeout(t);
  }, [searchQuery]);

  useEffect(() => {
    const filtered = categories.filter((cat) => {
      const name = (cat.cname || cat.name || "").toString().toLowerCase();
      const idStr = String(cat.CTID ?? cat.id ?? cat.ID ?? "");
      return name.includes(debouncedSearch.toLowerCase()) || idStr.includes(debouncedSearch);
    });
    if (mounted.current) {
      setFilteredCategories(filtered);
      setCurrentPage(1);
    }
  }, [debouncedSearch, categories]);

  const fetchCategories = async () => {
    setLoading(true);
    setServerError(null);
    try {
      const res = await tryGet(PATH_VARIANTS);
      if (res.ok) {
        const data = Array.isArray(res.data) ? res.data : [];
        // normalize items to always have CTID, cname, AID if possible
        const normalized = data.map((r) => ({
          CTID: r.CTID ?? r.id ?? r.ID ?? null,
          cname: r.cname ?? r.name ?? "",
          AID: r.AID ?? r.status ?? r.AID ?? 0, // prefer server AID if present, otherwise status
          raw: r,
        }));
        if (mounted.current) {
          setCategories(normalized);
          setApiAvailable(true);
        }
        console.log("Categories loaded from", res.url, normalized.length, "items");
      } else if (res.notFound) {
        if (mounted.current) {
          setCategories([]);
          setApiAvailable(false);
        }
        console.warn("Category endpoints not found:", res.tried);
      } else {
        if (mounted.current) {
          setCategories([]);
          setApiAvailable(true);
        }
        console.error("Error fetching categories:", res.error);
        setServerError(res.error?.response?.data?.message || res.error?.message || "Error fetching categories");
      }
    } catch (err) {
      console.error("Unexpected fetch error:", err);
      if (mounted.current) {
        setCategories([]);
        setServerError(err.message || "Unexpected error");
      }
    } finally {
      if (mounted.current) setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setServerError(null);

    if (!categoryName.trim()) {
      alert("Please provide a category name.");
      return;
    }

    if (!apiAvailable) {
      alert("Category API not available on backend. Please add /api/category or /api/categories.");
      return;
    }

    const payload = {
      cname: categoryName.trim(),
      AID: AID === "Active" ? 1 : 0,
    };

    try {
      setSaving(true);
      let res;
      // check editId using != null so 0 is allowed if server uses 0 as id
      if (editId != null) {
        res = await tryPut(PATH_VARIANTS, editId, payload);
      } else {
        res = await tryPost(PATH_VARIANTS, payload);
      }

      if (res.ok) {
        const msg = res.data?.message || (editId != null ? "Updated" : "Created");
        alert(msg);
        if (mounted.current) {
          setCategoryName("");
          setAID("Active");
          setEditId(null);
        }
        await fetchCategories();
      } else if (res.notFound) {
        alert(
          "Category API not found (404). Backend must expose /api/category or /api/categories. Check server registration."
        );
        console.warn("Tried variants:", res.tried);
        if (mounted.current) setApiAvailable(false);
      } else {
        const serverErr = res.error?.response?.data?.message || res.error?.message;
        console.error("Save error:", res.error);
        setServerError(serverErr || "Error saving category");
        alert(`Error saving category: ${serverErr || "unknown error"}`);
      }
    } catch (err) {
      console.error("Unexpected save error:", err);
      setServerError(err.message || "Unexpected error saving category");
      alert("Unexpected error saving category. See console for details.");
    } finally {
      if (mounted.current) setSaving(false);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this category?")) return;
    if (!apiAvailable) {
      alert("Category API not available on backend.");
      return;
    }
    setServerError(null);

    try {
      const res = await tryDelete(PATH_VARIANTS, id);
      if (res.ok) {
        alert(res.data?.message || "Deleted");
        fetchCategories();
      } else if (res.notFound) {
        alert("Category API not found (404).");
        if (mounted.current) setApiAvailable(false);
      } else {
        const serverErr = res.error?.response?.data?.message || res.error?.message;
        console.error("Delete error:", res.error);
        setServerError(serverErr || "Error deleting category");
        alert(`Error deleting: ${serverErr || "unknown error"}`);
      }
    } catch (err) {
      console.error("Unexpected delete error:", err);
      setServerError(err.message || "Unexpected error deleting category");
      alert("Unexpected error deleting category. See console.");
    }
  };

  const handleEdit = (cat) => {
    setCategoryName(cat.cname || "");
    setAID(cat.AID === 1 ? "Active" : "Inactive");
    setEditId(cat.CTID ?? cat.id ?? cat.ID ?? null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // pagination helpers
  const effectiveItemsPerPage = itemsPerPage === "all" ? "all" : Number(itemsPerPage) || 10;
  const totalPages = Math.max(
    1,
    Math.ceil(
      filteredCategories.length /
        (effectiveItemsPerPage === "all" ? filteredCategories.length || 1 : effectiveItemsPerPage)
    )
  );
  const startIndex =
    effectiveItemsPerPage === "all" ? 0 : (currentPage - 1) * effectiveItemsPerPage;
  const paginatedCategories =
    effectiveItemsPerPage === "all"
      ? filteredCategories
      : filteredCategories.slice(startIndex, startIndex + effectiveItemsPerPage);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) setCurrentPage(page);
  };

  return (
    <div className="p-4">
      <div className="w-full h-full flex gap-6 mx-auto p-6">
        {/* Form Section */}
        <div className="w-1/3 bg-white shadow rounded-2xl p-6 h-full">
          <h2 className="text-lg font-semibold mb-4">{editId != null ? "Edit Category" : "Add Category"}</h2>
          <hr className="mb-4" />
          <form onSubmit={handleSubmit} className="space-y-4" aria-live="polite">
            <div>
              <label htmlFor="categoryName" className="block mb-1 font-medium">Category Name</label>
              <input
                id="categoryName"
                type="text"
                value={categoryName}
                onChange={(e) => setCategoryName(e.target.value)}
                required
                className="border rounded-lg w-full p-2"
                placeholder="e.g. Men"
                disabled={!apiAvailable || saving}
                aria-disabled={!apiAvailable || saving}
              />
            </div>

            <div>
              <label htmlFor="statusSelect" className="block mb-1 font-medium">Status</label>
              <select
                id="statusSelect"
                value={AID}
                onChange={(e) => setAID(e.target.value)}
                required
                className="border rounded-lg w-full p-2"
                disabled={!apiAvailable || saving}
              >
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
              </select>
            </div>

            <div className="pt-2">
              <Button text={saving ? (editId != null ? "Updating..." : "Saving...") : editId != null ? "Update" : "Submit"} disabled={saving || !apiAvailable} />
            </div>

            {!apiAvailable && (
              <p className="mt-3 text-sm text-red-600">
                Category API not found on backend. Add and register a category route at
                <code className="mx-1">/api/category</code> or <code className="mx-1">/api/categories</code>, then reload.
              </p>
            )}

            {serverError && (
              <div className="mt-3 text-sm text-red-700" role="alert">
                Error: {serverError}
              </div>
            )}
          </form>
        </div>

        {/* Table Section */}
        <div className="w-2/3 bg-white shadow rounded-2xl p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">Categories</h2>
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="border rounded-lg p-2 w-48"
              aria-label="Search categories"
            />
          </div>

          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center">
              <span className="mr-2">Show</span>
              <select
                value={itemsPerPage}
                onChange={(e) => {
                  const val = e.target.value;
                  if (val === "all") setItemsPerPage("all");
                  else setItemsPerPage(Number(val));
                  setCurrentPage(1);
                }}
                className="border rounded-lg p-2"
                aria-label="Items per page"
              >
                <option value={10}>10</option>
                <option value={20}>20</option>
                <option value={50}>50</option>
                <option value={75}>75</option>
                <option value="all">All</option>
              </select>
              <span className="ml-2">entries</span>
            </div>
          </div>

          <table className="w-full border text-left rounded-lg overflow-auto">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-2 border">ID</th>
                <th className="p-2 border">Category</th>
                <th className="p-2 border">Status</th>
                <th className="p-2 border">Action</th>
              </tr>
            </thead>
            <tbody>
              {paginatedCategories.length > 0 ? (
                paginatedCategories.map((cat, idx) => (
                  <tr key={String(cat.CTID ?? cat.id ?? cat.ID ?? idx)} className="hover:bg-gray-50">
                    <td className="p-2 border">{cat.CTID ?? cat.id ?? cat.ID ?? "-"}</td>
                    <td className="p-2 border">{cat.cname}</td>
                    <td className="p-2 border">{cat.AID === 1 ? "Active" : "Inactive"}</td>
                    <td className="p-2 border">
                      <div className="inline-flex gap-2">
                        <button
                          onClick={() => handleEdit(cat)}
                          className="px-3 py-1 border rounded bg-yellow-50 hover:bg-yellow-100 text-sm"
                          disabled={saving}
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleDelete(cat.CTID ?? cat.id ?? cat.ID)}
                          className="px-3 py-1 border rounded bg-red-50 hover:bg-red-100 text-sm text-red-600"
                          disabled={saving}
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4" className="text-center p-4">{loading ? "Loading..." : "No categories found"}</td>
                </tr>
              )}
            </tbody>
          </table>

          <div className="flex justify-between items-center mt-4">
            <div>
              Showing {paginatedCategories.length === 0 ? 0 : startIndex + 1} to{" "}
              {Math.min(
                startIndex +
                  (effectiveItemsPerPage === "all" ? paginatedCategories.length : effectiveItemsPerPage),
                filteredCategories.length
              )}{" "}
              of {filteredCategories.length} entries
            </div>

            <div className="flex space-x-2">
              <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1} className="px-3 py-1 border rounded disabled:opacity-50 hover:bg-gray-100">Previous</button>

              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button key={page} onClick={() => handlePageChange(page)} className={`px-3 py-1 border rounded ${currentPage === page ? "bg-red-500 text-white" : "hover:bg-gray-100"}`}>{page}</button>
              ))}

              <button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages} className="px-3 py-1 border rounded disabled:opacity-50 hover:bg-gray-100">Next</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

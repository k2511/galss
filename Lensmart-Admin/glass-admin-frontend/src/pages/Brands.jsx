// src/pages/Brands.jsx
import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import Button from "../components/Button";
import { FaChevronDown } from "react-icons/fa";

/**
 * Safe API base resolution to avoid "process is not defined" in some bundlers.
 */
const safeProcessEnv =
  typeof process !== "undefined" && process && process.env ? process.env : undefined;
const API_BASE =
  (safeProcessEnv && safeProcessEnv.REACT_APP_API_BASE) ||
  (typeof window !== "undefined" && window.REACT_APP_API_BASE) ||
  "http://localhost:5000/api";

const API_URL = `${API_BASE}/brands`;
const CATEGORY_API_PRIMARY = `${API_BASE}/categories`;
const CATEGORY_API_FALLBACK = `${API_BASE}/category`; // backend may expose either

const ActionDropdown = ({ onEdit, onDelete }) => {
  const [open, setOpen] = useState(false);

  // close on outside click
  useEffect(() => {
    function onDoc(e) {
      if (!e.target.closest(".action-dropdown-root")) setOpen(false);
    }
    if (open) document.addEventListener("click", onDoc);
    return () => document.removeEventListener("click", onDoc);
  }, [open]);

  return (
    <div className="relative inline-block text-left action-dropdown-root">
      <button
        onClick={() => setOpen((s) => !s)}
        className="flex items-center border rounded-md px-3 py-1 text-green-600 border-green-600 hover:bg-green-50"
        type="button"
        aria-expanded={open}
        aria-haspopup="true"
      >
        Info <FaChevronDown className="ml-1 h-4 w-4" />
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
                className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
                type="button"
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
                type="button"
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

const Brands = () => {
  const mounted = useRef(true);
  useEffect(() => {
    mounted.current = true;
    return () => {
      mounted.current = false;
    };
  }, []);

  const [brands, setBrands] = useState([]);
  const [categories, setCategories] = useState([]);
  // selectedCategory:
  // - "" => none
  // - string of numeric id (e.g. "1") => existing category chosen
  // - "__new__" => creating a new category, newCategoryName used
  const [selectedCategory, setSelectedCategory] = useState("");
  const [newCategoryName, setNewCategoryName] = useState("");
  const [bname, setBname] = useState("");
  const [status, setStatus] = useState(1); // 1 active, 0 inactive
  const [editId, setEditId] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [showEntries, setShowEntries] = useState(20);
  const [loadingCategories, setLoadingCategories] = useState(false);
  const [loadingBrands, setLoadingBrands] = useState(false);
  const [saving, setSaving] = useState(false);

  // Helper: get category name by id or return passed name
  const getCategoryName = (idOrName) => {
    if (idOrName === "" || idOrName === undefined || idOrName === null) return "";
    // if idOrName is "__new__", return newCategoryName (not used here)
    const found = categories.find(
      (c) =>
        String(c.CTID) === String(idOrName) ||
        String(c.id) === String(idOrName) ||
        String(c.name) === String(idOrName) ||
        String(c.cname) === String(idOrName)
    );
    if (found) return found.cname ?? found.name ?? "";
    return idOrName;
  };

  // fetch categories (primary, else fallback)
  const fetchCategories = async () => {
    setLoadingCategories(true);
    try {
      let res;
      try {
        res = await axios.get(CATEGORY_API_PRIMARY);
      } catch (err) {
        if (err?.response?.status === 404) {
          res = await axios.get(CATEGORY_API_FALLBACK);
        } else {
          throw err;
        }
      }
      if (mounted.current) setCategories(Array.isArray(res.data) ? res.data : []);
    } catch (err) {
      console.error("Error fetching categories:", err);
      if (mounted.current) setCategories([]);
    } finally {
      if (mounted.current) setLoadingCategories(false);
    }
  };

  const fetchBrands = async () => {
    setLoadingBrands(true);
    try {
      const res = await axios.get(API_URL);
      if (mounted.current) setBrands(Array.isArray(res.data) ? res.data : []);
    } catch (err) {
      console.error("Error fetching brands:", err);
      if (mounted.current) setBrands([]);
    } finally {
      if (mounted.current) setLoadingBrands(false);
    }
  };

  useEffect(() => {
    fetchCategories();
    fetchBrands();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const resetForm = () => {
    setEditId(null);
    setSelectedCategory("");
    setNewCategoryName("");
    setBname("");
    setStatus(1);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // validation
    if (!bname.trim()) return alert("Please enter a brand name.");
    if (!selectedCategory) return alert("Please select a category or choose Add new category.");

    // Build payload:
    // if selectedCategory === "__new__", send cname (backend will create category)
    // else send c_id numeric
    const payload = {
      bname: bname.trim(),
      AID: Number(status),
    };

    if (selectedCategory === "__new__") {
      if (!newCategoryName.trim()) return alert("Please provide new category name.");
      payload.cname = newCategoryName.trim();
    } else {
      const maybeId = Number(selectedCategory);
      if (!Number.isNaN(maybeId)) payload.c_id = maybeId;
      else payload.cname = getCategoryName(selectedCategory);
    }

    try {
      setSaving(true);
      if (editId != null) {
        const res = await axios.put(`${API_URL}/${editId}`, payload);
        alert(res.data?.message || "Brand updated");
      } else {
        const res = await axios.post(API_URL, payload);
        alert(res.data?.message || "Brand added");
      }
      // refresh categories (in case new category created) and brands
      await fetchCategories();
      await fetchBrands();
      resetForm();
    } catch (err) {
      console.error("Error saving brand:", err?.response?.data ?? err.message);
      const serverMsg =
        err?.response?.data?.message || err?.response?.data?.error || err.message;
      alert("Failed: " + serverMsg);
    } finally {
      if (mounted.current) setSaving(false);
    }
  };

  const handleEdit = (brand) => {
    setEditId(brand.BID ?? brand.id ?? brand.ID ?? null);

    // prefer numeric id if present
    const catId = brand.c_id ?? brand.CTID ?? brand.cat_id ?? brand.category_id ?? null;
    if (catId !== null && catId !== undefined && String(catId) !== "0") {
      setSelectedCategory(String(catId));
      setNewCategoryName("");
    } else {
      // fallback to cname; switch to __new__ so user can see and edit category name
      const cname = brand.category_name ?? brand.cname ?? brand.category ?? "";
      setSelectedCategory("__new__");
      setNewCategoryName(cname);
    }

    setBname(brand.bname ?? brand.name ?? "");
    setStatus(Number(brand.AID ?? brand.status ?? 1));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this brand?")) return;
    try {
      const res = await axios.delete(`${API_URL}/${id}`);
      alert(res.data?.message || "Brand deleted");
      if (mounted.current) setBrands((prev) => prev.filter((b) => (b.BID ?? b.id ?? b.ID) !== id));
    } catch (err) {
      console.error("Error deleting brand:", err);
      const serverMsg = err?.response?.data?.message || err?.message;
      alert("Delete failed: " + serverMsg);
    }
  };

  // Filter & paginate
  const filteredBrands = brands.filter((brand) => {
    const q = searchQuery.trim().toLowerCase();
    if (!q) return true;
    const b = (brand.bname ?? brand.name ?? "").toString().toLowerCase();
    const c = (
      brand.category_name ??
      brand.cname ??
      getCategoryName(brand.c_id ?? brand.CTID)
    )
      .toString()
      .toLowerCase();
    return b.includes(q) || c.includes(q) || String(brand.BID ?? brand.id ?? brand.ID).includes(q);
  });

  const displayedBrands =
    showEntries === "All" ? filteredBrands : filteredBrands.slice(0, Number(showEntries));

  const brandSuggestions = Array.from(
    new Set(brands.map((b) => (b.bname ?? b.name ?? "").trim()).filter(Boolean))
  );

  const loading = loadingBrands || loadingCategories;

  return (
    <div className="p-6 bg-gray-100 hide-scrollbar">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-semibold">Brands</h1>
      </div>

      <div className="flex gap-6">
        {/* Form */}
        <div className="w-2/5">
          <div className="bg-white shadow rounded-lg p-6">
            <h2 className="text-lg font-medium mb-4">{editId != null ? "Edit Brand" : "Add Brand"}</h2>

            <form onSubmit={handleSubmit}>
              <div className="space-y-4">
                <div>
                  <label className="block mb-1 font-medium">Category</label>
                  <select
                    value={selectedCategory}
                    onChange={(e) => {
                      const v = e.target.value;
                      setSelectedCategory(v);
                      if (v !== "__new__") setNewCategoryName("");
                    }}
                    required
                    className="border rounded-lg w-full p-2"
                    disabled={loadingCategories}
                  >
                    <option value="">Select Category</option>
                    {categories.length > 0 &&
                      categories.map((c) => (
                        <option
                          key={c.CTID ?? c.id ?? String(c.cname)}
                          value={String(c.CTID ?? c.id)}
                        >
                          {c.cname ?? c.name}
                        </option>
                      ))}
                    <option value="__new__">+ Add new category...</option>
                  </select>

                  {selectedCategory === "__new__" && (
                    <div className="mt-2">
                      <input
                        value={newCategoryName}
                        onChange={(e) => setNewCategoryName(e.target.value)}
                        placeholder="New category name (e.g. Eyewear)"
                        className="w-full border p-2 rounded"
                        required
                        disabled={saving}
                      />
                      <p className="text-xs text-gray-500 mt-1">
                        If category doesn't exist it will be created automatically.
                      </p>
                    </div>
                  )}

                  {categories.length === 0 && !loadingCategories && (
                    <p className="mt-2 text-sm text-red-600">
                      No categories available. Use "Add new category..." to create one inline.
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm mb-1">Brand Name</label>
                  <input
                    list="brand-suggestions"
                    value={bname}
                    onChange={(e) => setBname(e.target.value)}
                    placeholder="Type brand name (e.g. Rayban)"
                    className="w-full border p-2 rounded"
                    required
                    disabled={saving}
                  />
                  <datalist id="brand-suggestions">
                    {brandSuggestions.map((s) => (
                      <option key={s} value={s} />
                    ))}
                  </datalist>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
                  <select
                    value={status}
                    onChange={(e) => setStatus(Number(e.target.value))}
                    className="w-full p-2 border border-gray-300 rounded-md"
                    disabled={saving}
                  >
                    <option value={1}>Active</option>
                    <option value={0}>Inactive</option>
                  </select>
                </div>
              </div>

              <div className="mt-6 flex items-center gap-2">
                <Button text={editId != null ? "Update" : "Submit"} type="submit" disabled={saving} />
                {editId != null && (
                  <button
                    onClick={(ev) => {
                      ev.preventDefault();
                      resetForm();
                    }}
                    type="button"
                    className="ml-2 px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50"
                    disabled={saving}
                  >
                    Cancel
                  </button>
                )}
                {saving && <span className="ml-2 text-sm text-gray-600">Saving...</span>}
              </div>
            </form>
          </div>
        </div>

        {/* Table */}
        <div className="w-3/5 bg-white shadow rounded-lg p-6">
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center space-x-2">
              <select
                value={showEntries}
                onChange={(e) => setShowEntries(e.target.value === "All" ? "All" : Number(e.target.value))}
                className="p-1 border border-gray-300 rounded-md text-sm"
              >
                <option value={10}>10</option>
                <option value={20}>20</option>
                <option value={50}>50</option>
                <option value={75}>75</option>
                <option value="All">All</option>
              </select>
              <span className="text-sm text-gray-600">Entries</span>
            </div>

            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-600">Search:</span>
              <input
                type="text"
                placeholder="Search by brand or category..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="p-1 border border-gray-300 rounded-md text-sm"
              />
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Brand</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
                </tr>
              </thead>

              <tbody className="bg-white divide-y divide-gray-200">
                {loading ? (
                  <tr>
                    <td colSpan="5" className="px-6 py-4 text-center text-gray-500">Loading...</td>
                  </tr>
                ) : displayedBrands.length === 0 ? (
                  <tr>
                    <td colSpan="5" className="px-6 py-4 text-center text-gray-500">No brands found</td>
                  </tr>
                ) : (
                  displayedBrands.map((brand) => {
                    const id = brand.BID ?? brand.id ?? brand.ID ?? "";
                    const cname = brand.category_name ?? brand.cname ?? getCategoryName(brand.c_id ?? brand.CTID) ?? "";
                    return (
                      <tr key={String(id) || `${brand.bname}-${Math.random()}`}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{id}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{cname}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{brand.bname ?? brand.name}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm">
                          <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                            Number(brand.AID ?? brand.status ?? 0) === 1 ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                          }`}>
                            {Number(brand.AID ?? brand.status ?? 0) === 1 ? "Active" : "Inactive"}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                          <ActionDropdown onEdit={() => handleEdit(brand)} onDelete={() => handleDelete(id)} />
                        </td>
                      </tr>
                    );
                  })
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Brands;

// src/pages/BuyingList.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";

/*
  BuyingList component
  - fetches customers, categories, brands, products
  - Add Customer modal with product picker (fills price/category/brand automatically)
  - search, sort, pagination, and robust normalization of backend responses
*/

// Helper: handle different response shapes returning arrays
function normalizeArrayResponse(resData) {
  if (!resData) return [];
  if (Array.isArray(resData)) return resData;
  if (Array.isArray(resData.rows)) return resData.rows;
  if (Array.isArray(resData.data)) return resData.data;
  if (Array.isArray(resData.products)) return resData.products;
  if (Array.isArray(resData.list)) return resData.list;
  for (const k of Object.keys(resData)) {
    if (Array.isArray(resData[k])) return resData[k];
  }
  return [];
}

// Normalize product fields from many possible shapes
function normalizeProduct(p) {
  return {
    id: p.id ?? p.ID ?? p.pid ?? p.product_id ?? p.PID ?? null,
    name: p.name ?? p.pname ?? p.product_name ?? "",
    price: p.price ?? p.sell_price ?? p.mrp ?? p.tprice ?? 0,
    category_id: p.category_id ?? p.cat_id ?? p.c_id ?? p.category ?? null,
    brand_id: p.brand_id ?? p.br_id ?? p.BID ?? p.brand ?? null,
    image: p.image ?? p.up_img ?? p.img ?? p.photo ?? p.thumbnail ?? "",
    raw: p,
  };
}

const API_BASE =
  (typeof process !== "undefined" && process.env && process.env.REACT_APP_API_BASE) ||
  (typeof window !== "undefined" && window.REACT_APP_API_BASE) ||
  "http://localhost:5000";

const endpoints = {
  customers: `${API_BASE}/api/buyingcust`,
  categories: `${API_BASE}/api/categories`,
  brands: `${API_BASE}/api/brands`,
  products: `${API_BASE}/api/products`,
};

const ActionDropdown = ({ onEdit }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative inline-block text-left">
      <button
        type="button"
        onClick={() => setOpen(!open)}
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
              <button
                onClick={() => {
                  setOpen(false);
                  onEdit();
                }}
                className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
                type="button"
              >
                Send Key
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

const BuyingList = () => {
  // data
  const [customers, setCustomers] = useState([]);
  const [filteredCustomers, setFilteredCustomers] = useState([]);
  const [categories, setCategories] = useState([]);
  const [brands, setBrands] = useState([]);
  const [products, setProducts] = useState([]);

  // ui state
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [showProductPicker, setShowProductPicker] = useState(false);

  // table / controls
  const [entries, setEntries] = useState(10); // number or "all"
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortConfig, setSortConfig] = useState({ key: null, direction: "ascending" });

  // form
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    city: "",
    product_id: "",
    pname: "",
    tprice: "",
    category_id: "",
    brand_id: "",
    status: "Active",
    product_image: "",
  });

  useEffect(() => {
    let mounted = true;
    const fetchAll = async () => {
      setLoading(true);
      try {
        const [custRes, catRes, brandRes, prodRes] = await Promise.allSettled([
          axios.get(endpoints.customers),
          axios.get(endpoints.categories),
          axios.get(endpoints.brands),
          axios.get(endpoints.products),
        ]);

        // customers
        if (custRes.status === "fulfilled") {
          const custs = normalizeArrayResponse(custRes.value.data);
          if (mounted) {
            setCustomers(custs);
            setFilteredCustomers(custs);
          }
        } else {
          console.warn("failed to fetch customers:", custRes.reason);
          if (mounted) {
            setCustomers([]);
            setFilteredCustomers([]);
          }
        }

        // categories
        if (catRes.status === "fulfilled") {
          const cats = normalizeArrayResponse(catRes.value.data);
          if (mounted) setCategories(cats);
        } else {
          console.warn("failed to fetch categories:", catRes.reason);
          if (mounted) setCategories([]);
        }

        // brands
        if (brandRes.status === "fulfilled") {
          const rawBrands = normalizeArrayResponse(brandRes.value.data);
          const mappedBrands = rawBrands.map((b) => ({ id: b.id ?? b.BID ?? b.ID ?? null, bname: b.bname ?? b.name ?? b.brand_name ?? "", raw: b }));
          if (mounted) setBrands(mappedBrands);
        } else {
          console.warn("failed to fetch brands:", brandRes.reason);
          if (mounted) setBrands([]);
        }

        // products
        if (prodRes.status === "fulfilled") {
          const rawProds = normalizeArrayResponse(prodRes.value.data);
          const mappedProds = rawProds.map(normalizeProduct);
          if (mounted) setProducts(mappedProds);
        } else {
          console.warn("failed to fetch products:", prodRes.reason);
          if (mounted) setProducts([]);
        }
      } catch (err) {
        console.error("fetchAll error:", err);
        if (mounted) {
          setCustomers([]);
          setFilteredCustomers([]);
          setCategories([]);
          setBrands([]);
          setProducts([]);
        }
      } finally {
        if (mounted) setLoading(false);
      }
    };

    fetchAll();
    return () => {
      mounted = false;
    };
  }, []);

  // search
  useEffect(() => {
    if (!searchTerm) {
      setFilteredCustomers(customers);
      setCurrentPage(1);
      return;
    }
    const q = searchTerm.toLowerCase();
    const filtered = customers.filter((c) =>
      Object.values(c).some((v) => String(v ?? "").toLowerCase().includes(q))
    );
    setFilteredCustomers(filtered);
    setCurrentPage(1);
  }, [searchTerm, customers]);

  // pagination helpers (support "all")
  const effectiveEntries = entries === "all" ? (filteredCustomers.length || 1) : Number(entries || 10);
  const totalPages = Math.max(1, Math.ceil(filteredCustomers.length / effectiveEntries));
  const indexOfLastItem = currentPage * effectiveEntries;
  const indexOfFirstItem = indexOfLastItem - effectiveEntries;
  const currentItems = filteredCustomers.slice(indexOfFirstItem, indexOfLastItem);

  // sorting
  const handleSort = (key) => {
    let direction = "ascending";
    if (sortConfig.key === key && sortConfig.direction === "ascending") direction = "descending";
    setSortConfig({ key, direction });

    const sorted = [...filteredCustomers].sort((a, b) => {
      const A = a[key] ?? "";
      const B = b[key] ?? "";
      if (!isNaN(Number(A)) && !isNaN(Number(B))) {
        return direction === "ascending" ? Number(A) - Number(B) : Number(B) - Number(A);
      }
      return direction === "ascending" ? String(A).localeCompare(String(B)) : String(B).localeCompare(String(A));
    });
    setFilteredCustomers(sorted);
    setCurrentPage(1);
  };

  const getSortIndicator = (key) => (sortConfig.key === key ? (sortConfig.direction === "ascending" ? "↑" : "↓") : null);

  // product pick (from picker UI)
  const pickProduct = (product) => {
    setFormData((prev) => ({
      ...prev,
      product_id: product.id,
      pname: product.name,
      tprice: product.price,
      category_id: product.category_id,
      brand_id: product.brand_id,
      product_image: product.image,
    }));
    setShowProductPicker(false);
  };

  // handle inputs (product_id from select will autofill)
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "product_id") {
      const sel = products.find((p) => String(p.id) === String(value));
      if (sel) {
        setFormData((prev) => ({
          ...prev,
          product_id: sel.id,
          pname: sel.name,
          tprice: sel.price,
          category_id: sel.category_id,
          brand_id: sel.brand_id,
          product_image: sel.image,
        }));
        return;
      }
    }
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // submit create customer
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.product_id) return alert("Please select a product.");
    if (!formData.name?.trim()) return alert("Please enter customer name.");

    const payload = {
      name: formData.name,
      email: formData.email,
      mobile: formData.mobile,
      city: formData.city,
      product_id: formData.product_id,
      pname: formData.pname,
      tprice: formData.tprice,
      category_id: formData.category_id,
      brand_id: formData.brand_id,
      status: formData.status,
    };

    try {
      const res = await axios.post(endpoints.customers, payload);
      // backend may return created object or message; prefer returned data
      const created = res.data && typeof res.data === "object" ? res.data : payload;
      setCustomers((p) => [created, ...p]);
      setFilteredCustomers((p) => [created, ...p]);
      setFormData({
        name: "",
        email: "",
        mobile: "",
        city: "",
        product_id: "",
        pname: "",
        tprice: "",
        category_id: "",
        brand_id: "",
        status: "Active",
        product_image: "",
      });
      setShowForm(false);
      alert("Customer added");
    } catch (err) {
      console.error("create buyingcust failed:", err);
      if (err.response && err.response.status === 404) {
        alert("Endpoint not found (404). Check backend route /api/buyingcust.");
      } else {
        alert("Failed to add customer. See console for details.");
      }
    }
  };

  return (
    <div className="p-6 min-h-screen bg-gray-50">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Buying Customers</h1>

        <div className="flex items-center gap-4">
          <button onClick={() => setShowForm(true)} className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700">+ Add Customer</button>

          <div className="flex items-center gap-2">
            <label htmlFor="search" className="text-sm font-medium text-gray-700">Search</label>
            <input id="search" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="border px-3 py-2 rounded-md text-sm" placeholder="Search customers..." />
          </div>
        </div>
      </div>

      {loading ? (
        <div className="text-center py-8">Loading...</div>
      ) : (
        <div className="bg-white rounded shadow overflow-hidden">
          <div className="p-4 border-b flex items-center justify-between">
            <div className="flex items-center gap-3">
              <label className="text-sm text-gray-700">Show</label>
              <select
                value={entries}
                onChange={(e) => {
                  const v = e.target.value;
                  if (v === "all") {
                    setEntries("all");
                    setCurrentPage(1);
                  } else {
                    setEntries(Number(v));
                    setCurrentPage(1);
                  }
                }}
                className="border rounded px-2 py-1 text-sm"
              >
                <option value={10}>10</option>
                <option value={20}>20</option>
                <option value={50}>50</option>
                <option value={75}>75</option>
                <option value="all">All</option>
              </select>
              <span className="text-sm text-gray-600">entries</span>
            </div>

            <div className="text-sm text-gray-600">
              Showing {filteredCustomers.length ? indexOfFirstItem + 1 : 0} to {Math.min(indexOfLastItem, filteredCustomers.length)} of {filteredCustomers.length}
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead className="bg-gray-100 text-gray-700">
                <tr>
                  {[
                    ["TID", "ID"],
                    ["txnid", "Txnid"],
                    ["pname", "Product"],
                    ["tprice", "Amount"],
                    ["name", "Name"],
                    ["email", "Email"],
                    ["mobile", "Mobile"],
                    ["city", "City"],
                    ["cdate", "Date"],
                  ].map(([k, label]) => (
                    <th key={k} onClick={() => handleSort(k)} className="px-4 py-2 text-left cursor-pointer">{label} {getSortIndicator(k)}</th>
                  ))}
                  <th className="px-4 py-2">Action</th>
                </tr>
              </thead>
              <tbody>
                {currentItems.length > 0 ? currentItems.map((c) => (
                  <tr key={c.TID ?? c.id ?? c.txnid ?? Math.random()} className="border-b hover:bg-gray-50">
                    <td className="px-4 py-3">{c.TID ?? c.id ?? "-"}</td>
                    <td className="px-4 py-3">{c.txnid ?? "-"}</td>
                    <td className="px-4 py-3">{c.pname ?? c.product_name ?? "-"}</td>
                    <td className="px-4 py-3">{c.tprice ?? "-"}</td>
                    <td className="px-4 py-3">{c.name ?? "-"}</td>
                    <td className="px-4 py-3">{c.email ?? "-"}</td>
                    <td className="px-4 py-3">{c.mobile ?? "-"}</td>
                    <td className="px-4 py-3">{c.city ?? "-"}</td>
                    <td className="px-4 py-3">{c.cdate ? new Date(c.cdate).toLocaleString() : "-"}</td>
                    <td className="px-4 py-3"><ActionDropdown onEdit={() => alert("Send key to " + (c.email || c.mobile || c.name))} /></td>
                  </tr>
                )) : (
                  <tr><td colSpan="10" className="text-center py-6">No customers found</td></tr>
                )}
              </tbody>
            </table>
          </div>

          <div className="p-3 flex items-center justify-between">
            <div className="text-sm text-gray-600">Page {currentPage} of {totalPages}</div>
            <div className="space-x-2">
              <button onClick={() => setCurrentPage((p) => Math.max(1, p - 1))} disabled={currentPage === 1} className="px-3 py-1 border rounded disabled:opacity-50">Previous</button>
              <button onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))} disabled={currentPage === totalPages} className="px-3 py-1 border rounded disabled:opacity-50">Next</button>
            </div>
          </div>
        </div>
      )}

      {/* Modal */}
      {showForm && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-20">
          {/* mild overlay — click to close */}
          <div className="absolute inset-0 bg-black opacity-20" onClick={() => setShowForm(false)} />
          <div className="relative bg-white rounded-lg shadow-lg w-full max-w-2xl z-10 p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold">Add Customer</h2>
              <button onClick={() => setShowForm(false)} className="text-gray-500">&times;</button>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-2 gap-3">
                <input name="name" value={formData.name} onChange={handleInputChange} required placeholder="Customer name" className="border rounded px-3 py-2" />
                <input name="email" value={formData.email} onChange={handleInputChange} placeholder="Email" className="border rounded px-3 py-2" />
                <input name="mobile" value={formData.mobile} onChange={handleInputChange} placeholder="Mobile" className="border rounded px-3 py-2" />
                <input name="city" value={formData.city} onChange={handleInputChange} placeholder="City" className="border rounded px-3 py-2" />

                <div>
                  <label className="text-xs text-gray-600">Product (or use picker)</label>
                  <div className="flex gap-2">
                    <select name="product_id" value={formData.product_id} onChange={handleInputChange} className="border rounded px-3 py-2 w-full" required>
                      <option value="">Select product...</option>
                      {products.map((p) => <option key={p.id} value={p.id}>{p.name}{p.price ? ` - ${p.price}` : ""}</option>)}
                    </select>
                    <button type="button" onClick={() => setShowProductPicker((s) => !s)} className="px-3 py-2 border rounded text-sm">Browse</button>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-20 h-20 bg-gray-100 rounded flex items-center justify-center overflow-hidden border">
                    {formData.product_image ? <img src={String(formData.product_image).startsWith("http") ? formData.product_image : `${API_BASE}/uploads/${formData.product_image}`} alt={formData.pname} className="object-contain w-full h-full" /> : <div className="text-xs text-gray-500 p-2">No image</div>}
                  </div>
                  <div>
                    <div className="text-sm font-medium">{formData.pname || "-"}</div>
                    <div className="text-lg font-semibold text-gray-800">{formData.tprice || "-"}</div>
                  </div>
                </div>

                <select name="category_id" value={formData.category_id} onChange={handleInputChange} className="border rounded px-3 py-2" disabled>
                  <option value="">Category</option>
                  {categories.map((c) => <option key={c.id ?? c.CTID} value={c.id ?? c.CTID}>{c.name ?? c.cname}</option>)}
                </select>

                <select name="brand_id" value={formData.brand_id} onChange={handleInputChange} className="border rounded px-3 py-2" disabled>
                  <option value="">Brand</option>
                  {brands.map((b) => <option key={b.id ?? b.BID} value={b.id ?? b.BID}>{b.bname ?? b.name}</option>)}
                </select>

                <select name="status" value={formData.status} onChange={handleInputChange} className="border rounded px-3 py-2">
                  <option value="Active">Active</option>
                  <option value="Inactive">Inactive</option>
                </select>
              </div>

              <div className="mt-4 flex justify-end gap-3">
                <button type="button" onClick={() => setShowForm(false)} className="px-4 py-2 border rounded">Cancel</button>
                <button type="submit" className="px-4 py-2 bg-green-600 text-white rounded">Save</button>
              </div>
            </form>

            {/* product picker */}
            {showProductPicker && (
              <div className="mt-6">
                <h3 className="text-sm font-semibold mb-2">Pick a product</h3>
                <div className="grid grid-cols-3 gap-3 max-h-64 overflow-auto">
                  {products.length === 0 ? <div className="text-sm text-gray-500">No products</div> :
                    products.map((p) => (
                      <button key={p.id} type="button" onClick={() => pickProduct(p)} className="flex items-start gap-3 p-2 border rounded hover:shadow-sm text-left">
                        <div className="w-16 h-16 bg-gray-100 flex items-center justify-center overflow-hidden border rounded">
                          {p.image ? <img src={String(p.image).startsWith("http") ? p.image : `${API_BASE}/uploads/${p.image}`} alt={p.name} className="object-contain w-full h-full" /> : <div className="text-xs text-gray-500 p-2">No image</div>}
                        </div>
                        <div className="flex-1">
                          <div className="font-medium text-sm">{p.name}</div>
                          <div className="text-xs text-gray-500">₹ {p.price ?? "-"}</div>
                        </div>
                      </button>
                    ))
                  }
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default BuyingList;

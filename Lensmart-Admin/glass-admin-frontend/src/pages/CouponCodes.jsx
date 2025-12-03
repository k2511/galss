// src/pages/CouponCodes.jsx
import { useState, useEffect, useRef } from "react";
import axios from "axios";
import ActionDropdown from "../components/ActionDropdown";

/** Safe env helper (tries import.meta.env, window.__ENV, process.env) */
function getEnv(key) {
  try {
    // eslint-disable-next-line no-undef
    if (typeof import.meta !== "undefined" && import.meta.env && import.meta.env[key]) return import.meta.env[key];
  } catch {}
  try {
    if (typeof window !== "undefined" && window.__ENV && window.__ENV[key]) return window.__ENV[key];
  } catch {}
  try {
    if (typeof process !== "undefined" && process.env && process.env[key]) return process.env[key];
  } catch {}
  return undefined;
}

const API_BASE = getEnv("VITE_API_BASE") || getEnv("REACT_APP_API_BASE") || getEnv("API_BASE") || "http://localhost:5000";
const api = axios.create({ baseURL: API_BASE, timeout: 10000 });

export default function CouponCodes() {
  const [coupons, setCoupons] = useState([]);
  const [products, setProducts] = useState([]);
  const [formData, setFormData] = useState({
    PID: "",
    pname: "",
    cou_code: "",
    discount_value: "",
    discount_type: "percent",
    expires_at: "",
    status: "Active",
  });
  const [editingId, setEditingId] = useState(null);
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState(null);
  const isMountedRef = useRef(true);

  useEffect(() => {
    isMountedRef.current = true;
    fetchCoupons();
    fetchProducts();
    return () => { isMountedRef.current = false; };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function fetchCoupons() {
    setLoading(true); setError(null);
    try {
      const res = await api.get("/api/coupons");
      const data = Array.isArray(res.data)
        ? res.data.map((c) => ({
            ...c,
            // normalize status for UI
            status: c.status === 1 || c.status === "1" || c.status === "Active" ? "Active" : "Inactive",
            // normalize discount_value field presence
            discount_value: c.discount_value ?? c.dis_amt ?? c.dis ?? 0,
            code: c.code ?? c.cou_code ?? "",
          }))
        : [];
      if (isMountedRef.current) setCoupons(data);
    } catch (err) {
      console.error("fetchCoupons error:", err);
      if (isMountedRef.current) setError("Failed to load coupons");
    } finally {
      if (isMountedRef.current) setLoading(false);
    }
  }

  async function fetchProducts() {
    setError(null);
    try {
      const res = await api.get("/api/products");
      const mapped = Array.isArray(res.data)
        ? res.data.map((p) => {
            const idVal = p.PID ?? p.id ?? p.ID ?? p.product_id ?? p.productId;
            const nameVal = p.pname ?? p.name ?? p.title ?? p.product_name;
            return { PID: idVal !== undefined && idVal !== null ? String(idVal) : "", pname: nameVal ?? "Unnamed product" };
          })
        : [];
      if (isMountedRef.current) setProducts(mapped);
    } catch (err) {
      console.error("fetchProducts error:", err);
      if (isMountedRef.current) setError("Failed to load products");
    }
  }

  const validateForm = () => {
    if (!formData.PID) return "Please select a product.";
    const codeVal = (formData.cou_code ?? "").toString().trim();
    if (!codeVal) return "Please enter coupon code.";
    if (formData.discount_value === "" || formData.discount_value === null) return "Please enter discount value.";
    const dv = Number(formData.discount_value);
    if (!Number.isFinite(dv) || dv < 0) return "Discount value must be a non-negative number.";
    if (!["percent", "fixed"].includes(formData.discount_type)) return "Invalid discount type.";
    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    const v = validateForm();
    if (v) { setError(v); return; }

    setSaving(true);
    try {
      // canonical payload expected by backend
      const payload = {
        PID: formData.PID || null,
        pname: formData.pname || null,
        code: (formData.cou_code ?? "").toString().trim(),            // backend expects 'code'
        discount_type: formData.discount_type,                       // 'percent'|'flat'
        discount_value: Number(formData.discount_value),             // numeric
        expires_at: formData.expires_at ? formData.expires_at : null,
        status: formData.status === "Active" ? 1 : 0,                // numeric 1/0 in DB
      };

      console.log('ddd', payload)
      if (editingId) {
        await api.put(`/api/coupons/${editingId}`, payload);
      } else {
        await api.post("/api/coupons", payload);
      }

      await fetchCoupons();
      setFormData({ PID: "", pname: "", cou_code: "", discount_value: "", discount_type: "percent", expires_at: "", status: "Active" });
      setEditingId(null);
    } catch (err) {
      console.error("handleSubmit error:", err);
      setError(err?.response?.data?.message || "Failed to save coupon");
    } finally {
      if (isMountedRef.current) setSaving(false);
    }
  };

  const handleEdit = (coupon) => {
    const pid = coupon.PID ?? coupon.id ?? coupon.PID ?? "";
    const pname = coupon.pname ?? coupon.name ?? "";
    setFormData({
      PID: pid !== undefined && pid !== null ? String(pid) : "",
      pname: pname ?? "",
      cou_code: coupon.code ?? coupon.cou_code ?? "",
      discount_value: coupon.discount_value ?? coupon.dis_amt ?? coupon.dis ?? "",
      discount_type: (coupon.discount_type ?? "percent"),
      expires_at: coupon.expires_at ?? coupon.expires_at ?? "",
      status: coupon.status === 1 || coupon.status === "1" ? "Active" : coupon.status ?? "Active",
    });
    setEditingId(coupon.cc_id ?? coupon.id ?? null);
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this coupon?")) return;
    try {
      await api.delete(`/api/coupons/${id}`);
      await fetchCoupons();
    } catch (err) {
      console.error("handleDelete error:", err);
      setError("Failed to delete coupon");
    }
  };

  const handleProductSelect = (e) => {
    const val = String(e.target.value);
    const selected = products.find((p) => p.PID === val);
    setFormData((prev) => ({ ...prev, PID: val, pname: selected ? selected.pname : prev.pname }));
  };

  return (
    <div className="flex p-6 gap-6">
      {/* Left form */}
      <div className="w-1/3 bg-white shadow rounded p-5">
        <h2 className="text-lg font-bold mb-4">{editingId ? "Edit Coupon" : "Add Coupon"}</h2>

        {error && <div className="mb-3 text-sm text-red-700">{error}</div>}

        <form onSubmit={handleSubmit} className="space-y-3">
          <label className="block text-sm font-medium">Product</label>
          <select value={formData.PID} onChange={handleProductSelect} className="border border-gray-200 w-full p-2 rounded">
            <option value="">-- Select Product --</option>
            {products.map((p) => <option key={p.PID} value={p.PID}>{p.pname} (ID: {p.PID})</option>)}
          </select>

          <label className="block text-sm font-medium">Coupon Code</label>
          <input type="text" placeholder="Coupon Code" value={formData.cou_code} onChange={(e) => setFormData({ ...formData, cou_code: e.target.value })} className="border border-gray-200 w-full p-2 rounded" />

          <label className="block text-sm font-medium">Discount Type</label>
          <select value={formData.discount_type} onChange={(e) => setFormData({ ...formData, discount_type: e.target.value })} className="border border-gray-200 w-full p-2 rounded">
            <option value="percent">Percent (%)</option>
            <option value="fixed">Flat (amount)</option>
          </select>

          <label className="block text-sm font-medium">Discount Value</label>
          <input type="number" placeholder="Discount value" value={formData.discount_value} onChange={(e) => setFormData({ ...formData, discount_value: e.target.value })} className="border border-gray-200 w-full p-2 rounded" min="0" />

          <label className="block text-sm font-medium">Expires at (optional)</label>
          <input type="datetime-local" value={formData.expires_at} onChange={(e) => setFormData({ ...formData, expires_at: e.target.value })} className="border border-gray-200 w-full p-2 rounded" />

          <label className="block text-sm font-medium">Status</label>
          <select value={formData.status} onChange={(e) => setFormData({ ...formData, status: e.target.value })} className="border border-gray-200 w-full p-2 rounded">
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
          </select>

          <div className="flex justify-center">
            <button type="submit" disabled={saving} className={`bg-red-500 text-white px-6 py-2 rounded hover:bg-red-600 transition ${saving ? "opacity-60 cursor-not-allowed" : ""}`}>
              {saving ? (editingId ? "Updating..." : "Saving...") : editingId ? "Update" : "Submit"}
            </button>
          </div>
        </form>
      </div>

      {/* Right table */}
      <div className="flex-1 bg-white shadow rounded p-5">
        {loading ? <div>Loading...</div> : (
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-gray-200">
                {/* <th className="p-2">ID</th> */}
                <th className="p-2">PID</th>
                <th className="p2">Product</th>
                <th className="p-2">Coupon</th>
                <th className="p-2">Type</th>
                <th className="p-2">Value</th>
                <th className="p-2">Expires</th>
                <th className="p-2">Status</th>
                <th className="p-2">Action</th>
              </tr>
            </thead>
            <tbody>
              {coupons.length === 0 ? (
                <tr><td colSpan="9" className="p-4 text-center text-gray-500">No coupons found</td></tr>
              ) : (
                coupons.map((c) => (
                  <tr key={c.cc_id ?? c.id} className="border-b border-gray-200 text-center">
                    {/* <td className="p-2">{c.cc_id ?? c.id}</td> */}
                    <td className="p-2">{String(c.product_id ?? "")}</td>
                    <td className="p-2">{c.name ?? "-"}</td>
                    <td className="p-2">{c.code ?? c.cou_code}</td>
                    <td className="p-2">{c.discount_type ?? "-"}</td>
                    <td className="p-2">{c.value}</td>
                    <td className="p-2">{c.expires_at ?? "-"}</td>
                    <td className="p-2"><span className={`px-2 py-1 rounded-full text-sm ${c.status === "Active" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}>{c.status}</span></td>
                    <td className="relative p-2"><ActionDropdown onEdit={() => handleEdit(c)} onDelete={() => handleDelete(c.cc_id ?? c.id)} /></td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

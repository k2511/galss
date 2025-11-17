// src/pages/AddProduct.jsx
import React, { useEffect, useRef, useState, useCallback } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../components/Button";

// Safe API base fallback — does not throw if `process` is undefined in the browser
const API =
  typeof process !== "undefined" && process?.env && process.env.REACT_APP_API_BASE
    ? process.env.REACT_APP_API_BASE
    : (typeof window !== "undefined" && window.REACT_APP_API_BASE) || "http://localhost:5000";

const UPLOADS_BASE = `${API}/uploads/`;

export default function AddProduct() {
  const navigate = useNavigate();
  const { id } = useParams(); // optional product id for edit
  const isEdit = Boolean(id);

  const mountedRef = useRef(true);
  useEffect(() => {
    mountedRef.current = true;
    return () => {
      mountedRef.current = false;
    };
  }, []);
   
  
  // state
  const [gender, setGender] = useState('');
  const [categories, setCategories] = useState([]);
  const [brands, setBrands] = useState([]);
  const [loading, setLoading] = useState(isEdit);
  const [submitting, setSubmitting] = useState(false);
  const [preview, setPreview] = useState(null);
  const previewRef = useRef(null);

  const [form, setForm] = useState({
    pname: "",
    sku: "",
    d_link: "",
    mrp: "",
    sell_price: "",
    e_price: "",
    up_img: null, // File
    cat_id: "",
    br_id: "",
    meta_key: "",
    meta_des: "",
    platform: "",
    features: "",
    m_des: "",
    ins_inst: "",
    status: "1",
    stock: 0,
    gender:''
  });

  // helpers to pick id/name fields from returned objects (handles CTID/cname etc)
  const pickId = (obj) =>
    obj?.CTID ??
    obj?.CT_ID ??
    obj?.id ??
    obj?.ID ??
    obj?.cat_id ??
    obj?.category_id ??
    obj?.BID ??
    obj?.b_id ??
    obj?.brand_id ??
    null;
  const pickName = (obj) =>
    obj?.cname ?? obj?.name ?? obj?.title ?? obj?.brand ?? obj?.bname ?? "";

  const normalizeList = (arr = []) =>
    arr.map((item) => {
      const id = pickId(item) ?? (item && (item.id ?? item.ID ?? item.BID ?? item.cat_id)) ?? "";
      const name = pickName(item) || String(item?.name ?? item?.cname ?? item?.bname ?? "");
      return { id: String(id), name, raw: item };
    });

  // fetch categories & brands
  const fetchCategories = useCallback(async () => {
    try {
      const res = await axios.get(`${API}/api/categories`).catch(async (err) => {
        if (err?.response?.status === 404) return axios.get(`${API}/api/category`);
        throw err;
      });
      if (mountedRef.current && Array.isArray(res?.data)) {
        setCategories(normalizeList(res.data));
      }
    } catch (err) {
      console.error("Failed to load categories:", err);
    }
  }, []);

  const fetchBrands = useCallback(async () => {
    try {
      const res = await axios.get(`${API}/api/brands`).catch(async (err) => {
        if (err?.response?.status === 404) return axios.get(`${API}/api/brand`);
        throw err;
      });
      if (mountedRef.current && Array.isArray(res?.data)) {
        setBrands(normalizeList(res.data));
      }
    } catch (err) {
      console.error("Failed to load brands:", err);
    }
  }, []);

  useEffect(() => {
    // initial load of categories and brands
    fetchCategories();
    fetchBrands();
  }, [fetchCategories, fetchBrands]);

  // load product when editing
  useEffect(() => {
    let didCancel = false;
    if (!isEdit) return undefined;

    (async () => {
      setLoading(true);
      try {
        const res = await axios.get(`${API}/api/products/${id}`);
        const product = res.data || {};
        // console.log('product', product)
        // product might use different field names — handle common ones
        const categoryId = product.category_id ?? product.cat_id ?? product.categoryId ?? product.category ?? null;
        const brandId = product.brand_id ?? product.br_id ?? product.brandId ?? product.brand ?? null;
        const productImageName = product.image ?? product.img ?? product.image_name ?? null;

        const mapped = {
          pname: product.name ?? product.pname ?? "",
          sku: product.sku ?? product.SKU ?? "",
          d_link: product.d_link ?? product.download_link ?? "",
          mrp: product.mrp ?? "",
          sell_price: product.sell_price ??  "",
          e_price: product.e_price ?? product.ePrice ?? "",
          up_img: null,
          cat_id: categoryId ? String(categoryId) : "",
          br_id: brandId ? String(brandId) : "",
          meta_key: product.meta_key ?? product.metaKey ?? "",
          meta_des: product.meta_des ?? product.metaDes ?? "",
          platform: product.platform ?? "",
          features: product.features ?? "",
          m_des: product.description ?? product.m_des ?? "",
          ins_inst: product.ins_inst ?? product.installation ?? "",
          status: product.status !== undefined && product.status !== null ? String(product.status) : "1",
          stock: product.stock ?? 0,
          gender: product.gender, 
        };

        if (didCancel) return;
        setForm(mapped);

        // set preview to existing uploaded image url when editing
        if (productImageName) {
          const url = `${UPLOADS_BASE}${productImageName}`;
          setPreview(url);
          previewRef.current = url;
        } else {
          setPreview(null);
        }
      } catch (err) {
        console.error("Failed to load product:", err);
        alert("Could not load product for editing.");
      } finally {
        if (!didCancel) setLoading(false);
      }
    })();

    return () => {
      didCancel = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id, isEdit]);

  // cleanup blob url on unmount
  useEffect(() => {
    return () => {
      try {
        if (previewRef.current && previewRef.current.startsWith("blob:")) {
          URL.revokeObjectURL(previewRef.current);
        }
      } catch (e) {
        // ignore
      }
    };
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((p) => ({ ...p, [name]: value }));
  };

  const handleFile = (e) => {
    const file = e.target.files?.[0] || null;
    try {
      if (previewRef.current && previewRef.current.startsWith("blob:")) {
        URL.revokeObjectURL(previewRef.current);
      }
    } catch (err) {
      // ignore
    }
    setForm((p) => ({ ...p, up_img: file }));
    const blobUrl = file ? URL.createObjectURL(file) : null;
    previewRef.current = blobUrl;
    setPreview(blobUrl);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    // basic validation
    if (!form.pname || !form.pname.trim()) {
      alert("Product name is required.");
      setSubmitting(false);
      return;
    }
    if (!form.cat_id) {
      alert("Please select a category.");
      setSubmitting(false);
      return;
    }
    if (!form.br_id) {
      alert("Please select a brand.");
      setSubmitting(false);
      return;
    }

    try {
      const data = new FormData();
        // console.log('form', form)
      // name & sku
      data.append("name", (form.pname || "").trim());
      data.append("sku", (form.sku && String(form.sku).trim()) || `SKU-${Date.now()}`);

      // Append both variants for backend compatibility:
      data.append("category_id", form.cat_id);
      data.append("cat_id", form.cat_id);
      data.append("brand_id", form.br_id);
      data.append("br_id", form.br_id);

      // price fields — ensure numbers where applicable
      const priceVal = form.sell_price || "0";
      data.append("sell_price", isNaN(Number(priceVal)) ? "0" : String(Number(priceVal)));
      if (form.e_price) data.append("e_price", isNaN(Number(form.e_price)) ? "" : String(Number(form.e_price)));
      data.append("stock", String(Number(form.stock ?? 0)));

      // description & status
      data.append("description", form.m_des || "");
      data.append("status", String(form.status ?? "1"));
      
      // optional metas
      data.append("meta_key", form.meta_key || "");
      data.append("meta_des", form.meta_des || "");
      data.append("platform", form.platform || "");
      data.append("features", form.features || "");
      data.append("ins_inst", form.ins_inst || "");
      data.append("d_link", form.d_link || null);
      data.append("price", form.mrp || "");
      data.append("gender", form.gender || "");

      // image file
      if (form.up_img) {
        data.append("image", form.up_img);
      }

      if (isEdit) {
        await axios.put(`${API}/api/products/${id}`, data, {
          headers: { "Content-Type": "multipart/form-data" },
        });
        alert("Product updated successfully!");
      } else {
        await axios.post(`${API}/api/products`, data, {
          headers: { "Content-Type": "multipart/form-data" },
        });
        alert("Product added successfully!");
      }

      navigate("/list-product");
    } catch (err) {
      console.error("Save failed:", err);
      const msg = err?.response?.data?.message || err?.message || "Unknown error";
      alert(`Failed to ${isEdit ? "update" : "add"} product: ${msg}`);
    } finally {
      if (mountedRef.current) setSubmitting(false);
    }
  };

  if (loading) {
    return <div className="p-6">Loading product…</div>;
  }

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <div className="flex justify-between items-center py-5">
        <h2 className="text-xl font-semibold mb-4">{isEdit ? "Edit Product" : "Add Product"}</h2>
        <Button text="View All" onClick={() => navigate("/list-product")} />
      </div>

      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm mb-1">Product Name</label>
            <input
              type="text"
              name="pname"
              value={form.pname}
              onChange={handleChange}
              required
              className="w-full border p-2 rounded"
              placeholder="e.g. Lensmart Product Name"
            />
          </div>

          <div>
            <label className="block text-sm mb-1 flex items-center justify-between">
              <span>Category</span>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={fetchCategories}
                  className="text-xs px-2 py-1 border rounded"
                >
                  Refresh
                </button>
                <button
                  type="button"
                  onClick={() => navigate("/add-category")}
                  className="text-xs px-2 py-1 border rounded"
                >
                  Add Category
                </button>
              </div>
            </label>
            <select
              name="cat_id"
              value={form.cat_id}
              onChange={handleChange}
              required
              className="border rounded-lg w-full p-2"
            >
              <option value="">Select Category</option>
              {categories.map((c) => (
                <option key={c.id} value={c.id}>
                  {c.name}
                </option>
              ))}
            </select>

           
          </div>
          <div> 
              <label className="block text-sm mb-1">Select Gender </label>
              <select
                    name="gender"
                    value={form.gender}
                    onChange={handleChange}
                    required
                    className="border rounded-lg w-full p-2"
                  >
                    <option value="">Select Gender</option>
                    <option value="men">Men</option>
                    <option value="women">Women</option>
                    {/* <option value="kids">Kids</option> */}
              </select> </div>
       
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm mb-1 flex items-center justify-between">
              <span>Brand</span>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={fetchBrands}
                  className="text-xs px-2 py-1 border rounded"
                >
                  Refresh
                </button>
                <button
                  type="button"
                  onClick={() => navigate("/add-brand")}
                  className="text-xs px-2 py-1 border rounded"
                >
                  Add Brand
                </button>
              </div>
            </label>
            <select
              name="br_id"
              value={form.br_id}
              onChange={handleChange}
              required
              className="w-full border p-2 rounded"
            >
              <option value="">Select Brand</option>
              {brands.map((b) => (
                <option key={b.id} value={b.id}>
                  {b.name}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm mb-1">SKU</label>
            <input
              type="text"
              name="sku"
              value={form.sku}
              onChange={handleChange}
              className="w-full border p-2 rounded"
              placeholder="SKU (optional)"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm mb-1">MRP</label>
            <input
              type="number"
              name="mrp"
              value={form.mrp}
              onChange={handleChange}
              className="w-full border p-2 rounded"
              placeholder="e.g. 3799"
            />
          </div>
          <div>
            <label className="block text-sm mb-1">Selling Price</label>
            <input
              type="number"
              name="sell_price"
              value={form.sell_price}
              onChange={handleChange}
              className="w-full border p-2 rounded"
              placeholder="e.g. 1339"
            />
          </div>
          <div>
            <label className="block text-sm mb-1">Effective Price (optional)</label>
            <input
              type="text"
              name="e_price"
              value={form.e_price}
              onChange={handleChange}
              className="w-full border p-2 rounded"
              placeholder="e.g. 1499"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm mb-1">Main Image (≥ 800×1000)</label>
          <input
            type="file"
            name="up_img"
            accept="image/*"
            onChange={handleFile}
            className="w-full border p-2 rounded"
          />
          {preview && (
            <div className="mt-3">
              <img src={preview} alt="preview" className="h-28 rounded border object-contain"  />
            </div>
          )}
        </div>

        <div>
          <label className="block text-sm mb-1">Gallery Image </label>
          <input
            type="file"
            name="up_img"
            accept="image/*"
            onChange={handleFile}
            className="w-full border p-2 rounded"
          />
          {preview && (
            <div className="mt-3">
              <img src={preview} alt="preview" className="h-28 rounded border object-contain"  />
            </div>
          )}
        </div>

        <div>
          <label className="block text-sm mb-1">Meta Keywords</label>
          <input
            type="text"
            name="meta_key"
            value={form.meta_key}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            placeholder="comma,separated,keywords"
          />
        </div>

        <div>
          <label className="block text-sm mb-1">Meta Description</label>
          <textarea
            name="meta_des"
            value={form.meta_des}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            rows={2}
            placeholder="Short SEO description"
          />
        </div>

        <div>
          <label className="block text-sm mb-1">Platform</label>
          <input
            type="text"
            name="platform"
            value={form.platform}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            placeholder="LensMart"
          />
        </div>

        <div>
          <label className="block text-sm mb-1">Description</label>
          <textarea
            name="m_des"
            value={form.m_des}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            rows={4}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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

          <div>
            <label className="block text-sm mb-1">Stock</label>
            <input
              type="number"
              name="stock"
              value={form.stock}
              onChange={handleChange}
              className="w-full border p-2 rounded"
              min={0}
            />
          </div>
        </div>

        <div className="flex justify-end gap-3">
          <button
            type="button"
            onClick={() => navigate("/list-product")}
            className="px-4 py-2 bg-gray-200 rounded"
            disabled={submitting}
          >
            Cancel
          </button>
          <button
            type="submit"
            disabled={submitting}
            className="px-4 py-2 bg-red-600 text-white rounded disabled:opacity-50"
          >
            {submitting ? "Saving..." : isEdit ? "Update" : "Submit"}
          </button>
        </div>
      </form>
    </div>
  );
}

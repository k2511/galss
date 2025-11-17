import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

export default function EditUser() {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    state_n: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [loading, setLoading] = useState(true);
  
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    fetchUser();
  }, [id]);

  const fetchUser = async () => {
    try {
      const res = await axios.get(`http://localhost:5000/api/users/${id}`);
      setFormData(res.data);
    } catch (err) {
      console.error("Error fetching user:", err);
      alert("Failed to fetch user data!");
      navigate("/register-user");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.mobile.trim()) {
      newErrors.mobile = "Mobile number is required";
    } else if (!/^\d{10}$/.test(formData.mobile)) {
      newErrors.mobile = "Mobile number must be 10 digits";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.state_n.trim()) {
      newErrors.state_n = "State is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      await axios.put(`http://localhost:5000/api/users/${id}`, formData);
      alert("User updated successfully!");
      navigate("/register-user");
    } catch (err) {
      console.error("Error updating user:", err);
      
      if (err.response && err.response.data && err.response.data.error) {
        alert(`Failed to update user: ${err.response.data.error}`);
      } else {
        alert("Failed to update user!");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="w-full max-w-3xl bg-white shadow-xl rounded-xl p-8 md:p-10">
        <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800">Edit User</h1>
          
          <button
            onClick={() => navigate("/register-user")}
            className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition text-sm md:text-base"
          >
            Back to Users
          </button>
        </div>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="md:col-span-1">
            <label className="block mb-2 text-sm font-medium text-gray-700">Name *</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={`w-full border rounded-lg p-3 focus:outline-red-500 focus:ring-2 ${
                errors.name ? "border-red-500" : "border-gray-300"
              }`}
              required
            />
            {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
          </div>

          <div className="md:col-span-1">
            <label className="block mb-2 text-sm font-medium text-gray-700">Mobile *</label>
            <input
              type="tel"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              className={`w-full border rounded-lg p-3 focus:outline-red-500 focus:ring-2 ${
                errors.mobile ? "border-red-500" : "border-gray-300"
              }`}
              maxLength="10"
              required
            />
            {errors.mobile && <p className="text-red-500 text-xs mt-1">{errors.mobile}</p>}
          </div>

          <div className="md:col-span-1">
            <label className="block mb-2 text-sm font-medium text-gray-700">Email *</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full border rounded-lg p-3 focus:outline-red-500 focus:ring-2 ${
                errors.email ? "border-red-500" : "border-gray-300"
              }`}
              required
            />
            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
          </div>

          <div className="md:col-span-1">
            <label className="block mb-2 text-sm font-medium text-gray-700">State *</label>
            <input
              type="text"
              name="state_n"
              value={formData.state_n}
              onChange={handleChange}
              className={`w-full border rounded-lg p-3 focus:outline-red-500 focus:ring-2 ${
                errors.state_n ? "border-red-500" : "border-gray-300"
              }`}
              required
            />
            {errors.state_n && <p className="text-red-500 text-xs mt-1">{errors.state_n}</p>}
          </div>

          <div className="md:col-span-2 flex justify-center gap-4 pt-4">
            <button
              type="button"
              onClick={() => navigate("/register-user")}
              className="bg-gray-500 text-white px-10 py-3 rounded-lg text-lg font-medium hover:bg-gray-600 transition"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-red-600 text-white px-10 py-3 rounded-lg text-lg font-medium hover:bg-red-700 transition disabled:opacity-50"
            >
              {isSubmitting ? "Updating..." : "Update"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
// src/pages/CreateUser.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function CreateUser() {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    state_n: "",
    password: "",
    confirm_password: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((p) => ({ ...p, [name]: value }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }

    // Mobile validation
    if (!formData.mobile.trim()) {
      newErrors.mobile = "Mobile number is required";
    } else if (!/^\d{10}$/.test(formData.mobile)) {
      newErrors.mobile = "Mobile number must be 10 digits";
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    // State validation
    if (!formData.state_n.trim()) {
      newErrors.state_n = "State is required";
    }

    // Password validation (backend requires password)
    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
    }

    // Confirm password
    if (!formData.confirm_password) {
      newErrors.confirm_password = "Please confirm password";
    } else if (formData.password !== formData.confirm_password) {
      newErrors.confirm_password = "Passwords do not match";
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
      // The backend expects name, email and password (and any other optional fields)
      const payload = {
        name: formData.name,
        mobile: formData.mobile,
        email: formData.email,
        state_n: formData.state_n,
        password: formData.password,
      };

      const res = await axios.post("http://localhost:5000/api/users", payload);

      // If backend returns created user or success message
      alert("User created successfully!");
      setFormData({
        name: "",
        mobile: "",
        email: "",
        state_n: "",
        password: "",
        confirm_password: "",
      });
      navigate("/register-user");
    } catch (err) {
      console.error("Error creating user:", err);

      // Backend uses "message" in response as you reported
      const serverMsg =
        err?.response?.data?.message ||
        err?.response?.data?.error ||
        err?.message ||
        "Failed to create user. Please try again.";

      // Show server message if available
      alert(`Failed to create user: ${serverMsg}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="w-full max-w-3xl bg-white shadow-xl rounded-xl p-8 md:p-10">
        <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800">Create User</h1>

          <button
            onClick={() => navigate("/register-user")}
            className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition text-sm md:text-base"
          >
            View Registered Users
          </button>
        </div>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="md:col-span-1">
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={`w-full border rounded-lg p-3 focus:outline-red-500 focus:ring-2 ${
                errors.name ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="Enter full name"
            />
            {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
          </div>

          <div className="md:col-span-1">
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Mobile <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              className={`w-full border rounded-lg p-3 focus:outline-red-500 focus:ring-2 ${
                errors.mobile ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="Enter 10-digit mobile number"
              maxLength="10"
            />
            {errors.mobile && <p className="text-red-500 text-xs mt-1">{errors.mobile}</p>}
          </div>

          <div className="md:col-span-1">
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full border rounded-lg p-3 focus:outline-red-500 focus:ring-2 ${
                errors.email ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="Enter email address"
            />
            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
          </div>

          <div className="md:col-span-1">
            <label className="block mb-2 text-sm font-medium text-gray-700">
              State <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="state_n"
              value={formData.state_n}
              onChange={handleChange}
              className={`w-full border rounded-lg p-3 focus:outline-red-500 focus:ring-2 ${
                errors.state_n ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="Enter state"
            />
            {errors.state_n && <p className="text-red-500 text-xs mt-1">{errors.state_n}</p>}
          </div>

          {/* Password */}
          <div className="md:col-span-1">
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Password <span className="text-red-500">*</span>
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className={`w-full border rounded-lg p-3 focus:outline-red-500 focus:ring-2 ${
                errors.password ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="At least 8 characters"
            />
            {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
          </div>

          <div className="md:col-span-1">
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Confirm Password <span className="text-red-500">*</span>
            </label>
            <input
              type="password"
              name="confirm_password"
              value={formData.confirm_password}
              onChange={handleChange}
              className={`w-full border rounded-lg p-3 focus:outline-red-500 focus:ring-2 ${
                errors.confirm_password ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="Re-enter password"
            />
            {errors.confirm_password && (
              <p className="text-red-500 text-xs mt-1">{errors.confirm_password}</p>
            )}
          </div>

          <div className="md:col-span-2 flex justify-center pt-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-red-600 text-white px-10 py-3 rounded-lg text-lg font-medium hover:bg-red-700 transition disabled:opacity-50 disabled:cursor-not-allowed min-w-[120px]"
            >
              {isSubmitting ? (
                <div className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Creating...
                </div>
              ) : (
                "Submit"
              )}
            </button>
          </div>

          <div className="md:col-span-2 flex justify-center">
            <button
              type="button"
              onClick={() => navigate("/register-user")}
              className="text-gray-600 hover:text-gray-800 underline text-sm"
            >
              Cancel and go back
            </button>
          </div>
        </form>

        <div className="mt-6 text-sm text-gray-500 text-center">
          <p>Fields marked with <span className="text-red-500">*</span> are required</p>
        </div>
      </div>
    </div>
  );
}

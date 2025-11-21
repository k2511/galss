import React, { useState, createContext, useContext, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, useParams } from "react-router-dom";
import axios from "axios";

// Layout and Pages
import Layout from "./components/Layout";
import Dashboard from "./pages/Dashboard";
import CreateUser from "./pages/CreateUser";
import Reviews from "./pages/Reviews";
import CouponCodes from "./pages/CouponCodes";
import AddProduct from "./pages/AddProduct";
import ListProduct from "./pages/ListProduct";
import Category from "./pages/Category";
import RegisterUser from "./pages/RegisterUser";
import Brands from "./pages/Brands";
import BuyingList from "./pages/BuyingList";
import NewArrival from "./pages/NewArrival";
import Login from "./pages/Login";
import EditUser from "./pages/EditUser";
import ProductType from "./pages/ProductType";
import ProductShape from "./pages/ProductShape";
import PermissionManagement from "./pages/PermissionManagement";

// ==========================
// Auth Context
// ==========================
const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);

// Redirect helper (old edit route)
const RedirectEditProduct = () => {
  const { id } = useParams();
  return <Navigate to={`/add-product/${id}`} replace />;
};

const App = () => {
  const tokenFromStorage = localStorage.getItem("token");
  const userFromStorage = localStorage.getItem("user");

  const [token, setToken] = useState(tokenFromStorage || null);
  const [isAuthenticated, setIsAuthenticated] = useState(Boolean(tokenFromStorage));
  const [user, setUser] = useState(userFromStorage ? JSON.parse(userFromStorage) : null);

  // Axios Auth Setup
  useEffect(() => {
    if (token) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      setIsAuthenticated(true);
    } else {
      delete axios.defaults.headers.common["Authorization"];
      setIsAuthenticated(false);
    }
  }, [token]);

  useEffect(() => {
    const handleStorage = (e) => {
      if (e.key === "token") {
        setToken(e.newValue);
        setIsAuthenticated(Boolean(e.newValue));
        if (e.newValue) {
          axios.defaults.headers.common["Authorization"] = `Bearer ${e.newValue}`;
        } else {
          delete axios.defaults.headers.common["Authorization"];
        }
      }
      if (e.key === "user") {
        setUser(e.newValue ? JSON.parse(e.newValue) : null);
      }
    };
    window.addEventListener("storage", handleStorage);
    return () => window.removeEventListener("storage", handleStorage);
  }, []);

  // ==========================
  // Auth methods
  // ==========================
  const login = (userData, authToken) => {
    setIsAuthenticated(true);
    setUser(userData);
    setToken(authToken || null);
    localStorage.setItem("user", JSON.stringify(userData));
    if (authToken) {
      localStorage.setItem("token", authToken);
      axios.defaults.headers.common["Authorization"] = `Bearer ${authToken}`;
    }
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUser(null);
    setToken(null);
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    delete axios.defaults.headers.common["Authorization"];
  };

  // ==========================
  // Protected Route Component
  // ==========================
  const ProtectedRoute = ({ element, requiredRoles }) => {
    if (!isAuthenticated) return <Navigate to="/login" replace />;

    // Role check (optional)
    if (requiredRoles) {
      const normalize = (r = "") => ("" + r).toLowerCase().replace(/[_-]/g, "");
      const userRoleNorm = normalize(user?.role);
      const roles = Array.isArray(requiredRoles) ? requiredRoles : [requiredRoles];
      const allowed = roles.some((r) => normalize(r) === userRoleNorm);
      if (!allowed) return <Navigate to="/dashboard" replace />;
    }

    return element;
  };

  // ==========================
  // Router Setup
  // ==========================
  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, logout, setIsAuthenticated }}>
      <Router>
        <Routes>
          {/* Public Routes */}
          <Route
            path="/login"
            element={isAuthenticated ? <Navigate to="/dashboard" replace /> : <Login />}
          />

          {/* Protected Routes */}
          <Route
            path="/"
            element={isAuthenticated ? <Layout /> : <Navigate to="/login" replace />}
          >
            <Route index element={<Navigate to="/dashboard" replace />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="create-user" element={<CreateUser />} />
            <Route path="reviews" element={<Reviews />} />
            <Route path="coupon-codes" element={<CouponCodes />} />
            <Route path="add-product" element={<AddProduct />} />
            <Route path="add-product/:id" element={<AddProduct />} />
            <Route path="edit-product/:id" element={<RedirectEditProduct />} />
            <Route path="list-product" element={<ListProduct />} />
            <Route path="category" element={<Category />} />
            <Route path="register-user" element={<RegisterUser />} />
            <Route path="brands" element={<Brands />} />
            <Route path="buying-list" element={<BuyingList />} />
            <Route path="new-arrival" element={<NewArrival />} />
            <Route path="edit-user/:id" element={<EditUser />} />
            <Route path="product-type" element={<ProductType />} />
            <Route path="product-shape" element={<ProductShape />} />

            {/* ✅ Permission Management accessible to all authenticated users */}
            <Route path="permission-management" element={<PermissionManagement />} />

            {/* Catch-All */}
            <Route path="*" element={<Navigate to="/dashboard" replace />} />
          </Route>

          {/* Global fallback */}
          <Route
            path="*"
            element={<Navigate to={isAuthenticated ? "/dashboard" : "/login"} replace />}
          />
        </Routes>
      </Router>
    </AuthContext.Provider>
  );
};

export default App;

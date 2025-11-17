// src/pages/Login.jsx
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../App";
import axios from "axios";
import ReCAPTCHA from "react-google-recaptcha";

const API = "http://localhost:5000";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [captchaToken, setCaptchaToken] = useState(null);
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const navigate = useNavigate();

  const { login } = useAuth();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    if (!captchaToken) {
      setError("Please complete the captcha before logging in.");
      return;
    }
      console.log('frontend login', email, password)
    setSubmitting(true);
    try {
      const res = await axios.post(
        `${API}/api/auth/login`,
        { email, password, captchaToken },
        { withCredentials: false } // set true only if backend sets cookies
      );

      const token = res.data?.token;
      const user = res.data?.user;

      if (token && user) {
        // call context login which will store token & user and set axios header
        login(user, token);
        navigate("/dashboard");
      } else {
        setError("Login failed: invalid server response.");
      }
    } catch (err) {
      // prefer server message
      const msg =
        err?.response?.data?.message ||
        err?.response?.data?.error ||
        err?.message ||
        "Login failed. Please try again.";
      setError(msg);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md shadow w-full space-y-8 bg-white container p-10 border border-gray-200 rounded-2xl">
        <div>
          <div className="flex justify-center">
            <div className="bg-red-500 w-12 h-12 rounded-md flex items-center justify-center mr-2">
              <span className="font-bold text-white text-xl">E</span>
            </div>
          </div>
          <h2 className="mt-6 text-center text-2xl font-extrabold text-gray-900">
            Sign in to your account
          </h2>
        </div>

        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative">
            {error}
          </div>
        )}

        <form className="mt-8 space-y-6" onSubmit={handleLogin}>
          <div className="rounded-md shadow-sm -space-y-px gap-5">
            <div>
              <input
                id="email-address"
                name="email"
                type="email"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-red-500 focus:border-red-500 focus:z-10 sm:text-sm"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={submitting}
              />
            </div>
            <div>
              <input
                id="password"
                name="password"
                type="password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-red-500 focus:border-red-500 focus:z-10 sm:text-sm"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                disabled={submitting}
              />
            </div>
          </div>

          <div className="flex justify-center mt-4">
            <ReCAPTCHA
              sitekey="6LcjsbUrAAAAAALgmKrovT-gJcP_e1yv4MRmD5o1"
              onChange={(token) => setCaptchaToken(token)}
            />
          </div>

          <div>
            <button
              type="submit"
              disabled={!captchaToken || submitting}
              className={`group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white ${
                !captchaToken || submitting ? "bg-gray-400 cursor-not-allowed" : "bg-red-600 hover:bg-red-700"
              }`}
            >
              {submitting ? "Signing in..." : "Sign in"}
            </button>
          </div>

          <div className="text-center text-sm text-gray-600">
            {/* Optional register link */}
            {/* <Link to="/register" className="font-medium text-red-600 hover:text-red-500">Create a new account</Link> */}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;

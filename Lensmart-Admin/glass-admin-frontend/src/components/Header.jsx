import React, { useEffect, useState } from 'react'
import { Menu, Search, User, ChevronDown, LogOut } from "lucide-react";
import { useAuth } from "../App";
import { useNavigate } from 'react-router-dom';

function Header() {

  const [userEmailPrefix, setUserEmailPrefix] = useState("");
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

    useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user")); 
    if (user?.email) {
      const getTextBeforeAt = (str) => {
        if (!str || typeof str !== "string") return "";
        const atIndex = str.indexOf("@");
        const prefix = atIndex === -1 ? str : str.slice(0, atIndex);
        return prefix.charAt(0).toUpperCase() + prefix.slice(1);
      };

      const prefix = getTextBeforeAt(user.email);
      setUserEmailPrefix(prefix);
    }
  }, []); 

  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="flex items-center justify-between h-16 px-4 lg:px-6">
        {/* Hamburger menu */}
        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="text-gray-500 hover:text-gray-700 lg:hidden"
        >
          <Menu className="w-6 h-6" />
        </button>

        <div className="flex-1 flex justify-between items-center">
          {/* Search input */}
          <div className="relative max-w-xs w-full ml-4 hidden md:block">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="w-5 h-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search..."
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 sm:text-sm"
            />
          </div>

          {/* User dropdown */}
          <div className="flex items-center space-x-4">
            <div className="relative group">
              <button className="flex items-center space-x-2 focus:outline-none">
                <div className="h-8 w-8 rounded-full bg-red-500 flex items-center justify-center text-white font-medium">
                  <User className="w-5 h-5" />
                </div>
                <span className="text-sm font-medium text-gray-700 hidden md:block">{userEmailPrefix}</span>
                <ChevronDown className="w-4 h-4 text-gray-500" />
              </button>

              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 opacity-0 invisible group-focus-within:opacity-100 group-focus-within:visible transition-all duration-200 z-10">
                <div className="border-t border-gray-200 my-1"></div>
                <a href="#" className="flex items-center px-4 py-2 text-sm text-red-500 hover:bg-gray-100" onClick={handleLogout}>
                  <LogOut className="w-4 h-4 mr-2" />
                  Sign out
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>

  )
}

export default Header
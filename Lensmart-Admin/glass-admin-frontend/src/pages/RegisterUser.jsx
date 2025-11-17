// src/pages/RegisteredUsers.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const API = "http://localhost:5000";
const USERS_ENDPOINT = `${API}/api/users`;

export default function RegisteredUsers() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [entriesPerPage, setEntriesPerPage] = useState(10);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [openActionId, setOpenActionId] = useState(null);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    fetchUsers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchUsers = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await axios.get(USERS_ENDPOINT);
      // normalize to array
      const data = Array.isArray(res.data) ? res.data : [];
      setUsers(data);
    } catch (err) {
      console.error("Error fetching users:", err);
      setError(err?.response?.data?.message || "Failed to fetch users");
      setUsers([]);
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (idOrCID) => {
    // navigate to your EditUser route (App.jsx expects /edit-user/:id)
    navigate(`/edit-user/${idOrCID}`);
  };

  const handleDelete = async (idOrCID) => {
    if (!window.confirm("Are you sure you want to delete this user?")) return;

    try {
      await axios.delete(`${USERS_ENDPOINT}/${idOrCID}`);
      // refresh list after delete
      await fetchUsers();
      alert("User deleted successfully!");
    } catch (err) {
      console.error("Error deleting user:", err);
      const msg =
        err?.response?.data?.message ||
        err?.response?.data?.error ||
        "Failed to delete user!";
      alert(msg);
    }
  };

  // Utility to get canonical id (backend may use `id` or `CID`)
  const getId = (u) => u?.id ?? u?.CID ?? u?.ID ?? null;

  // Filter users (search limited to common fields for performance)
  const filteredUsers = users.filter((u) => {
    if (!searchTerm) return true;
    const q = searchTerm.toLowerCase();
    const name = (u.name ?? u.username ?? u.fullname ?? "").toString().toLowerCase();
    const mobile = (u.mobile ?? u.phone ?? "").toString().toLowerCase();
    const email = (u.email ?? "").toString().toLowerCase();
    const state = (u.state_n ?? u.state ?? "").toString().toLowerCase();
    const idStr = String(getId(u) ?? "");
    return (
      name.includes(q) ||
      mobile.includes(q) ||
      email.includes(q) ||
      state.includes(q) ||
      idStr.includes(q)
    );
  });

  const totalPages = Math.max(1, Math.ceil(filteredUsers.length / (entriesPerPage === "all" ? filteredUsers.length || 1 : entriesPerPage)));
  const startIndex = (currentPage - 1) * (entriesPerPage === "all" ? filteredUsers.length || 1 : entriesPerPage);
  const visibleUsers = entriesPerPage === "all" ? filteredUsers : filteredUsers.slice(startIndex, startIndex + entriesPerPage);

  const handlePageChange = (page) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
  };

  const toggleActionMenu = (id) => {
    setOpenActionId((prev) => (prev === id ? null : id));
  };

  if (loading) {
    return (
      <div className="p-6">
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-600"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold">Registered Users</h2>

        <div className="flex items-center gap-4">
          <div className="text-sm text-gray-500">
            <span className="text-gray-400">Home</span> &gt; <span className="text-black">Registered Users</span>
          </div>

          <button
            onClick={() => navigate("/create-user")}
            className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition"
          >
            Add User
          </button>
        </div>
      </div>

      {/* Card */}
      <div className="bg-white shadow rounded-lg p-4 overflow-x-auto">
        {/* Controls */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-4 gap-2">
          <div className="flex items-center gap-2 text-sm">
            <span>Show</span>
            <select
              value={entriesPerPage}
              onChange={(e) => {
                const val = e.target.value;
                if (val === "all") {
                  setEntriesPerPage("all");
                } else {
                  setEntriesPerPage(Number(val));
                }
                setCurrentPage(1);
              }}
              className="border rounded-md px-2 py-1 text-sm"
            >
              <option value={10}>10</option>
              <option value={20}>20</option>
              <option value={50}>50</option>
              <option value={75}>75</option>
              <option value="all">All</option>
            </select>
            <span>Entries</span>
          </div>

          <div>
            <input
              type="text"
              placeholder="Search by name, email, mobile, state or id..."
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setCurrentPage(1);
              }}
              className="border rounded-md px-3 py-1 text-sm w-full sm:w-72"
            />
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full border">
            <thead>
              <tr>
                <th className="px-4 py-2 border text-left">No</th>
                <th className="px-4 py-2 border text-left">Name</th>
                <th className="px-4 py-2 border text-left">Mobile</th>
                <th className="px-4 py-2 border text-left">Email</th>
                <th className="px-4 py-2 border text-left">State</th>
                <th className="px-4 py-2 border text-left">Created Date</th>
                <th className="px-4 py-2 border text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {visibleUsers.length > 0 ? (
                visibleUsers.map((u, i) => {
                  const userId = getId(u);
                  return (
                    <tr key={userId ?? i} className="text-sm hover:bg-gray-50 border-b">
                      <td className="px-4 py-2 text-gray-700 border">{startIndex + i + 1}</td>
                      <td className="px-4 py-2 text-gray-700 border">{u.name ?? u.username ?? "-"}</td>
                      <td className="px-4 py-2 text-gray-700 border">{u.mobile ?? u.phone ?? "-"}</td>
                      <td className="px-4 py-2 text-gray-700 border truncate max-w-xs">{u.email ?? "-"}</td>
                      <td className="px-4 py-2 text-gray-700 border">{u.state_n ?? u.state ?? "-"}</td>
                      <td className="px-4 py-2 text-gray-700 border">{u.cdate ? u.cdate.split(" ")[0] : "-"}</td>
                      <td className="px-4 py-2 text-gray-700 border relative">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleActionMenu(userId);
                          }}
                          className="flex items-center text-green-700 hover:text-green-800 px-3 py-1 rounded bg-green-50 hover:bg-green-100 border border-green-200"
                        >
                          <span>Info</span>
                          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                          </svg>
                        </button>

                        {openActionId === userId && (
                          <div className="absolute right-0 mt-2 w-28 bg-white border rounded shadow-lg z-10">
                            <button
                              onClick={() => handleEdit(userId)}
                              className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50"
                            >
                              Edit
                            </button>
                            <button
                              onClick={() => handleDelete(userId)}
                              className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50"
                            >
                              Delete
                            </button>
                          </div>
                        )}
                      </td>
                    </tr>
                  );
                })
              ) : (
                <tr>
                  <td colSpan="7" className="text-center py-4 text-gray-500">
                    {searchTerm ? "No users match your search" : "No users found"}
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Footer */}
        <div className="flex flex-col sm:flex-row justify-between items-center mt-3 text-sm text-gray-500">
          <p>
            Showing {visibleUsers.length > 0 ? startIndex + 1 : 0} to {startIndex + visibleUsers.length} of {filteredUsers.length} entries
            {searchTerm && ` (filtered from ${users.length} total entries)`}
          </p>

          <div className="flex items-center gap-2 mt-2 sm:mt-0">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="px-3 py-1 border rounded disabled:opacity-50 hover:bg-gray-100 transition"
            >
              Prev
            </button>

            <span>
              Page {currentPage} of {totalPages || 1}
            </span>

            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="px-3 py-1 border rounded disabled:opacity-50 hover:bg-gray-100 transition"
            >
              Next
            </button>
          </div>
        </div>

        {error && <div className="mt-3 text-sm text-red-600">{error}</div>}
      </div>
    </div>
  );
}

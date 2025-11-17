import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useAuth } from "../App";

const API = "http://localhost:5000/api";

export default function PermissionManagement() {
  const { user } = useAuth(); // logged-in user
  const [admins, setAdmins] = useState([]);
  const [permissions, setPermissions] = useState([]);
  const [accessMap, setAccessMap] = useState({});
  const [changesMap, setChangesMap] = useState({});
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  // ==========================
  // Form state for creating admin
  // ==========================
  const [showForm, setShowForm] = useState(false);
  const [newAdmin, setNewAdmin] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    confirm_password: "",
    mobile: "",
  });

  // ==========================
  // Fetch admins + permissions
  // ==========================
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [adminRes, permRes] = await Promise.all([
          axios.get(`${API}/users`),
          axios.get(`${API}/permissions`),
        ]);

        setAdmins(adminRes.data || []);
        setPermissions(permRes.data || []);
      } catch (err) {
        console.error("Error loading data:", err);
        toast.error("Failed to load data");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  // ==========================
  // Fetch current access map
  // ==========================
  useEffect(() => {
    const fetchAccess = async () => {
      try {
        const map = {};
        for (const admin of admins) {
          const res = await axios.get(`${API}/permissions/admin/${admin.id}`);
          map[admin.id] = res.data.map((p) => p.id);
        }
        setAccessMap(map);
      } catch (err) {
        console.error("Error fetching access:", err);
      }
    };
    if (admins.length) fetchAccess();
  }, [admins]);

  // ==========================
  // Toggle checkbox
  // ==========================
  const handleToggle = (adminId, permId) => {
    setChangesMap((prev) => {
      const adminChanges = prev[adminId] ? new Set(prev[adminId]) : new Set();
      if (adminChanges.has(permId)) adminChanges.delete(permId);
      else adminChanges.add(permId);
      return { ...prev, [adminId]: adminChanges };
    });
  };

  // ==========================
  // Save all changes
  // ==========================
  const handleSaveChanges = async () => {
    setSaving(true);
    try {
      for (const adminId in changesMap) {
        const permIds = Array.from(changesMap[adminId]);
        await axios.post(`${API}/permissions/update`, {
          admin_id: adminId,
          permission_ids: permIds,
          updated_by: user?.id || 1,
        });
      }
      toast.success("Permissions updated successfully");
      setChangesMap({});

      // Refresh access map
      const refreshedMap = {};
      for (const admin of admins) {
        const res = await axios.get(`${API}/permissions/admin/${admin.id}`);
        refreshedMap[admin.id] = res.data.map((p) => p.id);
      }
      setAccessMap(refreshedMap);
    } catch (err) {
      console.error(err);
      toast.error("Failed to save changes");
    } finally {
      setSaving(false);
    }
  };

  // ==========================
  // Create new admin
  // ==========================
  const handleCreateAdmin = async () => {
    const { first_name, last_name, email, password, confirm_password, mobile } = newAdmin;
    if (!first_name || !last_name || !email || !password || !confirm_password) {
      return toast.error("Please fill all required fields");
    }
    if (password !== confirm_password) return toast.error("Passwords do not match");

    try {
      const res = await axios.post(`${API}/users`, {
        first_name,
        last_name,
        email,
        password,
        mobile,
      });
      setAdmins((prev) => [...prev, res.data]);
      setNewAdmin({
        first_name: "",
        last_name: "",
        email: "",
        password: "",
        confirm_password: "",
        mobile: "",
      });
      setShowForm(false);
      toast.success("Admin created successfully");
    } catch (err) {
      console.error(err);
      toast.error(err.response?.data?.message || "Failed to create admin");
    }
  };

  if (loading) {
    return <div className="text-center py-10 text-gray-600">Loading permissions...</div>;
  }

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-semibold mb-6">Permission Management</h1>

      {/* Toggle create form */}
      <div className="mb-6">
        <button
          onClick={() => setShowForm(!showForm)}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          {showForm ? "Cancel" : "Create New Admin"}
        </button>
      </div>

      {/* Create Admin Form */}
      {showForm && (
        <div className="mb-6 bg-white p-4 rounded shadow-md w-full max-w-lg">
          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="First Name"
              value={newAdmin.first_name}
              onChange={(e) => setNewAdmin({ ...newAdmin, first_name: e.target.value })}
              className="border rounded px-3 py-2 w-full"
            />
            <input
              type="text"
              placeholder="Last Name"
              value={newAdmin.last_name}
              onChange={(e) => setNewAdmin({ ...newAdmin, last_name: e.target.value })}
              className="border rounded px-3 py-2 w-full"
            />
            <input
              type="email"
              placeholder="Email"
              value={newAdmin.email}
              onChange={(e) => setNewAdmin({ ...newAdmin, email: e.target.value })}
              className="border rounded px-3 py-2 w-full col-span-2"
            />
            <input
              type="password"
              placeholder="Password"
              value={newAdmin.password}
              onChange={(e) => setNewAdmin({ ...newAdmin, password: e.target.value })}
              className="border rounded px-3 py-2 w-full"
            />
            <input
              type="password"
              placeholder="Confirm Password"
              value={newAdmin.confirm_password}
              onChange={(e) => setNewAdmin({ ...newAdmin, confirm_password: e.target.value })}
              className="border rounded px-3 py-2 w-full"
            />
            <input
              type="text"
              placeholder="Mobile Number"
              value={newAdmin.mobile}
              onChange={(e) => setNewAdmin({ ...newAdmin, mobile: e.target.value })}
              className="border rounded px-3 py-2 w-full col-span-2"
            />
          </div>
          <button
            onClick={handleCreateAdmin}
            className="mt-4 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
          >
            Create Admin
          </button>
        </div>
      )}

      {/* Permissions Table */}
      <div className="overflow-x-auto bg-white rounded-2xl shadow p-4">
        {admins.length === 0 ? (
          <p className="text-gray-500 text-center py-6">No admins found.</p>
        ) : permissions.length === 0 ? (
          <p className="text-gray-500 text-center py-6">No permissions available.</p>
        ) : (
          <>
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-100 border-b">
                  <th className="p-3 text-left text-sm font-medium text-gray-700">
                    Page / Module
                  </th>
                  {admins.map((admin) => (
                    <th key={admin.id} className="p-3 text-center text-sm font-medium text-gray-700">
                      {admin.first_name} {admin.last_name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {permissions.map((perm) => (
                  <tr key={perm.id} className="border-b hover:bg-gray-50">
                    <td className="p-3 text-sm font-medium text-gray-800">{perm.name}</td>
                    {admins.map((admin) => {
                      const currentAccess = new Set(accessMap[admin.id] || []);
                      const changedAccess = changesMap[admin.id] || new Set();
                      const hasAccess = changedAccess.has(perm.id)
                        ? !currentAccess.has(perm.id)
                        : currentAccess.has(perm.id);

                      return (
                        <td key={admin.id} className="p-3 text-center">
                          <input
                            type="checkbox"
                            checked={hasAccess}
                            onChange={() => handleToggle(admin.id, perm.id)}
                            className="h-5 w-5 cursor-pointer"
                          />
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>

            {/* Save Changes Button */}
            {Object.keys(changesMap).length > 0 && (
              <div className="mt-4 flex justify-end">
                <button
                  onClick={handleSaveChanges}
                  disabled={saving}
                  className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 disabled:opacity-50"
                >
                  {saving ? "Saving..." : "Save Changes"}
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}

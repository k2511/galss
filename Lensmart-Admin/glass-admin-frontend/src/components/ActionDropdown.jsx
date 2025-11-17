import React, { useState } from "react";

const ActionDropdown = ({ onEdit, onDelete }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative inline-block text-left">
      {/* Info Button */}
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center border rounded-md px-3 py-1 text-green-600 border-green-600 hover:bg-green-50"
      >
        Info
        <svg
          className="ml-1 h-4 w-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {/* Dropdown Menu */}
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
              >
                Edit
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  setOpen(false);
                  onDelete();
                }}
                className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100 text-red-600"
              >
                Delete
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default ActionDropdown;

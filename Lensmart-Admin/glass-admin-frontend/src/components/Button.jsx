// Button.jsx
import React from "react";

const Button = ({ text, onClick, className = "" }) => {
  return (
    <button
      onClick={onClick}
      className={`bg-red-500 text-white rounded-3xl px-4 py-2 hover:bg-red-600 transition ${className}`}
    >
      {text}
    </button>
  );
};

export default Button;

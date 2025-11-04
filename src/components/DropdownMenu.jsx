import React, { useState, useRef } from "react";

const DropdownMenu = ({ trigger, children }) => {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);
     
  // Show on hover or focus; also allow click for mobile compatibility
  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      tabIndex={0}
      onFocus={() => setOpen(true)}
      onBlur={() => setOpen(false)}
      ref={menuRef}
    >
      <div
        onClick={() => setOpen(!open)}
        className="cursor-pointer flex items-center"
      >
        {trigger}
      </div>
      {open && children}
    </div>
  );
};

export default DropdownMenu;

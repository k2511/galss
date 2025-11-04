import React, { useState, useRef } from "react";


const NavbarDropdown = ({ trigger, children,open, setOpen }) => {
//   const [open, setOpen] = useState(false);
  const menuRef = useRef(null);
     
  // Show on hover or focus; also allow click for mobile compatibility
  return (
    // <div
    //   className="relative border-2 border-black "
    //   // onMouseEnter={() => setOpen(true)}
    //   // onMouseLeave={() => setOpen(false)}
    //   tabIndex={0}
    // //   onFocus={() => setOpen(true)}
    //   onBlur={() => setOpen(false)}
    //   ref={menuRef}
    // >
    //   <div
    //     onClick={() => setOpen(!open)}
    //     className="cursor-pointer flex items-center"
    //   >
    //     {trigger}
    //   </div>
    //   {open && children}
    // </div>

    <div className="relative">
    <div className="cursor-pointer flex items-center">{trigger}</div>
    {open && (
      <div className="absolute left-0 top-full z-50 bg-white shadow-lg">
        {children}
      </div>
    )}
  </div>
  );
};

export default NavbarDropdown;

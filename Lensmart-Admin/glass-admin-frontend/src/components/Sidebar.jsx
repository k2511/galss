
// import { useAuth } from "../App";
// import { useNavigate, useLocation, Link } from "react-router-dom";
// import {
//   ChevronDown,
//   ChevronRight,
//   LayoutDashboard,
//   UserPlus,
//   Star,
//   Ticket,
//   Package,
//   Grid,
//   Users,
//   Tag,
//   ShoppingCart,
//   Calendar,
//   LogIn,
//   ShieldCheck,
// } from "lucide-react";
// import { useState, useEffect } from "react";

// const Sidebar = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const [openDropdown, setOpenDropdown] = useState(null);
//   const { logout } = useAuth();

//   const handleLogout = () => {
//     logout();
//     navigate("/login");
//   };

//   // ==========================
//   // Base menu items
//   // ==========================
//   const baseMenuItems = [
//     { path: "/dashboard", label: "Dashboard", icon: <LayoutDashboard className="w-5 h-5" /> },
//     { path: "/create-user", label: "Create User", icon: <UserPlus className="w-5 h-5" /> },
//     { path: "/reviews", label: "Reviews", icon: <Star className="w-5 h-5" /> },
//     { path: "/coupon-codes", label: "Coupon Codes", icon: <Ticket className="w-5 h-5" /> },
//     {
//       label: "Products",
//       icon: <Package className="w-5 h-5" />,
//       children: [
//         { path: "/add-product", label: "Add Product" },
//         { path: "/list-product", label: "List Product" },
//         { path: "/product-type", label: "Product Type" },
//         { path: "/product-shape", label: "Product Shape" },
//       ],
//     },
//     { path: "/category", label: "Category", icon: <Grid className="w-5 h-5" /> },
//     { path: "/register-user", label: "Register User", icon: <Users className="w-5 h-5" /> },
//     { path: "/brands", label: "Brands", icon: <Tag className="w-5 h-5" /> },
//     { path: "/buying-list", label: "Buying List", icon: <ShoppingCart className="w-5 h-5" /> },
//     { path: "/new-arrival", label: "New Arrival", icon: <Calendar className="w-5 h-5" /> },

//     // 👇 Always visible Permission Management
//     {
//       path: "/permission-management",
//       label: "Permission Management",
//       icon: <ShieldCheck className="w-5 h-5 text-yellow-400" />,
//       highlight: true, // custom flag to highlight
//     },
//   ];

//   // ==========================
//   // Authentication menu
//   // ==========================
//   const authMenu = {
//     label: "Authentication",
//     icon: <LogIn className="w-5 h-5" />,
//     children: [{ label: "Logout", isButton: true }],
//   };

//   const menuItems = [...baseMenuItems, authMenu];

//   useEffect(() => {
//     menuItems.forEach((item) => {
//       if (item.children?.some((child) => child.path === location.pathname)) {
//         setOpenDropdown(item.label);
//       }
//     });
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [location.pathname]);

//   const toggleDropdown = (label) => {
//     setOpenDropdown(openDropdown === label ? null : label);
//   };

//   return (
//     <aside className="fixed top-0 left-0 w-64 h-screen bg-black text-white flex flex-col p-4">
//       {/* Logo */}
//       <div className="sticky top-0 z-10 mb-4 bg-gray-900">
//         <div className="flex items-center mb-5">
//           <div className="logo bg-red-500 w-10 h-10 rounded-md flex items-center justify-center mr-3">
//             <span className="font-bold text-white text-lg">L</span>
//           </div>
//           <span className="text-xl font-bold">Lens Mart</span>
//         </div>
//       </div>

//       {/* Scrollable menu */}
//       <ul className="flex-1 overflow-y-auto hide-scrollbar space-y-1">
//         {menuItems.map((item) => {
//           const key = item.path || item.label;
//           return (
//             <li key={key} className="mb-0">
//               {item.children ? (
//                 <>
//                   <button
//                     onClick={() => toggleDropdown(item.label)}
//                     className={`flex items-center justify-between w-full px-4 py-3 rounded-lg transition-colors duration-200 hover:bg-gray-700 text-sm ${
//                       openDropdown === item.label ? "bg-red-600 shadow-md" : ""
//                     }`}
//                   >
//                     <div className="flex items-center space-x-3">
//                       <span
//                         className={item.highlight ? "text-yellow-400" : ""}
//                       >
//                         {item.icon}
//                       </span>
//                       <span className={`font-medium ${item.highlight ? "text-yellow-400" : ""}`}>
//                         {item.label}
//                       </span>
//                     </div>
//                     {openDropdown === item.label ? (
//                       <ChevronDown className="w-4 h-4" />
//                     ) : (
//                       <ChevronRight className="w-4 h-4" />
//                     )}
//                   </button>

//                   {openDropdown === item.label && (
//                     <ul className="mt-1 ml-6 space-y-1">
//                       {item.children.map((child) => {
//                         const childKey = child.path || child.label;
//                         return (
//                           <li key={childKey}>
//                             {child.isButton ? (
//                               <button
//                                 onClick={handleLogout}
//                                 className="w-full flex items-center px-4 py-2 rounded-lg hover:bg-gray-700 text-sm"
//                               >
//                                 {child.label}
//                               </button>
//                             ) : (
//                               <Link
//                                 to={child.path}
//                                 onClick={() => setOpenDropdown(null)}
//                                 className={`block px-4 py-2 rounded-lg text-sm transition-colors duration-200 hover:bg-gray-700 ${
//                                   location.pathname === child.path ? "bg-red-500 shadow-md" : ""
//                                 }`}
//                               >
//                                 {child.label}
//                               </Link>
//                             )}
//                           </li>
//                         );
//                       })}
//                     </ul>
//                   )}
//                 </>
//               ) : (
//                 <Link
//                   to={item.path}
//                   className={`flex items-center px-4 py-3 rounded-lg transition-colors duration-200 hover:bg-gray-700 text-sm ${
//                     location.pathname === item.path
//                       ? "bg-red-600 shadow-md"
//                       : ""
//                   } ${item.highlight ? "text-yellow-400" : ""}`}
//                 >
//                   <span className="mr-3">{item.icon}</span>
//                   {item.label}
//                 </Link>
//               )}
//             </li>
//           );
//         })}
//       </ul>
//     </aside>
//   );
// };

// export default Sidebar;


// import { useAuth } from "../App";
// import { useNavigate, useLocation, Link } from "react-router-dom";
// import {
//   ChevronDown,
//   ChevronRight,
//   LayoutDashboard,
//   UserPlus,
//   Key,
//   Star,
//   Ticket,
//   Package,
//   Grid,
//   Users,
//   Tag,
//   ShoppingCart,
//   Calendar,
//   LogIn,
// } from "lucide-react";
// import { useState, useEffect } from "react";

// const Sidebar = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const [openDropdown, setOpenDropdown] = useState(null);
//   const { logout } = useAuth();

//   const handleLogout = () => {
//     logout();
//     navigate("/login");
//   };

//   const menuItems = [
//     { path: "/dashboard", label: "Dashboard", icon: <LayoutDashboard className="w-5 h-5" /> },
//     { path: "/create-user", label: "Create User", icon: <UserPlus className="w-5 h-5" /> },
//     { path: "/reviews", label: "Reviews", icon: <Star className="w-5 h-5" /> },
//     { path: "/coupon-codes", label: "Coupon Codes", icon: <Ticket className="w-5 h-5" /> },
//     {
//       label: "Products",
//       icon: <Package className="w-5 h-5" />,
//       children: [
//         { path: "/add-product", label: "Add Product" },
//         { path: "/list-product", label: "List Product" },
//         // New options added below
//         { path: "/product-type", label: "Product Type" },
//         { path: "/product-shape", label: "Product Shape" },
//       ],
//     },
//     { path: "/category", label: "Category", icon: <Grid className="w-5 h-5" /> },
//     { path: "/register-user", label: "Register User", icon: <Users className="w-5 h-5" /> },
//     { path: "/brands", label: "Brands", icon: <Tag className="w-5 h-5" /> },
//     { path: "/buying-list", label: "Buying List", icon: <ShoppingCart className="w-5 h-5" /> },
//     { path: "/new-arrival", label: "New Arrival", icon: <Calendar className="w-5 h-5" /> },
//     {
//       label: "Authentication",
//       icon: <LogIn className="w-5 h-5" />,
//       children: [{ label: "Logout", isButton: true }],
//     },
//   ];

//   useEffect(() => {
//     menuItems.forEach((item) => {
//       if (item.children?.some((child) => child.path === location.pathname)) {
//         setOpenDropdown(item.label);
//       }
//     });
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [location.pathname]);

//   const toggleDropdown = (label) => {
//     setOpenDropdown(openDropdown === label ? null : label);
//   };

//   return (
//     <aside className="fixed top-0 left-0 w-64 h-screen bg-black text-white flex flex-col p-4">
//       {/* Logo - sticky */}
//       <div className="sticky top-0 z-10 mb-4 bg-gray-900">
//         <div className="flex items-center mb-5">
//           <div className="logo bg-red-500 w-10 h-10 rounded-md flex items-center justify-center mr-3">
//             <span className="font-bold text-white text-lg">L</span>
//           </div>
//           <span className="text-xl font-bold">Lens Mart</span>
//         </div>
//       </div>

//       {/* Nav list scrollable */}
//       <ul className="flex-1 overflow-y-auto hide-scrollbar space-y-1">
//         {menuItems.map((item) => {
//           const key = item.path || item.label;
//           return (
//             <li key={key} className="mb-0">
//               {item.children ? (
//                 <>
//                   <button
//                     onClick={() => toggleDropdown(item.label)}
//                     className={`flex items-center justify-between w-full px-4 py-3 rounded-lg transition-colors duration-200 hover:bg-gray-700 ${
//                       openDropdown === item.label ? "bg-red-600 shadow-md" : ""
//                     } text-sm`}
//                   >
//                     <div className="flex items-center space-x-3">
//                       <span>{item.icon}</span>
//                       <span className="font-medium">{item.label}</span>
//                     </div>
//                     {openDropdown === item.label ? (
//                       <ChevronDown className="w-4 h-4" />
//                     ) : (
//                       <ChevronRight className="w-4 h-4" />
//                     )}
//                   </button>

//                   {openDropdown === item.label && (
//                     <ul className="mt-1 ml-6 space-y-1">
//                       {item.children.map((child) => {
//                         const childKey = child.path || child.label;
//                         return (
//                           <li key={childKey}>
//                             {child.isButton ? (
//                               <button
//                                 onClick={handleLogout}
//                                 className="w-full flex items-center px-4 py-2 rounded-lg hover:bg-gray-700 text-sm"
//                               >
//                                 {child.label}
//                               </button>
//                             ) : (
//                               <Link
//                                 to={child.path}
//                                 onClick={() => setOpenDropdown(null)}
//                                 className={`block px-4 py-2 rounded-lg text-sm transition-colors duration-200 hover:bg-gray-700 ${
//                                   location.pathname === child.path ? "bg-red-500 shadow-md" : ""
//                                 }`}
//                               >
//                                 {child.label}
//                               </Link>
//                             )}
//                           </li>
//                         );
//                       })}
//                     </ul>
//                   )}
//                 </>
//               ) : (
//                 <Link
//                   to={item.path}
//                   className={`flex items-center px-4 py-3 rounded-lg transition-colors duration-200 hover:bg-gray-700 text-sm ${
//                     location.pathname === item.path ? "bg-red-600 shadow-md" : ""
//                   }`}
//                 >
//                   <span className="mr-3">{item.icon}</span>
//                   {item.label}
//                 </Link>
//               )}
//             </li>
//           );
//         })}
//       </ul>
//     </aside>
//   );
// };

// export default Sidebar;
import { useAuth } from "../App";
import { useNavigate, useLocation, Link } from "react-router-dom";
import {
  ChevronDown,
  ChevronRight,
  LayoutDashboard,
  UserPlus,
  Star,
  Ticket,
  Package,
  Grid,
  Users,
  Tag,
  ShoppingCart,
  Calendar,
  LogIn,
  ShieldCheck,
  Receipt,
} from "lucide-react";
import { useState, useEffect } from "react";

const Sidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [openDropdown, setOpenDropdown] = useState(null);
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  // ==========================
  // Base menu items
  // ==========================
  const baseMenuItems = [
    { path: "/dashboard", label: "Dashboard", icon: <LayoutDashboard className="w-5 h-5" /> },
    { path: "/create-user", label: "Create User", icon: <UserPlus className="w-5 h-5" /> },
    { path: "/reviews", label: "Reviews", icon: <Star className="w-5 h-5" /> },
    { path: "/coupon-codes", label: "Coupon Codes", icon: <Ticket className="w-5 h-5" /> },

    {
      label: "Products",
      icon: <Package className="w-5 h-5" />,
      children: [
        { path: "/add-product", label: "Add Product" },
        { path: "/list-product", label: "List Product" },
        { path: "/product-type", label: "Product Type" },
        { path: "/product-shape", label: "Product Shape" },
      ],
    },

    { path: "/category", label: "Category", icon: <Grid className="w-5 h-5" /> },
    { path: "/register-user", label: "Register User", icon: <Users className="w-5 h-5" /> },
    { path: "/brands", label: "Brands", icon: <Tag className="w-5 h-5" /> },
    { path: "/buying-list", label: "Buying List", icon: <ShoppingCart className="w-5 h-5" /> },
    { path: "/new-arrival", label: "New Arrival", icon: <Calendar className="w-5 h-5" /> },

    // ⭐ NEW SECTION: ORDERS + CUSTOMERS
    {
      label: "Orders & Customers",
      icon: <Receipt className="w-5 h-5" />,
      children: [
        { path: "/customers", label: "Customer List" },
        { path: "/orders", label: "Order List" },
        { path: "/payments", label: "Payment Details" },
      ],
    },

    // Always visible
    {
      path: "/permission-management",
      label: "Permission Management",
      icon: <ShieldCheck className="w-5 h-5 text-yellow-400" />,
      highlight: true,
    },
  ];

  // ==========================
  // Authentication menu
  // ==========================
  const authMenu = {
    label: "Authentication",
    icon: <LogIn className="w-5 h-5" />,
    children: [{ label: "Logout", isButton: true }],
  };

  const menuItems = [...baseMenuItems, authMenu];

  useEffect(() => {
    menuItems.forEach((item) => {
      if (item.children?.some((child) => child.path === location.pathname)) {
        setOpenDropdown(item.label);
      }
    });
  }, [location.pathname]);

  const toggleDropdown = (label) => {
    setOpenDropdown(openDropdown === label ? null : label);
  };

  return (
    <aside className="fixed top-0 left-0 w-64 h-screen bg-black text-white flex flex-col p-4">
      {/* Logo */}
      <div className="sticky top-0 z-10 mb-4 bg-gray-900">
        <div className="flex items-center mb-5">
          <div className="logo bg-red-500 w-10 h-10 rounded-md flex items-center justify-center mr-3">
            <span className="font-bold text-white text-lg">L</span>
          </div>
          <span className="text-xl font-bold">Lens Mart</span>
        </div>
      </div>

      {/* Scrollable menu */}
      <ul className="flex-1 overflow-y-auto hide-scrollbar space-y-1">
        {menuItems.map((item) => {
          const key = item.path || item.label;
          return (
            <li key={key} className="mb-0">
              {item.children ? (
                <>
                  <button
                    onClick={() => toggleDropdown(item.label)}
                    className={`flex items-center justify-between w-full px-4 py-3 rounded-lg transition-colors duration-200 hover:bg-gray-700 text-sm ${
                      openDropdown === item.label ? "bg-red-600 shadow-md" : ""
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <span className={item.highlight ? "text-yellow-400" : ""}>
                        {item.icon}
                      </span>
                      <span className={`font-medium ${item.highlight ? "text-yellow-400" : ""}`}>
                        {item.label}
                      </span>
                    </div>
                    {openDropdown === item.label ? (
                      <ChevronDown className="w-4 h-4" />
                    ) : (
                      <ChevronRight className="w-4 h-4" />
                    )}
                  </button>

                  {openDropdown === item.label && (
                    <ul className="mt-1 ml-6 space-y-1">
                      {item.children.map((child) => {
                        const childKey = child.path || child.label;
                        return (
                          <li key={childKey}>
                            {child.isButton ? (
                              <button
                                onClick={handleLogout}
                                className="w-full flex items-center px-4 py-2 rounded-lg hover:bg-gray-700 text-sm"
                              >
                                {child.label}
                              </button>
                            ) : (
                              <Link
                                to={child.path}
                                onClick={() => setOpenDropdown(null)}
                                className={`block px-4 py-2 rounded-lg text-sm transition-colors duration-200 hover:bg-gray-700 ${
                                  location.pathname === child.path ? "bg-red-500 shadow-md" : ""
                                }`}
                              >
                                {child.label}
                              </Link>
                            )}
                          </li>
                        );
                      })}
                    </ul>
                  )}
                </>
              ) : (
                <Link
                  to={item.path}
                  className={`flex items-center px-4 py-3 rounded-lg transition-colors duration-200 hover:bg-gray-700 text-sm ${
                    location.pathname === item.path ? "bg-red-600 shadow-md" : ""
                  } ${item.highlight ? "text-yellow-400" : ""}`}
                >
                  <span className="mr-3">{item.icon}</span>
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default Sidebar;

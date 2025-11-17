// src/components/Breadcrumb.jsx
import React from "react";
import { Link, useLocation } from "react-router-dom";

const Breadcrumb = () => {
  const location = useLocation();
  const paths = location.pathname.split("/").filter((x) => x);

  return (
    <nav className="flex text-gray-600 text-sm mb-4" aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1 md:space-x-3">
        <li>
          <Link to="/" className="text-gray-500 hover:text-red-600">
            Home
          </Link>
        </li>
        {paths.map((path, index) => {
          const routeTo = "/" + paths.slice(0, index + 1).join("/");
          const isLast = index === paths.length - 1;
          return (
            <li key={index} className="inline-flex items-center">
              <span className="mx-2">/</span>
              {isLast ? (
                <span className="text-gray-800 font-medium capitalize">{path}</span>
              ) : (
                <Link
                  to={routeTo}
                  className="text-gray-500 hover:text-red-600 capitalize"
                >
                  {path}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumb;

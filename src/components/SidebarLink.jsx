import React from "react";
import { Link, useLocation } from "react-router-dom";

const SidebarLink = ({ to, children }) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <li className={`list-group ${isActive ? "active-link" : ""}`}>
      <Link to={to}>{children}</Link>
    </li>
  );
};

export default SidebarLink;

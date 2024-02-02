import React from "react";
import SidebarLink from "./SidebarLink";

const Sidebar = () => {
  return (
    <div className="sidebar d-flex flex-column flex-shrink-0">
      <div className="authorDiv">Jean Neymar</div>

      <SidebarLink to="/">Accueil</SidebarLink>
      <SidebarLink to="/about">A Propos</SidebarLink>
      <SidebarLink to="/books">Oeuvres</SidebarLink>
    </div>
  );
};

export default Sidebar;

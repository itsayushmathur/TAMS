import React from "react";
import "../css/SideNav.css";
import { NavLink } from "react-router-dom";
function SideNav() {
  return (
    <div id="sidenav" className="flex vflex">
      <NavLink to="/" className="navlink">
        Home / Dashboard
      </NavLink>

      <NavLink to="/myProjects" className="navlink">
        My Project
      </NavLink>
    </div>
  );
}

export default SideNav;

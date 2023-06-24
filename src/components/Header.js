import React from "react";
import "../css/Header.css";
import { FaBars, FaPowerOff } from "react-icons/fa";
import Logo from "../img/Tams Logo.png";
function Header() {
  return (
    <div id="header" className="flex">
      <div className="left flex">
        <FaBars />
        <img src={Logo} alt="Logo" />
      </div>

      <div className="right flex">
        <div className="userDetails flex vflex">
          <div className="empName">Ayush Mathur</div>
          <div className="empId">INC02371</div>
        </div>
        <FaPowerOff className="logout" />
      </div>
    </div>
  );
}

export default Header;

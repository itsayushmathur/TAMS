import React from "react";
import "../css/Header.css";
import { FaBars, FaPowerOff } from "react-icons/fa";
import Logo from "../img/Tams Logo.png";
import { useDispatch, useSelector } from "react-redux";
function Header() {
  const store = useSelector((store) => store);
  const dispatch = useDispatch();

  const logout = async () => {
    dispatch({ type: "LOGOUT" });
  };

  return (
    <div id="header" className="flex">
      <div className="left flex">
        <FaBars />
        <img src={Logo} alt="Logo" />
      </div>

      {store.authenticated && (
        <div className="right flex">
          <div className="userDetails flex vflex">
            <div className="empName">
              {store.talentDetails.firstName +
                " " +
                store.talentDetails.lastName}
            </div>
            <div className="empId">{store.talentDetails.empId}</div>
          </div>
          <FaPowerOff onClick={logout} className="logout" />
        </div>
      )}
    </div>
  );
}

export default Header;

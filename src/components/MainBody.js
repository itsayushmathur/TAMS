import React, { useEffect } from "react";
import "../css/MainBody.css";
import ProjectDetails from "./Project/ProjectDetails";
import { Route } from "react-router-dom";
import EmpDetails from "./EmpDetails";
import { useSelector } from "react-redux";
import MyProjects from "./Project/MyProjects";
import Dashboard from "./Dashboard";

function MainBody() {
  const user = useSelector((store) => store.authenticated);

  useEffect(() => {
    console.log(user);
  }, []);

  return (
    <div id="mainbody">
      
    </div>
  );
}
export default MainBody;

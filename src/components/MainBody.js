import React, { useEffect } from "react";
import "../css/MainBody.css";
import ProjectMain from "./Project/ProjectMain";
import ProjectDetails from "./Project/ProjectDetails";
import { Route, Routes } from "react-router-dom";
import EmpDetails from "./Project/EmpDetails";
import { useSelector } from "react-redux";

function MainBody() {
  const user = useSelector(store => store.authenticated);
  useEffect(() => {
    console.log(user);
  }, [])
  return (
    <div id="mainbody">
      <Routes>
        <Route path="/myProject" element={<ProjectMain />} />
        <Route path="/myProject/:pid" element={<ProjectDetails />} />
        <Route path="/getTalentDetails/:talentId" element={<EmpDetails />} />
      </Routes>
    </div>
  );
}
export default MainBody;

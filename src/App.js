import "./App.css";
import Header from "./components/Header";
import SideNav from "./components/SideNav";
import MainBody from "./components/MainBody";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Authentication from "./components/Authentication";
import ProtectedPath from "./components/ProtectedPath";
import Dashboard from "./components/Dashboard";
import MyProjects from "./components/Project/MyProjects";
import EmpDetails from "./components/EmpDetails";
import ProjectDetails from "./components/Project/ProjectDetails";

function App() {
  return (
    <div className="App flex vflex">
      <BrowserRouter>
        <Header />
        <div className="main flex">
          <SideNav />
          <div id="mainbody">
            <Routes>
              <Route path="/auth" element={<Authentication />} />
              <Route element={<ProtectedPath />}>
                <Route path="/" element={<Dashboard />} />
                <Route path="/myProjects" element={<MyProjects />} />
                <Route
                  path="/myProject/:projectId"
                  element={<ProjectDetails />}
                />
                <Route path="/talent/:talentId" element={<EmpDetails />} />
              </Route>
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;

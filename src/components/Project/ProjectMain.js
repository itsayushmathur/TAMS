import {React , useState} from "react";
import "../../css/ProjectMain.css";
import TableComponent from "./TableComponent";

function ProjectMain() {
    const [projID, setProjID] = useState("My Project");

  return (
    <div>
      <div className="projID">{projID}</div>
      <div className="tablemargin">
      <TableComponent />
      </div>
      
    </div>
  );
}

export default ProjectMain;

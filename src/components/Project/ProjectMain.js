import React, { useState } from "react";
import "../../css/ProjectMain.css";
import TableComponent from "./TableComponent";

function ProjectMain() {
  const [projID, setProjID] = useState("My Project");

  // Static data
  const tableData = [
    { id: 1, name: "John Doe", role: "Developer" },
    { id: 2, name: "Jane Smith", role: "Designer" },
    { id: 3, name: "Michael Johnson", role: "Manager" },
    // Add more data as needed
  ];

  return (
    <div>
      <div className="projID">{projID}</div>
      <div className="tablemargin">
        <TableComponent data={tableData} />
      </div>
    </div>
  );
}

export default ProjectMain;

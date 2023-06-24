import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../../css/MyProject.css";
import { getMyProjects } from "../../apis/Project";
import { useSelector } from "react-redux";

const MyProjects = () => {
  const [projectDetails, setProjectDetails] = useState([{}, {}, {}, {}]);
  const talentDetails = useSelector((store) => store.talentDetails);

  const getProjectDetails = async () => {
    try {
      const response = await getMyProjects(talentDetails.talentId);
      if (!response.ok) {
        throw new Error("Failed to fetch data from API");
      }

      const responseData = await response.json();

      setProjectDetails(responseData);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getProjectDetails();
  }, []);

  return (
    <div>
      <div className="projects-ctn">
        {projectDetails.map((row, index) => (
          <Link to={`/myProject/${row.projectCode}`} className="project">
            <div className="field">PID: {row.projectCode}</div>
            <div className="field">Name: {row.projectName}</div>
            <div className="field">Start Date: {row.startDate}</div>
            <div className="field">End Date: {row.endDate}</div>
            <div className="field">Allocation %: {row.allocationCheck}</div>
            {/* <div variant="subtitle1">Department: {row.department}</div> */}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MyProjects;

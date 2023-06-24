import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getEmpDetailsById } from "../apis/Talent";
import "../css/EmpDetails.css";

function EmpDetails() {
  const { talentId } = useParams();

  const [empDetails, setEmpDetails] = useState({
    department: {},
    designation: {},
  });

  const getEmpDetails = async () => {
    try {
      const response = await getEmpDetailsById(talentId);

      if (!response.ok) {
        throw new Error("Failed to fetch data from API");
      }

      const responseData = await response.json();

      setEmpDetails(responseData);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getEmpDetails();
  }, []);

  return (
    <div className="emp-details-ctn flex vflex">
      <div className="title">Employee Details</div>
      <div className="emp-details grid-container">
        <div className="grid-item flex vflex">
          <div className="label">Emp ID:</div>
          <div>{empDetails.empId}</div>
        </div>
        <div className="grid-item flex vflex">
          <div className="label">First Name:</div>
          <div>{empDetails.firstName}</div>
        </div>
        <div className="grid-item flex vflex">
          <div className="label">Last Name:</div>
          <div>{empDetails.lastName}</div>
        </div>
        <div className="grid-item flex vflex">
          <div className="label">Phone Number:</div>
          <div>{empDetails.phoneNo}</div>
        </div>
        <div className="grid-item flex vflex">
          <div className="label">Location:</div>
          <div>{empDetails.location}</div>
        </div>
        <div className="grid-item flex vflex">
          <div className="label">Email:</div>
          <div>{empDetails.empEmail}</div>
        </div>
        <div className="grid-item flex vflex">
          <div className="label">Date of Joining:</div>
          <div>{empDetails.dateOfJoining}</div>
        </div>
        <div className="grid-item flex vflex">
          <div className="label">Experience:</div>
          <div>{empDetails.experience}</div>
        </div>
        <div className="grid-item flex vflex">
          <div className="label">Allocation %:</div>
          <div>{empDetails.allocation}</div>
        </div>
        <div className="grid-item flex vflex">
          <div className="label">Department:</div>
          <div>{empDetails.department.deptName}</div>
        </div>
        <div className="grid-item flex vflex">
          <div className="label">Designation:</div>
          <div>{empDetails.designation.desgnName}</div>
        </div>
        <div className="grid-item flex vflex">
          <div className="label">Emp Allocated Projects:</div>
          <div>{empDetails.empAllocatedProjects}</div>
        </div>
      </div>
    </div>
  );
}

export default EmpDetails;

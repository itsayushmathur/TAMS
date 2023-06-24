import React, { useState } from "react";
import {useEffect} from "react";
import { useParams } from "react-router-dom";
import "../../css/EmpDetails.css";

function EmpDetails( ) {
    const {talentId} = useParams();
   
    const [empDetails, setEmpDetails] = useState({department:{}, designation:{}});

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(`/talent/get/${talentId}`, {
        method: 'GET',
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        }
      });
      if (!response.ok) {
        throw new Error('Failed to fetch data from API');
      }
      const responseData = await response.json();
      setEmpDetails(responseData);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="emp-details-container">
      <h2>Employee Details</h2>
      <div className="grid-container">
        <div className="grid-item">
          <span>Emp ID:</span>
          <span>{empDetails.empId}</span>
        </div>
        <div className="grid-item">
          <span>First Name:</span>
          <span>{empDetails.firstName}</span>
        </div>
        <div className="grid-item">
          <span>Last Name:</span>
          <span>{empDetails.lastName}</span>
        </div>
        <div className="grid-item">
          <span>Phone Number:</span>
          <span>{empDetails.phoneNo}</span>
        </div>
        <div className="grid-item">
          <span>Location:</span>
          <span>{empDetails.location}</span>
        </div>
        <div className="grid-item">
          <span>Email:</span>
          <span>{empDetails.empEmail}</span>
        </div>
        <div className="grid-item">
          <span>Date of Joining:</span>
          <span>{empDetails.dateOfJoining}</span>
        </div>
        <div className="grid-item">
          <span>Experience:</span>
          <span>{empDetails.experience}</span>
        </div>
        <div className="grid-item">
          <span>Allocation %:</span>
          <span>{empDetails.allocation}</span>
        </div>
        <div className="grid-item">
          <span>Department:</span>
          <span>{empDetails.department.deptName}</span>
        </div>
        <div className="grid-item">
          <span>Designation:</span>
          <span>{empDetails.designation.desgnName}</span>
        </div>
        <div className="grid-item">
          <span>Emp Allocated Projects:</span>
          <span>{empDetails.empAllocatedProjects}</span>
        </div>
      </div>
    </div>
  );
}

export default EmpDetails;

import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "../../css/ProjectDetails.css";
import { Button, Grid, Paper, Typography } from "@mui/material";
import { FaTrash } from "react-icons/fa";

function ProjectDetails() {
  const { pid } = useParams();
  const [talentId, setTalentId] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [allocationPercentage, setAllocationPercentage] = useState("");
  const [talentList, setTalentList] = useState([]);
  const [projectDetails, setProjectDetails] = useState({
    projectManager: {
      department: {},
    },
  }); // Initialize as an empty array
  const [allocationList, setAllocationList] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchData();
    const dateInput = document.getElementById("myDateInput");
    const currentDate = new Date().toISOString().split("T")[0];
    dateInput.setAttribute("min", currentDate);
  }, []);

  const fetchData = async () => {
    try {
      // Fetch talent list from API
      const talentResponse = await fetch("/talent/getAll");
      if (!talentResponse.ok) {
        throw new Error("Failed to fetch talent list from API");
      }
      const talentData = await talentResponse.json();
      setTalentList(talentData);

      // Fetch project details from API
      const projectResponse = await fetch(`/project/get/${pid}`);
      if (!projectResponse.ok) {
        throw new Error("Failed to fetch project data from API");
      }
      const projectData = await projectResponse.json();
      setProjectDetails(projectData);

      const allocationResponse = await fetch(`/project/getAllocation/${pid}`);
      if (!allocationResponse.ok) {
        throw new Error("Failed to fetch talent list from API");
      }
      const allocationList = await allocationResponse.json();
      setAllocationList(allocationList);
    } catch (error) {
      console.error(error);
    }
  };

  const handleAddEmp = async () => {
    try {
      // Validate input
      if (
        talentId.trim() === "" ||
        startDate.trim() === "" ||
        endDate.trim() === "" ||
        allocationPercentage.trim() === ""
      ) {
        // Fields are empty, return without adding employee
        return;
      }

      // Create new allocation object
      const newAllocation = {
        startDate: startDate,
        endDate: endDate,
        allocationPercent: allocationPercentage,
        project: {
          id: pid,
        },
        talent: {
          id: talentId,
        },
      };

      // Save the allocation to the API
      const response = await fetch(`/allocation/add`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(newAllocation),
      });

      if (!response.ok) {
        throw new Error("Failed to save allocation data");
      }

      // Reset form fields
      setTalentId("");
      setStartDate("");
      setEndDate("");
      setAllocationPercentage("");

      // Fetch updated employee list
      fetchData();
    } catch (error) {
      console.error(error);
    }
  };

  const handleEmpDetails = (talentId) => {
    navigate(`/getTalentDetails/${talentId}`);
  };
  const handleDelete = async (id) => {
    try {
      // Delete the allocation from the API
      const response = await fetch(`/allocation/delete/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Failed to delete allocation data");
      }

      // Fetch updated allocation list
      fetchData();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="table-container">
      <div className="project-details">
        <div variant="subtitle1">PID: {projectDetails.projectCode}</div>
        <div variant="subtitle1">
          Project Manager:{" "}
          {projectDetails.projectManager.firstName +
            " " +
            projectDetails.projectManager.lastName}
        </div>
        <div variant="subtitle1">
          Department : {projectDetails.projectManager.department.deptName}{" "}
        </div>
        <div variant="subtitle1">Name: {projectDetails.projectName}</div>
        <div variant="subtitle1">Start Date: {projectDetails.startDate}</div>
        <div variant="subtitle1">End Date: {projectDetails.endDate}</div>
        <div variant="subtitle1">
          Allocation %: {projectDetails.allocationCheck}
        </div>
      </div>

      <div className="input-container">
        <select value={talentId} onChange={(e) => setTalentId(e.target.value)}>
          <option value="">Select Talent ID</option>
          {talentList.map((talent) => (
            <option key={talent.id} value={talent.id}>
              {talent.empId}
            </option>
          ))}
        </select>
        <input
          type="date"
          id="myDateInput"
          placeholder="Start Date"
          value={startDate}
          max={projectDetails.endDate}
          onChange={(e) => setStartDate(e.target.value)}
        />
        <input
          type="date"
          id="myDateInput"
          placeholder="End Date"
          value={endDate}
          max={projectDetails.endDate}
          onChange={(e) => setEndDate(e.target.value)}
        />
        <input
          type="text"
          placeholder="Allocation Percentage"
          value={allocationPercentage}
          onChange={(e) => setAllocationPercentage(e.target.value)}
        />
        <button className="btn" onClick={handleAddEmp}>
          Add
        </button>
      </div>
      <div>
        <table className="allotable">
          <thead>
            <tr>
              <th>Employee ID</th>
              <th>Employee Name</th>
              <th>Designation</th>
              <th>Start Date</th>
              <th>End Date</th>
              <th>Allocation Percentage</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {allocationList.map((employee) => (
              <tr key={employee.talent.id}>
                <td
                  className="alert"
                  onClick={() => handleEmpDetails(employee.talent.id)}
                >
                  {employee.talent.empId}
                </td>
                <td onClick={() => handleEmpDetails(employee.talent.id)}>
                  {employee.talent.firstName + " " + employee.talent.lastName}
                </td>
                <td onClick={() => handleEmpDetails(employee.talent.id)}>
                  {employee.talent.designation.desgnName}
                </td>
                <td onClick={() => handleEmpDetails(employee.talent.id)}>
                  {employee.startDate}
                </td>
                <td onClick={() => handleEmpDetails(employee.talent.id)}>
                  {employee.endDate}
                </td>
                <td onClick={() => handleEmpDetails(employee.talent.id)}>
                  {employee.allocationPercent}
                </td>
                <td>
                  <div
                    className="btnicon flex"
                    onClick={() => {
                      handleDelete(employee.id);
                    }}
                  >
                    <FaTrash />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ProjectDetails;

import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import "../../css/ProjectDetails.css";
import { FaTrash } from "react-icons/fa";
import { getProjectDetails } from "../../apis/Project";
import { getAllTalents } from "../../apis/Talent";

function ProjectDetails() {
  const { projectId } = useParams();
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

  const setAllTalents = async () => {
    try {
      const response = await getAllTalents();
      if (!response.ok) {
        throw new Error("Failed to fetch talent list from API");
      }
      const talentData = await response.json();
      setTalentList(talentData);
    } catch (err) {
      console.error(err);
    }
  };

  const setProjectDetail = async () => {
    try {
      const projectResponse = await getProjectDetails(projectId);
      if (!projectResponse.ok) {
        throw new Error("Failed to fetch project data from API");
      }
      const projectData = await projectResponse.json();
      setProjectDetails(projectData);
    } catch (err) {
      console.error(err);
    }
  };

  const setProjectAllocations = async () => {
    try {
      const allocationResponse = await fetch(
        `/project/getAllocation/${projectId}`
      );
      if (!allocationResponse.ok) {
        throw new Error("Failed to fetch talent list from API");
      }
      const allocationList = await allocationResponse.json();
      setAllocationList(allocationList);
    } catch (err) {
      console.error(err);
    }
  };

  const addAllocation = async (e) => {
    e.preventDefault();
    try {
      // Validate input

      // Create new allocation object
      const newAllocation = {
        startDate: startDate,
        endDate: endDate,
        allocationPercent: allocationPercentage,
        project: {
          id: projectId,
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

      // Fetch updated allocation list
      setAllocationList();
    } catch (error) {
      console.error(error);
    }
  };

  const deleteAllocation = async (id) => {
    try {
      // Delete the allocation from the API
      const response = await fetch(`/allocation/delete/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Failed to delete allocation data");
      }

      // Fetch updated allocation list
      setAllocationList();
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    setAllTalents();
    setProjectDetail();
    setProjectAllocations();
    const dateInput = document.getElementById("myDateInput");
    const currentDate = new Date().toISOString().split("T")[0];
    dateInput.setAttribute("min", currentDate);
  }, []);

  return (
    <div className="project-details-ctn flex vflex">
      <div className="project-details">
        <div className="details-field">PID: {projectDetails.projectCode}</div>
        <div className="details-field">Name: {projectDetails.projectName}</div>
        <div className="details-field">
          Project Manager:{" "}
          {projectDetails.projectManager.firstName +
            " " +
            projectDetails.projectManager.lastName}
        </div>
        <div className="details-field">
          Department : {projectDetails.projectManager.department.deptName}{" "}
        </div>
        <div className="details-field">
          Start Date: {projectDetails.startDate}
        </div>
        <div className="details-field">End Date: {projectDetails.endDate}</div>
        <div className="details-field">
          Allocation %: {projectDetails.allocationCheck}
        </div>
      </div>

      <form className="add-allocation-ctn" onSubmit={addAllocation}>
        <select
          value={talentId}
          onChange={(e) => setTalentId(e.target.value)}
          required
        >
          <option value="">Select Talent</option>
          {talentList.map((talent) => (
            <option key={talent.id} value={talent.id}>
              {talent.empId} + " - " + {talent.firstName} + " " +{" "}
              {talent.lastName}
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
          required
        />
        <input
          type="date"
          id="myDateInput"
          placeholder="End Date"
          value={endDate}
          max={projectDetails.endDate}
          onChange={(e) => setEndDate(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Allocation Percentage"
          value={allocationPercentage}
          onChange={(e) => setAllocationPercentage(e.target.value)}
          required
        />
        <button className="btn" type="submit">
          Add
        </button>
      </form>
      <div>
        <table className="allocations">
          <thead className="allocation-table-head">
            <tr>
              <th>Talent ID</th>
              <th>Talent Name</th>
              <th>Designation</th>
              <th>Start Date</th>
              <th>End Date</th>
              <th>Allocation %</th>
              <th></th>
            </tr>
          </thead>
          <tbody className="allocation-table-body">
            {allocationList.map((allocation) => (
              <Link to={`/talent/${talentId}`}>
                <tr className="allocation-item" key={allocation.talent.id}>
                  <td className="alert">{allocation.talent.empId}</td>
                  <td>
                    {allocation.talent.firstName +
                      " " +
                      allocation.talent.lastName}
                  </td>
                  <td>{allocation.talent.designation.desgnName}</td>
                  <td>{allocation.startDate}</td>
                  <td>{allocation.endDate}</td>
                  <td>{allocation.allocationPercent}</td>
                  <td
                    className="btnicon flex"
                    onClick={() => {
                      deleteAllocation(allocation.id);
                    }}
                  >
                    <FaTrash />
                  </td>
                </tr>
              </Link>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ProjectDetails;

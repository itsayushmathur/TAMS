import React, { useState } from "react";
import { useSelector } from "react-redux";
import "../css/Dashboard.css";

function Dashboard() {
  const talentDetails = useSelector((store) => store.talentDetails);
  const [authenticated, setAuthenticated] = useState(false);
  const [formData, setFormData] = useState({
    empId: "",
    firstName: "",
    lastName: "",
    phoneNo: "",
    location: "",
    empEmail: "",
    dateOfJoining: "",
    experience: "",
    allocation: "",
    deptName: "",
    desgnName: "",
    empAllocatedProjects: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleAuthentication = (e) => {
    e.preventDefault();
     // Get the values of email and password inputs
  const email = e.target.elements.email.value;
  const password = e.target.elements.password.value;

  // Perform authentication logic
  if (email === "admin@tams.com" && password === "@12Tams") {
    // Authentication successful
    setAuthenticated(true);
  } else {
    // Authentication failed
    alert("Invalid email or password");
  }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  if (!authenticated) {
    return (
      <div className="dashboard">
        <div className="login-form">
          <h2>Authentication Required</h2>
          <form onSubmit={handleAuthentication}>
            <input type="email" name="email" placeholder="Email" required />
            <input
              type="password"
              name="password"
              placeholder="Password"
              required
            />
            <button type="submit">Authenticate</button>
          </form>
        </div>
      </div>
    );
  }

  if (submitted) {
    return (
      <div className="dashboard">
        <div className="welcome-message">
          <h2>Welcome, {formData.firstName}!</h2>
          <p>Your Data Given:</p>
          <ul>
            <li>Emp ID: {formData.empId}</li>
            <li>First Name: {formData.firstName}</li>
            <li>Last Name: {formData.lastName}</li>
            <li>Phone Number: {formData.phoneNo}</li>
            <li>Location: {formData.location}</li>
            <li>Email: {formData.empEmail}</li>
            <li>Date of Joining: {formData.dateOfJoining}</li>
            <li>Experience: {formData.experience}</li>
            <li>Allocation %: {formData.allocation}</li>
            <li>Department: {formData.deptName}</li>
            <li>Designation: {formData.desgnName}</li>
            <li>Emp Allocated Projects: {formData.empAllocatedProjects}</li>
          </ul>
        </div>
      </div>
    );
  }

  return (
    <div className="dashboard">
      <div className="talent-details-ctn">
        <div className="talentDetails">
          <form onSubmit={handleSubmit}>
            <div className="grid-container">
              <div className="grid-item">
                <div className="label">Emp ID:</div>
                <input
                  name="empId"
                  value={formData.empId}
                  onChange={handleInputChange}
                />
              </div>
              <div className="grid-item">
                <div className="label">First Name:</div>
                <input
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                />
              </div>
              <div className="grid-item">
                <div className="label">Last Name:</div>
                <input
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                />
              </div>
              <div className="grid-item">
                <div className="label">Phone Number:</div>
                <input
                  name="phoneNo"
                  value={formData.phoneNo}
                  onChange={handleInputChange}
                />
              </div>
              <div className="grid-item">
                <div className="label">Location:</div>
                <input
                  name="location"
                  value={formData.location}
                  onChange={handleInputChange}
                />
              </div>
              <div className="grid-item">
                <div className="label">Email:</div>
                <input
                  name="empEmail"
                  value={formData.empEmail}
                  onChange={handleInputChange}
                />
              </div>
              <div className="grid-item">
                <div className="label">Date of Joining:</div>
                <input
                  name="dateOfJoining"
                  value={formData.dateOfJoining}
                  onChange={handleInputChange}
                />
              </div>
              <div className="grid-item">
                <div className="label">Experience:</div>
                <input
                  name="experience"
                  value={formData.experience}
                  onChange={handleInputChange}
                />
              </div>
              <div className="grid-item">
                <div className="label">Allocation %:</div>
                <input
                  name="allocation"
                  value={formData.allocation}
                  onChange={handleInputChange}
                />
              </div>
              <div className="grid-item">
                <div className="label">Department:</div>
                <input
                  name="deptName"
                  value={formData.deptName}
                  onChange={handleInputChange}
                />
              </div>
              <div className="grid-item">
                <div className="label">Designation:</div>
                <input
                  name="desgnName"
                  value={formData.desgnName}
                  onChange={handleInputChange}
                />
              </div>
              <div className="grid-item">
                <div className="label">Emp Allocated Projects:</div>
                <input
                  name="empAllocatedProjects"
                  value={formData.empAllocatedProjects}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;

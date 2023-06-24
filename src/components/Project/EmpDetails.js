import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import talentData from "./talentData";

function EmpDetails() {
  const { talentId } = useParams();
  const [empDetails, setEmpDetails] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    const talent = talentData.find((talent) => talent.talentId === talentId);
    if (talent) {
      setEmpDetails(talent);
    } else {
      console.error("Talent not found");
    }
  };

  return (
    <div>
      {empDetails ? (
        <div>
          <h1>Employee Details</h1>
          <h2>{empDetails.firstName} {empDetails.lastName}</h2>
          <p>Talent ID: {empDetails.talentId}</p>
          {/* Display rest of the details */}
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}

export default EmpDetails;

import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Authentication() {
  const authenticated = useSelector((store) => store.authenticated);

  const navigate = useNavigate();

  useEffect(() => {
    authenticated && navigate("/");
  }, []);
  return <div>Authentication</div>;
}

export default Authentication;

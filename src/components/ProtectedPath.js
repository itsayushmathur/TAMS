import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

function ProtectedPath() {
  const authenticated = useSelector((store) => store.authenticated);
  return authenticated ? <Outlet /> : <Navigate to="/auth" />;
}

export default ProtectedPath;

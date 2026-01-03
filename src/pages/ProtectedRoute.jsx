import { useContext, useState } from "react";
import AuthContext from "../context/AuthContext";
import { Navigate, useNavigate } from "react-router-dom";

function ProtectedRoute({children}) {

  const { isAuth } = useContext(AuthContext)
  if (!isAuth) {
    return <Navigate to="/login" />;
  }
  return children;
}
export default ProtectedRoute;

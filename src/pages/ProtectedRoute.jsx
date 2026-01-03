import { useContext, useState } from "react";
import AuthContext from "../context/AuthContext";
import { Navigate, useNavigate } from "react-router-dom";

function ProtectedRoute() {

  const { isAuth } = useContext(AuthContext)

  return (
    <>
    </>
    )
}
export default ProtectedRoute;

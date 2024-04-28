import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import cookies from "js-cookie"
export const PrivateRoute = ({ children }) => {
  // const isAuth = localStorage.getItem("token")
  const isAuth=cookies.get("user")
  const location = useLocation();
  // console.log(isAuth)

  if (!isAuth) {
    return <Navigate to={"/login"} state={location.pathname} replace />;
  }
  return children; 
};

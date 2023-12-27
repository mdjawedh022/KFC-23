import React from 'react'
import { Navigate, useLocation } from 'react-router-dom';


export const PrivateAdmin = ({children}) => {
    const isAuth = localStorage.getItem("admintoken");
    const location=useLocation();

    if(!isAuth){
        return <Navigate to={"/signin"} state={location.pathname} replace/>
    }
  return children
}


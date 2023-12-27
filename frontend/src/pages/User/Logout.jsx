import React from "react";
import { useDispatch } from "react-redux";
import { logoutUser } from "../../Redux/auth/action";
import { useNavigate } from "react-router-dom";
import "./user.css";
import Navbar from "../../components/Navbar/Navbar";
import Footers from "../../components/Footer/Footer";
const Logout= () => {
  const dispatch = useDispatch();
const navigate=useNavigate();
  const handleLogout = () => {
    dispatch(logoutUser())
     navigate("/login");
  };
const name=localStorage.getItem("user")
  return (
    <>
      <Navbar />
      <div className="logout">
        <div className="logout-wrapper">
          <div className="lines-logout1">
            <div className="line-logout1"></div>
            <div className="line-logout1"></div>
            <div className="line-logout1"></div>
          </div>
          <h2>Hi,{name}</h2>
          <button onClick={handleLogout}>Logout</button>
        </div>
      </div>
      <Footers />
    </>
  );
};

export default Logout;

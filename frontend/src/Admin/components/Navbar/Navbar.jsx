import React, { useState } from 'react'
import {
  BsPersonCircle,
  BsJustify,
} from "react-icons/bs";
import "./navbar.css";
import cat01 from "../../../assets/CAT01.svg";
import { Link, useNavigate } from 'react-router-dom';
import Sidebar from '../Sidebar/Sidebar';
import { useDispatch } from 'react-redux';
import { AdminlogoutUser } from '../../../Redux/AdminUser/action';

const Navbar = () => {
  const dispatch=useDispatch()
  const navigate=useNavigate()
    const [openSidebarToggle, setOpenSidebarToggle] = useState(false);
let isAuth = localStorage.getItem("admintoken");
    const OpenSidebar = () => {
      setOpenSidebarToggle(!openSidebarToggle);
    };
const name = localStorage.getItem("adminuser");
    const handleLogout=()=>{
      dispatch(AdminlogoutUser());
      navigate('/')
    }
  return (
    <>
      <header className="header">
        <div className="menu-icon-header">
          <BsJustify className="icons" onClick={OpenSidebar} />
        </div>
        <div className="header-left">
          <Link to="/admin">
            <img src={cat01} alt="logo" />
          </Link>
        </div>
        <div className="header-right">
          {!isAuth ? (
            <BsPersonCircle className="icons" />
          ) : (
            <div className="icon-btn-logout-div" onClick={handleLogout}>
              {" "}
              <BsPersonCircle className="icons" />
              <button className="btn-logout">{name}</button>
            </div>
          )}
        </div>
      </header>
      <Sidebar
        openSidebarToggle={openSidebarToggle}
        OpenSidebar={OpenSidebar}
      />
    </>
  );
};

export default Navbar

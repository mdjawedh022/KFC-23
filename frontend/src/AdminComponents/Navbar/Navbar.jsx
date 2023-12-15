import React from 'react'
import {
  BsFillBellFill,
  BsFillEnvelopeFill,
  BsPersonCircle,
  BsSearch,
  BsJustify,
} from "react-icons/bs";
import "./navbar.css";

const Navbar = ({ OpenSidebar }) => {
  return (
    <header className="header">
      <div className="menu-icon-header">
        <BsJustify className="icons" onClick={OpenSidebar} />
      </div>
      <div className="header-left">
        <BsSearch className="icons" />
      </div>
      <div className="header-right">
        <BsFillBellFill className="icons" />
        <BsFillEnvelopeFill className="icons" />
        <BsPersonCircle className="icons" />
      </div>
    </header>
  );
};

export default Navbar

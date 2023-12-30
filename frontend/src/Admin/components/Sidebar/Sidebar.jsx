import React from "react";
import {
  BsCart3,
  BsGrid1X2Fill,
  BsFillArchiveFill,
  BsFillGrid3X3GapFill,
  BsPeopleFill,
  BsMenuButtonWideFill,
} from "react-icons/bs";
import { FiShoppingBag } from "react-icons/fi";

import { Link } from "react-router-dom";

function Sidebar({ openSidebarToggle, OpenSidebar }) {
  return (
    <aside
      id="sidebar"
      className={openSidebarToggle ? "sidebar-responsive" : ""}
    >
      <div className="sidebar-title">
        <div className="sidebar-brand">
          <BsCart3 className="icon_header" /> ADMIN
        </div>
        <span className="icons close_icon" onClick={OpenSidebar}>
          X
        </span>
      </div>

      <ul className="sidebar-list">
        <li className="sidebar-list-item">
          <Link to="/admin">
            <BsGrid1X2Fill className="icons" /> Dashboard
          </Link>
        </li>

        <li className="sidebar-list-item">
          <Link to="/adminUser">
            <BsFillGrid3X3GapFill className="icons" /> Admin User
          </Link>
        </li>
        <li className="sidebar-list-item">
          <Link to="/customer">
            <BsPeopleFill className="icons" /> Customers
          </Link>
        </li>
        <li className="sidebar-list-item">
          <Link to="/product">
            <BsFillArchiveFill className="icons" /> Products
          </Link>
        </li>
        <li className="sidebar-list-item">
          <Link to="/add">
            <BsMenuButtonWideFill className="icons" /> Add
          </Link>
        </li>
        <li className="sidebar-list-item">
          <Link to="/order">
            <FiShoppingBag className="icons" /> Order
          </Link>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;

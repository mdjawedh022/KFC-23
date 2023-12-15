import React from "react";
import {
  BsCart3,
  BsGrid1X2Fill,
  BsFillArchiveFill,
  BsFillGrid3X3GapFill,
  BsPeopleFill,
  BsListCheck,
  BsMenuButtonWideFill,
  BsFillGearFill,
} from "react-icons/bs";
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
          <Link>
            <BsGrid1X2Fill className="icons" /> Dashboard
          </Link>
        </li>

        <li className="sidebar-list-item">
          <Link>
            <BsFillGrid3X3GapFill className="icons" /> Admin User
          </Link>
        </li>
        <li className="sidebar-list-item">
          <Link>
            <BsPeopleFill className="icons" /> Customers
          </Link>
        </li>
        <li className="sidebar-list-item">
          <Link>
            <BsFillArchiveFill className="icons" /> Products
          </Link>
        </li>
        <li className="sidebar-list-item">
          <Link>
            <BsMenuButtonWideFill className="icons" /> Add
          </Link>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;

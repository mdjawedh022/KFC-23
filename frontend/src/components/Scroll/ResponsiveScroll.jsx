import React from 'react'
import { Link } from "react-scroll";
import "../../pages/Menu/menu.css";

const ResponsiveScroll = () => {
  return (
    <>
      <div className="responsive-menu">
        <ul>
          <li>
            {" "}
            <Link to="PERI PERI MATCH SPECIALS" smooth={true} duration={2000}>
              PERI PERI MATCH SPECIALS
            </Link>
          </li>
          <li>
            {" "}
            <Link to="CHICKEN ROLLS" smooth={true} duration={2000}>
              CHICKEN ROLLS
            </Link>
          </li>
          <li>
            {" "}
            <Link to="CHICKEN BUCKETS" smooth={true} duration={2000}>
              CHICKEN BUCKETS
            </Link>
          </li>
          <li>
            {" "}
            <Link to="BIRYANI BUCKETS" smooth={true} duration={2000}>
              BIRYANI BUCKETS
            </Link>
          </li>
          <li>
            {" "}
            <Link to="BOX MEALS" smooth={true} duration={2000}>
              BOX MEALS
            </Link>
          </li>
          <li>
            {" "}
            <Link to="BURGERS" smooth={true} duration={2000}>
              BURGERS
            </Link>
          </li>
          <li>
            <Link to="SNACKS" smooth={true} duration={2000}>
              SNACKS
            </Link>
          </li>
          <li>
            <Link to="BEVERAGES" smooth={true} duration={2000}>
              BEVERAGES
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default ResponsiveScroll

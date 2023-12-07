import React from 'react'
import "../../pages/Menu/menu.css"
import { Link } from "react-scroll";
const Scroll = () => {
  return (
    <>
      <div className="list-menu-link">
        <Link to="PERI PERI MATCH SPECIALS" smooth={true} duration={2000}>
          <p>PERI PERI MATCH SPECIALS</p>
        </Link>
        <Link to="CHICKEN ROLLS" smooth={true} duration={2000}>
          <p>CHICKEN ROLLS</p>
        </Link>
        <Link to="CHICKEN BUCKETS" smooth={true} duration={2000}>
          <p>CHICKEN BUCKETS</p>
        </Link>
        <Link to="BIRYANI BUCKETS" smooth={true} duration={2000}>
          <p>BIRYANI BUCKETS</p>
        </Link>
        <Link to="BOX MEALS" smooth={true} duration={2000}>
          <p>BOX MEALS</p>
        </Link>
        <Link to="BURGERS" smooth={true} duration={2000}>
          <p>BURGERS</p>
        </Link>
        <Link to="SNACKS" smooth={true} duration={2000}>
          <p>SNACKS</p>
        </Link>
        <Link to="BEVERAGES" smooth={true} duration={2000}>
          <p>BEVERAGES</p>
        </Link>
      </div>
    </>
  );
}

export default Scroll

import React, { useState } from 'react'
import "./navbar.css"
import { Link } from 'react-router-dom'
import SideBar from '../SideBar/SideBar'
import {RxHamburgerMenu} from "react-icons/rx"
import Location from '../Location/Location'
import cat01 from "../../assets/CAT01.svg"
import bucket from "../../assets/bucket_cart_icon.svg"
import account_icon from "../../assets/Account_Icon.svg"

const Navbar = () => {
const [sidebar,setSidebar]=useState(false);



    return (
      <>
        <div className="navbar-wrapper">
          <div className="hamburger">
            <RxHamburgerMenu onClick={() => setSidebar(true)} />
          </div>
          <div className="navbar-logo-menu">
            <Link to="/">
              <img src={cat01} alt="logo" />
            </Link>
            <ul>
              <li>
                <Link>Menu</Link>
              </li>
              <li>
                <Link to="/deals">Deals</Link>
              </li>
            </ul>
          </div>
          <div className="navbar-login-cart">
            <div className="sigup-login-wrapper">
              <img src={account_icon} alt="account" />
              <h5>Sign In</h5>
            </div>
            <div className="cart-price">
              <p>₹ 0</p>

              <div className="logocart">
                <img src={bucket} alt="" />
                <p id="cartitems">0</p>
              </div>
            </div>
          </div>
        </div>
        <Location />
        {sidebar ? <SideBar setSidebar={setSidebar} /> : null}
      </>
    );
}

export default Navbar

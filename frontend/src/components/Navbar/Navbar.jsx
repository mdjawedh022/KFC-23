import React, { useEffect, useState } from 'react'
import "./navbar.css"
import { Link, useNavigate} from 'react-router-dom'
import SideBar from '../SideBar/SideBar'
import {RxHamburgerMenu} from "react-icons/rx"
import Location from '../Location/Location'
import cat01 from "../../assets/CAT01.svg"
import bucket from "../../assets/bucket_cart_icon.svg"
import account_icon from "../../assets/Account_Icon.svg"
import { useSelector } from 'react-redux'
import { FaUserTie } from "react-icons/fa";

const Navbar = () => {
const [sidebar,setSidebar]=useState(false);
const navigate=useNavigate();
//  const dispatch = useDispatch();
 const { cart } = useSelector((state) => state.cartReducer);
let isAuth = localStorage.getItem("token");

const handelRouterToCart=()=>{
  if (!isAuth) {
    alert("login first");
     navigate("/login");
  }else{
  navigate('/cart')
  }
}

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
                <Link to="/menu">Menu</Link>
              </li>
              <li>
                <Link to="/deals">Deals</Link>
              </li>
            </ul>
          </div>
          <div className="navbar-login-cart">
            {isAuth ? (
              <Link
                className="sigup-login-wrapper"
                to="/logout"
                // onClick={handlelogout}
              >
                <FaUserTie />
                <h5>Account</h5>
              </Link>
            ) : (
              <Link
                className="sigup-login-wrapper"
                to="/login"
                // onClick={handlelogout}
              >
                <img src={account_icon} alt="account" />
                <h5>Sign In</h5>
              </Link>
            )}
            <div className="cart-price">
              <p>
                ₹{" "}
                {cart
                  .reduce((acc, item) => acc + item.price * item.quantity, 0)
                  .toFixed(2)}
              </p>

              <div onClick={handelRouterToCart} className="logocart">
                <img src={bucket} alt="" />
                <p id="cartitems">
                  {cart.reduce((acc, item) => acc + item.quantity, 0)}
                </p>
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

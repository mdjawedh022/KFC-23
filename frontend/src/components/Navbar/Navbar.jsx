import React, { useState } from 'react'
import "./navbar.css"
import { Link } from 'react-router-dom'
import SideBar from '../SideBar/SideBar'
import {RxHamburgerMenu} from "react-icons/rx"
import Location from '../Location/Location'

const Navbar = () => {
const [sidebar,setSidebar]=useState(false);



    return (
    <>
      <div className="navbar-wrapper">
        <div className="hamburger"><RxHamburgerMenu onClick={()=>setSidebar(true)}/></div>
        <div className="navbar-logo-menu">
          <Link to="/"><img src="https://online.kfc.co.in/static/media/kfcLogo.492728c6.svg" alt="logo" /></Link>
        <ul>
        <li><Link>Menu</Link></li>
        <li><Link>Deals</Link></li>
        </ul>
        </div>
        <div className="navbar-login-cart">
            <div className="sigup-login-wrapper">
                <img src="https://images.ctfassets.net/wtodlh47qxpt/6bJdGLRkksNvWP4LI9ZiFF/cb89d6393492fd093e0f99980abfa39e/Account_Icon.svg" alt="account" />
               <h5>Sign In</h5>
            </div>
            <div className="cart-price">
            <p>₹ 0</p>
          
            <div className="logocart"> 
           
            <img
              src="https://images.ctfassets.net/wtodlh47qxpt/6qtBVFuno7pdwOQ9RIvYm9/d13e9b7242980972cf49beddde2cc295/bucket_cart_icon.svg"
              alt=""
            />
            <p id="cartitems">0</p>
          </div>
          </div>
        </div>
      </div>
   <Location/>
   {sidebar?   <SideBar setSidebar={setSidebar}/>:null}
    </>
  )
}

export default Navbar

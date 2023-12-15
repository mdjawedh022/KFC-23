import React from 'react'
import { IoIosArrowBack } from "react-icons/io";
import { Link, useNavigate } from 'react-router-dom';
import cat01 from "../../assets/CAT01.svg";
import account_icon from "../../assets/Account_Icon.svg";
import "./checkNavbar.css";

const CheckNavbar = () => {
    const navigate=useNavigate()

    const handleBacktocart = () => {
      navigate("/cart");
    };
  return (
    <>
      <div className="checkNavbar-wrapper">
        <div className='checkNavbar-inner'>
          <div className="checkNavbar-first">
            <button onClick={handleBacktocart}>Back to cart</button>{" "}
            <IoIosArrowBack className="backtocart" onClick={handleBacktocart} />
          </div>
          <div className="checkNavbar-second">
            <img src={cat01} alt="" onClick={()=>navigate('/')}/>
            <Link>CHECKOUT</Link>
          </div>
          <Link className="checkNavbar-third">
            <img src={account_icon} alt="account" />
            <h5>Sign In</h5>
          </Link>
        </div>
      </div>
    </>
  );
}

export default CheckNavbar

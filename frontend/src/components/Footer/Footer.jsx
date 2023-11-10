import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";
import { HiLocationMarker } from "react-icons/hi";
import { AiOutlineInstagram, AiOutlineTwitter } from "react-icons/ai";
import { BiLogoFacebook } from "react-icons/bi";
import KFC_Logo from "../../assets/KFC_Logo.svg";
import google_play from "../../assets/google_play.svg";
import apple from "../../assets/apple.svg";
import AccordionFooter from "../AccordionFooter/AccordionFooter";

const Footers = () => {
  return (
    <>
    <div className="footer-wrapper">
      <div className="inner-main-wrapper">
        <div className="inner-footer-wrapper">
          <img src={KFC_Logo} alt="logo" className="logo-footer" />
          <div className="footer-menu-link">
            <ul>
              <li>
                <Link to="/"> Legal</Link>
              </li>
              <li>
                <Link to="/">Terms and Condition</Link>
              </li>
              <li>
                <Link to="/">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/">Disclaimer</Link>
              </li>
              <li>
                <Link to="/">Caution Notice</Link>
              </li>
            </ul>
            <ul>
              <li>
                <Link to="/">KFC India</Link>
              </li>
              <li>
                <Link to="/">About KFC</Link>
              </li>
              <li>
                <Link to="/">KFC Care</Link>
              </li>
              <li>
                <Link to="/">Careers</Link>
              </li>
              <li>
                <Link to="/">Our Golden Past</Link>
              </li>
            </ul>
            <ul>
              <li>
                <Link to="/">KFC Food</Link>
              </li>
              <li>
                <Link to="/">Menu</Link>
              </li>
              <li>
                <Link to="/">Order Lookup</Link>
              </li>
              <li>
                <Link to="/">Gift Card</Link>
              </li>
              <li>
                <Link to="/">Nutrition & Allergen</Link>
              </li>
            </ul>
            <ul>
              <li>
                <Link to="/">Support</Link>
              </li>
              <li>
                <Link to="/">Get Help</Link>
              </li>
              <li>
                <Link to="/">Contact Us</Link>
              </li>
              <li>
                <Link to="/">KFC Feedback</Link>
              </li>
              <li>
                <Link to="/">Privacy Policy</Link>
              </li>
            </ul>
          </div>
        </div>
        {/* -------------------------------- */}
        <div className="location-download-link">
          <Link>
            <HiLocationMarker style={{ color: "red" }} />
            Find a KFC
          </Link>
          <div className="download-app">
            <img src={google_play} alt="" />
            <img src={apple} alt="" />
          </div>
        </div>
      </div>
      <div className="copywriter">
        <p>Copyright © KFC Corporation 2023 All Rights Reserved</p>
        <div className="social-media-link">
          <AiOutlineInstagram  className="icons-footer"/>
          <BiLogoFacebook className="icons-footer"/>
          <AiOutlineTwitter className="icons-footer"/>
        </div>
      </div>
      
    </div>
    <AccordionFooter/>
    
    </>
  );
};

export default Footers;

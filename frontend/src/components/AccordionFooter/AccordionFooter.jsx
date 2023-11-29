import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import "./accordion.css";
import KFC_Logo from "../../assets/KFC_Logo.svg";
import { Link } from "react-router-dom";
import { HiLocationMarker } from "react-icons/hi";
import google_play from "../../assets/google_play.svg";
import apple from "../../assets/apple.svg";
import { AiOutlineInstagram, AiOutlineTwitter } from "react-icons/ai";
import { BiLogoFacebook } from "react-icons/bi";

const AccordionFooter = () => {
  // const [isActive, setIsActive] = useState(false);
  const [isfi, setIsfi] = useState(false);
  const [isse, setIsse] = useState(false);
  const [isth, setIsth] = useState(false);
  const [isfor, setIsfor] = useState(false);
  return (
    <div className="accordion-wrapper">
      <div className="accordion-logo">
        <img src={KFC_Logo} alt="" />
      </div>
      <div className="according-inner-wrapper">
        <div className="accordion-item" onClick={() => setIsfi(!isfi)}>
          <div className="accordion-title">
            <p>Legal</p>
            <div>{isfi ? <IoIosArrowDown /> : <IoIosArrowUp />}</div>
          </div>
          {isfi && isfi ? (
            <div className="accordion-Text">
              <p>Terms and Conditions</p>
              <p>Privacy PolicyC</p>
              <p>Disclaimer</p>
              <p>Caution Notice</p>
            </div>
          ) : null}
        </div>

        {/* ----------------second--------- */}
        <div className="accordion-item" onClick={() => setIsse(!isse)}>
          <div className="accordion-title">
            <p>KFC India</p>
            <div>{isse ? <IoIosArrowDown /> : <IoIosArrowUp />}</div>
          </div>
          {isse && isse ? (
            <div className="accordion-Text">
              <p>About KFC</p>
              <p>KFC Care</p>
              <p>Careers</p>
              <p>Our Golden Past</p>
            </div>
          ) : null}
        </div>

        {/* -------------------third---- */}
        <div className="accordion-item" onClick={() => setIsth(!isth)}>
          <div className="accordion-title">
            <p>KFC Food</p>
            <div>{isth ? <IoIosArrowDown /> : <IoIosArrowUp />}</div>
          </div>
          {isth && isth ? (
            <div className="accordion-Text">
              <p>Menu</p>
              <p>Order Lookup</p>
              <p>Gift Card</p>
              <p>Nutrition & Allergen</p>
            </div>
          ) : null}
        </div>
        {/* -------four------------ */}
        <div className="accordion-item" onClick={() => setIsfor(!isfor)}>
          <div className="accordion-title">
            <p>Support</p>
            <div>{isfor ? <IoIosArrowDown /> : <IoIosArrowUp />}</div>
          </div>
          {isfor && isfor ? (
            <div className="accordion-Text">
              <p>Get Help</p>
              <p>Contact Us</p>
              <p>KFC Feedback</p>
              <p>Privacy Policy</p>
            </div>
          ) : null}
        </div>
        <div className="find-me">
          <HiLocationMarker style={{ color: "red" }} />
          <Link>Find a KFC</Link>
        </div>
      </div>
      {/* -------------------- */}
      <div className="download-acc">
        <p>Download App</p>
        <div className="download-app-acc">
          <img src={google_play} alt="" />
          <img src={apple} alt="" />
        </div>
      </div>
      <div className="social-media-link-acc">
        <AiOutlineInstagram className="icons-footer-acc" />
        <BiLogoFacebook className="icons-footer-acc" />
        <AiOutlineTwitter className="icons-footer-acc" />
      </div>
      <div className="copywriter-acc">
        <p>Copyright © KFC Corporation 2023 All Rights Reserved</p>
      </div>
    </div>
  );
};

export default AccordionFooter;


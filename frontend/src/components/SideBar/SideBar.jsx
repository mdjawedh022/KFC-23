import React from "react";
import "./sideBar.css";
import { AiOutlineClose } from "react-icons/ai";
import {HiArrowLongRight} from "react-icons/hi2"
import { Link } from "react-router-dom";
const SideBar = ({ setSidebar }) => {
  return (
    <div className="sidebar-wrapper">
      <div className="modal-inner">
        <div className="side-header">
          <div className="side-close">
            <AiOutlineClose onClick={() => setSidebar(false)} />
          </div>
          <div className="lines">
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </div>
          <div className="logocart1">
            <img
              src="https://images.ctfassets.net/wtodlh47qxpt/6qtBVFuno7pdwOQ9RIvYm9/d13e9b7242980972cf49beddde2cc295/bucket_cart_icon.svg"
              alt=""
            />
            <p id="cartitems1">0</p>
          </div>
        </div>
        {/* ..................body............................. */}
        <div className="sidebar-body">
          <h2 className="sidebar-header">
            LET'S GET <br /> COOKIN'
          </h2>
          <div className="sidebar-account">
            <img
              src="https://images.ctfassets.net/wtodlh47qxpt/6bJdGLRkksNvWP4LI9ZiFF/cb89d6393492fd093e0f99980abfa39e/Account_Icon.svg"
              alt="account"
            />
            <p>
              Sign in / Sign up{" "}
              <HiArrowLongRight style={{ marginTop: "5px" }} />
            </p>
          </div>
          {/* ....................... */}
          <div className="menu-sidebar">
            <div>
              <Link to="/menu">Menu</Link>{" "}
            </div>
            <div className="img-sidebar-img">
              <img
                src="https://images.ctfassets.net/wtodlh47qxpt/4k2cm92M32R26grdRRbI3B/e335a7a29e35e5d7aa1900a7f65eea12/menu__1.png"
                alt=""
              />
            </div>
          </div>
          {/* ----------------------------------- */}
          <div className="menu-sidebar">
            <div>
              <Link to="/deals">Deals</Link>{" "}
            </div>
            <div className="img-sidebar-img">
              <img
                src="https://images.ctfassets.net/wtodlh47qxpt/7wp9jn9bCtkSpS2RklLTXD/9f5a47d39f34c6ede838ac01830659db/Deals.png"
                alt=""
              />
            </div>
          </div>
          {/* ---------------------------------------------- */}
          <div className="menu-sidebar-1">
            <p>Get Help</p>
            <p>Contact Us</p>
            <p>KFC Feedback</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;

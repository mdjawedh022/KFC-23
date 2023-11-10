import React from "react";
import { OfferItems } from "./OfferItems";
import { Link } from "react-router-dom";
// import { HiArrowLongRight } from "react-icons/hi2";
import "./nationalOffer.css";
const NationalOffer = () => {
  return (
    <div className="national-wrapper1">
      <div className="national-heading1">
        <h1>NATIONAL OFFERS</h1>
        <Link>Sign In to see exclusive offers & deals</Link>
      </div>
      <div className="national-wrapper-inner1">
        {OfferItems.map((el, i) => (
          <div className="offer-inner-div1" key={i}>
            <img src={el.img} alt="img" />
            <div className="offer-text1">
              {" "}
              <h2>{el.title}</h2>
              <p>{el.title}</p>
            </div>
            <div className="offer-link-btn1">
              <Link to="/">View Details</Link> <button>Redeem </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NationalOffer;

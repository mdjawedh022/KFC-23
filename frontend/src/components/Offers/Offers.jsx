import "./offers.css";
import Carousel from "react-elastic-carousel";
import React from "react";
import { OfferItems } from "./OfferItems";
import {Link} from "react-router-dom"
import {HiArrowLongRight} from "react-icons/hi2";


const breakPoints = [
    { width:380, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 3 },
];

export const Offers = () => {
  return (
  <div className="offers-wrapper">
     <div className="lines1">
            <div className="line1"></div>
            <div className="line1"></div>
            <div className="line1"></div>
          </div>
          <div className="offer-deals-heading">
            <h2>OFFERS & DEALS</h2>
            <Link to="/">Veiw All Deals <HiArrowLongRight /></Link>
          </div>
    <div className="offer-parent-div">
    <Carousel breakPoints={breakPoints}>
     {
        OfferItems.map((el ,i)=>(
            <div className="offer-inner-div" key={i}>
           <img src={el.img} alt="img" />
          <div className="offer-text"> <h2>{el.title}</h2>
           <p>{el.title}</p></div>
           <div className="offer-link-btn"><Link to="/">View Details</Link> <button>Redeem </button></div>
            </div>
        ))
     }
    </Carousel>
    </div>
  </div>
  )
};

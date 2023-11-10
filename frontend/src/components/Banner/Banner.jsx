import React from 'react'
import "./banner.css"
const Banner = () => {
  return (
    <>
      <div className="banner-section">
        <div className="banner-img">
          <img
            src="https://online.kfc.co.in/static/media/offer_deals_banner.777f20e1.svg"
            alt=""
          />
        </div>
        <div className="banner-text">
          <h1>DEALS & OFFERS</h1>
        </div>
        <div className="lines12">
          <div className="line21"></div>
          <div className="line21"></div>
          <div className="line21"></div>
        </div>
      </div>
    </>
  );
}

export default Banner

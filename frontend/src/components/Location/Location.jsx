import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import {BsArrowBarLeft}from "react-icons/bs"
import "./location.css";
const Location = () => {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState(false);

 const handleLocationSubmit = () => {
   // Save the location to local storage
   localStorage.setItem("userLocation");
   setOpen(false);
 };

  return (
    <>
      <div className="location-wrapper">
        <div className="location-inner">
          <h4>LET'OERDER FOR DELIVER, PICK UP, OR DINE-IN</h4>
          <button onClick={() => setOpen(true)}>Start Order</button>
        </div>
      </div>
      {open ? (
        <div className="location-modal">
          <div className="location-modal-inner">
            <div className="loaction-heading">
              <h2>START YOUR ORDER</h2>
              <AiOutlineClose
                className="aiclose"
                onClick={() => setOpen(false)}
              />
            </div>
            {input ? (
              <div className="btn-search">
                <input type="text" placeholder="Enter your location*" />
                <button onClick={() => setOpen(false)}>Submit</button> <br />
                <p onClick={() => setInput(false)}>
                  {" "}
                  <BsArrowBarLeft />
                  GO BACK
                </p>
              </div>
            ) : (
              <div className="loaction-modal-body">
                <h1>HOW WOULD YOU LIKE TO RECEIVE YOUR ORDER?</h1>
                <buttoon
                  className="location-modal-btn"
                  onClick={() => setInput(true)}
                >
                  Delivery
                </buttoon>
                <buttoon
                  className="location-modal-btn"
                  onClick={() => setInput(true)}
                >
                  Pick up
                </buttoon>
                <buttoon
                  className="location-modal-btn"
                  onClick={() => setInput(true)}
                >
                  Dine In
                </buttoon>
              </div>
            )}
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Location;

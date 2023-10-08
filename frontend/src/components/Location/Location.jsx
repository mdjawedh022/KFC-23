import React, { useState } from 'react'
import {AiOutlineClose } from "react-icons/ai";
import "./location.css";
const Location = () => {
    const [open,setOpen]=useState(false)
  return (
    <>
    <div className='location-wrapper'>
      <div className="location-inner">
        <h4>LET'OERDER FOR DELIVER, PICK UP, OR DINE-IN</h4><button onClick={()=>setOpen(true)}>Start Order</button>
      </div>
    </div>
   {open?  <div className="location-modal">
        <div className="location-modal-inner">
            <div className="loaction-heading">
                <h2>START YOUR ORDER</h2>
                <AiOutlineClose className='aiclose' onClick={()=>setOpen(false)} />
            </div>
            <div className="loaction-modal-body">
                <h1>HOW WOULD YOU LIKE TO RECEIVE YOUR ORDER?</h1>
               <buttoon className="laction-modal-btn">Delivery</buttoon>
               <buttoon className="laction-modal-btn">Pick up</buttoon>
               <buttoon className="laction-modal-btn">Dine In</buttoon>

            </div>
        </div>
     </div>:null}
    </>
  )
}

export default Location

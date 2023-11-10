import React, { useState } from 'react'
import { accordionData } from './accordionData';
import "./accordion.css"
const AccordionFooter = () => {
    const [isActive, setIsActive] = useState(false);
    
  return (
      <div className="accordion-wrapper">
       {accordionData.map((el,i)=>(
        <div key={i} className='accordion-item' onClick={()=>setIsActive(!isActive)}>
         <div className="accordion-title">
            <p>{el.title}</p>
            <div>{isActive?'-':'+'}</div>
         </div>
         {isActive &&isActive? <div className='accordion-Text'>{el.text[0]}</div>:null}
        </div>
       ))}
      </div>  
  )
}

export default AccordionFooter

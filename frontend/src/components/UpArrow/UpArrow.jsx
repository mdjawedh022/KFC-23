import React from "react";
import "./upArrow.css";
import { IoMdArrowDropup } from "react-icons/io";
const UpArrow = () => {
  const handleUparrow = () => {
    window.scrollTo({
      top: 0,
      behavior:"smooth"
    });
  };
  return (
    <div className="up-arrow" onClick={handleUparrow}>
      <IoMdArrowDropup className="icon-up" />
    </div>
  );
};

export default UpArrow;

import React from 'react'
import Navbar from '../../components/Navbar/Navbar';
import Footers from '../../components/Footer/Footer';
import "./cart.css";
import { useNavigate } from 'react-router-dom';
const Cart = () => {
  const navigate=useNavigate()
  const handleHome=()=>{
navigate('/menu')
  }
  return (
    <>
      <Navbar />
      <div className="cart-wrapper">
        <div className="lines4">
          <div className="line41"></div>
          <div className="line41"></div>
          <div className="line41"></div>
        </div>
        {/* ------------------heading----------------- */}
        <div className="cart-title">
          <h3>MY CART</h3> 
        </div>
        {/* ---------------------------------cart------------------------ */}
        <div className="cart-inner">
          {/* --------------------empty cart section-------------------------- */}
          <div className="cart-empty-wrapper">
            <div className="empty-cart">
              <div className="cart-text-empty">
                <h1>YOUR CART IS EMPTY. LET'S START AN ORDER!</h1>
                <button onClick={handleHome}>Start Order</button>
              </div>
              <div className="cart-img-empty">
                <img
                  src="https://online.kfc.co.in/static/media/empty_cart.32f17a45.png"
                  alt="empty"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footers />
    </>
  );
}

export default Cart

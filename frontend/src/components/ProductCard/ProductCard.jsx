import React, { useState } from "react";
import "./productCard.css";
import { useDispatch, useSelector } from "react-redux";
import { postCart } from "../../Redux/Cart/action";

const ProductCard = ({ productData }) => {
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state.cartReducer);
  const {  category, images, title, price, description } = productData;
 const [toast, setToast] = useState(false);
 const [errorToast,setErrorToast]=useState(false)
 const [alert,setAlert]=useState(false);
//  -------------------------------------------
  const handleAddToCart = () => {
      let isAuth = localStorage.getItem("token");
     dispatch(postCart(title));
    const isProductInCart = cart.filter((item) => item.title === title);
   if(isAuth){
 if (isProductInCart.length <= 0) {
   dispatch(postCart(productData));
   setToast(true);
   setTimeout(() => {
     setToast(false);
   }, 3000);
 } else {
   setErrorToast(true);
   setTimeout(() => {
     setErrorToast(false);
   }, 3000);
 }
   } else{
setAlert(true)
setTimeout(()=>{
setAlert(false)
},3000)
   }
  };

  // console.log(productData)
  return (
    <>
      <div className="card-menu">
        <div className="card1-menu">
          <img src={images} alt="" />
        </div>
        <div className="card2-menu">
          <p className="title">{title}</p>
          <div className="title-menu">
            <img
              src="https://online.kfc.co.in/static/media/Non_veg_dot_Icon.d975d1f9.svg"
              alt=""
            />
            <p>{category}</p>
          </div>

          <p className="price-menu">₹{price}</p>
          <p className="des-menu">{description}</p>
          <button className="btn-menu" onClick={() => handleAddToCart(title)}>
            Add to Cart{" "}
            <img
              src="https://online.kfc.co.in/static/media/Icon_Add_to_Cart.58b87a9b.svg"
              alt=""
            />
          </button>
        </div>
      </div>
      <div className="toast-container">
        {toast && (
          <button className="btn-alert-toast">
            Product added in the cart😊
          </button>
        )}
      </div>
      <div className="toast-container">
        {errorToast && (
          <button className="btn-alert-toast1">
            product already added in cart😒
          </button>
        )}
      </div>
      <div className="toast-container">
        {alert && (
          <button className="btn-alert-toast1">
            please login first !
          </button>
        )}
      </div>
    </>
  );
};

export default ProductCard;

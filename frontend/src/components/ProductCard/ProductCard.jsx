import React from "react";
import "./productCard.css";
import { useDispatch, useSelector } from "react-redux";
import { postCart } from "../../Redux/Cart/action";

const ProductCard = ({ productData }) => {
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state.cartReducer);
  const {  category, images, title, price, description } = productData;

  const handleAddToCart = () => {
      // const data = { category, images, title, price, description }; 
     dispatch(postCart(productData));
    // const isProductInCart = cart.filter((item) => item.title === title);
    // if (isProductInCart.length === 0) {
    //   dispatch(postCart(productData));
    //   alert("Product added to the cart successfully!");
    // } else {
    //   alert("This item is already in your cart!");
    // }
  };

  // console.log(productData)
  return (
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
        <button className="btn-menu" onClick={() => handleAddToCart()}>
          Add to Cart{" "}
          <img
            src="https://online.kfc.co.in/static/media/Icon_Add_to_Cart.58b87a9b.svg"
            alt=""
          />
        </button>
      </div>
    </div>
  );
};

export default ProductCard;

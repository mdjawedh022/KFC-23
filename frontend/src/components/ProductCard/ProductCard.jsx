import React from "react";
import "./productCard.css";
import { postCart } from "../../Redux/Cart/action";
import { useDispatch } from "react-redux";

const ProductCard = ({ productData }) => {
  const dispatch = useDispatch();

  const { _id, category, images, title, price, description } = productData;

  const handleAddToCart = () => {
    dispatch(postCart(productData));
      // console.log(productData);
      alert("item add successfully in cart")
  };

  return (
    <div className="card-menu" key={_id}>
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
        <button className="btn-menu" onClick={handleAddToCart}>
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

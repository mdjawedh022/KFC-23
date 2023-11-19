import React from 'react'
import "./productCard.css"
const ProductCard = ({productData}) => {
      const { _id, category, images, title, price, description, quantity } =
        productData;
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
        <button className='btn-menu'>
          Add to Cart{" "}
          <img
            src="https://online.kfc.co.in/static/media/Icon_Add_to_Cart.58b87a9b.svg"
            alt=""
          />
        </button>
      </div>
    </div>
  );
}

export default ProductCard

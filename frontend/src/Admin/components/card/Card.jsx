import React, { useState } from "react";
import "./card.css";
import { useDispatch } from "react-redux";
import { deleteSeller } from "../../../Redux/Sellerproduct/action";
import Update from "../../Add/Update";

const Card = (data) => {
  const dispatch = useDispatch();
  const { _id, title, images, description, price, category, cate, sellerId } =
    data;
  const [isUpdating, setIsUpdating] = useState(false);

  const handleUpdateSeller = () => {
    // Toggle the value of isUpdating
    setIsUpdating(!isUpdating);
  };

  const handleDeleteSeller = (id) => {
    alert("Delete Successfully!");
    dispatch(deleteSeller(id));
  };

  return (
    <>
      {isUpdating ? (
        <Update
          title={title}
          _id={_id}
          images={images}
          description={description}
          price={price}
          category={category}
          cate={cate}
          sellerId={sellerId}
          setIsUpdating={setIsUpdating}
          isUpdating={isUpdating}
        />
      ) : (
        <div className="card-wrapper-admin" key={_id}>
          <div className="card-img-admin">
            <img src={images} alt={title} className="admin-img-product" />
          </div>
          <div className="admin-car-2">
            <div className="card-text-de">
              <p>{title}</p>
              <p>{description}</p>
            </div>
            <div className="card-cate">
              <p>{cate}</p>
              <p>{category}</p>
              <p>₹{price}</p>
            </div>
            <div className="card-button">
              <button onClick={handleUpdateSeller}>Update</button>
              <button onClick={() => handleDeleteSeller(_id)}>Delete</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Card;

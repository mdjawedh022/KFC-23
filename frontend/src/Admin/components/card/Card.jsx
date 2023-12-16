import React from 'react'
import "./card.css";
import { useDispatch } from 'react-redux';
import { deleteSeller } from '../../../Redux/Sellerproduct/action';
const Card = (data) => {
    const dispatch = useDispatch();
    const { _id, title, images, description, price, category, cate } = data;
   
    

const handleDeleteSeller=(id)=>{
    alert("Delete Successfully!")
    dispatch(deleteSeller(id))
}
  return (
    <div className="card-wrapper-admin" key={_id}>
      <div className="card-img-admin">
        <img src={images} alt={title} className="admin-img-product" />
      </div>
      <div className='admin-car-2'>
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
          <button>Update</button>
          <button onClick={()=>handleDeleteSeller(_id)}>Delete</button>
        </div>
      </div>
    </div>
  );
}

export default Card;
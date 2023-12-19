import React, { useState } from 'react'
import "./add.css";
import Navbar from "../components/Navbar/Navbar";
import { useDispatch } from 'react-redux';
import { updateSellerData } from '../../Redux/Sellerproduct/action';

const Update = ({
  _id,
  title,
  images,
  description,
  price,
  category,
  cate,
  sellerId,
  setIsUpdating,
}) => {
 const dispatch=useDispatch();
   const [updatedData, setUpdatedData] = useState({
     title: title,
     images:images,
     description: description,
     price: price,
     category: category,
     cate: cate,
     sellerId: sellerId
   });
  const handleSaveUpdate = () => {
    dispatch(updateSellerData(_id, updatedData));
    setIsUpdating(false);
  
  }
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setUpdatedData({
        ...updatedData,
        [name]: value,
      });
    };
  
  return (
    <>
      {/* <div className="grid-container">
        <Navbar /> */}
      <main className="main-container">
        <form action="" className="form-add" onSubmit={handleSaveUpdate}>
          <input
            type="text"
            placeholder="enter url..."
            value={updatedData.images}
            name="images"
            onChange={handleInputChange}
            required
          />
          <input
            type="text"
            placeholder="enter title..."
            required
            value={updatedData.title}
            name="title"
            onChange={handleInputChange}
          />
          <select
            name="category"
            id=""
            required
            value={updatedData.category}
            onChange={handleInputChange}
          >
            <option value="">select category...</option>
            <option value="Nonveg">Nonveg</option>
            <option value="veg">veg</option>
          </select>
          <input
            type="text"
            placeholder="enter price..."
            required
            value={updatedData.price}
            name="price"
            onChange={handleInputChange}
          />
          <input
            type="text"
            placeholder="enter description..."
            required
            value={updatedData.description}
            name="description"
            onChange={handleInputChange}
          />
          <select
            name="cate"
            id="cate"
            value={updatedData.cate}
            onChange={handleInputChange}
          >
            <option value="">select variety...</option>
            <option value="peri peri match specials">
              peri peri match specials
            </option>
            <option value="chicken buckets">chicken buckets</option>
            <option value="biryani buckets">biryani buckets</option>
            <option value="chicken Rolls">chicken Rolls</option>
            <option value="beverages">beverages</option>
            <option value="box meals">box meals</option>
            <option value="burgers">burgers</option>
            <option value="snacks">snacks</option>
          </select>
          <input
            type="text"
            placeholder="enter sellerId "
            required
            value={updatedData.sellerId}
            name="sellerId"
            onChange={handleInputChange}
          />
          <button type="submit">Update</button>
        </form>
      </main>
      {/* </div> */}
    </>
  );
};

export default Update

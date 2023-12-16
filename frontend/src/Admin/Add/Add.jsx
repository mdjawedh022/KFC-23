import React, { useState } from "react";
import "./add.css";
import Navbar from "../components/Navbar/Navbar"
import { useDispatch } from "react-redux";
import { postSeller } from "../../Redux/Add/action";
const Add = () => {
const dispatch=useDispatch()
const [images,setImages]=useState('');
const [title,setTitle]=useState('');
const [category,setCategory]=useState('');
const [price, setPrice] = useState("");
const [description,setDescription]=useState('');
const [cate,setCate]=useState('');
const [sellerId,setSellerId]=useState('');

 const handleSubmit = (e) => {
   e.preventDefault();
   const data = {
     images,
     title,
     category,
     price,
     description,
     cate,
     sellerId,
   };
  //  console.log("Form Data Submitted:",data )
   dispatch(postSeller(data));
   setImages("");
   setTitle("");
   setCategory("");
   setPrice("");
   setDescription("");
   setCate("");
   setSellerId("");
 };
  return (
    <>
      <div className="grid-container">
        <Navbar />
        <main className="main-container">
          <form action="" className="form-add" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="enter url..."
              required
              name="images"
              value={images}
              onChange={(e) => setImages(e.target.value)}
            />
            <input
              type="text"
              name="title"
              placeholder="enter title..."
              value={title}
              required
              onChange={(e) => setTitle(e.target.value)}
            />
            <select
              id=""
              required
              name="category"
              onChange={(e) => setCategory(e.target.value)}
              value={category}
            >
              <option value="">select category...</option>
              <option value="Nonveg">Nonveg</option>
              <option value="veg">veg</option>
            </select>
            <input
              type="text"
              name="price"
              placeholder="enter price..."
              required
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
            <input
              type="text"
              name="description"
              placeholder="enter description..."
              required
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <select
              name="cate"
              id="cate"
              value={cate}
              onChange={(e) => setCate(e.target.value)}
              required
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
              name="sellerId"
              placeholder="enter sellerId "
              required
              value={sellerId}
              onChange={(e) => setSellerId(e.target.value)}
            />
            <button type="submit">Add</button>
          </form>
        </main>
      </div>
    </>
  );
};

export default Add;

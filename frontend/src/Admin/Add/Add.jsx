import React, { useState } from "react";
import "./add.css";
import Navbar from "../components/Navbar/Navbar"
const Add = () => {
  const [formData, setFormData] = useState({
    images: "",
    title: "",
    category: "",
    price: "",
    description: "",
    cate: "",
    sellerId: "",
  });

  const handleChange = (e) => {
    // const { name, value } = e.target;
    // setFormData((prevData) => ({
    //   ...prevData,
    //   [name]: value,
    // }));
    setFormData(e.target.value)
  };

  const handleSubmit = () => {
    console.log("Form Data Submitted:", formData);
    //  setFormData({
    //    images: "",
    //    title: "",
    //    category: "",
    //    price: "",
    //    description: "",
    //    cate: "",
    //    sellerId: "",
    //  });
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
              value={formData.images}
              onChange={handleChange}
            />
            <input
              type="text"
              name="title"
              placeholder="enter title..."
              value={formData.title}
              required
              onChange={handleChange}
            />
            <select
              id=""
              required
              name="category"
              onChange={handleChange}
              value={formData.category}
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
              value={formData.price}
              onChange={handleChange}
            />
            <input
              type="text"
              name="description"
              placeholder="enter description..."
              required
              value={formData.description}
              onChange={handleChange}
            />
            <select
              name="cate"
              id="cate"
              value={formData.cate}
              onChange={handleChange}
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
              value={formData.sellerId}
              onChange={handleChange}
            />
            <button type="submit">Add</button>
          </form>
        </main>
      </div>
    </>
  );
};

export default Add;

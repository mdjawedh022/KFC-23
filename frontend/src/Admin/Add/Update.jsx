import React from 'react'
import "./add.css";
import Navbar from "../components/Navbar/Navbar";

const Update = () => {
  return (
    <>
      <div className="grid-container">
        <Navbar />
        <main className="main-container">
          <form action="" className="form-add">
            <input type="text" placeholder="enter url..." required />
            <input type="text" placeholder="enter title..." required />
            <select name="category" id="" required>
              <option value="">select category...</option>
              <option value="Nonveg">Nonveg</option>
              <option value="veg">veg</option>
            </select>
            <input type="text" placeholder="enter price..." required />
            <input type="text" placeholder="enter description..." required />
            <select name="cate" id="cate">
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
            <input type="text" placeholder="enter sellerId " required />
            <button>Update</button>
          </form>
        </main>
      </div>
    </>
  );
}

export default Update

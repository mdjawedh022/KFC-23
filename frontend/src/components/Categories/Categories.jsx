import React from "react";
import "./categories.css";
import { CategoriesMenu } from "./CategoriesMenu";

const Categories = () => {
  return (
    <div className="categories-wrapper">
      <div className="cat-heading">
        <h2>Browse Categories</h2> <div className="line-cat"></div>
      </div>
      <div className="cat-card">
        {CategoriesMenu.map((item, i) => (
          <div className="cat-card-child" key={i}>
            <img src={item.img} alt="img" />
            <h2 className={item.cl}>{item.title}{item.icon}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Categories;

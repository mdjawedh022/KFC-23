import React, { useEffect } from "react";
import Navbar from "../components/Navbar/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { getSellerProduct } from "../../Redux/Sellerproduct/action";
import Loading from "../../components/Loading/Loading";
import Card from "../components/card/Card";
import "./product.css"
const Product = () => {
  const dispatch = useDispatch();
  const { productAdmin,isLoading} = useSelector((state) => state.sellerProduct);
//   console.log(productAdmin);
  useEffect(() => {
    dispatch(getSellerProduct());
  }, [dispatch]);
  return (
    <>
      <div className="grid-container">
        <Navbar />
        <main className="main-container">
          {isLoading ? (
            <Loading />
          ) : (
            <div className="seller-product-wrapper">{
                productAdmin.map((el)=>{
                    return  <Card key={el._id} {...el}/>
                })
            }</div>
          )}
        </main>
      </div>
    </>
  );
};

export default Product;

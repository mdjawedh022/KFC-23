import axios from "axios";
import {
  POST_SELLER_PRODUCT_FAILED,
  POST_SELLER_PRODUCT_REQUEST,
  POST_SELLER_PRODUCT_SUCCESS,
} from "./actionType";

const postSellerReq = () => ({
  type: POST_SELLER_PRODUCT_REQUEST,
});
const postSellerSuc = () => ({
  type: POST_SELLER_PRODUCT_SUCCESS,
});
const postSellerFai = () => ({
  type: POST_SELLER_PRODUCT_FAILED,
});

// ---------------------------------

export const postSeller=(data)=>async(dispatch)=>{
   dispatch(postSellerReq())
    try{
const res = await axios.post(`http://localhost:3030/seller/post`,data);
dispatch(postSellerSuc())
console.log(res)
    }catch(err){
        console.log(err)
        dispatch(postSellerFai())
    }
}

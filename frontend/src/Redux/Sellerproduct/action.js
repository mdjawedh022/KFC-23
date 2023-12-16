import axios from "axios";
import { DELETE_SELLER_PRODUCT_SUCCESS, GET_SELLER_PRODUCT_FAILED, GET_SELLER_PRODUCT_REQUEST, GET_SELLER_PRODUCT_SUCCESS } from "./actionTypes";

const getSellerReq=()=>({type:GET_SELLER_PRODUCT_REQUEST});
const getSellerSuc=(payload)=>({type:GET_SELLER_PRODUCT_SUCCESS,payload});
const getSellerFail=()=>({type:GET_SELLER_PRODUCT_FAILED});

const deleteSellerSuc=()=>({type:DELETE_SELLER_PRODUCT_SUCCESS})

export const getSellerProduct=()=>async(dispatch)=>{
    dispatch(getSellerReq())
    try{
 const res = await axios.get(`http://localhost:3030/seller/get`);
 dispatch(getSellerSuc(res.data))
    }catch(err){
        console.log(err);
        dispatch(getSellerFail())
    }
}
// ----------------------------------
export const deleteSeller=(id)=>async(dispatch)=>{
try{
 await axios.delete(`http://localhost:3030/seller/delete/${id}`);
dispatch(getSellerProduct());
dispatch(deleteSellerSuc())
}catch(err){
    console.log(err)
}
}
import axios from "axios";
import { DELETE_SELLER_PRODUCT_SUCCESS, GET_SELLER_PRODUCT_FAILED, GET_SELLER_PRODUCT_REQUEST, GET_SELLER_PRODUCT_SUCCESS, UPDATE_sELLER_PRODUCT_SUCCESS } from "./actionTypes";

const getSellerReq=()=>({type:GET_SELLER_PRODUCT_REQUEST});
const getSellerSuc=(payload)=>({type:GET_SELLER_PRODUCT_SUCCESS,payload});
const getSellerFail=()=>({type:GET_SELLER_PRODUCT_FAILED});

const deleteSellerSuc=()=>({type:DELETE_SELLER_PRODUCT_SUCCESS})

const updateSeller=()=>({type:UPDATE_sELLER_PRODUCT_SUCCESS})
 
// axios.defaults.headers = {
//    "Content-Type": "application/json",
//    Authorization: localStorage.getItem("admintoken"),
//  };
export const getSellerProduct=()=>async(dispatch)=>{
    dispatch(getSellerReq())
    try{
 const res = await axios.get(`https://vast-pear-dalmatian-kit.cyclic.app/seller/get`);
 dispatch(getSellerSuc(res.data))
 console.log(res.data)
    }catch(err){
        console.log(err);
        dispatch(getSellerFail())
    }
}
// ----------------------------------
export const deleteSeller=(id)=>async(dispatch)=>{
try{
 await axios.delete(`https://vast-pear-dalmatian-kit.cyclic.app/delete/${id}`);
dispatch(getSellerProduct());
dispatch(deleteSellerSuc())
}catch(err){
    console.log(err)
}
}

// ------------------------------------
export const updateSellerData=(_id,updateData)=>async(dispatch)=>{
    try{
        const res = await axios.patch(
          `https://vast-pear-dalmatian-kit.cyclic.app/seller/update${_id}`,
          updateData
        );
        dispatch(getSellerProduct())
        dispatch(updateSeller())
        console.log(res)
    }catch(err){
        console.log(err)
    }
}
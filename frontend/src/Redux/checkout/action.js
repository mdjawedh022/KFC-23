import axios from "axios";

const { POST_CART_REQUEST } = require("../Cart/actionType");
const { POST_CHECKOUT_SUCCESS, POST_CHECKOUT_FAILED } = require("./actionTypes");

const postCeckoutReq = () => ({ type: POST_CART_REQUEST });
const postCeckoutSu = (payload) => ({ type: POST_CHECKOUT_SUCCESS, payload });
const postCeckoutEr = () => ({ type: POST_CHECKOUT_FAILED });

 axios.defaults.headers = {
   "Content-Type": "application/json",
   Authorization: localStorage.getItem("token"),
 };

export const checkOutpost=(dataCheck)=>async(dispatch)=>{
dispatch(postCeckoutReq());

  try {
    const res = await axios.post(
      "https://vast-pear-dalmatian-kit.cyclic.app/checkout/post",
      dataCheck
    ); 
    dispatch(postCeckoutSu(res.data));
    // console.log(res.data)
  } catch (err) {
    // console.error(err);
    dispatch(postCeckoutEr());
  }
}


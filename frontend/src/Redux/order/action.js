import axios from "axios";
import { ORDER_DELETE_SUCCESS, ORDER_GET_FAILED, ORDER_GET_REQUEST, ORDER_GET_SUCCESS } from "./actionTypes"



const orderReq=()=>({type:ORDER_GET_REQUEST});
const orderSuc=(payload)=>({type:ORDER_GET_SUCCESS,payload});
const orderFai=()=>({type:ORDER_GET_FAILED})

export const  orderData=()=>async(dispatch)=>{
    dispatch(orderReq())
try{
    const res=await axios.get(`https://vast-pear-dalmatian-kit.cyclic.app/order`)
    //  console.log(res.data);
     dispatch(orderSuc(res.data))
}catch(err){
    dispatch(orderFai())
}
}

const deleteSucorder = () => ({ type: ORDER_DELETE_SUCCESS });

export const orderDelete = (id) => async (dispatch) => {
  try {
    await axios.delete(
      `https://vast-pear-dalmatian-kit.cyclic.app/order/delete/${id}`
    );
    dispatch(orderData()); 
    dispatch(deleteSucorder());
  } catch (err) {
   
    console.error("Error deleting order:", err);
  }
};


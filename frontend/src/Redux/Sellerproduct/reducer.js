import { DELETE_SELLER_PRODUCT_SUCCESS, GET_SELLER_PRODUCT_FAILED, GET_SELLER_PRODUCT_REQUEST, GET_SELLER_PRODUCT_SUCCESS, UPDATE_sELLER_PRODUCT_SUCCESS } from "./actionTypes"

const initialState={
    productAdmin:[],
    isLoding:false,
    isError:false,
}

export const reducer=(state=initialState,{type,payload})=>{
switch (type) {
  case GET_SELLER_PRODUCT_REQUEST:
    return { ...state, isLoading: true, isError: false };
  case GET_SELLER_PRODUCT_SUCCESS:
    return { ...state, isLoading: false, productAdmin: payload };
  case GET_SELLER_PRODUCT_FAILED:
    return { ...state, isLoading: false, isError: true };
  case DELETE_SELLER_PRODUCT_SUCCESS:
    return { ...state, isLoading: false };
  case UPDATE_sELLER_PRODUCT_SUCCESS:
    return { ...state, isLoading: false, isError: false };
  default:
    return state;
}
}
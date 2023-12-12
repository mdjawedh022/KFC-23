import { POST_CART_FAILED } from "../Cart/actionType";
import { POST_CHECKOUT_REQUEST, POST_CHECKOUT_SUCCESS } from "./actionTypes";

const initialState = {
  checkout: [],
  isloading: false,
  isError: false,
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case POST_CHECKOUT_REQUEST:
      return { ...state, isloading: true, isError: false };
    case POST_CHECKOUT_SUCCESS:
      return { ...state, isloading: false, isError: false };
    case POST_CART_FAILED:
      return { ...state, isloading: false, isError: true };
    default:
      return state;
  }
};

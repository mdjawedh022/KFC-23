import {
  GET_CART_FAILED,
  GET_CART_REQUEST,
  GET_CART_SUCCESS,
  POST_CART_REQUEST,
  POST_CART_SUCCESS,
  POST_CART_FAILED,
  UPDATE_CART_REQUEST,
  UPDATE_CART_SUCCESS,
  UPDATE_CART_FAILED,
  DELETE_CART_REQUEST,
DELETE_CART_SUCCESS,
DELETE_CART_FAILED 
} from "./actionType";

const initialState = {
  cart: [],
  isLoading: false,
  isError: false,
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_CART_REQUEST:
    case POST_CART_REQUEST:
    case UPDATE_CART_REQUEST:
    case DELETE_CART_REQUEST:
      return { ...state, isLoading: true, isError: false };

    case GET_CART_SUCCESS:
      return { ...state, isLoading: false, cart: payload };

    case UPDATE_CART_SUCCESS:
     
      return { ...state, cart:payload };

      
    case POST_CART_SUCCESS:
    case DELETE_CART_SUCCESS:
      return { ...state, isLoading: false };

    case GET_CART_FAILED:
    case POST_CART_FAILED:
    case UPDATE_CART_FAILED:
    case DELETE_CART_FAILED:
      return { ...state, isLoading: false, isError: true };
    case "CLEAR_CART":
      return {
        ...state,
        cart: [],
      };
    default:
      return state;
  }
};

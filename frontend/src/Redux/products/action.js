import {
  GET_PRODUCT_REQUEST,
  GET_PRODUCT_SUCCESS,
  GET_PRODUCT_ERROR,
} from "./actionType";
import axios from "axios";

const getproductReq = () => {
  return { type: GET_PRODUCT_REQUEST };
};
const getproductSu = (payload) => {
  return { type: GET_PRODUCT_SUCCESS, payload };
};
const getproductEr = () => {
  return { type: GET_PRODUCT_ERROR };
};

export const getProduct = () => (dispatch) => {
  dispatch(getproductReq());
  axios
    .get(`http://localhost:3030/product`)
    .then((res) => {
      dispatch(getproductSu(res.data.products));
      // console.log(res);
    })
    .catch((err) => {
      dispatch(getproductEr(err));
    });
};

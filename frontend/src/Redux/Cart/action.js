import axios from "axios";
import {
  POST_CART_REQUEST,
  POST_CART_SUCCESS,
  POST_CART_FAILED,
  GET_CART_REQUEST,
  GET_CART_SUCCESS,
  GET_CART_FAILED,
  UPDATE_CART_REQUEST,
  UPDATE_CART_SUCCESS,
  UPDATE_CART_FAILED,
  DELETE_CART_REQUEST,
  DELETE_CART_SUCCESS,
  DELETE_CART_FAILED,
} from "./actionType";

const postCartReq = () => ({ type: POST_CART_REQUEST });
const postCartSu = () => ({ type: POST_CART_SUCCESS });
const postCartEr = () => ({ type: POST_CART_FAILED });

const getCartReq = () => ({ type: GET_CART_REQUEST });
const getCartSu = (payload) => ({ type: GET_CART_SUCCESS, payload });
const getCartEr = () => ({ type: GET_CART_FAILED });

const updateCartReq = () => ({ type: UPDATE_CART_REQUEST });
const updateCartSu = () => ({ type: UPDATE_CART_SUCCESS });
const updateCartEr = () => ({ type: UPDATE_CART_FAILED });

const deleteCartReq = () => ({ type: DELETE_CART_REQUEST });
const deleteCartSu = () => ({ type: DELETE_CART_SUCCESS });
const deleteCartEr = () => ({ type: DELETE_CART_FAILED });
// ------------------------------------------------------
axios.defaults.headers = {
  "Content-Type": "application/json",
  Authorization: localStorage.getItem("token") || "",
};
export const postCart = (data) => async (dispatch) => {
  dispatch(postCartReq());

  try {
    const res = await axios.post(
      "https://vast-pear-dalmatian-kit.cyclic.app/carts/post",
      data
    );
    dispatch(postCartSu(res.data));
    dispatch(getCart());
  } catch (err) {
    // console.error(err);
    dispatch(postCartEr());
  }
};
export const getCart = () => async (dispatch) => {
  // ------------------------------------------

  dispatch(getCartReq());

  try {
    const res = await axios.get(
      "https://vast-pear-dalmatian-kit.cyclic.app/carts",
      {
        Authorization: localStorage.getItem("token"),
      }
    );

    dispatch(getCartSu(res.data));
  } catch (err) {
    // console.error(err);
    dispatch(getCartEr());
  }
};
// ---------------------------------------
export const updateCart = (id, updatedQuantity) => async (dispatch) => {
  dispatch(updateCartReq());

  try {
    await axios.patch(
      `https://vast-pear-dalmatian-kit.cyclic.app/carts/update/${id}`,
      {
        quantity: updatedQuantity,
      }
    );
    dispatch(updateCartSu({ id, quantity: updatedQuantity }));
    dispatch(getCart());
  } catch (err) {
    // console.error(err);
    dispatch(updateCartEr());
  }
};
// ------------------------------------------
export const deleteCart = (id) => async (dispatch) => {
  dispatch(deleteCartReq());

  try {
    await axios.delete(
      `https://vast-pear-dalmatian-kit.cyclic.app/carts/delete/${id}`
    );
    dispatch(deleteCartSu());
    dispatch(getCart());
  } catch (err) {
    // console.error(err);
    dispatch(deleteCartEr());
  }
};
// --------------------------------------------
export const alldataDelete = () => async (dispatch) => {
  try {
    await axios.delete(
      `https://vast-pear-dalmatian-kit.cyclic.app/carts/delete`
    );
    dispatch(getCart());
  } catch (err) {
    // console.error(err);
  }
};

import { USER_GET_ERROR, USER_GET_REQUEST, USER_GET_SUCCESS } from "../auth/actionType";
import {
  ADMIN_USER_DELETE_FAILURE,
  ADMIN_USER_DELETE_REQUEST,
  ADMIN_USER_DELETE_SUCCESS,
  USER_ERROR,
  USER_LOGIN_ERROR,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
  USER_REQUEST,
  USER_SUCCESS,
} from "./actionType";
import axios from "axios";

const adminuserreque = () => ({ type: USER_REQUEST });
const adminusersucce = () => ({ type: USER_SUCCESS });
const adminuserFaile = () => ({ type: USER_ERROR });

const adminloginreque = () => ({ type: USER_LOGIN_REQUEST });
const adminloginsucce = () => ({ type: USER_LOGIN_SUCCESS });
const adminloginFaile = () => ({ type: USER_LOGIN_ERROR });

const usergetreque = () => ({ type: USER_GET_REQUEST });
const usergetsucce = (payload) => ({ type: USER_GET_SUCCESS, payload });
const usergetFaile = () => ({ type: USER_GET_ERROR });

// ---------------------------------------------
export const userAdminSignup = (userdata) => async (dispatch) => {
  dispatch(adminuserreque());
  return await axios.post(
      `https://vast-pear-dalmatian-kit.cyclic.app/admin/user/signup`,
      userdata
    ).then((res)=>{
      dispatch(adminusersucce())
      // console.log(res.data)
    }).catch((err)=>{
      dispatch(adminuserFaile())
    })
};

export const adminUserSignin = (userData) => async (dispatch) => {
  dispatch(adminloginreque());
  return await axios
    .post(
      `https://vast-pear-dalmatian-kit.cyclic.app/admin/user/signin`,
      userData
    )
    .then((res) => {
   dispatch(adminloginsucce())
    localStorage.setItem("admintoken", res.data.token);
    localStorage.setItem("adminuser", res.data.user);
  //  console.log(res.data)
    })
    .catch((err) => dispatch(adminloginFaile(err)));
};

export const AdminlogoutUser = () => (dispatch) => {
  localStorage.removeItem("admin");
  localStorage.removeItem("token");
  dispatch({ type: USER_LOGOUT });
};
export const adminuserGet = () => async (dispatch) => {
  dispatch(usergetreque());
  try {
    const res = await axios.get(`http://localhost:8080/adminuser`);
    dispatch(usergetsucce(res.data));
    console.log(res.data)
  } catch (err) {
    dispatch(usergetFaile(err));
  }
};

const deleteRequest = () => ({ type: ADMIN_USER_DELETE_REQUEST });
const deleteSuccess = () => ({ type: ADMIN_USER_DELETE_SUCCESS });
const deleteFailure = () => ({ type: ADMIN_USER_DELETE_FAILURE });

export const adminuserDelete = (id) => async (dispatch) => {
  dispatch(deleteRequest());
  try {
    await axios.delete(`http://localhost:8080/adminuser/delete/${id}`);
    dispatch(deleteSuccess());
    dispatch(adminuserGet()); 
  } catch (error) {
    dispatch(deleteFailure());
  }
};
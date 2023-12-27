import {
  USER_ERROR,
  USER_LOGIN_ERROR,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
  USER_REQUEST,
  USER_SUCCESS,
} from "./actionType";
import axios from "axios";

const userreque = () => ({ type: USER_REQUEST });
const usersucce = () => ({ type: USER_SUCCESS });
const userFaile = () => ({ type: USER_ERROR });

const loginreque = () => ({ type: USER_LOGIN_REQUEST });
const loginsucce = () => ({ type: USER_LOGIN_SUCCESS });
const loginFaile = () => ({ type: USER_LOGIN_ERROR });

// ---------------------------------------------
export const userRegister = (userdata) => async (dispatch) => {
  dispatch(userreque());
  try {
    const res = await axios.post(
      `https://vast-pear-dalmatian-kit.cyclic.app/users/register`,
      userdata
    );
    dispatch(usersucce());
    console.log(res);
  } catch (err) {
    dispatch(userFaile());
    console.log(err);
  }
};

export const loginUser = (loginData) => async (dispatch) => {
  dispatch(loginreque());
  try {
    const res = await axios.post(
      `https://vast-pear-dalmatian-kit.cyclic.app/users/login`,
      loginData
    );
    dispatch(loginsucce());
    console.log(res.data)
    localStorage.setItem("token",res.data.token)
    localStorage.setItem("user",res.data.user)
  } catch (err) {
    dispatch(loginFaile());
    console.log(err);
  }
};

export const logoutUser = () => (dispatch) => {
 localStorage.removeItem("user");
  localStorage.removeItem("token");
  dispatch({ type: USER_LOGOUT });
};


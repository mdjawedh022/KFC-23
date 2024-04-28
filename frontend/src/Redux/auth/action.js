import {
  ADMIN_USER_DELETE_FAILURE,
  ADMIN_USER_DELETE_REQUEST,
  ADMIN_USER_DELETE_SUCCESS,
  USER_ERROR,
  USER_GET_ERROR,
  USER_GET_REQUEST,
  USER_GET_SUCCESS,
  USER_LOGIN_ERROR,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
  USER_REQUEST,
  USER_SUCCESS,
} from "./actionType";
import axios from "axios";
import cookies from "js-cookie"

const userreque = () => ({ type: USER_REQUEST });
const usersucce = () => ({ type: USER_SUCCESS });
const userFaile = () => ({ type: USER_ERROR });

const loginreque = () => ({ type: USER_LOGIN_REQUEST });
const loginsucce = () => ({ type: USER_LOGIN_SUCCESS });
const loginFaile = () => ({ type: USER_LOGIN_ERROR });


const usergetreque = () => ({ type: USER_GET_REQUEST });
const usergetsucce = (payload) => ({ type: USER_GET_SUCCESS, payload });
const usergetFaile = () => ({ type: USER_GET_ERROR });
// ---------------------------------------------
export const userRegister = (userdata) => async (dispatch) => {
  dispatch(userreque());
  try {
     await axios.post(
      `https://vast-pear-dalmatian-kit.cyclic.app/users/register`,
      userdata
    );
    dispatch(usersucce());
    // console.log(res);
  } catch (err) {
    dispatch(userFaile());
    // console.log(err);
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
    cookies.set("user",res.data.user)
    
  } catch (err) {
    dispatch(loginFaile());
    console.log(err);
  }
};

export const logoutUser = () => (dispatch) => {
 localStorage.removeItem("user");
  localStorage.removeItem("token");
  cookies.remove("user")
  dispatch({ type: USER_LOGOUT });
};

export const usergetData=()=>async(dispatch)=>{
  dispatch(usergetreque())
  try{
 const res = await axios.get(
   `https://vast-pear-dalmatian-kit.cyclic.app/userGet`
 );
 dispatch(usergetsucce(res.data))
  }catch(err){
    dispatch(usergetFaile(err));
  }

}
const deleteRequest = () => ({ type: ADMIN_USER_DELETE_REQUEST });
const deleteSuccess = () => ({ type: ADMIN_USER_DELETE_SUCCESS });
const deleteFailure = () => ({ type: ADMIN_USER_DELETE_FAILURE });

export const userDelete = (id) => async (dispatch) => {
  dispatch(deleteRequest());
  try {
    await axios.delete(
      `https://vast-pear-dalmatian-kit.cyclic.app/userGet/delete/${id}`
    );
    dispatch(deleteSuccess());
    dispatch(usergetData());
  } catch (error) {
    dispatch(deleteFailure());
  }
};
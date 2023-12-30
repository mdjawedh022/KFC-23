import { ADMIN_USER_DELETE_FAILURE, ADMIN_USER_DELETE_REQUEST, ADMIN_USER_DELETE_SUCCESS, USER_ERROR, USER_GET_ERROR, USER_GET_REQUEST, USER_GET_SUCCESS, USER_LOGIN_ERROR, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_LOGOUT, USER_REQUEST, USER_SUCCESS } from "./actionType";

const initialState = {
  users: [],
  isLoading: false,
  isError: false,
 
};
export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case USER_REQUEST:
      return { ...state, isLoading: true, isError: false };
    case USER_SUCCESS:
      return { ...state, isLoading: false, isError: false };
    case USER_ERROR:
      return { ...state, isLoading: false, isError: true };
    case USER_LOGIN_REQUEST:
      return { ...state, isLoding: true, isError: false };
    case USER_LOGIN_SUCCESS:
      return { ...state, isLoding: false, isError: false };
    case USER_LOGIN_ERROR:
      return { ...state, isLoding: false, isError: true };
    case USER_LOGOUT:
      return { ...state, isLoading: false, isError: false, token: null };
    case USER_GET_REQUEST:
      return { ...state, isLoading: true, isError: false };
    case USER_GET_SUCCESS:
      return { ...state, isLoding: false, users: payload };
    case USER_GET_ERROR:
      return { ...state, isLoading: false, isError: true };
    case ADMIN_USER_DELETE_REQUEST:
      return { ...state, isLoding: true, isError: false };
    case ADMIN_USER_DELETE_SUCCESS:
      return { ...state, isLoding: false, isError: false };
    case ADMIN_USER_DELETE_FAILURE:
      return { ...state, isLoding: false, isError: true };
    default:
      return state;
  }
};

import { USER_ERROR, USER_REQUEST, USER_SUCCESS } from "./actionType";


const initialState = {
  isAuth:false,
  token:"",
  isLoading:false,
  isError:false
};

export const reducer=(state=initialState,{type,payload})=>{
switch (type) {
    case USER_REQUEST:
        return {...state,isLoading:true}
        case USER_SUCCESS:
            return {...state,isLoading:false,isAuth:true,token:payload}
            case USER_ERROR:
            return{...state,isLoading:false,isError:true}
  default:
    return state;

}
    
}
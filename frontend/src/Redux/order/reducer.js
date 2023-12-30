import { ORDER_DELETE_SUCCESS, ORDER_GET_FAILED, ORDER_GET_REQUEST, ORDER_GET_SUCCESS } from "./actionTypes";

const initialState={
    order:[],
    isLoding:false,
    isError:false
}

export const reducer=(state=initialState,{type,payload})=>{
    switch(type){
     case ORDER_GET_REQUEST:
        return{...state,isLoding:true,isError:false}
        case ORDER_GET_SUCCESS:
            return {...state,isLoding:false,order:payload}
            case ORDER_GET_FAILED:
                return{...state,isError:true,isLoading:false}
                case ORDER_DELETE_SUCCESS:
                    return {...state,isLoading:false,isError:false}
        default:
            return state;
    }
}
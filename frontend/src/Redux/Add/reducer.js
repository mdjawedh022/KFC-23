import { POST_SELLER_PRODUCT_FAILED, POST_SELLER_PRODUCT_REQUEST, POST_SELLER_PRODUCT_SUCCESS } from "./actionType"

const initialState={
    sellerProduct:[],
    isLoading:false,
    isError:false
}
export const reducer=(state=initialState,{type,payload})=>{
    switch(type){
    case POST_SELLER_PRODUCT_REQUEST:
        return {...state,isLoading:true,isError:false}
        case POST_SELLER_PRODUCT_SUCCESS:
            return{...state,isLoading:false,isError:false}
        case POST_SELLER_PRODUCT_FAILED:
            return {...state,isLoading:false,isError:true}
        default:
            return state
    }
}
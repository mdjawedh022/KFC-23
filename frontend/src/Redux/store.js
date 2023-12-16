import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { reducer as productReducer } from "./products/reducer";
import { reducer as cartReducer } from "./Cart/reducer";
import {reducer as checkout} from "./checkout/reducer";
import {reducer as sellerProduct} from "./Sellerproduct/reducer";
import {reducer as postSellerReducer} from "./Add/reducer"
let rootReducer = combineReducers({ productReducer, cartReducer,checkout,sellerProduct,postSellerReducer});
export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));


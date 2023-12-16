import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { reducer as productReducer } from "./products/reducer";
import { reducer as cartReducer } from "./Cart/reducer";
import {reducer as checkout} from "./checkout/reducer";
import {reducer as sellerProduct} from "./Sellerproduct/reducer";
let rootReducer = combineReducers({ productReducer, cartReducer,checkout,sellerProduct});
export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));


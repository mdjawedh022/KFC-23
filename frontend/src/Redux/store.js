import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { reducer as productReducer } from "./products/reducer";

let rootReducer = combineReducers({ productReducer });

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));

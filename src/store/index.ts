import { legacy_createStore as createStore, legacy_createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";




export const store = createStore({}, applyMiddleware(thunk));
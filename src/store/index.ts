import { legacy_createStore as createStore, legacy_createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { rootReducer } from "./reducers";




export const store = createStore(rootReducer, applyMiddleware(thunk));
import { combineReducers } from "redux";
import { userReducer } from "./userReducer";




export const rootReducer = combineReducers({
    user: userReducer,
});


// создаю тип для комбайн-редьюсера
export type RootState = ReturnType<typeof rootReducer>
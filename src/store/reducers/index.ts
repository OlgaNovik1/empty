import { combineReducers } from "redux";
import { userReducer } from "./userReducer";
import { todoReducer } from "./todoReducer";




export const rootReducer = combineReducers({
    user: userReducer,
    todo: todoReducer,
});


// создаю тип для комбайн-редьюсера
export type RootState = ReturnType<typeof rootReducer>
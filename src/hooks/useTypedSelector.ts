import { TypedUseSelectorHook, useSelector } from "react-redux";
import { RootState } from "../store/reducers";



// мой типизированный хук - и даю созданный тип ему
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
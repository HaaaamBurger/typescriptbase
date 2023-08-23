import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../redux";

const useAppDisptach = () => useDispatch<AppDispatch>();
const useAppSelector:TypedUseSelectorHook<RootState> = useSelector;

export {
    useAppDisptach,
    useAppSelector
}
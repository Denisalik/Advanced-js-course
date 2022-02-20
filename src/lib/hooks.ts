import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "src/redux/action-creators";
import { AppDispatch, RootState } from "src/redux/store";

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useAppActions = () => {
  const dispatch = useAppDispatch();
  return bindActionCreators(actionCreators, dispatch);
};

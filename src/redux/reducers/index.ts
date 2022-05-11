import { combineReducers } from "redux";
import { reducer as auth } from "./auth";
import { reducer as game } from "./game";

export const rootReducer = combineReducers({
  auth,
  game,
});

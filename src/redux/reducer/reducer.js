import { combineReducers } from "redux";
import userReducer from "../reducer/userReducer";

export const rootReducer = combineReducers({
  userReducer,
});

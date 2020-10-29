import { combineReducers } from "redux";
import global from "./global";
import ui from "./ui";

const appReducer = combineReducers({
  global,
  ui,
});

export default appReducer;

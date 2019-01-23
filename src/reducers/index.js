import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import loadingVisible from "./loadingReducer";
import buildData from "./saveBuildReducer";
import activeBuildTab from "./activeBuildTabReducer";

export default combineReducers({
  form: formReducer,
  loadingVisible,
  buildData,
  activeBuildTab
});

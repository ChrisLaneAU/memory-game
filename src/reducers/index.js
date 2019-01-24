import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import loadingVisible from "./loadingReducer";
import builtGames from "./saveBuildReducer";
import gameBuilder from "./gameBuilderReducers";

export default combineReducers({
  form: formReducer,
  loadingVisible,
  builtGames,
  gameBuilder
});

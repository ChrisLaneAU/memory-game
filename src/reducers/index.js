import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import loadingVisible from "./loadingReducer";
import congratsMsgs from "./congratsMsgsReducer";
import games from "./gamesReducer";
import rules from "./rulesReducer";
import pairs from "./pairsReducer";
import backOfCardImgs from "./backOfCardImgsReducer";
import gameBuilder from "./gameBuilderReducers";
import gamePlay from "./gamePlayReducers";
import modal from "./modalReducer";
import gameFinish from "./gameFinishReducer";

export default combineReducers({
  form: formReducer,
  loadingVisible,
  congratsMsgs,
  games,
  rules,
  pairs,
  backOfCardImgs,
  gameBuilder,
  gamePlay,
  modal,
  gameFinish
});

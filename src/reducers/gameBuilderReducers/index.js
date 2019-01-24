import { combineReducers } from "redux";
import activeTab from "./activeTabReducer";
import currentBuild from "./currentBuildReducer";
import viewerCardsToFront from "./viewerCardsToFrontReducer";

export default combineReducers({
  activeTab,
  currentBuild,
  viewerCardsToFront
});

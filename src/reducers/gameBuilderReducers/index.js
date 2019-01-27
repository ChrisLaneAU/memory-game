import { combineReducers } from "redux";
import activeTab from "./activeTabReducer";
import currentBuild from "./currentBuildReducer";
import images from "./imagesReducer";
import captions from "./captionsReducer";
import viewerCardsToFront from "./viewerCardsToFrontReducer";

export default combineReducers({
  activeTab,
  gameName: currentBuild.gameName,
  numOfPairs: currentBuild.numOfPairs,
  images,
  captions,
  viewerCardsToFront
});

import { combineReducers } from "redux";
import activeTab from "./activeTabReducer";
import gameName from "../utilReducers/gameNameReducer";
import numOfPairs from "../utilReducers/numOfPairsReducer";
import images from "./imagesReducer";
import captions from "./captionsReducer";
import viewerCardsToFront from "./viewerCardsToFrontReducer";

export default combineReducers({
  activeTab,
  gameName,
  numOfPairs,
  images,
  captions,
  viewerCardsToFront
});

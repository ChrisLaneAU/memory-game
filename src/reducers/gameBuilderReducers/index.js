import { combineReducers } from "redux";
import activeTab from "./activeTabReducer";
import gameName from "../utilReducers/gameNameReducer";
import numOfPairs from "../utilReducers/numOfPairsReducer";
import images from "./imagesReducer";
import activeImage from "./activeImageReducer";
import captions from "./captionsReducer";
import displayCardsToFront from "./displayCardsToFrontReducer";

export default combineReducers({
  activeTab,
  gameName,
  numOfPairs,
  images,
  activeImage,
  captions,
  displayCardsToFront
});

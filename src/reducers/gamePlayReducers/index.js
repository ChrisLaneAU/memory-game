import { combineReducers } from "redux";
import setupGameData from "./setupGameDataReducer";
import activeCard1 from "./activeCard1Reducer";
import activeCard2 from "./activeCard2Reducer";
import activePlayer from "./activePlayerReducer";
import score from "./scoreReducer";
import cards from "./cardsReducer";

export default combineReducers({
  numberOfPlayers: setupGameData.numberOfPlayers,
  playerNames: setupGameData.playerNames,
  numOfPairs: setupGameData.NumOfPairs,
  activeGame: setupGameData.activeGame,
  activeCard1,
  activeCard2,
  activePlayer,
  score,
  cards
});

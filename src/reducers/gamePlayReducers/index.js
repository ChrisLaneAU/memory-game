import { combineReducers } from "redux";
import numOfPlayers from "./numOfPlayersReducer";
import playerNames from "./playerNamesReducer";
import numOfPairs from "../utilReducers/numOfPairsReducer";
import activeGame from "./activeGameReducer";
import activeCard1 from "./activeCard1Reducer";
import activeCard2 from "./activeCard2Reducer";
import activePlayer from "./activePlayerReducer";
import score from "./scoreReducer";
import cards from "./cardsReducer";

export default combineReducers({
  numOfPlayers,
  playerNames,
  numOfPairs,
  activeGame,
  activeCard1,
  activeCard2,
  activePlayer,
  score,
  cards
});

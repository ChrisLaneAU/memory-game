import * as actionTypes from "./types";

// UTILITY

export const loadingVisible = visible => dispatch => {
  dispatch({
    type: actionTypes.LOADING_VISIBLE,
    payload: visible
  });
};

export const setCongratsMsgs = congratsMsgs => dispatch => {
  dispatch({
    type: actionTypes.SET_CONGRATS_MSGS,
    payload: congratsMsgs
  });
};

export const setModalData = modalData => dispatch => {
  dispatch({
    type: actionTypes.MODAL,
    payload: modalData
  });
};

export const setGameName = gameName => dispatch => {
  dispatch({
    type: actionTypes.GAME_NAME,
    payload: gameName
  });
};

export const setNumOfPairs = numOfPairs => dispatch => {
  dispatch({
    type: actionTypes.NUM_OF_PAIRS,
    payload: numOfPairs
  });
};

// BUILT GAMES

export const saveBuiltGame = games => dispatch => {
  dispatch({
    type: actionTypes.SAVE_BUILT_GAME,
    payload: games
  });
};

export const saveBuiltRules = (rules, gameName) => dispatch => {
  dispatch({
    type: actionTypes.SAVE_BUILT_RULES,
    payload: { rules, gameName }
  });
};

export const saveBuiltPairs = pairs => dispatch => {
  dispatch({
    type: actionTypes.SAVE_BUILT_PAIRS,
    payload: pairs
  });
};

export const saveBuiltBackCardsImg = backOfCardsImg => dispatch => {
  dispatch({
    type: actionTypes.SAVE_BUILT_BACK_IMG,
    payload: backOfCardsImg
  });
};

// GAME BUILDER

export const setActiveBuildTab = activeBuildTab => dispatch => {
  dispatch({
    type: actionTypes.ACTIVE_BUILD_TAB,
    payload: activeBuildTab
  });
};

export const setUploadedImages = images => dispatch => {
  dispatch({
    type: actionTypes.UPLOADED_IMAGES,
    payload: images
  });
};

export const setActiveImage = activeImageIndex => dispatch => {
  dispatch({
    type: actionTypes.SET_ACTIVE_IMAGE,
    payload: activeImageIndex
  });
};

export const setCardCaptions = captions => dispatch => {
  dispatch({
    type: actionTypes.SET_CARD_CAPTIONS,
    payload: captions
  });
};

export const setCardsToFront = cards => dispatch => {
  dispatch({
    type: actionTypes.VIEWER_CARDS_TO_FRONT,
    payload: cards
  });
};

// GAME PLAY

export const setNumOfPlayers = numOfPlayers => dispatch => {
  dispatch({
    type: actionTypes.NUM_OF_PLAYERS,
    payload: numOfPlayers
  });
};

export const setActiveGame = activeGame => dispatch => {
  dispatch({
    type: actionTypes.ACTIVE_GAME,
    payload: activeGame
  });
};

export const setPlayerNames = playerNames => dispatch => {
  dispatch({
    type: actionTypes.PLAYER_NAMES,
    payload: playerNames
  });
};

export const setActiveCard1 = activeCard1 => dispatch => {
  dispatch({
    type: actionTypes.SET_ACTIVE_CARD_1,
    payload: activeCard1
  });
};

export const setActiveCard2 = activeCard2 => dispatch => {
  dispatch({
    type: actionTypes.SET_ACTIVE_CARD_2,
    payload: activeCard2
  });
};

export const setActivePlayer = activePlayer => dispatch => {
  dispatch({
    type: actionTypes.SET_ACTIVE_PLAYER,
    payload: activePlayer
  });
};

export const setScore = score => dispatch => {
  dispatch({
    type: actionTypes.SET_SCORE,
    payload: score
  });
};

export const fetchPairs = pairs => dispatch => {
  dispatch({
    type: actionTypes.FETCH_PAIRS,
    payload: pairs
  });
};

// GAME FINISH

export const setGameFinish = gameFinish => dispatch => {
  dispatch({
    type: actionTypes.SET_GAME_FINISH,
    payload: gameFinish
  });
};

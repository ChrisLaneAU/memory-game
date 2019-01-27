import * as actionTypes from "./types";

// GENERAL

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

// BUILT GAMES

export const saveBuiltGame = games => dispatch => {
  dispatch({
    type: actionTypes.SAVE_BUILT_GAME,
    payload: games
  });
};

export const saveBuiltRules = rules => dispatch => {
  dispatch({
    type: actionTypes.SAVE_BUILT_RULES,
    payload: rules
  });
};

export const saveBuiltPairs = pairs => dispatch => {
  dispatch({
    type: actionTypes.SAVE_BUILT_PAIRS,
    payload: pairs
  });
};

export const saveBuiltBackCardImg = backOfCardImgs => dispatch => {
  dispatch({
    type: actionTypes.SAVE_BUILT_BACK_IMG,
    payload: backOfCardImgs
  });
};

// GAME BUILDER

export const setActiveBuildTab = activeBuildTab => dispatch => {
  dispatch({
    type: actionTypes.ACTIVE_BUILD_TAB,
    payload: activeBuildTab
  });
};

export const setCurrentBuild = currentBuild => dispatch => {
  dispatch({
    type: actionTypes.SET_CURRENT_BUILD,
    payload: currentBuild
  });
};

export const setUploadedImages = images => dispatch => {
  dispatch({
    type: actionTypes.UPLOADED_IMAGES,
    payload: images
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

export const setupGame = setupGameData => dispatch => {
  dispatch({
    type: actionTypes.SETUP_GAME,
    payload: setupGameData
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

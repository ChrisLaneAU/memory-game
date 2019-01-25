import * as actionTypes from "./types";

export const loadingVisible = visible => dispatch => {
  dispatch({
    type: actionTypes.LOADING_VISIBLE,
    payload: visible
  });
};

export const saveBuild = builtGames => dispatch => {
  dispatch({
    type: actionTypes.SAVE_BUILD,
    payload: builtGames
  });
};

export const setActiveBuildTab = activeBuildTab => dispatch => {
  dispatch({
    type: actionTypes.ACTIVE_BUILD_TAB,
    payload: activeBuildTab
  });
};

export const setCardsToFront = cards => dispatch => {
  dispatch({
    type: actionTypes.VIEWER_CARDS_TO_FRONT,
    payload: cards
  });
};

export const setCurrentBuild = buildData => dispatch => {
  dispatch({
    type: actionTypes.SET_CURRENT_BUILD,
    payload: buildData
  });
};

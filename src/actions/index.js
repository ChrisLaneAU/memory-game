import { LOADING_VISIBLE, SAVE_BUILD, ACTIVE_BUILD_TAB } from "./types";

export const loadingVisible = visible => dispatch => {
  dispatch({
    type: LOADING_VISIBLE,
    payload: visible
  });
};

export const saveBuild = buildData => dispatch => {
  dispatch({
    type: SAVE_BUILD,
    payload: buildData
  });
};

export const setActiveBuildTab = activeBuildTab => dispatch => {
  dispatch({
    type: ACTIVE_BUILD_TAB,
    payload: activeBuildTab
  });
};

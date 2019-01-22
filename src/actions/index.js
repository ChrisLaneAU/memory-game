import { LOADING_VISIBLE } from "./types";

export const loadingVisible = visible => dispatch => {
  console.log(visible);
  dispatch({
    type: LOADING_VISIBLE,
    payload: visible
  });
};

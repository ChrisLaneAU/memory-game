import { SAVE_BUILD } from "../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case SAVE_BUILD:
      return { ...state, [action.payload.gameName]: action.payload };
    default:
      return state;
  }
};

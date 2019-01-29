import { SAVE_BUILT_PAIRS } from "../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case SAVE_BUILT_PAIRS:
      return { ...state, [action.payload.gameName]: action.payload };
    default:
      return state;
  }
};

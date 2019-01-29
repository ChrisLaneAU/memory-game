import { SAVE_BUILT_BACK_IMG } from "../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case SAVE_BUILT_BACK_IMG:
      return { ...state, [action.payload.gameName]: action.payload };
    default:
      return state;
  }
};

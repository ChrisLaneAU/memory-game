import { SAVE_BUILT_RULES } from "../../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case SAVE_BUILT_RULES:
      return { ...state, [action.payload.gameName]: action.payload };
    default:
      return state;
  }
};

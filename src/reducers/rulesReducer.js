import { SAVE_BUILT_RULES } from "../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case SAVE_BUILT_RULES:
      const { gameName } = action.payload;
      return { ...state, [gameName]: action.payload.rules };
    default:
      return state;
  }
};

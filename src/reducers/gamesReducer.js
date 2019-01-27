import { SAVE_BUILT_GAME } from "../../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case SAVE_BUILT_GAME:
      return { ...state, [action.payload.gameName]: action.payload };
    default:
      return state;
  }
};

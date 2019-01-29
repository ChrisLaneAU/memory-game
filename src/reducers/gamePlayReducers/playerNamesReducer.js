import { PLAYER_NAMES } from "../../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case PLAYER_NAMES:
      return action.payload;
    default:
      return state;
  }
};

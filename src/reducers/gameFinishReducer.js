import { SET_GAME_FINISH } from "../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case SET_GAME_FINISH:
      return action.payload;
    default:
      return state;
  }
};

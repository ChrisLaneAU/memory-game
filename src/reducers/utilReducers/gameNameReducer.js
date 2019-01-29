import { GAME_NAME } from "../../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case GAME_NAME:
      return action.payload;
    default:
      return state;
  }
};

import { SET_ACTIVE_PLAYER } from "../../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case SET_ACTIVE_PLAYER:
      return action.payload;
    default:
      return state;
  }
};

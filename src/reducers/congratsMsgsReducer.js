import { SET_CONGRATS_MSGS } from "../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case SET_CONGRATS_MSGS:
      return action.payload;
    default:
      return state;
  }
};

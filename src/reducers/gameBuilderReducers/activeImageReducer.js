import { SET_ACTIVE_IMAGE } from "../../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case SET_ACTIVE_IMAGE:
      return action.payload;
    default:
      return state;
  }
};

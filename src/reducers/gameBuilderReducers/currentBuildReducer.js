import { SET_CURRENT_BUILD } from "../../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case SET_CURRENT_BUILD:
      return action.payload;
    default:
      return state;
  }
};

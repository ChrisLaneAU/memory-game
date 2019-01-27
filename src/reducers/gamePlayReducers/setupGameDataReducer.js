import { SAVE_BUILD_CONTENT } from "../../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case SAVE_BUILD_CONTENT:
      return action.payload;
    default:
      return state;
  }
};

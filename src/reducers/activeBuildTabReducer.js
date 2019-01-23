import { ACTIVE_BUILD_TAB } from "../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case ACTIVE_BUILD_TAB:
      return action.payload;
    default:
      return state;
  }
};

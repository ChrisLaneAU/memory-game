import { SHOW_LOADING } from "../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case SHOW_LOADING:
      return action.payload;
    default:
      return state;
  }
};

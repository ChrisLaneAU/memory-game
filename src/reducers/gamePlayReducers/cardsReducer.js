import { FETCH_PAIRS } from "../../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_PAIRS:
      return action.payload;
    default:
      return state;
  }
};

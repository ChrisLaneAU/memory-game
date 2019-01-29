import { NUM_OF_PAIRS } from "../../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case NUM_OF_PAIRS:
      return action.payload;
    default:
      return state;
  }
};

import { NUM_OF_PLAYERS } from "../../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case NUM_OF_PLAYERS:
      return action.payload;
    default:
      return state;
  }
};

import { DISPLAY_CARDS_TO_FRONT } from "../../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case DISPLAY_CARDS_TO_FRONT:
      return action.payload;
    default:
      return state;
  }
};

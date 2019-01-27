import { SET_CARD_CAPTIONS } from "../../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case SET_CARD_CAPTIONS:
      return action.payload;
    default:
      return state;
  }
};

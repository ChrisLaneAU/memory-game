import { SET_ACTIVE_CARD_1 } from "../../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case SET_ACTIVE_CARD_1:
      return action.payload;
    default:
      return state;
  }
};

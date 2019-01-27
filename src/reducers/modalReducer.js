import { MODAL } from "../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case MODAL:
      return action.payload;
    default:
      return state;
  }
};

import { LOADING_VISIBLE } from "../../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case LOADING_VISIBLE:
      return action.payload;
    default:
      return state;
  }
};

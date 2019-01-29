import { ACTIVE_GAME } from "../../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case ACTIVE_GAME:
      return action.payload;
    default:
      return state;
  }
};

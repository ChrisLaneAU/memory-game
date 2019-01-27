import { UPLOADED_IMAGES } from "../../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case UPLOADED_IMAGES:
      return action.payload;
    default:
      return state;
  }
};

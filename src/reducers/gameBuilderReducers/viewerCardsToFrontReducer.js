import { VIEWER_CARDS_TO_FRONT } from "../../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case VIEWER_CARDS_TO_FRONT:
      return { viewerCardsToFront: action.payload };
    default:
      return state;
  }
};

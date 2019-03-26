import { FETCH_FILM, CLEAR_FILM } from "../actions";

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_FILM:
      return action.payload.data;
    case CLEAR_FILM:
      return {};
    default:
      return state;
  }
};

import { FETCH_PERSON, CLEAR_PERSON } from "../actions";

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_PERSON:
      return action.payload.data;
    case CLEAR_PERSON:
      return {};
    default:
      return state;
  }
};

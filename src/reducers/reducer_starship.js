import { FETCH_STARSHIP, CLEAR_STARSHIP } from "../actions";

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_STARSHIP:
      return action.payload.data;
    case CLEAR_STARSHIP:
      return {};
    default:
      return state;
  }
}

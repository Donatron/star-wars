import { FETCH_PLANET, CLEAR_PLANET } from "../actions";

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_PLANET:
      return action.payload.data;
    case CLEAR_PLANET:
      return {};
    default:
      return state;
  }
}

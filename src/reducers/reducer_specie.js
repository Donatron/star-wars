import { FETCH_SPECIE, CLEAR_SPECIE } from "../actions";

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_SPECIE:
      return action.payload.data;
    case CLEAR_SPECIE:
      return {};
    default:
      return state;
  }
}

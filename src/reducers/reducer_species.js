import { FETCH_SPECIES, FETCH_SPECIE } from "../actions";

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_SPECIES:
      return action.payload;
    default:
      return state;
  }
}

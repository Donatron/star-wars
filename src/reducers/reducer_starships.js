import { FETCH_STARSHIPS } from "../actions";

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_STARSHIPS:
      return action.payload;
    default:
      return state;
  }
}

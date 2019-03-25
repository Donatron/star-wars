import { FETCH_FILMS, FETCH_FILM } from "../actions";

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_FILMS:
      return action.payload;
    default:
      return state;
  }
}

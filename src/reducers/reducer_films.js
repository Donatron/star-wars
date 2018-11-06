import { FETCH_FILMS, FETCH_FILM } from '../actions';

export default function (state = {}, action) {
  switch (action.type) {
    case FETCH_FILMS:
      return action.payload.data;
    case FETCH_FILM:
      return { ...state, film: action.payload.data };
    default:
      return state;
  }
}

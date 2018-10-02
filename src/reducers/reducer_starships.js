import { FETCH_STARSHIPS, FETCH_STARSHIP } from '../actions';

export default function(state = {}, action) {
  switch(action.type) {
    case FETCH_STARSHIPS:
      return action.payload.data;
    case FETCH_STARSHIP:
      return { ...state, starship: action.payload.data }
    default:
      return state
  }
}

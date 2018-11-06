import { FETCH_PEOPLE, FETCH_PERSON } from '../actions';

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_PEOPLE:
      return action.payload.data;
    case FETCH_PERSON:
      return { ... state, person: action.payload.data }
    default:
      return state;
  }
}

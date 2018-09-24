import { FETCH_PEOPLE } from '../actions';

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_PEOPLE:
      return action.payload.data;
    default:
      return state;
  }
}

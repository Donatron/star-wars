import { FETCH_PEOPLE, FETCH_PERSON } from "../actions";

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_PEOPLE:
      return action.payload;
    case FETCH_PERSON:
      return action.payload.data;
    default:
      return state;
  }
}

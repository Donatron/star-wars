import { FETCH_VEHICLES } from "../actions";

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_VEHICLES:
      return action.payload;
    default:
      return state;
  }
}

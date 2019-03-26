import { FETCH_VEHICLE, CLEAR_VEHICLE } from "../actions";

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_VEHICLE:
      return action.payload.data;
    case CLEAR_VEHICLE:
      return {};
    default:
      return state;
  }
}

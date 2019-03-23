import { FETCH_VEHICLES, FETCH_VEHICLE } from "../actions";

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_VEHICLES:
      return action.payload;
    case FETCH_VEHICLE:
      return { ...state, vehicle: action.payload.data };
    default:
      return state;
  }
}

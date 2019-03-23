import { FETCH_PLANETS, FETCH_PLANET } from "../actions";

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_PLANETS:
      return action.payload;
    case FETCH_PLANET:
      return { ...state, planet: action.payload.data };
    default:
      return state;
  }
}

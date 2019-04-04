import { DATA_LOADING } from "../actions";

export default (state = false, action) => {
  switch (action.type) {
    case DATA_LOADING:
      return !state;
    default:
      return state;
  }
};

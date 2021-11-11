import { SET_ERROR, CLEAR_ERROR } from '../actions';

const initialState = {
  message: null,
  film: {
    message: null
  },
  people: {
    message: null
  },
  planet: {
    message: null
  },
  species: {
    message: null
  },
  starship: {
    message: null
  },
  vehicle: {
    message: null
  }
}

export default function errorReducer(state = initialState, action) {
  switch (action.type) {
    case SET_ERROR:
      return {
        ...state,
        [action.payload.type]: {
          message: action.payload.message
        }
      }
    case CLEAR_ERROR:
      return initialState
    default:
      return state;
  }
}
import { combineReducers } from 'redux';
import PeopleReducer from './reducer_people';

const rootReducer = combineReducers({
  people: PeopleReducer
});

export default rootReducer;

import { combineReducers } from 'redux';
import PeopleReducer from './reducer_people';
import FilmsReducer from './reducer_films';

const rootReducer = combineReducers({
  people: PeopleReducer,
  films: FilmsReducer
});

export default rootReducer;

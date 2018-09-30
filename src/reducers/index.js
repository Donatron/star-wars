import { combineReducers } from 'redux';
import PeopleReducer from './reducer_people';
import FilmsReducer from './reducer_films';
import PlanetsReducer from './reducer_planets';

const rootReducer = combineReducers({
  people: PeopleReducer,
  films: FilmsReducer,
  planets: PlanetsReducer
});

export default rootReducer;

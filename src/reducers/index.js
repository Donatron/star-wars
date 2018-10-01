import { combineReducers } from 'redux';
import PeopleReducer from './reducer_people';
import FilmsReducer from './reducer_films';
import PlanetsReducer from './reducer_planets';
import VehiclesReducer from './reducer_vehicles';

const rootReducer = combineReducers({
  people: PeopleReducer,
  films: FilmsReducer,
  planets: PlanetsReducer,
  vehicles: VehiclesReducer
});

export default rootReducer;

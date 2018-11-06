import { combineReducers } from 'redux';
import PeopleReducer from './reducer_people';
import FilmsReducer from './reducer_films';
import PlanetsReducer from './reducer_planets';
import VehiclesReducer from './reducer_vehicles';
import StarshipsReducer from './reducer_starships';
import SpeciesReducer from './reducer_species';

const rootReducer = combineReducers({
  people: PeopleReducer,
  films: FilmsReducer,
  planets: PlanetsReducer,
  vehicles: VehiclesReducer,
  starships: StarshipsReducer,
  species: SpeciesReducer
});

export default rootReducer;

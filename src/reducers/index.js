import { combineReducers } from "redux";
import PeopleReducer from "./reducer_people";
import PersonReducer from "./reducer_person";
import FilmsReducer from "./reducer_films";
import FilmReducer from "./reducer_film";
import PlanetsReducer from "./reducer_planets";
import PlanetReducer from "./reducer_planet";
import VehiclesReducer from "./reducer_vehicles";
import VehicleReducer from "./reducer_vehicle";
import StarshipsReducer from "./reducer_starships";
import StarshipReducer from "./reducer_starship";
import SpeciesReducer from "./reducer_species";
import SpecieReducer from "./reducer_specie";
import LoadingReducer from "./reducer_loading";
import ErrorReducer from "./reducer_error";

const rootReducer = combineReducers({
  people: PeopleReducer,
  selectedPerson: PersonReducer,
  films: FilmsReducer,
  selectedFilm: FilmReducer,
  planets: PlanetsReducer,
  selectedPlanet: PlanetReducer,
  vehicles: VehiclesReducer,
  selectedVehicle: VehicleReducer,
  starships: StarshipsReducer,
  selectedStarship: StarshipReducer,
  species: SpeciesReducer,
  selectedSpecie: SpecieReducer,
  loading: LoadingReducer,
  error: ErrorReducer
});

export default rootReducer;

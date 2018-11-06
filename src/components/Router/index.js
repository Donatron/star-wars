import React from 'react';
import { Route, Switch } from 'react-router-dom';


import Home from '../Home/Home';
import CharacterList from '../Characters/CharacterList';
import CharacterDetail from '../Characters/CharacterDetail';
import FilmList from '../Films/FilmList';
import FilmDetail from '../Films/FilmDetail';
import PlanetList from '../Planets/PlanetList';
import PlanetDetail from '../Planets/PlanetDetail';
import SpeciesList from '../Species/SpeciesList';
import SpeciesDetail from '../Species/SpeciesDetail';
import StarshipList from '../Starships/StarshipList';
import StarshipDetail from '../Starships/StarshipDetail';
import VehicleList from '../Vehicles/VehicleList';
import VehicleDetail from '../Vehicles/VehicleDetail';

const Router = () => {
  return (
    <Switch>
      <Route path="/characters/:id" component={CharacterDetail} />
      <Route path="/characters" component={CharacterList} />
      <Route path="/films/:id" component={FilmDetail} />
      <Route path="/films" component={FilmList} />
      <Route path="/planets/:id" component={PlanetDetail} />
      <Route path="/planets" component={PlanetList} />
      <Route path="/vehicles/:id" component={VehicleDetail} />
      <Route path="/vehicles" component={VehicleList} />
      <Route path="/starships/:id" component={StarshipDetail} />
      <Route path="/starships" component={StarshipList} />
      <Route path="/species/:id" component={SpeciesDetail} />
      <Route path="/species" component={SpeciesList} />
      <Route path="/" component={Home} />
    </Switch>
  )
}

export default Router;
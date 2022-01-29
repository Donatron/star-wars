import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Particles from "react-particles-js";
import Home from "../components/Home/Home";

import {
  fetchPeople,
  fetchFilms,
  fetchPlanets,
  fetchVehicles,
  fetchStarships,
  fetchSpecies
} from '../actions';

import "./App.css";
import Navigation from "../components/Navigation/Navigation";
import CardList from "../components/Card/CardList";
import CharacterDetail from "../components/Characters/CharacterDetail";
import FilmDetail from "../components/Films/FilmDetail";
import PlanetDetail from "../components/Planets/PlanetDetail";
import SpeciesDetail from "../components/Species/SpeciesDetail";
import StarshipDetail from "../components/Starships/StarshipDetail";
import VehicleDetail from "../components/Vehicles/VehicleDetail";
import Footer from "../components/Footer/Footer";
import Loader from "../components/Loader/loader";

const particlesOptions = {
  particles: {
    number: {
      value: 100,
      density: {
        enable: true,
        value_area: 200,
      },
    },
    connectParticles: false,
    line_linked: {
      enable: false,
    },
    size: {
      value: 2,
      random: true,
    },
    move: {
      speed: 1,
    },
  },
};

class App extends Component {
  constructor() {
    super();
    this.state = {
      searchBox: false,
      searchField: "",
    };
  }

  onRouteChange = (route) => {
    if (route === "home") {
      this.setState({ searchBox: false });
    } else {
      this.setState({ searchBox: true });
    }
    this.setState({ route: route });
  };

  render() {
    const {
      loading,
      people,
      fetchPeople,
      films,
      fetchFilms,
      planets,
      fetchPlanets,
      vehicles,
      fetchVehicles,
      starships,
      fetchStarships,
      species,
      fetchSpecies,
      error
    } = this.props;
    let searchBoxComponent;


    if (loading) {
      return <Loader />;
    } else {
      return (
        <div className="App tc">
          <Particles className="particles" params={particlesOptions} />
          <BrowserRouter>
            <div>
              {<Navigation onRouteChange={this.onRouteChange} />}
              {searchBoxComponent}
              <Switch>
                <Route path="/characters/:id" component={CharacterDetail} />
                <Route
                  path="/characters"
                  render={(props) =>
                    <CardList
                      {...props}
                      data={people}
                      dataType="characters"
                      dataSource={fetchPeople}
                      error={error.people}
                    />}
                />
                <Route path="/films/:id" component={FilmDetail} />
                <Route
                  path="/films"
                  render={(props) =>
                    <CardList
                      {...props}
                      data={films}
                      dataType="films"
                      dataSource={fetchFilms}
                      error={error.film}
                    />}
                />
                <Route path="/planets/:id" component={PlanetDetail} />
                <Route
                  path="/planets"
                  render={(props) =>
                    <CardList
                      {...props}
                      data={planets}
                      dataType="planets"
                      dataSource={fetchPlanets}
                      error={error.planet}
                    />}
                />
                <Route path="/vehicles/:id" component={VehicleDetail} />
                {<Route
                  path="/vehicles"
                  render={(props) =>
                    <CardList
                      {...props}
                      data={vehicles}
                      dataType="vehicles"
                      dataSource={fetchVehicles}
                      error={error.vehicle}
                    />}
                />}
                <Route path="/starships/:id" component={StarshipDetail} />
                <Route
                  path="/starships"
                  render={(props) =>
                    <CardList
                      {...props}
                      data={starships}
                      dataType="starships"
                      dataSource={fetchStarships}
                      error={error.starship}
                    />}
                />
                <Route path="/species/:id" component={SpeciesDetail} />
                <Route
                  path="/species"
                  render={(props) =>
                    <CardList
                      {...props}
                      data={species}
                      dataType="species"
                      dataSource={fetchSpecies}
                      error={error.species}
                    />}
                />
                <Route path="/" component={Home} />
              </Switch>
              <Footer />
            </div>
          </BrowserRouter>
        </div>
      );
    }
  }
}

const mapStateToProps = (state) => {
  return {
    loading: state.loading,
    people: state.people,
    films: state.films,
    planets: state.planets,
    vehicles: state.vehicles,
    starships: state.starships,
    species: state.species,
    error: state.error
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    fetchPeople,
    fetchFilms,
    fetchPlanets,
    fetchVehicles,
    fetchStarships,
    fetchSpecies
  },
    dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

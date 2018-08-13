import React, { Component } from 'react';
import Particles from 'react-particles-js';
import Home from '../components/Home/Home';
import './App.css';
import Navigation from '../components/Navigation/Navigation';
import CardList from '../components/Card/CardList';
import CharacterList from '../components/Characters/CharacterList';
import Character from '../components/Characters/Character';
import FilmList from '../components/Films/FilmList';
import PlanetList from '../components/Planets/PlanetList';
import SpeciesList from '../components/Species/SpeciesList';
import StarshipList from '../components/Starships/StarshipList';
import VehicleList from '../components/Vehicles/VehicleList';

const particlesOptions = {
  particles: {
    number: {
      value: 50,
      density: {
        enable: true,
        value_area: 200
      }
    },
    connectParticles: false,
    line_linked: {
      enable: false,
    },
    size: {
      value: 2,
      random: true
    },
    move: {
      speed: 1.5
    }
  }
}

class App extends Component {

  constructor() {
    super()
    this.state = {
      route: 'home',
      people: [],
      films: [],
      planets: [],
      starships: [],
      vehicles:[],
      species: []
    }
  }

  onRouteChange = (route) => {
    this.setState({route: route});
  }

  renderSwitch(route) {
    switch(route) {
      case 'home':
        return <Home />;
      case 'characters':
        return <CharacterList
          people={this.state.people}
          />;
      case 'films':
        return <FilmList
          films={this.state.films}
          />;
      case 'planets':
        return <PlanetList
          planets={this.state.planets}
          />;
      case 'vehicles':
        return <VehicleList
          vehicles={this.state.vehicles}
          />;
      case 'starships':
        return <StarshipList
          starships={this.state.starships}
          />;
      case 'species':
        return <SpeciesList
          species={this.state.species}
          />;
      default:
        return <Home />;
    }
  }

  render() {
    return (
      <div className="App tc">
        <Particles className="particles"
          params={particlesOptions}/>
        <Navigation onRouteChange={this.onRouteChange}/>
        {
          this.renderSwitch(this.state.route)
        }
      </div>
    );
  }

  componentDidMount() {
    let currentComponent = this;

    async function GetData(url, saveToArray){
      let response = await fetch(url);
      if (!response.ok) {
        throw Error(response.statusText);
      }
      let json = await response.json();
      let results = json.results;
      let i = 1;
      while (i < 2) {
        if (json.next == null) {
          i++;
        } else {
          response = await fetch(json.next);
          if (!response.ok) {
            throw Error(response.statusText);
          }
          json = await response.json();
          let concatArray = results.concat(json.results);
          results = concatArray;
        }
      }
      currentComponent.setState({ [saveToArray]: results });
      console.log([saveToArray]);
    }

    GetData('https://swapi.co/api/people', 'people');
    GetData('https://swapi.co/api/films', 'films');
    GetData('https://swapi.co/api/planets', 'planets');
    GetData('https://swapi.co/api/starships', 'starships');
    GetData('https://swapi.co/api/vehicles', 'vehicles');
    GetData('https://swapi.co/api/species', 'species');
  }
}

export default App;

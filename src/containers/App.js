import React, { Component } from 'react';
import Particles from 'react-particles-js';
import Home from '../components/Home/Home'
import './App.css';
import Navigation from '../components/Navigation/Navigation';
import CharacterList from '../components/Characters/CharacterList';
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
      route: 'home'
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
        return <CharacterList />;
      case 'films':
        return <FilmList />;
      case 'planets':
        return <PlanetList />;
      case 'vehicles':
        return <VehicleList />;
      case 'starships':
        return <StarshipList />;
      case 'species':
        return <SpeciesList />;
      default:
        return <Home />;
    }
  }

  render() {
    return (
      <div className="App">
        <Particles className="particles"
          params={particlesOptions}/>
        <Navigation onRouteChange={this.onRouteChange}/>
        {
          this.renderSwitch(this.state.route)
        }
      </div>
    );
  }
}

export default App;

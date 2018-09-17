import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Particles from 'react-particles-js';
import Home from '../components/Home/Home';
import './App.css';
import Navigation from '../components/Navigation/Navigation';
import SearchBox from '../components/Search/SearchBox';
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
      route: 'home',
      people: [],
      films: [],
      planets: [],
      starships: [],
      vehicles:[],
      species: [],
      searchBox: false,
      searchField: ''
    }
  }

  onRouteChange = (route) => {
    if (route === 'home') {
      this.setState({searchBox: false});
    } else {
      this.setState({searchBox: true});
    }
    this.setState({route: route});
  }

  onSearchChange = (event) => {
    this.setState({ searchField: event.target.value })
    // const filteredResults = this.state.people.filter(results => {
    //   return results.name.toLowerCase().includes(this.state.searchField.toLowerCase());
    // })
    // console.log(filteredResults);
  }

  renderSwitch (route) {
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
    const viewSearchBox = this.state.searchBox;
    let searchBoxComponent;

    if(viewSearchBox) {
      searchBoxComponent = <SearchBox
                             search={this.state.route}
                             searchChange={this.onSearchChange}
                           />;
    }

    return (
      <div className="App tc">
        <Particles className="particles"
          params={particlesOptions}/>
        <BrowserRouter>
          <div>
            <Navigation onRouteChange={this.onRouteChange}/>
            { searchBoxComponent }

            <Switch>
              <Route path="/characters" component={CharacterList} />
              <Route path="/" component={Home} />
            </Switch>
          </div>
        </BrowserRouter>
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
    }

    // GetData('https://swapi.co/api/people', 'people');
    // GetData('https://swapi.co/api/films', 'films');
    // GetData('https://swapi.co/api/planets', 'planets');
    // GetData('https://swapi.co/api/starships', 'starships');
    // GetData('https://swapi.co/api/vehicles', 'vehicles');
    // GetData('https://swapi.co/api/species', 'species');
  }
}

export default App;

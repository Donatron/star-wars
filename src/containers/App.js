import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ReduxPromise from 'redux-promise';
import Particles from 'react-particles-js';
import Home from '../components/Home/Home';

import reducers from '../reducers';

import './App.css';
import Navigation from '../components/Navigation/Navigation';
import SearchBox from '../components/Search/SearchBox';
import CharacterList from '../components/Characters/CharacterList';
import CharacterDetail from '../components/Characters/CharacterDetail';
import FilmList from '../components/Films/FilmList';
import FilmDetail from '../components/Films/FilmDetail';
import PlanetList from '../components/Planets/PlanetList';
import SpeciesList from '../components/Species/SpeciesList';
import StarshipList from '../components/Starships/StarshipList';
import VehicleList from '../components/Vehicles/VehicleList';
import Footer from '../components/Footer/Footer';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

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
        <Provider store={createStoreWithMiddleware(reducers)} >
          <BrowserRouter>
            <div>
              <Navigation onRouteChange={this.onRouteChange}/>
              { searchBoxComponent }

              <Switch>
                <Route path="/characters/:id" component={CharacterDetail} />
                <Route path="/characters" component={CharacterList} />
                <Route path="/films/:id" component={FilmDetail} />
                <Route path="/films" component={FilmList} />
                <Route path="/planets" component={PlanetList} />
                <Route path="/vehicles" component={VehicleList} />
                <Route path="/starships" component={StarshipList} />
                <Route path="/species" component={SpeciesList} />
                <Route path="/" component={Home} />
              </Switch>
              <Footer />
            </div>
          </BrowserRouter>
        </Provider>
      </div>
    );
  }
}

export default App;

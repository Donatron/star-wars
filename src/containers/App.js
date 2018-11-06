import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ReduxPromise from 'redux-promise';
import Particles from 'react-particles-js';

import reducers from '../reducers';

import './App.css';
import Navigation from '../components/Navigation/Navigation';
import Router from '../components/Router';
import SearchBox from '../components/Search/SearchBox';
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
      speed: 1
    }
  }
}

function saveToLocalStorage(state) {
  try{
    const serializedState = JSON.stringify(state);
    localStorage.setItem('state', serializedState);
  } catch (err) {
    console.log(err);
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
              <Router />
              <Footer />
            </div>
          </BrowserRouter>
        </Provider>
      </div>
    );
  }
}

export default App;

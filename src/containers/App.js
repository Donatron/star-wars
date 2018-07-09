import React, { Component } from 'react';
import Particles from 'react-particles-js';
import Home from '../components/Home/Home'
import './App.css';
import Navigation from '../components/Navigation/Navigation';

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
  render() {
    return (
      <div className="App">
        <Particles className="particles"
          params={particlesOptions}/>
        <Navigation />
        <Home />
      </div>
    );
  }
}

export default App;

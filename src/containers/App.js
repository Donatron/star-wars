import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import Particles from "react-particles-js";
import Home from "../components/Home/Home";

import "./App.css";
import Navigation from "../components/Navigation/Navigation";
import SearchBox from "../components/Search/SearchBox";
import CharacterList from "../components/Characters/CharacterList";
import CharacterDetail from "../components/Characters/CharacterDetail";
import FilmList from "../components/Films/FilmList";
import FilmDetail from "../components/Films/FilmDetail";
import PlanetList from "../components/Planets/PlanetList";
import PlanetDetail from "../components/Planets/PlanetDetail";
import SpeciesList from "../components/Species/SpeciesList";
import SpeciesDetail from "../components/Species/SpeciesDetail";
import StarshipList from "../components/Starships/StarshipList";
import StarshipDetail from "../components/Starships/StarshipDetail";
import VehicleList from "../components/Vehicles/VehicleList";
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

  onSearchChange = (event) => {
    this.setState({ searchField: event.target.value });
    const filteredResults = this.state.people.filter(results => {
      return results.name.toLowerCase().includes(this.state.searchField.toLowerCase());
    })
  };

  render() {
    const { loading } = this.props;

    const viewSearchBox = this.state.searchBox;
    let searchBoxComponent;

    if (viewSearchBox) {
      searchBoxComponent = (
        <SearchBox
          search={this.state.route}
          searchChange={this.onSearchChange}
        />
      );
    }

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
  };
};

export default connect(mapStateToProps)(App);

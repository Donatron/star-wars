import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchPlanets } from "../../actions/index";
import { getIndex } from "../../helpers";

import Planet from "./Planet";
import "./Planets.css";
import SearchBox from "../Search/SearchBox";

class PlanetList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchTerm: ""
    };
  }

  componentDidMount() {
    if (this.props.planets.length === 0) {
      this.props.fetchPlanets();
    }
  }

  onSearchChange = e => {
    this.setState({ searchTerm: e.target.value });
  };

  renderPlanets() {
    const { searchTerm } = this.state;
    const filteredPlanets = this.props.planets.filter(planet => {
      return planet.name.toLowerCase().includes(searchTerm.toLowerCase());
    });

    return (
      <div>
        <SearchBox search={"planets"} onSearchChange={this.onSearchChange} />
        <div className="tc white flex justify-around planets">
          {filteredPlanets.map((planet, i) => {
            let id = getIndex(planet.url);
            return (
              <Link to={`/planets/${id}`} key={i}>
                <Planet key={planet.name} id={id} name={planet.name} />
              </Link>
            );
          })}
        </div>
      </div>
    );
  }

  render() {
    return <div>{this.renderPlanets()}</div>;
  }
}

function mapStateToProps(state) {
  return { planets: state.planets };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchPlanets }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlanetList);

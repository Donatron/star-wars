import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchPlanets } from "../../actions/index";

import Card from "../Card/Card";
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
          {
            filteredPlanets.map((planet, i) => <Card item={planet} linkPath="planets" />)
          }
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

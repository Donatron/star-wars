import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchPlanets } from "../../actions/index";
import { getIndex } from "../../helpers";

import Planet from "./Planet";
import "./Planets.css";
import Loader from "../Loader/loader";
import SearchBox from "../Search/SearchBox";

class PlanetList extends Component {
  componentDidMount() {
    if (this.props.planets.length === 0) {
      this.props.fetchPlanets();
    }
  }

  renderPlanets() {
    if (this.props.planets.length === 0) {
      return (
        <div>
          <Loader />
        </div>
      );
    } else {
      return (
        <div>
          <SearchBox search={"planets"} />
          <div className="tc white flex justify-around planets">
            {this.props.planets.map((planet, i) => {
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

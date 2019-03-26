import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { fetchPlanet, clearSelectedPlanet } from "../../actions";
import { getIndex } from "../../helpers";

import Loader from "../Loader/loader";
import Planet from "./Planet";
import Character from "../Characters/Character";
import Film from "../Films/Film";

class PlanetDetail extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.fetchPlanet(id);
  }

  componentWillUnmount() {
    this.props.clearSelectedPlanet();
  }

  renderDetails(
    id,
    name,
    rotation_period,
    orbital_period,
    diameter,
    climate,
    gravity,
    terrain,
    surface_water,
    population
  ) {
    return (
      <div>
        <div className="w-100 text-center">
          <h2>{name}</h2>
        </div>
        <div className="w-100 pa3 ml5 flex justify-start planet-detail">
          <Planet name={""} id={id} />
          <div className="pa3 ml5 details">
            <p>Rotation Period: {rotation_period} hours</p>
            <p>Orbital Period: {orbital_period} days</p>
            <p>Diameter: {diameter} km</p>
            <p>Climate: {climate}</p>
            <p>Gravity: {gravity}</p>
            <p>Terrain: {terrain}</p>
            <p>Surface Water: {surface_water}</p>
            <p>Population: {population}</p>
          </div>
        </div>
      </div>
    );
  }

  renderResidents(residents) {
    return (
      <div className="center pa3 w-50 details">
        <h3>Inhabitants</h3>
        <div className="flex flex-wrap justify-around">
          {residents.map((resident, i) => {
            let id = getIndex(resident);

            return (
              <Link to={`/characters/${id}`} key={id}>
                <Character name={resident.name} id={id} key={id} />
              </Link>
            );
          })}
        </div>
      </div>
    );
  }

  renderFilms(films) {
    return (
      <div className="center pa3 w-50 details">
        <h3>Appears In Films</h3>
        <div className="flex flex-wrap justify-around">
          {films.map((film, i) => {
            let id = getIndex(film);

            return (
              <Link to={`/films/${id}`} key={id}>
                <Film name={film.name} id={id} key={id} />
              </Link>
            );
          })}
        </div>
      </div>
    );
  }

  renderPlanet() {
    const { planet } = this.props;
    const { id } = this.props.match.params;

    const {
      name,
      rotation_period,
      orbital_period,
      diameter,
      climate,
      gravity,
      terrain,
      surface_water,
      population,
      residents,
      films
    } = planet;

    if (!name) {
      return <Loader />;
    } else {
      return (
        <div>
          {name
            ? this.renderDetails(
                id,
                name,
                rotation_period,
                orbital_period,
                diameter,
                climate,
                gravity,
                terrain,
                surface_water,
                population
              )
            : ""}

          {residents ? this.renderResidents(residents) : ""}

          <div className="flex flex-wrap justify-around pa3 ml2 mr2 w100 details">
            {films ? this.renderFilms(films) : ""}
          </div>
        </div>
      );
    }
  }

  render() {
    return <div>{this.renderPlanet()}</div>;
  }
}

function mapStateToProps({ selectedPlanet }, ownProps) {
  return { planet: selectedPlanet };
}

export default connect(
  mapStateToProps,
  { fetchPlanet, clearSelectedPlanet }
)(PlanetDetail);

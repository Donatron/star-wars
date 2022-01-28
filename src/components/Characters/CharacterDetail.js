import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { fetchPerson, clearSelectedPerson } from "../../actions";
import { getIndex } from "../../helpers";

import Card from "../Card/Card";
import CardItem from "../Card/CardItem";
import Planet from "../Planets/Planet";
import Species from "../Species/Species";
import Error from "../Error/Error";

class CharacterDetail extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.fetchPerson(id);
  }

  componentWillUnmount() {
    this.props.clearSelectedPerson();
  }

  renderDetails(
    height,
    mass,
    hair_color,
    skin_color,
    eye_color,
    birth_year,
    gender
  ) {
    return (
      <div>
        <h3>Character Details</h3>
        <p>Height: {height} cm</p>
        <p>Mass: {mass === "unknown" ? "unknown" : mass + " kg"}</p>
        <p>Hair Colour: {hair_color}</p>
        <p>Skin Colour: {skin_color}</p>
        <p>Eye Colour: {eye_color}</p>
        <p>Born: {birth_year}</p>
        <p>Gender: {gender}</p>
      </div>
    );
  }

  renderHomeWorld(homeWorldId) {
    return (
      <Link to={`/planets/${homeWorldId}`}>
        <Planet name="" id={homeWorldId} key={homeWorldId} />
      </Link>
    );
  }

  renderSpecies(speciesId) {
    return (
      <Link to={`/species/${speciesId}`}>
        <Species name="" id={speciesId} key={speciesId} />
      </Link>
    );
  }

  renderFilms(films) {
    return (
      <div className="flex flex-wrap justify-around">
        {
          films.map(film => <CardItem item={film} linkPath="films" key={film} />)
        }
      </div>
    );
  }

  renderVehicles(vehicles) {
    return (
      <div className="flex flex-wrap justify-around">
        {
          vehicles.length === 0
            ? <p>Unknown</p>
            : vehicles.map(vehicle => <CardItem item={vehicle} linkPath="vehicles" key={vehicle} />)
        }
      </div>
    );
  }

  renderStarships(starships) {
    return (
      <div className="flex flex-wrap justify-around">
        {
          starships.length === 0
            ? <p>Unknown</p>
            : starships.map(starship => <CardItem item={starship} linkPath="starships" key={starship} />)
        }
      </div>
    );
  }

  render() {
    const { person, error } = this.props;
    const {
      name,
      height,
      mass,
      hair_color,
      skin_color,
      eye_color,
      birth_year,
      gender,
      homeworld,
      species,
      films,
      vehicles,
      starships
    } = person;

    if (error.people.message) {
      return <Error message={error.people.message} redirect="characters" />
    } else if (!name) {
      return <div />;
    } else {
      const homeWorldId = getIndex(`"${homeworld}"`);
      const speciesId = getIndex(`"${species}"`);

      return (
        <div className="center">
          <div>
            <h2>{name ? name : ""}</h2>
          </div>
          <div className="w-100 pa3 flex justify-center character-detail">
            <Card item={person} linkPath="characters" />

            <div className="pa3 ml3 details">
              {name
                ? this.renderDetails(
                  height,
                  mass,
                  hair_color,
                  skin_color,
                  eye_color,
                  birth_year,
                  gender
                )
                : ""}
              <p>Home World:</p>
              {homeWorldId ? this.renderHomeWorld(homeWorldId) : ""}

              <p>Species:</p>
              {speciesId ? this.renderSpecies(speciesId) : ""}
            </div>
          </div>
          <div className="w-100">
            <div className="center pa3 w-80 details">
              <h3>Appears In Films</h3>
              {films ? this.renderFilms(films) : ""}
            </div>
          </div>

          <div className="flex flex-wrap justify-around pa3 ml2 mr2 w100 details">
            <div className="center pa3 w-50 details">
              <h3>Vehicles</h3>
              {vehicles ? this.renderVehicles(vehicles) : ""}
            </div>

            <div className="center pa3 w-50 details">
              <h3>Starships</h3>
              {starships ? this.renderStarships(starships) : ""}
            </div>
          </div>
        </div>
      );
    }
  }
}

function mapStateToProps({ selectedPerson, error }, ownProps) {
  return { person: selectedPerson, error };
}

export default connect(
  mapStateToProps,
  { fetchPerson, clearSelectedPerson }
)(CharacterDetail);

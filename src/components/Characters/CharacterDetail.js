import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { fetchPerson } from "../../actions";
import { getIndex } from "../../helpers";

import Character from "./Character";
import Loader from "../Loader/loader";
import Film from "../Films/Film";
import Vehicle from "../Vehicles/Vehicle";
import Starship from "../Starships/Starship";
import Planet from "../Planets/Planet";
import Species from "../Species/Species";

class CharacterDetail extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.fetchPerson(id);
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
        {films.map(film => {
          const id = getIndex(film);

          return (
            <Link to={`/films/${id}`} key={id}>
              <Film name="" id={id} key={id} />
            </Link>
          );
        })}
      </div>
    );
  }

  renderVehicles(vehicles) {
    return (
      <div className="flex flex-wrap justify-around">
        {vehicles.length === 0 ? (
          <p>Unknown</p>
        ) : (
          vehicles.map(vehicle => {
            const id = getIndex(vehicle);

            return (
              <Link to={`/vehicles/${id}`} key={id}>
                <Vehicle name="" id={id} key={id} />
              </Link>
            );
          })
        )}
      </div>
    );
  }

  renderStarships(starships) {
    return (
      <div className="flex flex-wrap justify-around">
        {starships.length === 0 ? (
          <p>Unknown</p>
        ) : (
          starships.map(starship => {
            const id = getIndex(starship);

            return (
              <Link to={`/starships/${id}`} key={id}>
                <Starship name="" id={id} key={id} />
              </Link>
            );
          })
        )}
      </div>
    );
  }

  render() {
    const { person } = this.props;
    const { id } = this.props.match.params;
    const { homeworld, species, films, vehicles, starships } = person;

    if (!person) {
      return <Loader />;
    } else {
      const homeWorldId = getIndex(`"${homeworld}"`);
      console.log(`Species: ${species}`);
      const speciesId = getIndex(`"${species}"`);

      return (
        <div className="center">
          <div>
            <h2>{person.name}</h2>
          </div>
          <div className="w-100 pa3 ml5 flex justify-start character-detail">
            <Character key={person.name} id={id} name={""} />

            <div className="pa3 ml5 details">
              <h3>Character Details</h3>
              <p>Height: {person.height} cm</p>
              <p>Mass: {person.mass} kg</p>
              <p>Hair Colour: {person.hair_color}</p>
              <p>Skin Colour: {person.skin_color}</p>
              <p>Eye Colour: {person.eye_color}</p>
              <p>Born: {person.birth_year}</p>
              <p>Gender: {person.gender}</p>

              <p>Home World:</p>
              {homeWorldId ? this.renderHomeWorld(homeWorldId) : ""}

              <p>Species:</p>
              {speciesId ? this.renderSpecies(speciesId) : ""}
            </div>

            <div className="center pa3 w-50 details">
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

function mapStateToProps({ selectedPerson }, ownProps) {
  return { person: selectedPerson };
}

export default connect(
  mapStateToProps,
  { fetchPerson }
)(CharacterDetail);

import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchSpecie, clearSelectedSpecie } from "../../actions";
import { getIndex } from "../../helpers";

import Loader from "../Loader/loader";
import Species from "./Species";
import Planet from "../Planets/Planet";
import Character from "../Characters/Character";
import Film from "../Films/Film";

class SpeciesDetail extends Component {
  componentDidMount() {
    let { id } = this.props.match.params;
    this.props.fetchSpecie(id);
  }

  componentWillUnmount() {
    this.props.clearSelectedSpecie();
  }

  renderDetails(
    id,
    name,
    classification,
    designation,
    average_height,
    skin_colors,
    hair_colors,
    eye_colors,
    average_lifespan,
    language,
    homeWorldId
  ) {
    return (
      <div>
        <div className="center">
          <h2>{name}</h2>
        </div>
        <div className="w-100 pa3 flex justify-center species-detail">
          <Species name="" id={id} key={id} />
          <div className="pa3 ml5 details">
            <p>Classification: {classification}</p>
            <p>Designation: {designation}</p>
            <p>Average Height: {average_height}cm</p>
            <p>Skin Colours: {skin_colors}</p>
            <p>Hair Colours: {hair_colors}</p>
            <p>Eye Colours: {eye_colors}</p>
            <p>Average Lifespan: {average_lifespan}</p>
            <p>Language: {language}</p>
            <p>Home World:</p>
            {homeWorldId ? this.renderHomeWorld(homeWorldId) : ""}
          </div>
        </div>
      </div>
    );
  }

  renderPeople(people) {
    return (
      <div>
        <h3>People</h3>
        <div className="flex flex-wrap justify-around">
          {people.map((person, i) => {
            let id = getIndex(person);

            return (
              <Link to={`/characters/${id}`} key={id}>
                <Character name="" id={id} key={id} />
              </Link>
            );
          })}
        </div>
      </div>
    );
  }

  renderFilms(films) {
    return (
      <div>
        <h3>Appears In Films</h3>
        <div className="flex flex-wrap justify-around">
          {films.map((film, i) => {
            let id = getIndex(film);

            return (
              <Link to={`/films/${id}`} key={id}>
                <Film name="" id={id} key={id} />
              </Link>
            );
          })}
        </div>
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

  renderSpecie() {
    const { specie } = this.props;
    const { id } = this.props.match.params;
    const {
      name,
      classification,
      designation,
      average_height,
      skin_colors,
      hair_colors,
      eye_colors,
      average_lifespan,
      language,
      people,
      films
    } = specie;

    if (!name) {
      return <Loader />;
    } else {
      const homeWorldId = getIndex(specie.homeworld);

      return (
        <div>
          {name
            ? this.renderDetails(
                id,
                name,
                classification,
                designation,
                average_height,
                skin_colors,
                hair_colors,
                eye_colors,
                average_lifespan,
                language,
                homeWorldId
              )
            : ""}

          <div className="center pa3 w-80 details">
            {people ? this.renderPeople(people) : ""}
          </div>

          <div className="center pa3 w-80 details">
            {films ? this.renderFilms(films) : ""}
          </div>
        </div>
      );
    }
  }

  render() {
    return <div>{this.renderSpecie()}</div>;
  }
}

function mapStateToProps({ selectedSpecie }, ownProps) {
  return { specie: selectedSpecie };
}

export default connect(
  mapStateToProps,
  { fetchSpecie, clearSelectedSpecie }
)(SpeciesDetail);

import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchSpecie, clearSelectedSpecie } from "../../actions";
import { getIndex } from "../../helpers";

import Species from "./Species";
import CardItem from "../Card/CardItem";
import Planet from "../Planets/Planet";

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
          {
            people.map((person, i) => <CardItem item={person} linkPath="characters" key={person} />)
          }
        </div>
      </div>
    );
  }

  renderFilms(films) {
    return (
      <div>
        <h3>Appears In Films</h3>
        <div className="flex flex-wrap justify-around">
          {
            films.map((film, i) => <CardItem item={film} linkPath="films" key={film} />)
          }
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
      return <div />;
    } else {
      let homeWorldId = null;
      homeWorldId = specie.homeworld && getIndex(specie.homeworld);

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

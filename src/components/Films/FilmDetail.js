import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { fetchFilm, clearSelectedFilm } from "../../actions";
import { getIndex } from "../../helpers";

import Loader from "../Loader/loader";
import Film from "./Film";
import Character from "../Characters/Character";
import Planet from "../Planets/Planet";
import Species from "../Species/Species";
import Starship from "../Starships/Starship";
import Vehicle from "../Vehicles/Vehicle";

class FilmDetail extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.fetchFilm(id);
  }

  componentWillUnmount() {
    this.props.clearSelectedFilm();
  }

  convertToRoman(num) {
    var roman = {
      M: 1000,
      CM: 900,
      D: 500,
      CD: 400,
      C: 100,
      XC: 90,
      L: 50,
      XL: 40,
      X: 10,
      IX: 9,
      V: 5,
      IV: 4,
      I: 1
    };
    var str = "";

    for (var i of Object.keys(roman)) {
      var q = Math.floor(num / roman[i]);
      num -= q * roman[i];
      str += i.repeat(q);
    }

    return str;
  }

  renderTitle(romanId, title, director) {
    return (
      <div className="w-100 text-center">
        <h2>
          Episode {romanId}: {title}
        </h2>
        <p>Directed by {director}</p>
      </div>
    );
  }

  renderArtwork(id) {
    return <Film name={""} id={id} />;
  }

  renderCharacters(characters) {
    return (
      <div>
        <h3>Characters</h3>
        <div className="flex flex-wrap justify-around mt0 pr5 pl5">
          {characters.map(character => {
            let id = getIndex(character);

            return (
              <Link to={`/characters/${id}`} key={id}>
                <Character key={id} name={character.name} id={id} />
              </Link>
            );
          })}
        </div>
      </div>
    );
  }

  renderCrawl(openingCrawl) {
    const crawlArray = openingCrawl.split("\r\n\r");

    return (
      <div className="board">
        <div className="content  film-detail-crawl">
          <div className="w-80 pa5 ml5 subtitle">
            {crawlArray.map(el => {
              return (
                <div>
                  <p>{el}</p>
                  <br />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }

  renderPlanets(planets) {
    return (
      <div>
        <h3>Planets</h3>
        <div className="flex flex-wrap justify-around mt0 pr5 pl5">
          {planets.map(planet => {
            let id = getIndex(planet);

            return (
              <Link to={`/planets/${id}`} key={id}>
                <Planet name={planet.name} id={id} key={id} />
              </Link>
            );
          })}
        </div>
      </div>
    );
  }

  renderSpecies(species) {
    return (
      <div>
        <h3>Species</h3>
        <div className="flex flex-wrap justify-around mt0 pr5 pl5">
          {species.map(specie => {
            let id = getIndex(specie);

            return (
              <Link to={`/species/${id}`} key={id}>
                <Species name={""} id={id} key={id} />
              </Link>
            );
          })}
        </div>
      </div>
    );
  }

  renderStarships(starships) {
    return (
      <div>
        <h3>Starships</h3>
        <div className="flex flex-wrap justify-around mt0 pr5 pl5">
          {starships.map(starship => {
            let id = getIndex(starship);

            return (
              <Link to={`/starships/${id}`} key={id}>
                <Starship name={""} id={id} key={id} />
              </Link>
            );
          })}
        </div>
      </div>
    );
  }

  renderVehicles(vehicles) {
    return (
      <div>
        <h3>Vehicles</h3>
        <div className="flex flex-wrap justify-around mt0 pr5 pl5">
          {vehicles.map(vehicle => {
            let id = getIndex(vehicle);

            return (
              <Link to={`/vehicles/${id}`} key={id}>
                <Vehicle name={""} id={id} key={id} />
              </Link>
            );
          })}
        </div>
      </div>
    );
  }

  renderFilm() {
    const { film } = this.props;
    const { id } = this.props.match.params;
    const {
      title,
      director,
      opening_crawl,
      episode_id,
      characters,
      planets,
      species,
      starships,
      vehicles
    } = film;

    if (!title) {
      return <Loader />;
    } else {
      // const episodeID = film.episode_id;
      const romanId = this.convertToRoman(episode_id);

      return (
        <div>
          {romanId ? this.renderTitle(romanId, title, director) : ""}

          <div className="pl5 pr5 tc white flex justify-between film-detail-header">
            {title ? this.renderArtwork(id) : ""}

            {opening_crawl ? this.renderCrawl(opening_crawl) : ""}
          </div>

          <div className="details">
            <h2 className="mt5">{title ? "Episode Information" : ""}</h2>

            <div className="flex flex-wrap">
              <div className="pa2 w-100">
                {characters ? this.renderCharacters(characters) : ""}
              </div>

              <div className="pa2 w-100">
                {planets ? this.renderPlanets(planets) : ""}

                <div className="pa2 w-100">
                  {species ? this.renderSpecies(species) : ""}
                </div>
              </div>
              <div className="pa2 w-100">
                {starships ? this.renderStarships(starships) : ""}
              </div>

              <div className="pa2 w-100">
                {vehicles ? this.renderVehicles(vehicles) : ""}
              </div>
            </div>
          </div>
        </div>
      );
    }
  }

  render() {
    return <div>{this.renderFilm()}</div>;
  }
}

function mapStateToProps({ selectedFilm }, ownProps) {
  return { film: selectedFilm };
}

export default connect(
  mapStateToProps,
  { fetchFilm, clearSelectedFilm }
)(FilmDetail);

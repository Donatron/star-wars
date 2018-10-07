import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchFilm } from '../../actions';
import { getIndex } from '../../helpers';

import Loader from '../Loader/loader';
import Film from './Film';
import Character from '../Characters/Character';
import Planet from '../Planets/Planet';
import Species from '../Species/Species';
import Starship from '../Starships/Starship';
import Vehicle from '../Vehicles/Vehicle';

class FilmDetail extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.fetchFilm(id);
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
    var str = '';

    for (var i of Object.keys(roman)) {
      var q = Math.floor(num / roman[i]);
      num -= q * roman[i];
      str += i.repeat(q);
    }

    return str;
  }

  renderFilm() {
    const { film } = this.props;
    const { id } = this.props.match.params;

    if (!this.props.film) {
      return (
      <Loader />
      )
    } else {
      const episodeID = film.episode_id;
      const romanId = this.convertToRoman(episodeID);
      const crawlArray = film.opening_crawl.split('\r\n\r');

      return (
        <div>
          <div className="w-100 text-center">
            <h2>Episode {romanId}: {film.title}</h2>
            <p>Directed by {film.director}</p>
          </div>
          <div className="pl5 pr5 tc white flex justify-between film-detail-header">
            <Film
              name={""}
              id={id}/>
            <div className="board">
              <div className="content  film-detail-crawl">
                <div className="w-80 pa5 ml5 subtitle">
                  {
                    crawlArray.map(el => {
                      return (
                        <div>
                          <p>{el}</p><br />
                        </div>
                      )
                    })
                  }
                </div>
              </div>
            </div>
          </div>
          <div className="details">
            <h2 className="mt5">Episode Information</h2>
            <div className="flex flex-wrap">
              <div className="pa2 w-100">
                <h3>Characters</h3>
                <div className="flex flex-wrap justify-around mt0 pr5 pl5">
                  {
                    film.characters.map(character => {
                      let id = getIndex(character);

                      return (
                        <Link to={`/characters/${id}`} key={id}>
                          <Character
                            key={id}
                            name={character.name}
                            id={id}/>
                        </Link>
                      )
                    })
                  }
                </div>
              </div>
              <div className="pa2 w-100">
                <h3>Planets</h3>
                <div className="flex flex-wrap justify-around mt0 pr5 pl5">
                  {
                    film.planets.map(planet => {
                      let id = getIndex(planet);

                      return (
                        <Link to={`/planets/${id}`} key={id} >
                          <Planet
                            name={planet.name}
                            id={id}
                            key={id}/>
                        </Link>
                      )
                    })
                  }
                </div>
                <div className="pa2 w-100">
                  <h3>Species</h3>
                  <div className="flex flex-wrap justify-around mt0 pr5 pl5">

                    {
                      film.species.map(specie => {
                        let id = getIndex(specie);

                        return (
                          <Link to={`/species/${id}`} key={id}>
                            <Species
                              name={""}
                              id={id}
                              key={id}/>
                          </Link>
                        )
                      })
                    }
                  </div>
                </div>
              </div>
              <div className="pa2 w-100">
                <h3>Starships</h3>
                <div className="flex flex-wrap justify-around mt0 pr5 pl5">
                  {
                    film.starships.map(starship => {
                      let id = getIndex(starship);

                      return (
                        <Link to={`/starships/${id}`} key={id}>
                          <Starship
                            name={""}
                            id={id}
                            key={id}/>
                        </Link>
                      )
                    })
                  }
                </div>
              </div>
              <div className="pa2 w-100">
                <h3>Vehicles</h3>
                <div className="flex flex-wrap justify-around mt0 pr5 pl5">
                  {
                    film.vehicles.map(vehicle => {
                      let id = getIndex(vehicle);

                      return (
                        <Link to={`/vehicles/${id}`} key={id}>
                          <Vehicle
                            name={""}
                            id={id}
                            key={id}/>
                        </Link>
                      )
                    })
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    }
  }

  render() {
    return(
      <div>{this.renderFilm()}</div>
    )
  }
}

function mapStateToProps({ films }, ownProps) {
  return { film: films.film }
}

export default connect(mapStateToProps, { fetchFilm })(FilmDetail);

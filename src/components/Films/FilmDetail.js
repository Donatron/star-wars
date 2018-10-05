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

  renderFilm() {
    const { film } = this.props;
    const { id } = this.props.match.params;

    if (!this.props.film) {
      return (
      <Loader />
      )
    } else {
      return (
        <div>
          <div className="w-100 text-center">
            <h2>{film.title}</h2>
            <p>Directed by {film.director}</p>
          </div>
          <div className="tc white flex justify-around">
            <Film
              name={""}
              id={id}/>
            <div className="w-20 pa3 bgred">
              <div id="board" className="w-20">
                <div id="content">
                  {film.opening_crawl}
                </div>
              </div>
            </div>
          </div>
          <div>
            <h2>Episode Information</h2>
            <div className="flex justify-around">
              <div className="pa2">
                <h3>Characters</h3>
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
              <div>
                <h3>Planets</h3>
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
              <div>
                <h3>Species</h3>
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
              <div>
                <h3>Starships</h3>
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
              <div>
                <h3>Vehicles</h3>
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

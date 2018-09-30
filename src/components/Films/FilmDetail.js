import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchFilm } from '../../actions';

import Loader from '../Loader/loader';
import Film from './Film';

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
                    return <p key={character}>{character}</p>
                  })
                }
              </div>
              <div>
                <h3>Planets</h3>
                {
                  film.planets.map(planet => {
                    return <p key={planet}>{planet}</p>
                  })
                }
              </div>
              <div>
                <h3>Species</h3>
                {
                  film.species.map(specie => {
                    return <p key={specie}>{specie}</p>
                  })
                }
              </div>
              <div>
                <h3>Starships</h3>
                {
                  film.starships.map(starship => {
                    return <p key={starship}>{starship}</p>
                  })
                }
              </div>
              <div>
                <h3>Vehicles</h3>
                {
                  film.vehicles.map(vehicle => {
                    return <p key={vehicle}>{vehicle}</p>
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

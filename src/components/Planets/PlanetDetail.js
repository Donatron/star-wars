import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchPlanet } from '../../actions';
import { getIndex } from '../../helpers';

import Loader from '../Loader/loader';
import Planet from './Planet';
import Character from '../Characters/Character';
import Film from '../Films/Film';

class PlanetDetail extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.fetchPlanet(id);
  }

  renderPlanet() {
    const { planet } = this.props;
    const { id } = this.props.match.params;

    if (!this.props.planet) {
      return (
      <Loader />
      )
    } else {
      return (
        <div>
          <div className="w-100 text-center">
            <h2>{planet.name}</h2>
          </div>
          <div className="w-100 pa3 ml5 flex justify-start planet-detail">
            <Planet
              name={""}
              id={id}/>
            <div className="pa3 ml5 details">
              <p>Rotation Period: {planet.rotation_period} hours</p>
              <p>Orbital Period: {planet.orbital_period} days</p>
              <p>Diameter: {planet.diameter} km</p>
              <p>Climate: {planet.climate}</p>
              <p>Gravity: {planet.gravity}</p>
              <p>Terrain: {planet.terrain}</p>
              <p>Surface Water: {planet.surface_water}</p>
              <p>Population: {planet.population}</p>
            </div>
          </div>
          <div className="center pa3 w-50 details">
            <h3>Inhabitants</h3>
            <div className="flex flex-wrap justify-around">
              {
                planet.residents.map((resident, i) => {
                  let id = getIndex(resident);

                  return (
                    <Link to={`/characters/${id}`} key={id}>
                      <Character
                        name={resident.name}
                        id={id}
                        key={id}/>
                    </Link>
                  )
                })
              }
            </div>
          </div>
          <div className="flex flex-wrap justify-around pa3 ml2 mr2 w100 details">
            <div className="center pa3 w-50 details">
              <h3>Appears In Films</h3>
              <div className="flex flex-wrap justify-around">
                {
                  planet.films.map((film, i) => {
                    let id = getIndex(film);

                    return (
                      <Link to={`/films/${id}`} key={id}>
                        <Film
                          name={film.name}
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
      <div>{this.renderPlanet()}</div>
    )
  }
}

function mapStateToProps({ planets }, ownProps) {
  return { planet: planets.planet }
}

export default connect(mapStateToProps, { fetchPlanet })(PlanetDetail);

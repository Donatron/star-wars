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
          <div className="tc white flex justify-around">
            <Planet
              name={""}
              id={id}/>
            <div>
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
          <div>
            <h3>Inhabitants</h3>
            {
              planet.residents.map((resident, id) => {
                return (
                  <Character
                    name={resident.name}
                    id={id+1}
                    key={id}/>
                )
              })
            }

          </div>
          <div>
            <h3>Appears In Films</h3>
              {
                planet.films.map((film, id) => {
                  return (
                    <Film
                      name={film.name}
                      id={id+1}
                      key={id}/>
                  )
                })
              }
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

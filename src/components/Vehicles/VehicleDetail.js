import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchVehicle } from '../../actions';
import { getIndex } from '../../helpers';

import Loader from '../Loader/loader'
import Vehicle from './Vehicle';
import Film from '../Films/Film';
import Character from '../Characters/Character';

class VehicleDetail extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.fetchVehicle(id);
  }

  renderVehicle() {
    const { vehicle } = this.props;
    const { id } = this.props.match.params;

    if (!vehicle) {
      return (
        <Loader />
      )
    } else {
        return(
          <div>
            <div className="w-100 text-center">
              <h2>{vehicle.name}</h2>
            </div>
            <div className="tc white flex justify-around">
              <Vehicle
                name=""
                id={id}
                key={id}/>
              <div>
                <p>Model: {vehicle.model}</p>
                <p>Manufacturer: {vehicle.manufacturer}</p>
                <p>Vehicle Class: {vehicle.vehicle_class}</p>
                <p>Cost In Credits: {vehicle.cost_in_credits}</p>
                <p>Length: {vehicle.length} m</p>
                <p>Max. Atmosphering Speed: {vehicle.max_atmosphering_speed}</p>
                <p>Crew: {vehicle.crew}</p>
                <p>Passengers: {vehicle.passengers}</p>
                <p>Cargo Capacity: {vehicle.cargo_capacity}</p>
                <p>Consumables: {vehicle.consumables}</p>
              </div>
            </div>
            <div>
              <h3>Pilots</h3>
                {
                  vehicle.pilots.length !== 0 ?
                  vehicle.pilots.map((pilot, i) => {
                    let id = getIndex(pilot);

                    return (
                      <Link to={`/characters/${id}`} key={id}>
                        <Character
                          name={pilot.name}
                          id={id}
                          key={id}/>
                      </Link>
                    )
                  }) : <p>Unknown</p>
                }
            </div>
            <div>
              <h3>Appears In Films</h3>
                {
                  vehicle.films.map((film, i) => {
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
        )
    }
  }

  render() {
    return (
      <div>{this.renderVehicle()}</div>
    )
  }
}

function mapStateToProps({ vehicles }, ownProps) {
  return { vehicle: vehicles.vehicle }
}

export default connect(mapStateToProps, { fetchVehicle })(VehicleDetail);

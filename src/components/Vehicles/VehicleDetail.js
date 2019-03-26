import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { fetchVehicle, clearSelectedVehicle } from "../../actions";
import { getIndex } from "../../helpers";

import Loader from "../Loader/loader";
import Vehicle from "./Vehicle";
import Film from "../Films/Film";
import Character from "../Characters/Character";

class VehicleDetail extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.fetchVehicle(id);
  }

  componentWillUnmount() {
    this.props.clearSelectedVehicle();
  }

  renderDetails(
    id,
    model,
    manufacturer,
    vehicle_class,
    cost_in_credits,
    length,
    max_atmosphering_speed,
    crew,
    passengers,
    cargo_capacity,
    consumables
  ) {
    return (
      <div className="w-100 pa3 ml5 flex justify-start vehicle-detail">
        <Vehicle name="" id={id} key={id} />
        <div className="pa3 ml5 details">
          <p>Model: {model}</p>
          <p>Manufacturer: {manufacturer}</p>
          <p>Vehicle Class: {vehicle_class}</p>
          <p>Cost In Credits: {cost_in_credits}</p>
          <p>Length: {length} m</p>
          <p>Max. Atmosphering Speed: {max_atmosphering_speed}</p>
          <p>Crew: {crew}</p>
          <p>Passengers: {passengers}</p>
          <p>Cargo Capacity: {cargo_capacity}</p>
          <p>Consumables: {consumables}</p>
        </div>
      </div>
    );
  }

  renderPilots(pilots) {
    return (
      <div>
        <h3>Pilots</h3>
        <div className="flex flex-wrap justify-around">
          {pilots.length !== 0 ? (
            pilots.map((pilot, i) => {
              let id = getIndex(pilot);

              return (
                <Link to={`/characters/${id}`} key={id}>
                  <Character name={pilot.name} id={id} key={id} />
                </Link>
              );
            })
          ) : (
            <p>Unknown</p>
          )}
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
                <Film name={film.name} id={id} key={id} />
              </Link>
            );
          })}
        </div>
      </div>
    );
  }

  renderVehicle() {
    const { vehicle } = this.props;
    const { id } = this.props.match.params;
    const {
      name,
      model,
      manufacturer,
      vehicle_class,
      cost_in_credits,
      length,
      max_atmosphering_speed,
      crew,
      passengers,
      cargo_capacity,
      consumables,
      pilots,
      films
    } = vehicle;

    if (!name) {
      return <Loader />;
    } else {
      return (
        <div>
          <div className="w-100 text-center">
            <h2>{name ? name : ""}</h2>
          </div>

          {model
            ? this.renderDetails(
                id,
                model,
                manufacturer,
                vehicle_class,
                cost_in_credits,
                length,
                max_atmosphering_speed,
                crew,
                passengers,
                cargo_capacity,
                consumables
              )
            : ""}

          <div className="center pa3 w-50 details">
            {pilots ? this.renderPilots(pilots) : ""}
          </div>

          <div className="center pa3 w-50 details">
            {films ? this.renderFilms(films) : ""}
          </div>
        </div>
      );
    }
  }

  render() {
    return <div>{this.renderVehicle()}</div>;
  }
}

function mapStateToProps({ selectedVehicle }, ownProps) {
  return { vehicle: selectedVehicle };
}

export default connect(
  mapStateToProps,
  { fetchVehicle, clearSelectedVehicle }
)(VehicleDetail);

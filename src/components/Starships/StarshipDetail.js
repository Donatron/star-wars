import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchStarship, clearSelectedStarship } from "../../actions";
import accounting from "accounting";

import Starship from "./Starship";
import CardItem from "../Card/CardItem";

class StarshipDetail extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.fetchStarship(id);
  }

  componentWillUnmount() {
    this.props.clearSelectedStarship();
  }

  renderDetails(
    id,
    name,
    model,
    manufacturer,
    starship_class,
    cost_in_credits,
    length,
    max_atmosphering_speed,
    crew,
    passengers,
    cargo_capacity,
    consumables,
    hyperdrive_rating,
    MGLT
  ) {
    return (
      <div>
        <div className="w-100 text-center">
          <h2>{name}</h2>
        </div>
        <div className="w-100 pa3 flex justify-center starship-detail">
          <Starship name="" id={id} key={id} />
          <div className="pa3 ml5 details">
            <p>Model: {model}</p>
            <p>Manufacturer: {manufacturer}</p>
            <p>Starship Class: {starship_class}</p>
            <p>Cost In Credits: {accounting.formatNumber(cost_in_credits)}</p>
            <p>Length: {accounting.formatNumber(length)} m</p>
            <p>
              Max. Atmosphering Speed:{" "}
              {max_atmosphering_speed === "n/a"
                ? "Not Applicable"
                : accounting.formatNumber(max_atmosphering_speed)}
            </p>
            <p>Crew: {accounting.formatNumber(crew)}</p>
            <p>Passengers: {accounting.formatNumber(passengers)}</p>
            <p>Cargo Capacity: {accounting.formatNumber(cargo_capacity)}</p>
            <p>Consumables: {accounting.formatNumber(consumables)}</p>
            <p>
              Hyper Drive Rating: {accounting.formatNumber(hyperdrive_rating)}
            </p>
            <p>MGLT: {MGLT}</p>
          </div>
        </div>
      </div>
    );
  }

  renderPilots(pilots) {
    return (
      <div>
        <h3>Pilots</h3>
        <div className="flex flex-wrap justify-around">
          {
            pilots.length !== 0
              ? pilots.map((pilot, i) => <CardItem item={pilot} linkPath="characters" key={pilot} />)
              : <p>Unknown</p>
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

  renderStarship() {
    const { id } = this.props.match.params;
    const { starship } = this.props;
    const {
      name,
      model,
      manufacturer,
      starship_class,
      cost_in_credits,
      length,
      max_atmosphering_speed,
      crew,
      passengers,
      cargo_capacity,
      consumables,
      hyperdrive_rating,
      MGLT,
      pilots,
      films
    } = starship;

    if (!name) {
      return <div />;
    } else {
      return (
        <div>
          {name
            ? this.renderDetails(
              id,
              name,
              model,
              manufacturer,
              starship_class,
              cost_in_credits,
              length,
              max_atmosphering_speed,
              crew,
              passengers,
              cargo_capacity,
              consumables,
              hyperdrive_rating,
              MGLT
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
    return <div>{this.renderStarship()}</div>;
  }
}

function mapStateToProps({ selectedStarship }, ownProps) {
  return { starship: selectedStarship };
}

export default connect(
  mapStateToProps,
  { fetchStarship, clearSelectedStarship }
)(StarshipDetail);

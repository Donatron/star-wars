import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchStarship } from '../../actions';
import { getIndex } from '../../helpers';

import Loader from '../Loader/loader';
import Starship from './Starship';
import Character from '../Characters/Character';
import Film from '../Films/Film';

class StarshipDetail extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.fetchStarship(id)
  }

  renderStarship() {
    const { id } = this.props.match.params;
    const { starship } = this.props;

    if (!starship) {
      return (
        <Loader />
      )
    } else {
      return (
        <div>
          <div className="w-100 text-center">
            <h2>{starship.name}</h2>
          </div>
          <div className="w-100 pa3 ml5 flex justify-start starship-detail">
            <Starship
              name=""
              id={id}
              key={id}/>
            <div className="pa3 ml5 details">
              <p>Model: {starship.model}</p>
              <p>Manufacturer: {starship.manufacturer}</p>
              <p>Starship Class: {starship.starship_class}</p>
              <p>Cost In Credits: {starship.cost_in_credits}</p>
              <p>Length: {starship.length} m</p>
              <p>Max. Atmosphering Speed: {starship.max_atmosphering_speed}</p>
              <p>Crew: {starship.crew}</p>
              <p>Passengers: {starship.passengers}</p>
              <p>Cargo Capacity: {starship.cargo_capacity}</p>
              <p>Consumables: {starship.consumables}</p>
              <p>Hyper Drive Rating: {starship.hyperdrive_rating}</p>
              <p>MGLT: {starship.MGLT}</p>
            </div>
          </div>
          <div className="center pa3 w-50 details">
            <h3>Pilots</h3>
            <div className="flex flex-wrap justify-around">
              {
                starship.pilots.length !== 0 ?
                starship.pilots.map((pilot, i) => {
                  const id = getIndex(pilot);

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
          </div>
          <div className="center pa3 w-50 details">
            <h3>Appears In Films</h3>
            <div className="flex flex-wrap justify-around">
              {
                starship.films.map((film, i) => {
                  const id = getIndex(film);

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
      )
    }

  }

  render() {
    return (
      <div>{this.renderStarship()}</div>
    )
  }
}

function mapStateToProps({ starships }, ownProps) {
  return { starship: starships.starship }
}

export default connect(mapStateToProps, { fetchStarship })(StarshipDetail);

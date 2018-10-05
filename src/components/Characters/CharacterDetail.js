import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchPerson } from '../../actions';
import { getIndex } from '../../helpers';

import Character from './Character';
import Loader from '../Loader/loader';
import Film from '../Films/Film';
import Vehicle from '../Vehicles/Vehicle';
import Starship from '../Starships/Starship';

class CharacterDetail extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.fetchPerson(id);
  }

  render() {
    const { person } = this.props;
    const { id } = this.props.match.params;

    if(!person) {
      return (
        <Loader />
      )
    } else {

      return (
        <div>
          <div className="w100 text-center">
          <h2>{person.name}</h2>
          </div>
          <div className="flex flex-wrap pa3 ml2 mr2">
            <Character
              key={person.name}
              id={id}
              name={""}
              />
            <div>
              <h3>Character Details</h3>
              <p>Height: {person.height}cm</p>
              <p>Mass: {person.mass}kg</p>
              <p>Hair Colour: {person.hair_color}</p>
              <p>Skin Colour: {person.skin_color}</p>
              <p>Eye Colour: {person.eye_color}</p>
              <p>Born: {person.birth_year}</p>
              <p>Gender: {person.gender}</p>
              <p>Home Planet: {person.homeworld}</p>
              <p>Species: {person.species}</p>
            </div>
            <div>
              <h3>Appears In Films</h3>
              {
                person.films.map(film => {
                  const id = getIndex(film);

                  return (
                    <Link to={`/films/${id}`} key={id}>
                      <Film
                        name=""
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
                person.vehicles.length === 0 ? <p>Unknown</p> :

                  person.vehicles.map(vehicle => {
                    const id = getIndex(vehicle);

                    return (
                      <Link to={`/vehicles/${id}`} key={id}>
                        <Vehicle
                          name=""
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
                person.starships.length === 0 ? <p>Unknown</p> :

                  person.starships.map(starship => {
                    const id = getIndex(starship);

                    return (
                      <Link to={`/starships/${id}`} key={id}>
                        <Starship
                          name=""
                          id={id}
                          key={id}/>
                      </Link>
                    )
                  })
              }
            </div>
          </div>
        </div>
      );

    }
  }
}

function mapStateToProps({ people }, ownProps) {
  return { person: people.person };
}

export default connect(mapStateToProps, { fetchPerson })(CharacterDetail);

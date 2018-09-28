import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchPerson } from '../../actions';

import Character from './Character';
import Loader from '../Loader/loader';

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
                  return <p>{film}</p>
                })
              }
            </div>
            <div>
              <h3>Vehicles</h3>
              {
                person.vehicles.map(vehicle => {
                  return <p>{vehicle}</p>
                })
              }
            </div>
            <div>
              <h3>Starships</h3>
              {
                person.starships.map(starship => {
                  return <p>{starship}</p>
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

// function mapDispatchToProps(dispatch) {
//   return bindActionCreators({ fetchPerson }, dispatch);
// }

export default connect(mapStateToProps, { fetchPerson })(CharacterDetail);

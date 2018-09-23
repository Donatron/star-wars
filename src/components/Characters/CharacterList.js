import React from 'react';
import { connect } from 'react-redux';
import Character from './Character';
import '../Characters/Character.css';
import Loader from '../Loader/loader';

const CharacterList = ({ people }) => {

  if (!people || people.length === 0) {
    return (
      <Loader />
    );
  } else {
      return (
          <div className="tc white center characters">
            there are people on the balcony
            {
              // people.map((person, i) => {
              //   return (
              //     <Character
              //       key={person.name}
              //       id={i+1}
              //       name={person.name}
              //     />
              //   );
              // })
            }
          </div>
      );
  }

}

function mapStateToProps(state) {
  return { people: state.people }
}

export default connect(mapStateToProps)(CharacterList);

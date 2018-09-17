import React from 'react';
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
            {
              people.map((person, i) => {
                return (
                  <Character
                    key={person.name}
                    id={i+1}
                    name={person.name}
                  />
                );
              })
            }
          </div>
      );
  }

}

export default CharacterList;

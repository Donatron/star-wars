import React from 'react';
import Character from './Character';
import '../Characters/Character.css';
import Loader from '../Loader/loader';

const CharacterList = ({ people }) => {

  if (people.length === 0) {
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
                    key={people[i].name}
                    id={i+1}
                    name={people[i].name}
                  />
                );
              })
            }
          </div>
      );
  }

}

export default CharacterList;

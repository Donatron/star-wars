import React from 'react';
import Character from './Character';
import '../Characters/Character.css';

const CharacterList = ({ people }) => {
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

export default CharacterList;

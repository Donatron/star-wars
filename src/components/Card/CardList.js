import React from 'react';
import Card from './Card';
import '../Characters/Character.css';

const CardList = ({ people, route }) => {
  return (
    <div>
      <div className="characters">
        {
          people.map((person, i) => {
            return (
              <Card
                key={people[i].name}
                id={i+1}
                name={people[i].name}
              />
            );
          })
        }
      </div>
    </div>
  );
}

export default CardList;

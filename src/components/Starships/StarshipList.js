import React from 'react';
import Starship from './Starship';
import Loader from '../Loader/loader';
import './Starships.css';

const StarshipList = ({ starships }) => {
  if (starships.length === 0) {
    return (
      <Loader />
    )
  } else {

    return (
      <div className="tc white center starships">

        {
          starships.map((starship, i) => {
            return (
              <Starship
                key={starships[i].name}
                id={i+1}
                name={starships[i].name}
              />
            )
          })
        }

      </div>
    )
  }
}

export default StarshipList;

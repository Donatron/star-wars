import React from 'react';
import Starship from './Starship';
import Loader from '../Loader/loader';
import './Starships.css';

const StarshipList = ({ starships }) => {
  if (!starships || starships.length === 0) {
    return (
      <Loader />
    )
  } else {

    return (
      <div className="tc white center starships">
        startships list
        {
          // starships.map((starship, i) => {
          //   return (
          //     <Starship
          //       key={starship.name}
          //       id={i+1}
          //       name={starship.name}
          //     />
          //   )
          // })
        }

      </div>
    )
  }
}

export default StarshipList;

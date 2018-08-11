import React from 'react';
import Planet from './Planet';
import './Planets.css'
import Loader from '../Loader/loader';

const PlanetList = ({ planets }) => {
  if (planets.length === 0) {
    return (
      <Loader />
    );
  } else {
      return (
        <div className="tc white center planets">
          {
            planets.map((planet, i) => {
              if (i !== 26) {
                return (
                  <Planet
                    key={planets[i].name}
                    id={i+1}
                    name={planets[i].name}
                  />
                );
              }
            })
          }
        </div>
      );
  }
}

export default PlanetList;

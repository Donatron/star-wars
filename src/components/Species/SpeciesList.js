import React from 'react';
import Species from './Species';
import Loader from '../Loader/loader';
import './Species.css'

const SpeciesList = ({ species }) => {
  if (species.length === 0) {
    return (
      <Loader />
    )
  } else {
    return (
      <div className="tc white species">

        {
          species.map((specie, i) => {
            return (
              <Species
                key={species[i].name}
                id={i+1}
                name={species[i].name}
              />
            )
          })
        }

      </div>
    )
  }
}

export default SpeciesList;

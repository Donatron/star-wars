import React from 'react';
import Species from './Species';
import Loader from '../Loader/loader';
import './Species.css'

const SpeciesList = ({ species }) => {
  if (!species || species.length === 0) {
    return (
      <Loader />
    )
  } else {
    return (
      <div className="tc white species">
        species list
        {
          // species.map((specie, i) => {
          //   return (
          //     <Species
          //       key={specie.name}
          //       id={i+1}
          //       name={specie.name}
          //     />
          //   )
          // })
        }

      </div>
    )
  }
}

export default SpeciesList;

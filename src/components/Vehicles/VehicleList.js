import React from 'react';
import Vehicle from './Vehicle';
import Loader from '../Loader/loader';
import './Vehicles.css';

const VehicleList = ({ vehicles }) => {
  if (!vehicles || vehicles.length === 0) {
    return (
      <Loader />
    );
  } else {
      return (
        <div className="tc white center vehicles">
          vehicles list
          {
            // vehicles.map((vehicle, i) => {
            //   if (i !== 26) {
            //     return (
            //       <Vehicle
            //         key={vehicle.name}
            //         id={i+1}
            //         name={vehicle.name}
            //       />
            //     );
            //   }
            // })
          }
        </div>
      );
  }
}

export default VehicleList;

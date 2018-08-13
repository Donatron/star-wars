import React from 'react';
import Vehicle from './Vehicle';
import Loader from '../Loader/loader';
import './Vehicles.css';

const VehicleList = ({ vehicles }) => {
  if (vehicles.length === 0) {
    return (
      <Loader />
    );
  } else {
      return (
        <div className="tc white center vehicles">
          {
            vehicles.map((vehicle, i) => {
              if (i !== 26) {
                return (
                  <Vehicle
                    key={vehicles[i].name}
                    id={i+1}
                    name={vehicles[i].name}
                  />
                );
              }
            })
          }
        </div>
      );
  }
}

export default VehicleList;

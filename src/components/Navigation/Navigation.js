import React from 'react';
import './Navigation.css';
import Logo from '../Logo/Logo';

const Navigation = ({ onRouteChange }) => {
  return (
    <div>
      <a
        className="link dim b f1 f-headline-ns tc db mt3 mb0-ns"
        title="Home"
        onClick={() => onRouteChange('home')}
        ><Logo /></a>
      <nav className="pa1 pa2-ns">
        <div className="tc pb3">
          <a
            className="link dim f6 f4-ns dib mr4 ttu"
            title="People"
            onClick={() => onRouteChange('characters')}
          >Characters</a>
          <a
            className="link dim f6 f4-ns dib mr4 ttu"
            title="Films"
            onClick={() => onRouteChange('films')}
          >Films</a>
          <a
            className="link dim f6 f4-ns dib mr4 ttu"
            title="Planets"
            onClick={() => onRouteChange('planets')}
          >Planets</a>
          <a
            className="link dim f6 f4-ns dib mr4 ttu"
            title="Vehicles"
            onClick={() => onRouteChange('vehicles')}
          >Vehicles</a>
          <a
            className="link dim f6 f4-ns dib mr4 ttu"
            title="Starships"
            onClick={() => onRouteChange('starships')}
          >Starships</a>
          <a
            className="link dim f6 f4-ns dib ttu"
            title="Species"
            onClick={() => onRouteChange('species')}
          >Species</a>
        </div>
      </nav>
    </div>
  )
}

export default Navigation

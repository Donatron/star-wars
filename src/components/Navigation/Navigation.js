import React from 'react';
import './Navigation.css';
import Logo from '../Logo/Logo';

const Navigation = () => {
  return (
    <div>
      <a className="link dim b f1 f-headline-ns tc db mt3 mb0-ns" title="Home"><Logo /></a>
      <nav className="pa1 pa2-ns">
        <div className="tc pb3">
          <a className="link dim f6 f4-ns dib mr4 ttu" title="People">Characters</a>
          <a className="link dim f6 f4-ns dib mr4 ttu" title="Films">Films</a>
          <a className="link dim f6 f4-ns dib mr4 ttu" title="Planets">Planets</a>
          <a className="link dim f6 f4-ns dib mr4 ttu" title="Vehicles">Vehicles</a>
          <a className="link dim f6 f4-ns dib mr4 ttu" title="Starships">Starships</a>
          <a className="link dim f6 f4-ns dib ttu" title="Species">Species</a>
        </div>
      </nav>
    </div>
  )
}

export default Navigation

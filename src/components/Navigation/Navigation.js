import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";
import Logo from "../Logo/Logo";

const Navigation = ({ onRouteChange }) => {
  return (
    <div className="header">
      <Link to="/">
        <Logo />
      </Link>
      <nav className="pa1 pa2-ns">
        <div className="tc pb3">
          <Link to="/characters" className="link dim f6 f4-ns dib mr4 ttu pa2">
            Characters
          </Link>
          <Link to="/films" className="link dim f6 f4-ns dib mr4 ttu pa2">
            Films
          </Link>
          <Link to="/planets" className="link dim f6 f4-ns dib mr4 ttu pa2">
            Planets
          </Link>
          <Link to="/vehicles" className="link dim f6 f4-ns dib mr4 ttu pa2">
            Vehicles
          </Link>
          <Link to="/starships" className="link dim f6 f4-ns dib mr4 ttu pa2">
            Starships
          </Link>
          <Link to="/species" className="link dim f6 f4-ns dib mr4 ttu pa2">
            Species
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;

import React from "react";
import "../Loader/loader.css";

const Loader = () => {
  return (
    <div className="loader">
      <img
        src={require(`../../assets/img/loader.gif`)}
        className="spinner"
        alt="spinner"
      />
      <p>
        <em>Loading ...</em>
      </p>
    </div>
  );
};

export default Loader;

import React from "react";
import "../Loader/loader.css";

const Loader = () => {
  return (
    <div className="loader vh-100 dt w-100 tc">
      <div className="dtc v-mid">
        <img
          src={require(`../../assets/img/loader.gif`)}
          className="spinner"
          alt="spinner"
        />
        <p>
          <em>Loading ...</em>
        </p>
      </div>
    </div>
  );
};

export default Loader;

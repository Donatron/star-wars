import React from "react";
import "./SearchBox.css";

const SearchBox = ({ search, onSearchChange }) => {
  return (
    <div className="pa2">
      <input
        className="pa3 ba b--white-50"
        type="search"
        placeholder={`Search ${search} `}
        onChange={onSearchChange}
      />
    </div>
  );
};

export default SearchBox;

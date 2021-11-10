import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import "./SearchBox.css";

const SearchBox = ({ search, onSearchChange }) => {
  return (
    <div className="search-box">
      <div className="pa2 search-box_container">
        <input
          className="pa3"
          type="search"
          placeholder={`Search ${search} `}
          onChange={onSearchChange}
        />
        <FontAwesomeIcon icon={faSearch} />
      </div>
    </div>
  );
};

export default SearchBox;

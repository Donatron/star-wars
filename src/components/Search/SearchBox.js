import React from 'react';
import './SearchBox.css';

const SearchBox = ({ search, searchChange }) => {
  return (
    <div className="pa2">
      <input
        className="pa3 ba b--white-50"
        type="search"
        placeholder={`Search ${search} `}
        onChange={searchChange}
      />
    </div>
  )
}

export default SearchBox;

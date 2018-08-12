import React from 'react';
import Film from './Film';
import Loader from '../Loader/loader';
import './Films.css'

const FilmList = ({ films }) => {
  if (films.length === 0) {
    return (
      <Loader />
    )
  } else {
    return (
      <div className="tc white center films">

        {
          films.map((film, i) => {
            return (
              <Film
                key={films[i].title}
                id={i+1}
                name={films[i].title}
              />
            )
          })
        }

      </div>
    )
  }
}

export default FilmList;

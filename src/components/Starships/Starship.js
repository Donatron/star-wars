import React from 'react';

const Starship = ({ name, id }) => {
  return (
    <article className="w-100 center">
      <p>{id}:- {name}</p>
    </article>
  );
}

export default Starship;

import React from 'react';

const Species = ({ name, id }) => {
  return (
    <article className="w-100 center">
      <p>{id}:- {name}</p>
    </article>
  );
}

export default Species;

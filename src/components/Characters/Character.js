import React from 'react';

const Character = ({ name, id }) => {
  return (
    <article className="dib br3 pa3 ma2 grow tc bw2 shadow-5">
      <img src={require(`../../assets/img/characters/${id}.jpg`)} className="db br2 br--top grow" alt="star wars character." />
      <p>{name}</p>
    </article>
  );
}

export default Character;

import React from 'react';

const Character = ({ name, id }) => {
  return (

    <article className="mv4 mw5 center">
      <img src={require(`../../assets/img/characters/${id}.jpg`)} className="db br2 br--top grow" alt="star wars character." />
      <p>{name}</p><br></br>
    </article>
  );
}

export default Character;

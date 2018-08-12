import React from 'react';

const Starship = ({ name, id }) => {
  return (
    <article className="mv4 mw5 center">
      <img src={require(`../../assets/img/starships/${id}.jpg`)} className="db br2 br--top grow" alt="star wars starship." />
      <p>{name}</p><br></br>
    </article>
  );
}

export default Starship;

import React from 'react';

const Species = ({ name, id }) => {
  return (
    <article className="mv4 mw5">
      <img src={require(`../../assets/img/species/${id}.jpg`)} className="db br2 br--top grow" alt="star wars species." />
      <p>{name}</p><br></br>
    </article>
  );
}

export default Species;

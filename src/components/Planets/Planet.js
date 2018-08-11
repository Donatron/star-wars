import React from 'react';

const Planet = ({ name, id }) => {
  return (
    <article className="mv4 mw5 center">
      <img src={require(`../../assets/img/planets/${id}.jpg`)} className="db br2 br--top grow" alt="star wars planet." />
      <p>{name}</p><br></br>
    </article>
  );
}

export default Planet;

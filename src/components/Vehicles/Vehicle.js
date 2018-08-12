import React from 'react';

const Vehicle = ({ name, id }) => {
  return (
    <article className="mv4 mw5 center">
      <img src={require(`../../assets/img/vehicles/${id}.jpg`)} className="db br2 br--top grow" alt="star wars vehicle." />
      <p>{name}</p><br></br>
    </article>
  );
}

export default Vehicle;

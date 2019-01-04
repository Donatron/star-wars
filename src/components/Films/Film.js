import React from "react";

const Film = ({ name, id }) => {
  return (
    <article className="mv4 mw5">
      <img
        src={require(`../../assets/img/films/${id}.jpg`)}
        className="db br2 br--top grow"
        alt="star wars film."
      />
      <p>{name}</p>
    </article>
  );
};

export default Film;

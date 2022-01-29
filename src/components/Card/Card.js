import React from 'react';
import { Link } from "react-router-dom";
import { getIndex } from "../../helpers";

const Card = ({ item, linkPath }) => {
  const { name, url } = item;
  const id = getIndex(url);

  return (
    <Link to={`/${linkPath}/${id}`} key={id}>
      <article className="mv4 mw5">
        <img
          src={require(`../../assets/img/${linkPath}/${id}.jpg`)}
          alt={name}
          className="db br2 br--top grow"
        />
        <p>{name}</p><br></br>
      </article>
    </Link>)
}

export default Card;
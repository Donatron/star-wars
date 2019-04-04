import React from "react";
import { Link } from "react-router-dom";

import "../404/Page404.css";

const Page404 = () => {
  return (
    <div className="flex flex-wrap justify-around pa3 ml2 mr2 w100">
      <article className="mv4 mw5 w-50 flex flex-column justify-center flex-col">
        <img
          src={require("../../assets/img/obi-wan.gif")}
          className="db br2 br--top grow center obi-wan"
          alt="star wars character."
        />
        <p>This isn't the page you're looking for</p>
        <Link to="/" className="error-link">
          {"Go Back"}
        </Link>
        <br />
      </article>
    </div>
  );
};

export default Page404;

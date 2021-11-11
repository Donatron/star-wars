import React from 'react';
import { Link } from 'react-router-dom';

const Error = ({ message, redirect }) => {
  return (
    <div className="error">
      <h3><i>{message}</i></h3>
      <Link to="/films">{`Return to ${redirect} list`}</Link>
    </div>
  )
}

export default Error;
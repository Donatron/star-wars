import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'

import { clearError } from '../../actions';

const Error = ({ message, redirect, clearError }) => {
  const handleRedirect = () => {
    clearError();
  }
  return (
    <div className="error">
      <h3><i>{message}</i></h3>
      <Link to={`/${redirect}`} onClick={handleRedirect}>{`Return to ${redirect} list`}</Link>
    </div>
  )
}

export default connect(null, { clearError })(Error);
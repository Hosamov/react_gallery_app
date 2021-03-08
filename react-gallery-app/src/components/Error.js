import React from 'react';
import { Link } from 'react-router-dom';

//STATELESS COMPONENT
//Returns 404-like error message
const Error = () => {

  return(
      <div className="not-found">
        <h2>Uh oh! Page Not Found...</h2>
        <h3><Link to='/'>Click here to return to Homepage</Link></h3>
      </div>
  );
}

export default Error;

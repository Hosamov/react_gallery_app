import React from 'react';
import { NavLink } from 'react-router-dom';

/*STATELESS COMPONENT*/

const Nav = () => {
  return(
    <nav className="main-nav">
      <ul>
        <li><NavLink to='/martin'>Martin Guitars</NavLink></li>
        <li><NavLink to='/gibson'>Gibson Guitars</NavLink></li>
        <li><NavLink to='/fender'>Fender Guitars</NavLink></li>
      </ul>
    </nav>
  );
}

export default Nav;

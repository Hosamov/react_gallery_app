import React from 'react';
import { NavLink } from 'react-router-dom';

/*STATELESS COMPONENT*/

const Nav = () => {
  return(
    <nav className="main-nav">
      <ul>
        <li><NavLink to='/lego'>Lego</NavLink></li>
        <li><NavLink to='/rpi'>RaspberryPi</NavLink></li>
        <li><NavLink to='/arduino'>Arduino</NavLink></li>
      </ul>
    </nav>
  );
}

export default Nav;

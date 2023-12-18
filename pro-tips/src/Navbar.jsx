import React from 'react';
import { Link } from 'react-router-dom';
import './Registration.css';

function Navbar() {
  return (
    <>
      <nav id='nav-bar'>
        <h1><Link to='/Home'>Kalvium</Link></h1>
        <ul id='nav-list'>
            <li><Link to='/Registration'>Registration</Link></li>
            <li><Link to='/About'>About</Link></li>
          <li><Link to='/Contact'>Contact</Link></li>

        </ul>
      </nav>
    </>
  )
}

export default Navbar;
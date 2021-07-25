import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/static/logo.png';

const Navbar = () => {
  return (
    <header className="header">
      <nav className="nav">
        <Link to="/">
          <img className="logo" src={logo} alt="logo"/>
        </Link>
        <ul>
          <li className="nav-item">
            <Link className="item-link" to="/recipes">Recipes</Link>
          </li>
          <li className="nav-item">
            <Link className="item-link" to="/favorites">My favorite recipes</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
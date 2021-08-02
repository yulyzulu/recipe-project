import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../assets/static/logo.png';

const Navbar = () => {
  return (
    <header className="header">
      <nav className="nav">
        <Link to="/">
          <img className="nav-logo" src={logo} alt="Cooking Flavors logo"/>
        </Link>
        <ul className="nav-list">
          <li className="nav-item">
            <Link className="nav-item-link" to="/recipes">Recipes</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-item-link" to="/favorites">My favorite recipes</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
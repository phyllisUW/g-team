import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import '../../src/style.css'
import logo from '../IMG/get home safe logo.png'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-content">
        <img src={logo} className="logo"/>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><a href="#">Friends List</a></li>
          <li><Link to="/request-walking-buddy">Request A Walking Buddy</Link></li>
          <li><Link to="/settings">Settings</Link></li>
        </ul>
      </div>
      <form className="search-bar">
        <input type="text" placeholder="Search" />
        <button type="submit">
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </form>
    </nav>
  );
};

export default Navbar;


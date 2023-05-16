import React from 'react';
import { NavLink } from 'react-router-dom';

function NavBar() {
  return (
    <nav className="column is-2 menu">
      <p className="menu-label">Heroes React</p>
      <ul className="menu-list">
        <NavLink to="/heroes" activeClassName="active-link">
          Heroes
        </NavLink>
        <NavLink to="/about" activeClassName="active-link">
          About
        </NavLink>
      </ul>
    </nav>
  );
}

export default NavBar;
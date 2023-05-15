import React from 'react';

function NavBar() {
  return (
    <nav className="column is-2 menu">
      <p className="menu-label">Heroes React</p>
      <ul className="menu-list">
        <li>Heroes</li>
        <li>About</li>
      </ul>
    </nav>
  );
}

export default NavBar;
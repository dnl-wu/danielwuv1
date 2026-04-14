import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';

function NavBar() {
  return (
    <nav className="top-nav">
      <div className="nav-inner">
        <ul className="nav-list">
          <li>
            <NavLink
              to="/"
              end
              className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
            >
              home
            </NavLink>
          </li>
          <li className="nav-sep">/</li>
          <li>
            <NavLink
              to="/projects"
              className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
            >
              projects
            </NavLink>
          </li>
          <li className="nav-sep">/</li>
          <li>
            <NavLink
              to="/writing"
              className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
            >
              writing
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;

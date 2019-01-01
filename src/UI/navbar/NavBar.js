import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';

const navbar = props => {
  return (
    <header className="main-header">
      <nav className="main-nav">
        <div className="main-nav__item">
          <NavLink to={'/'} exact>
            Validus
          </NavLink>
        </div>
        <ul className="main-nav__items">
          <li className="main-nav__item">
            <NavLink to={'/formfield'} exact>
              FormField
            </NavLink>
          </li>
          <li className="main-nav__item">
            <a href="form-group.html">FormGroup</a>
          </li>
          <li className="main-nav__item">
            <a href="form-sugar.html">FormSugar</a>
          </li>
          <li className="main-nav__item">
            <a href="form-check.html">FormCheck</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default navbar;

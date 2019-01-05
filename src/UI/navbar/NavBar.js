import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';

const navbar = props => {
  return (
    <header className="main-header">
      <nav className="main-nav">
        <div className="main-nav__item">
          <NavLink to={'/'} exact activeClassName="none">
            Validus
          </NavLink>
        </div>
        <ul className="main-nav__items">
          <li className="main-nav__item">
            <NavLink to={'/form-field'} exact>
              FormField
            </NavLink>
          </li>
          <li className="main-nav__item">
            <NavLink to={'/form-group'} exact>
              FormGroup
            </NavLink>
          </li>
          <li className="main-nav__item">
            <NavLink to={'/form-sugar'} exact>
              FormSugar
            </NavLink>
          </li>
          <li className="main-nav__item">
            <a href="form-check.html">FormCheck</a>
          </li>
          <li className="main-nav__item--img">
            <a href="https://github.com/ckoukoutchos/Validus">
              <img
                src={require('../../assets/GitHub-Mark-Light-120px-plus.png')}
                style={{ height: '16px' }}
                alt="GitHub"
              />
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default navbar;

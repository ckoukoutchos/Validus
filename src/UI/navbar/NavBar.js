import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';

const navbar = props => {
  return (
    <header class="main-header">
      <nav class="main-nav">
        <div class="main-nav__item">
          <a href="index.html">Validus</a>
        </div>
        <ul class="main-nav__items">
          <li class="main-nav__item">
            <a href="form-field.html">FormField</a>
          </li>
          <li class="main-nav__item">
            <a href="form-group.html">FormGroup</a>
          </li>
          <li class="main-nav__item">
            <a href="form-sugar.html">FormSugar</a>
          </li>
          <li class="main-nav__item">
            <a href="form-check.html">FormCheck</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default navbar;

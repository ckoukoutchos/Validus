import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../UI/footer/Footer';
import NavBar from '../../UI/navbar/NavBar';
import './Home.css';

const home = props => {
  return (
    <>
      <NavBar />
      <main>
        <section>
          <div className="card__side" id="overview">
            <h1 className="card__side-title">Validus</h1>
            <h3 className="card__side--content">
              A simple validation library for
              <a href="https://reactjs.org/">React</a>that makes keeping track
              of an input or form's value and validity simple!
            </h3>
            <h3 className="card__side--content">
              Validus saves you from the repetitive chore of building out your
              own forms; handling its own state and freeing you to focus on your
              app's buisness logic.
            </h3>
          </div>
          <div className="card__side" id="usage">
            <h1 className="card__side-title">Usage</h1>
            <h3 className="card__side--content">
              Want to see the library in action? Check out an interactive
              <Link to={'/demo'}>DEMO</Link>.
            </h3>
          </div>
          <div className="clearfix" />
          <div className="card__side" id="install">
            <h1 className="card__side-title">Install</h1>
            <h3 className="card__side--content">NPM package in-progress</h3>
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
};

export default home;

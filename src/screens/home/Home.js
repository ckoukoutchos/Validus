import React from 'react';
import { NavLink } from 'react-router-dom';
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
          </div>
          <div className="card__side" id="usage">
            <h1 className="card__side-title">Usage</h1>
            <NavLink to={'/demo'} exact>
              Demo
            </NavLink>
          </div>
          <div className="clearfix" />
          <div className="card__side" id="install">
            <h1 className="card__side-title">Install</h1>
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
};

export default home;

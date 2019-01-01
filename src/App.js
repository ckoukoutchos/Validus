import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
// import './App.css';

import Demo from './demo/Demo';
import Home from './screens/home/Home';
import field from './screens/field/Field';

const app = props => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/demo" exact component={Demo} />
      <Route path="/formfield" exact component={field} />
      <Redirect to="/" />
    </Switch>
  );
};

export default app;

import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
// import './App.css';

import Demo from './demo/Demo';
import Home from './screens/home/Home';
import field from './screens/field/Field';
import group from './screens/group/Group';

const app = props => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/demo" exact component={Demo} />
      <Route path="/form-field" exact component={field} />
      <Route path="/form-group" exact component={group} />
      <Redirect to="/" />
    </Switch>
  );
};

export default app;

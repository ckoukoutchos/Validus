import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import './App.css';

import FormGroup from './form-group/FormGroup';
import FormField from './form-field/FormField';
import FormCheck from './form-check/FormCheck';
import NavBar from './UI/navbar/NavBar';

const app = props => {
  return (
    <Switch>
      <Route path="/" exact component={home} />

      <Redirect to="/" />
    </Switch>
  );
};

export default App;

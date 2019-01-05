import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Demo from './demo/Demo';
import Home from './screens/home/Home';
import Check from './screens/check/Check';
import Field from './screens/field/Field';
import Group from './screens/group/Group';
import Sugar from './screens/sugar/Sugar';

const app = props => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/demo" exact component={Demo} />
      <Route path="/form-field" exact component={Field} />
      <Route path="/form-group" exact component={Group} />
      <Route path="/form-sugar" exact component={Sugar} />
      <Route path="/form-check" exact component={Check} />
      <Redirect to="/" />
    </Switch>
  );
};

export default app;

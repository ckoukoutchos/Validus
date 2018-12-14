import React, { Component } from 'react';
import './App.css';

import FormField from './form-field/FormField';
import Validators from './validators/validators';

class App extends Component {

  render() {
    return <div className="center">
        <FormField validators={[Validators.required]}/>
      </div>;
  }
}

export default App;

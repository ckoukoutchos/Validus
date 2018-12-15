import React, { Component } from 'react';
import './App.css';

import FormField from './form-field/FormField';
import Validators from './validators/validators';

class App extends Component {

  render() {
    return <div className="center">
        <FormField type='text' validators={[Validators.min()]}/>
      </div>;
  }
}

export default App;

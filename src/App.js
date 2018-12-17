import React, { Component } from 'react';
import './App.css';

import FormGroup from './form-group/FormGroup';
import FormField from './form-field/FormField';
import Validators from './validators/Validators';

class App extends Component {
  render() {
    return (
      <div className="center">
        <FormGroup>
          <FormField fieldName={1} type="text" value="value here" />
          <FormField
            fieldName={2}
            type="text"
            validators={[Validators.required, Validators.min(2)]}
            onBlur={'Blurred'}
          />
        </FormGroup>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import './App.css';

import FormGroup from './form-group/FormGroup';
import FormField from './form-field/FormField';

class App extends Component {

  render() {
    return (
      <div className="center">
        <FormGroup>
          <FormField key={1} type="text" />
          <FormField key={2} type="text" />
        </FormGroup>
      </div>
    );
  }
}

export default App;

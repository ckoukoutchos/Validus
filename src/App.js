import React, { Component } from 'react';
import './App.css';

import FormGroup from './form-group/FormGroup';
import FormField from './form-field/FormField';
import FormSugar from './form-sugar/FormSugar';
import Validators from './validators/Validators';

class App extends Component {
  render() {
    return (
      <div className="center">
        <FormGroup groupName="1">
          <FormField fieldName={1} type="text" value="value here" />
          <FormField
            fieldName={2}
            type="text"
            validators={[Validators.required, Validators.min(2)]}
            onBlur={'Blurred'}
          />
        </FormGroup>
        {FormSugar.field(['name', 'text', 'tim', [Validators.required]])}

        {FormSugar.group([
          'aGroup',
          [
            FormSugar.field([
              'name',
              'text',
              'bob',
              [Validators.required],
              newState => console.log('field', newState)
            ])
          ],
          newState => console.log('group', newState)
        ])}
      </div>
    );
  }
}

export default App;

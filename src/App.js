import React, { Component } from 'react';
import './App.css';

import FormGroup from './form-group/FormGroup';
import FormField from './form-field/FormField';
import FormSugar from './form-sugar/FormSugar';
import FormCheck from './form-check/FormCheck';

class App extends Component {
  render() {
    return (
      <div className="center">
        <FormGroup groupName="1" onBlur={() => console.log('blur')}>
          <FormField fieldName={1} type="text" value="value here" />
          <FormField
            fieldName={2}
            type="text"
            formCheck={[FormCheck.required, FormCheck.min(2)]}
            onBlur={() => console.log('Blurred')}
          />
        </FormGroup>
        {/* {FormSugar.field(['name', 'text', 'tim', [FormCheck.required]])}

        {FormSugar.group([
          'aGroup',
          [
            FormSugar.field([
              'name',
              'text',
              'bob',
              [FormCheck.required],
              newState => console.log('field', newState)
            ])
          ],
          newState => console.log('group', newState)
        ])} */}
      </div>
    );
  }
}

export default App;

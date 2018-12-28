import React, { Component } from 'react';
import './App.css';

import FormGroup from './FormGroup';
import FormField from './FormField';
import FormCheck from './FormCheck';

class App extends Component {
  render() {
    return (
      <div className="center">
        <div className="login">
          <FormGroup
            groupName="1"
            style={{
              display: 'flex',
              flexDirection: 'column',
              padding: '16px'
            }}
            onBlur={() => console.log('blur')}
          >
            <label>Email</label>
            <FormField
              fieldName={1}
              type="text"
              style={{ margin: '8px', padding: '4px' }}
              value="value here"
            />
            <label>Password</label>
            <FormField
              fieldName={2}
              style={{ margin: '8px', padding: '4px' }}
              type="text"
              formCheck={[FormCheck.required, FormCheck.min(2)]}
              onBlur={() => console.log('Blurred')}
            />
          </FormGroup>
        </div>
        <div />
      </div>
    );
  }
}

export default App;

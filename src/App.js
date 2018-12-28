import React, { Component } from 'react';
import './App.css';

import FormGroup from './FormGroup';
import FormField from './FormField';
import FormCheck from './FormCheck';

class App extends Component {
  state = {
    group: null
  };

  formGroupChangeHandler = formState => {
    this.setState({ group: formState });
  };

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
            onBlur={formState => console.log(formState)}
          >
            <label style={{ marginLeft: '8px' }}>Email</label>
            <FormField
              fieldName={1}
              type="text"
              style={{ margin: '8px', padding: '4px' }}
            />
            <label style={{ marginLeft: '8px' }}>Password</label>
            <FormField
              fieldName={2}
              style={{ margin: '8px', padding: '4px' }}
              type="text"
              formCheck={[FormCheck.required, FormCheck.min(2)]}
            />
          </FormGroup>
        </div>
        <div>
          <p>group</p>
        </div>
      </div>
    );
  }
}

export default App;

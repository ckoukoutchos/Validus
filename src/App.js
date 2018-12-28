import React, { Component } from 'react';
import './App.css';

import FormGroup from './FormGroup';
import FormField from './FormField';
import FormCheck from './FormCheck';

class App extends Component {
  state = {
    group: {
      errors: false,
      groupName: '',
      valid: false,
      value: {}
    },
    email: {
      value: ''
    },
    password: {
      disabled: false,
      value: '',
      touched: false,
      valid: false
    }
  };

  formFieldChangeHandler = formState => {
    this.setState({ password: formState });
  };

  formGroupChangeHandler = formState => {
    this.setState({ group: formState });
  };

  displayObjectFields(object) {
    const el = [];
    for (const field in object) {
      el.push(
        <p key={field}>
          {field}: {object[field] ? 'error' : String(object[field])}
        </p>
      );
    }
    return el;
  }

  render() {
    const { group } = this.state;
    const groupErrors = group.errors
      ? this.displayObjectFields(group.errors)
      : String(false);

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
            onChange={formState => this.formGroupChangeHandler(formState)}
          >
            <label style={{ marginLeft: '8px' }}>Email</label>
            <FormField
              fieldName={'email'}
              type="text"
              style={{ margin: '8px', padding: '4px' }}
            />
            <label style={{ marginLeft: '8px' }}>Password</label>
            <FormField
              fieldName={'password'}
              style={{ margin: '8px', padding: '4px' }}
              type="text"
              formCheck={[FormCheck.required, FormCheck.minLength(4)]}
              onChange={formState => this.formFieldChangeHandler(formState)}
            />
          </FormGroup>
        </div>
        <div>
          <h3>Login FormGroup</h3>
          <p>Errors:</p>
          <div>{groupErrors}</div>
          <p>Valid: {String(this.state.group.valid)}</p>
          <p>Value:</p>
          <p>Email: {this.state.group.value.email}</p>
          <p>Password: {this.state.group.value.password}</p>
        </div>

        <div>
          <h3>Password FormField</h3>
          <p>Value: {this.state.password.value}</p>
          <p>Disabled: {String(this.state.password.disabled)}</p>
          <p>Touched: {String(this.state.password.touched)}</p>
          <p>Valid: {String(this.state.password.valid)}</p>
        </div>
      </div>
    );
  }
}

export default App;

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
      disabled: false,
      value: '',
      touched: false,
      valid: false
    },
    password: {
      disabled: false,
      value: '',
      touched: false,
      valid: false
    }
  };

  formFieldChangeHandler = (formState, field) => {
    this.setState({ [field]: formState });
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
              onChange={formState =>
                this.formFieldChangeHandler(formState, 'email')
              }
            />
            <label style={{ marginLeft: '8px' }}>Password</label>
            <FormField
              fieldName={'password'}
              style={{ margin: '8px', padding: '4px' }}
              type="text"
              formCheck={[FormCheck.required, FormCheck.minLength(4)]}
              onChange={formState =>
                this.formFieldChangeHandler(formState, 'password')
              }
            />
          </FormGroup>
        </div>
        <div>
          <h3>Login FormGroup</h3>
          <div className="code__card">
            <p className="code__field">
              <code>formState = {'{'}</code>
            </p>
            <p>Errors:</p>
            <div>{groupErrors}</div>
            <p className="code__indent">
              <code>valid: {String(this.state.group.valid)}</code>
            </p>
            <p className="code__indent">
              <code>value: {'{'}</code>
            </p>
            <p className="code__indent--double">
              <code>email: {this.state.group.value.email}</code>
            </p>
            <p className="code__indent--double">
              <code>password: {this.state.group.value.password}</code>
            </p>
            <p className="code__indent">{'}'}</p>
            <p className="code__field">{'}'}</p>
          </div>
        </div>

        <div>
          <h3>Email FormField</h3>
          <div className="code__card">
            <p className="code__field">
              <code>formState = {'{'}</code>
            </p>
            <p className="code__indent">
              <code>value: {this.state.email.value}</code>
            </p>
            <p className="code__indent">
              <code>disabled: {String(this.state.email.disabled)}</code>
            </p>
            <p className="code__indent">
              <code>touched: {String(this.state.email.touched)}</code>
            </p>
            <p className="code__indent">
              <code>valid: {String(this.state.email.valid)}</code>
            </p>
            <p className="code__field">{'}'}</p>
          </div>
        </div>

        <div>
          <h3>Password FormField</h3>
          <div className="code__card">
            <code>formState = {'{'}</code>
            <p className="code__indent">
              <code>value: {this.state.password.value}</code>
            </p>
            <p className="code__indent">
              <code>disabled: {String(this.state.password.disabled)}</code>
            </p>
            <p className="code__indent">
              <code>touched: {String(this.state.password.touched)}</code>
            </p>
            <p className="code__indent">
              <code>valid: {String(this.state.password.valid)}</code>
            </p>
            <p className="code__field">{'}'}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

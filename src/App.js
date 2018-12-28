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
      value: {
        email: '',
        password: ''
      }
    },
    email: {
      disabled: false,
      value: '',
      touched: false,
      valid: false
    },
    password: {
      disabled: false,
      errors: false,
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

  formSubmitHandler = formState => {
    alert(formState.valid);
  };

  displayObjectFields(object) {
    const el = [];
    for (const field in object) {
      el.push(
        <p className="code__indent--double" key={field}>
          <code>
            {field}: {object[field] ? 'error' : String(object[field])}
          </code>
        </p>
      );
    }
    return el;
  }

  render() {
    const { email, group, password } = this.state;
    const groupErrors = group.errors ? (
      this.displayObjectFields(group.errors)
    ) : (
      <p className="code__indent--double">
        <code>false</code>
      </p>
    );
    const emailError = this.state.email.errors ? (
      <p className="error">Must be a valid email address</p>
    ) : null;
    const passwordError = this.state.password.errors ? (
      <p className="error">Must be at least 4 characters long</p>
    ) : null;

    return (
      <div>
        <h1 style={{ textAlign: 'center' }}>Validus Form Demo</h1>
        <div className="signup">
          <h2 style={{ textAlign: 'center', margin: 0 }}>Signup</h2>
          <FormGroup
            groupName="1"
            style={{
              display: 'flex',
              flexDirection: 'column',
              padding: '16px'
            }}
            onBlur={formState => this.formGroupChangeHandler(formState)}
            onChange={formState => this.formGroupChangeHandler(formState)}
            onSubmit={formState => this.formSubmitHandler(formState)}
          >
            <label style={{ marginLeft: '8px' }}>Email</label>
            <FormField
              fieldName={'email'}
              type="text"
              style={{ margin: '8px', padding: '4px' }}
              formCheck={[FormCheck.required, FormCheck.email]}
              onBlur={formState =>
                this.formFieldChangeHandler(formState, 'email')
              }
              onChange={formState =>
                this.formFieldChangeHandler(formState, 'email')
              }
            />
            {emailError}
            <label style={{ marginLeft: '8px' }}>Password</label>
            <FormField
              fieldName={'password'}
              style={{ margin: '8px', padding: '4px' }}
              type="password"
              formCheck={[FormCheck.required, FormCheck.minLength(4)]}
              onBlur={formState =>
                this.formFieldChangeHandler(formState, 'password')
              }
              onChange={formState =>
                this.formFieldChangeHandler(formState, 'password')
              }
            />
            {passwordError}
            <button className="button" type="submit" disabled={!group.valid}>
              Submit
            </button>
          </FormGroup>
        </div>

        <div className="form-state">
          <div>
            <h3 style={{ textAlign: 'center' }}>Signup FormGroup</h3>
            <div className="code__card">
              <p className="code__field">
                <code>formState = {'{'}</code>
              </p>
              <p className="code__indent">
                <code>errors: {'{'}</code>
              </p>
              {groupErrors}
              <p className="code__indent">{'}'}</p>
              <p className="code__indent">
                <code>valid: {String(group.valid)}</code>
              </p>
              <p className="code__indent">
                <code>value: {'{'}</code>
              </p>
              <p className="code__indent--double">
                <code>email: {group.value.email}</code>
              </p>
              <p className="code__indent--double">
                <code>password: {group.value.password}</code>
              </p>
              <p className="code__indent">{'}'}</p>
              <p className="code__field">{'}'}</p>
            </div>
          </div>

          <div>
            <h3 style={{ textAlign: 'center' }}>Email FormField</h3>
            <div className="code__card">
              <p className="code__field">
                <code>formState = {'{'}</code>
              </p>
              <p className="code__indent">
                <code>value: {email.value}</code>
              </p>
              <p className="code__indent">
                <code>disabled: {String(email.disabled)}</code>
              </p>
              <p className="code__indent">
                <code>touched: {String(email.touched)}</code>
              </p>
              <p className="code__indent">
                <code>valid: {String(email.valid)}</code>
              </p>
              <p className="code__field">{'}'}</p>
            </div>
          </div>

          <div>
            <h3 style={{ textAlign: 'center' }}>Password FormField</h3>
            <div className="code__card">
              <code>formState = {'{'}</code>
              <p className="code__indent">
                <code>value: {password.value}</code>
              </p>
              <p className="code__indent">
                <code>disabled: {String(password.disabled)}</code>
              </p>
              <p className="code__indent">
                <code>touched: {String(password.touched)}</code>
              </p>
              <p className="code__indent">
                <code>valid: {String(password.valid)}</code>
              </p>
              <p className="code__field">{'}'}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

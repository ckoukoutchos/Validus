import React, { Component } from 'react';
import './Demo.css';

import FormGroup from '../form-group/FormGroup';
import FormField from '../form-field/FormField';
import FormCheck from '../form-check/FormCheck';
import Footer from '../UI/footer/Footer';
import NavBar from '../UI/navbar/NavBar';

class Demo extends Component {
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
    alert(
      `Email: ${formState.value.email} || Password: ${formState.value.password}`
    );
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

  fieldErrors(field) {
    if (field.errors) {
      return this.displayObjectFields(field.errors);
    } else {
      return (
        <p className="code__indent--double">
          <code>false</code>
        </p>
      );
    }
  }

  optionToggleHandler = (field, subfield) => {
    this.setState(prevState => ({
      ...prevState,
      [field]: {
        ...prevState[field],
        [subfield]: !prevState[field][subfield]
      }
    }));
  };

  render() {
    const { email, group, password } = this.state;

    const emailError =
      email.touched && email.errors ? (
        <p className="error">Must be a valid email address</p>
      ) : null;
    const passwordError =
      password.touched && password.errors ? (
        <p className="error">Must be at least 4 characters long</p>
      ) : null;

    return (
      <div style={{ marginTop: '64px', marginBottom: '48px' }}>
        <NavBar />
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
              disabled={email.disabled}
              touched={email.touched}
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
              disabled={password.disabled}
              touched={password.touched}
            />
            {passwordError}
            <button
              style={{ margin: 'auto' }}
              type="submit"
              disabled={!group.valid}
            >
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
              {this.fieldErrors(group)}
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
                <code>errors: {'{'}</code>
              </p>
              {this.fieldErrors(email)}
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
            <button
              onClick={() => this.optionToggleHandler('email', 'disabled')}
            >
              {email.disabled ? 'Enable Input' : 'Disable Input'}
            </button>
            <button
              onClick={() => this.optionToggleHandler('email', 'touched')}
            >
              {email.touched ? 'Mark as Clean' : 'Mark as Touched'}
            </button>
          </div>

          <div>
            <h3 style={{ textAlign: 'center' }}>Password FormField</h3>
            <div className="code__card">
              <code>formState = {'{'}</code>
              <p className="code__indent">
                <code>errors: {'{'}</code>
              </p>
              {this.fieldErrors(password)}
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
            <button
              onClick={() => this.optionToggleHandler('password', 'disabled')}
            >
              {password.disabled ? 'Enable Input' : 'Disable Input'}
            </button>
            <button
              onClick={() => this.optionToggleHandler('password', 'touched')}
            >
              {password.touched ? 'Mark as Clean' : 'Mark as Touched'}
            </button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Demo;

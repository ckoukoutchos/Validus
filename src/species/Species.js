import React, { Component } from 'react';

class Species extends Component {
  state = {
    disabled: false,
    errors: false,
    touched: false,
    value: '',
    valid: false,
    validators: [this.required]
  };

  required(value) {
    return (value.trim().length > 0) ? false : ['required', true];
  }

  checkValidity(validators, value) {
    console.log(validators, value);
    if (validators.length) {
      let invalid = false;
      const errors = {};

      validators.forEach(validator => {
        const hasError = validator(value);
        if (hasError) {
          invalid = true;
          errors[hasError[0]] = hasError[1];
        }
      });

      return !invalid ? false : errors;
    }
  }

  inputBlurHandler = evt => {
    console.log(this.state);
  }

  inputChangeHandler = evt => {
    const hasError = this.checkValidity(this.state.validators, evt.target.value);

    this.setState({
      errors: hasError,
      touched: true,
      valid: !hasError,
      value: evt.target.value
    });
  };

  render() {
    return (
      <input
        type="text"
        value={this.state.value}
        onBlur={evt => this.inputBlurHandler(evt)}
        onChange={evt => this.inputChangeHandler(evt)}
      >
        {this.props.children}
      </input>
    );
  }
}

export default Species;

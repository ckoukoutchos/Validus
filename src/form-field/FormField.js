import React, { Component } from 'react';

class FormField extends Component {
  state = {
    disabled: false,
    errors: false,
    touched: false,
    value: '',
    valid: false,
    validators: [this.required]
  };

  required(value) {
    return value.trim().length > 0 ? false : ['required', true];
  }

  /**
   * @name checkValidity
   * @description runs input value through each validator to check validity
   * @param {ValidatorFunction[]} validators ValidatorFunction[]
   * @param {*} value any
   * @memberof FormField
   */
  checkValidity(validators, value) {
    // only check if at least one validators exist
    if (validators.length) {
      let invalid = false;
      const errors = {};

      // run value through each validator
      validators.forEach(validator => {
        const hasError = validator(value);

        // if validator returns error object
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
  };

  /**
   * @name inputChangeHandler
   * @description  runs checkValidity on target value of passed event and updates FormField state
   * @param {event} evt event
   * @memberof FormField
   */
  inputChangeHandler = evt => {
    const hasError = this.checkValidity(
      this.state.validators,
      evt.target.value
    );

    const newState = {
      ...this.state,
      errors: hasError,
      touched: true,
      valid: !hasError,
      value: evt.target.value
    };

    this.props.onChange(newState);
    this.setState(...newState);
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

export default FormField;

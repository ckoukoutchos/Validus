import React, { Component } from 'react';

class FormField extends Component {
  state = {
    disabled: this.props.disabled || false,
    errors: this.props.errors || false,
    fieldName: this.props.fieldName,
    touched: this.props.touched || false,
    value: this.props.value || '',
    valid: this.props.valid || false,
    validators: this.props.validators || []
  };

  /**
   * @description runs input value through each validator to check validity
   * @param {ValidatorFunction[]} validators ValidatorFunction[]
   * @param {*} value any
   * @returns boolean | object
   */
  checkValidity(validators, value) {
    // only check if at least one validator exists
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
    // if no validators exist
    return false;
  }

  /**
   * @description  runs checkValidity on target value of passed event onBlur and updates FormField state
   * @param {event} evt event
   */
  inputBlurHandler = evt => {
    const newState = this.updateState(evt);
    if (this.props.onBlur) this.props.onBlur(newState);
    this.setState(newState);
  };

  /**
   * @description  runs checkValidity on target value of passed event onChange and updates FormField state
   * @param {event} evt event
   */
  inputChangeHandler = evt => {
    const newState = this.updateState(evt);
    if (this.props.onChange) this.props.onChange(newState);
    this.setState(newState);
  };

  updateState(evt) {
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

    return newState;
  }

  render() {
    return (
      <input
        disabled={this.props.disabled}
        style={this.props.style}
        type={this.props.type}
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

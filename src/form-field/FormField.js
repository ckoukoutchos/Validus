import React, { Component } from 'react';

/*
 * FormField Wrapper component
 */
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
    return false;
  }

  /**
   * @description  updates state on input blur and calls onBlur callback
   * @param {event} evt event
   */
  inputBlurHandler = evt => {
    const newState = this.updatedFormFieldState(evt);
    if (this.props.onBlur) this.props.onBlur(newState);
    this.setState(newState);
  };

  /**
   * @description  updates state on input change and calls onChange callback
   * @param {event} evt event
   */
  inputChangeHandler = evt => {
    const newState = this.updatedFormFieldState(evt);
    if (this.props.onChange) this.props.onChange(newState);
    this.setState(newState);
  };

  /**
   * @description runs checkValidity on target value and creates an updated state object
   * @param {event} evt event
   */
  updatedFormFieldState(evt) {
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

import React, { Component } from 'react';

/*
 * FormField Wrapper Component
 */
class FormField extends Component {
  state = {
    disabled: this.props.disabled || false,
    errors: this.props.errors || false,
    fieldName: this.props.fieldName,
    touched: this.props.touched || false,
    value: this.props.value || '',
    valid: this.props.valid || false,
    formCheck: this.props.formCheck || []
  };

  componentDidMount() {
    const { formCheck, onBlurGroup, onChangeGroup } = this.props;
    if (formCheck.length) {
      const hasError = this.checkValidity(formCheck, this.state.value);

      const startingState = {
        ...this.state,
        errors: hasError,
        valid: !hasError
      };

      if (onChangeGroup) onChangeGroup(startingState, 'change');
      if (onBlurGroup) onBlurGroup(startingState, 'blur');
    }
  }

  /**
   * @description runs input value through each FormCheck to check validity
   * @param {FormCheck[]} formCheck FormCheck[]
   * @param {*} value any
   * @returns boolean | object
   */
  checkValidity(formCheck, value) {
    if (formCheck.length) {
      let invalid = false;
      const errors = {};

      formCheck.forEach(validator => {
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
    if (this.props.onBlurGroup) this.props.onBlurGroup(newState, 'blur');
    this.setState(newState);
  };

  /**
   * @description  updates state on input change and calls onChange callback
   * @param {event} evt event
   */
  inputChangeHandler = evt => {
    const newState = this.updatedFormFieldState(evt);
    if (this.props.onChange) this.props.onChange(newState);
    if (this.props.onChangeGroup) this.props.onChangeGroup(newState, 'change');
    this.setState(newState);
  };

  /**
   * @description runs checkValidity on target value and creates an updated state object
   * @param {event} evt event
   */
  updatedFormFieldState(evt) {
    const hasError = this.checkValidity(this.state.formCheck, evt.target.value);
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

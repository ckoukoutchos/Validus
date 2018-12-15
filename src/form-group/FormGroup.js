import React, { Component } from 'react';

/*
 * FormGroup Wrapper component
 */
class FormGroup extends Component {
  state = {
    errors: false,
    valid: false,
    value: this.setFormFieldValues()
  };

  componentDidUpdate() {
    console.log('parent', this.state);
  }

  /**
   * @description checks if any form fields have an error
   * @param {boolean | object} errors boolean | object
   * @returns boolean
   */
  checkFormGroupValidity(errors) {
    let valid = true;
    for (const error in errors) {
      if (!!errors[error]) valid = false;
    }
    return valid;
  }

  /**
   * @description updates form group state on form field blur event
   * @param {object} formState object
   */
  formFieldBlurHandler = formState => {
    this.setState(prevState =>
      this.updatedFormGroupState(prevState, formState)
    );
  };

  /**
   * @description updates form group state on form field change event
   * @param {object} formState object
   */
  formFieldChangeHandler = formState => {
    this.setState(prevState =>
      this.updatedFormGroupState(prevState, formState)
    );
  };

  /**
   * @description sets group form value object to values passed on form fields
   * @returns value object
   */
  setFormFieldValues() {
    const value = {};
    this.props.children.forEach(child => {
      value[child.props.fieldName] = child.props.value;
    });
    return value;
  }

  /**
   * @description updates form group state passed on updated form field state
   * @param {object} prevState object
   * @param {object} formState object
   * @returns updatedState object
   */
  updatedFormGroupState(prevState, formState) {
    const errors = {
      ...prevState.errors,
      [formState.fieldName]: formState.errors
    };
    return {
      errors: errors,
      valid: this.checkFormGroupValidity(errors),
      value: { ...prevState.value, [formState.fieldName]: formState.value }
    };
  }

  render() {
    const addPropsToChildren = React.Children.map(this.props.children, child =>
      React.cloneElement(child, { onBlur: this.formFieldBlurHandler })
    );
    return <form>{addPropsToChildren}</form>;
  }
}

export default FormGroup;

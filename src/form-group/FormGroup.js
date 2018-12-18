import React, { Component } from 'react';

/*
 * FormGroup Wrapper Component
 */
class FormGroup extends Component {
  state = {
    errors: false,
    valid: false,
    value: this.setFormFieldValues()
  };

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
  formFieldEventHandler = (formState, evtType) => {
    this.setState(prevState => {
      const updatedState = this.updatedFormGroupState(prevState, formState);
      if (evtType === 'blur' && this.props.onBlur)
        this.props.onBlur(updatedState);
      if (evtType === 'change' && this.props.onChange)
        this.props.onChange(updatedState);
      return updatedState;
    });
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
    const addPropsToChildren = React.Children.map(
      this.props.children,
      child => {
        const onBlur = child.props.onBlur
          ? this.formFieldEventHandler
          : undefined;
        const onChange = child.props.onChange
          ? this.formFieldEventHandler
          : undefined;
        return React.cloneElement(child, { onBlur, onChange });
      }
    );
    return <form>{addPropsToChildren}</form>;
  }
}

export default FormGroup;

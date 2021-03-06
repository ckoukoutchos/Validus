import React, { Component } from 'react';

/*
 * FormGroup Wrapper Component
 */
class FormGroup extends Component {
  state = {
    errors: this.props.errors || false,
    groupName: this.props.groupName,
    valid: this.props.valid || false,
    value: this.setFormFieldValues()
  };

  /**
   * @name addPropsToChildren
   * @description adds onBlur and onChange handlers to child <FormField>
   * @returns React Elements
   */
  addPropsToChildren() {
    return React.Children.map(this.props.children, child => {
      if (child && child.props.type) {
        return React.cloneElement(child, {
          onBlurGroup: this.formFieldEventHandler,
          onChangeGroup: this.formFieldEventHandler
        });
      } else {
        return child;
      }
    });
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
      if (child && child.type.name === 'FormField') {
        child.props.value
          ? (value[child.props.fieldName] = child.props.value)
          : (value[child.props.fieldName] = '');
      }
    });
    return value;
  }

  submitHandler = (evt, formState) => {
    evt.preventDefault();
    if (this.props.onSubmit) this.props.onSubmit(formState);
  };

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
      ...prevState,
      errors: errors,
      valid: this.checkFormGroupValidity(errors),
      value: { ...prevState.value, [formState.fieldName]: formState.value }
    };
  }

  render() {
    return (
      <form
        style={this.props.style}
        onSubmit={evt => this.submitHandler(evt, this.state)}
      >
        {this.addPropsToChildren()}
      </form>
    );
  }
}

export default FormGroup;

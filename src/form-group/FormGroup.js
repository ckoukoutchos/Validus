import React, { Component } from 'react';

class FormGroup extends Component {
  state = {
    errors: false,
    valid: false,
    value: this.setFormFieldValues()
  };

  componentDidUpdate() {
    console.log('parent', this.state);
  }

  checkFormGroupValidity(errors) {
    console.log(errors);
    let valid = true;
    // check if error object exists
    for (const error in errors) {
      if (!!error) valid = false;
    }
    return valid;
  }

  onFormFieldBlur = formState => {
    this.setState(prevState => {
      const errors = {
        ...prevState.errors,
        [formState.fieldName]: formState.errors
      };
      return {
        errors: errors,
        valid: this.checkFormGroupValidity(errors),
        value: { ...prevState.value, [formState.fieldName]: formState.value }
      };
    });
  };

  onFormFieldChange = formState => {
    this.setState(prevState => ({
      value: { ...prevState.value, [formState.fieldName]: formState.value }
    }));
  };

  setFormFieldValues() {
    const value = {};
    this.props.children.forEach(child => {
      value[child.props.fieldName] = child.props.value;
    });
    return value;
  }

  render() {
    const addPropsToChildren = React.Children.map(this.props.children, child =>
      React.cloneElement(child, { onBlur: this.onFormFieldBlur })
    );
    return <form>{addPropsToChildren}</form>;
  }
}

export default FormGroup;

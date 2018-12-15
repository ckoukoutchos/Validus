import React, { Component } from 'react';

class FormGroup extends Component {

  state = {
    errors: false,
    value: this.getFieldValues(),
    valid: false
  };

  componentDidUpdate() {
    console.log('parent', this.state);
  }

  getFieldValues() {
    const value = {};
    this.props.children.forEach(child => {
      value[child.props.fieldName] = child.props.value
    });
    return value;
  }

  onBlur = (formState) => {
    this.setState(prevState => ({ value: {...prevState.value, [formState.fieldName]: formState.value }}));
  }

  render() {
    const childwithProps = React.Children.map(this.props.children, child =>
      React.cloneElement(child, { onBlur: this.onBlur })
    );
    return <div>{childwithProps}</div>;
  }
}

export default FormGroup;

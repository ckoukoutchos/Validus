import React, { Component } from 'react';

class FormGroup extends Component {

  state = {
    errors: false,
    value: this.getFieldValues(),
    valid: false
  };

  componentDidMount() {
    console.log('parent', this.props.children);
  }

  getFieldValues() {
    const value = {};
    this.props.children.forEach(child => {
      value[child.key] = child.props.value
    });
    return value;
  }

  onBlur(formState) {
    console.log(formState);
  }

  render() {
    const childwithProps = React.Children.map(this.props.children, child =>
      React.cloneElement(child, { onBlur: this.onBlur })
    );
    return <div>{childwithProps}</div>;
  }
}

export default FormGroup;

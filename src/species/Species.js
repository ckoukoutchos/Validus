import React, { Component } from 'react';

class Species extends Component {
  state = {
    disabled: false,
    error: {},
    touched: false,
    value: '',
    valid: false,
    validators: []
  };

  inputBlurHandler = evt => {

  }

  inputChangeHandler = evt => {
    const { validators, value } = this.state;
    if (validators.length) {
      validators.forEach(validator => {
        
      });
    }

    this.setState({
      touched: true,
      value: evt.target.value,
    });
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

export default Species;

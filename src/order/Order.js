import React, { Component } from 'react';

class Order extends Component {
  state = {

  };

  render() {
    return (
      <form>
        {this.props.children}
      </form>
    );
  }
}

export default Order;

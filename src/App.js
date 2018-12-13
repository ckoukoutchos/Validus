import React, { Component } from 'react';
import './App.css';

import Species from './species/Species';

class App extends Component {

  render() {
    return (
      <div className="center">
        <Species />
      </div>
    );
  }
}

export default App;

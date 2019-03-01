import React, { Component } from 'react';
import ItemCollection from './containers/ItemCollection'

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          H!tched
        </header>
        <ItemCollection />
      </div>
    );
  }
}

export default App;

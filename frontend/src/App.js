import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline'
import ItemCollection from './containers/ItemCollection'
import PrimarySearchAppBar from './containers/PrimarySearchAppBar'

import './App.css';

class App extends Component {
  render() {
    return (
    <React.Fragment>
      <CssBaseline />
      <PrimarySearchAppBar />
      <ItemCollection />
    </React.Fragment>
  );
  }
}

export default App;

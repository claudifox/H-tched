import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline'
import ItemCollectionNestedGrid from './containers/ItemCollectionNestedGrid'
import PrimarySearchAppBar from './components/PrimarySearchAppBar'
// import SignIn from './components/SignIn'

import './App.css';

class App extends Component {

  state = {
    items: [],
  }

  componentDidMount() {
    return fetch('http://localhost:3001/items')
      .then(response => response.json())
      .then(items => this.setState({items: items}))
  }

  render() {
    return (
    <React.Fragment>
      <CssBaseline />
      <PrimarySearchAppBar />
      <ItemCollectionNestedGrid items={this.state.items}/>
    </React.Fragment>
  );
  }
}

export default App;

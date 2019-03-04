import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline'
import PrimarySearchAppBar from './components/PrimarySearchAppBar'
// import { Switch, Route, withRouter } from 'react-router-dom'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom'
import ItemCollectionNestedGrid from './containers/ItemCollectionNestedGrid'
import RegistryItemCollectionNestedGrid from './containers/RegistryItemCollectionNestedGrid'
import GuestTable from './components/GuestTable'
import CoupleSignIn from './components/CoupleSignIn'
import Home from './components/Home'

// import CoupleSignIn from './components/CoupleSignIn'

import './App.css';

class App extends Component {

  state = {
    items: [],
    guests: [],
    registryItems: [],
  }

  componentDidMount() {
    return fetch('http://localhost:3001/items')
      .then(response => response.json())
      .then(items => this.setState({items: items}))
  }

  render() {
    return (
    <Router>
      <React.Fragment>
        <CssBaseline />
        <PrimarySearchAppBar />
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/items" render={(props) => <ItemCollectionNestedGrid {...props}/>}/>
          <Route path="/guests" render={(props) => <GuestTable {...props} />}/>
          <Route path="/registry" render={(props) => <RegistryItemCollectionNestedGrid {...props}/>}/>
          <Route path="/login" component={CoupleSignIn}/>
        </Switch>
      </React.Fragment>
    </Router>
  );
  }
}

export default App;

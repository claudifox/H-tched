import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline'
import PrimarySearchAppBar from './components/PrimarySearchAppBar'
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
import CoupleSignUp from './components/CoupleSignUp'
import GuestLogIn from './components/GuestLogIn'
import Home from './components/Home'


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
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/items" render={(props) => <ItemCollectionNestedGrid items={this.state.items} {...props}/>}/>
          <Route exact path="/guests" render={(props) => <GuestTable {...props} />}/>
          <Route exact path="/registry" render={(props) => <RegistryItemCollectionNestedGrid {...props}/>}/>
          <Route exact path="/log-in" component={CoupleSignIn}/>
          <Route exact path="/sign-up" component={CoupleSignUp}/>
          <Route exact path="/guest-log-in" component={GuestLogIn}/>
        </Switch>
      </React.Fragment>
    </Router>
  );
  }
}

export default App;

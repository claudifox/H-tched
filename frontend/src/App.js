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
import GuestList from './containers/GuestList'
import CoupleSignIn from './components/CoupleSignIn'
import CoupleSignUp from './components/CoupleSignUp'
import GuestLogIn from './components/GuestLogIn'
import Home from './components/Home'


import './App.css';

class App extends Component {

  state = {
    currentUser: "",
    items: [],
    guests: [],
    registryItems: [],
  }

  componentDidMount() {
    return fetch('http://localhost:3001/items')
      .then(response => response.json())
      .then(items => this.setState({items: items}))
  }

  handleLogInSubmit = event => {
    event.preventDefault()
    debugger
  }

  render() {
    return (
    <Router>
      <React.Fragment>
        <CssBaseline />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/items" render={(props) => <ItemCollectionNestedGrid items={this.state.items} {...props}/>}/>
          <Route exact path="/guests" render={(props) => <GuestList {...props} />}/>
          <Route exact path="/registry" render={(props) => <RegistryItemCollectionNestedGrid {...props}/>}/>
          <Route exact path="/log-in" render={(props) => <CoupleSignIn handleLogInSubmit={this.handleLogInSubmit} {...props}/>}/>
          <Route exact path="/sign-up" component={CoupleSignUp}/>
        </Switch>
      </React.Fragment>
    </Router>
  );
  }
}

export default App;

import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline'
import PrimarySearchAppBar from './components/PrimarySearchAppBar'
import CategorySelectorChips from './containers/CategorySelectorChips'
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

  // constructor(props){
  //  super(props)
  //    this.state = {
  //      items: [],
  //      searchTerm: "",
  //      categories: [],
  //      selectedCategories: []
  //    }

  state = {
    currentUser: "",
    items: [],
    guests: [],
    registryItems: [],
    searchTerm: "",
    categories: [],
    selectedCategories: []
  }

  componentDidMount() {
    return fetch('http://localhost:3001/items')
      .then(response => response.json())
      .then(items => this.setState({items: items}, this.getCategories))
  }

  getCategories = () => {
  	const itemCats = this.state.items.map((item) => item.category)
  	let uniqCats = (itemCats) => itemCats.filter((v,i) => itemCats.indexOf(v) === i)
    const uiPairs = uniqCats(itemCats).map((ele, index) => {
           return {key: index, label:ele }
          })
  	this.setState({ categories: [...uiPairs] })
  }

  onSearchChange = event => {
    event.preventDefault()
    this.setState({
      searchTerm: event.target.value
    })
    this.filteredItems()
  }

  filteredItems = () => {
    return this.state.items.filter((item) => {
      return item.title.toLowerCase().includes(this.state.searchTerm.toLowerCase())
    })
  }

  handleCategoryClick = category => {
    this.state.selectedCategories.includes(category) ? this.deSelectCategory(category) : this.selectCategory(category)
  }

  handleLogInSubmit = event => {
    event.preventDefault()
    debugger
  }

  selectCategory = category => {
   this.setState({ selectedCategories: [...this.state.selectedCategories, category]})
  }

  deSelectCategory = category => {
     const updatedCategories = this.state.selectedCategories.filter((selectedCategory) => selectedCategory  !== category)
     this.setState({ selectedCategories: updatedCategories })
  }

  render() {
    return (
      <div>
        <React.Fragment>
          <CssBaseline />
        </React.Fragment>
        <Router>
          <React.Fragment>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/items" render={(props) => <ItemCollectionNestedGrid items={this.filteredItems()} categoriesToShow={this.state.selectedCategories} onSearchChange={this.onSearchChange} handleClick={this.handleCategoryClick} passCategories={this.state.categories} {...props}/>}/>
              <Route exact path="/guests" render={(props) => <GuestList {...props} />}/>
              <Route exact path="/registry" render={(props) => <RegistryItemCollectionNestedGrid {...props}/>}/>
              <Route exact path="/log-in" render={(props) => <CoupleSignIn handleLogInSubmit={this.handleLogInSubmit} {...props}/>}/>
              <Route exact path="/sign-up" component={CoupleSignUp}/>
            </Switch>
          </React.Fragment>
        </Router>
    </div>
  );
  }
}

export default App;

import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline'
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom'
import ItemCollectionNestedGrid from './containers/ItemCollectionNestedGrid'
import RegistryItemCollectionNestedGrid from './containers/RegistryItemCollectionNestedGrid'
import GuestList from './containers/GuestList'
import CoupleSignIn from './components/CoupleSignIn'
import CoupleSignUp from './components/CoupleSignUp'
import Home from './components/Home'
import API from './API.js';
import './App.css';


class App extends Component {

  state = {
    currentCouple: "",
    items: [],
    guests: [],
    registryItems: [],
    searchTerm: "",
    categories: [],
    selectedCategories: []
  }

  logIn = couple => {
    localStorage.setItem("token", couple.token)
    this.setState({currentCouple: couple.email_address})
  }

  logOut = couple => {
    localStorage.removeItem("token")
    this.setState({currentCouple: ""})
  }

  componentDidMount() {
    API.validate().then(coupleData => {
      this.getItems()
      if (coupleData.error) {
        this.logOut()
      } else {
        this.logIn(coupleData)
      }
    })
  }

  getItems = () => {
    fetch('http://localhost:3001/items')
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

  handleHeartClick = id => {
    const clickedItem = this.state.items.find((item) => item.id === id)
    console.log(clickedItem)
    if(this.state.registryItems.find(regItem => regItem.id === clickedItem.id)){
      this.removeItemFromRegistry(clickedItem)
    } else{
      this.addItemToRegistry(clickedItem)
    }
  }


  addItemToRegistry = item => {
    this.setState({ registryItems: [...this.state.registryItems, item]})
  }

  removeItemFromRegistry = item => {
    const updatedRegistry = this.state.registryItems.filter((registeredItem) => registeredItem !== item)
    this.setState({ registryItems: updatedRegistry })
  }

  handleCategoryClick = category => {
    this.state.selectedCategories.includes(category) ? this.deSelectCategory(category) : this.selectCategory(category)
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
              <Route exact path="/items" render={(props) => <ItemCollectionNestedGrid items={this.filteredItems()} categoriesToShow={this.state.selectedCategories} onSearchChange={this.onSearchChange} handleClick={this.handleCategoryClick} passCategories={this.state.categories} selectedCategories={this.state.selectedCategories} handleHeartClick={this.handleHeartClick} logOut={this.logOut} currentCouple={this.state.currentCouple}{...props}/>}/>
              <Route exact path="/guests" render={(props) => <GuestList logOut={this.logOut} currentCouple={this.state.currentCouple} {...props} />}/>
              <Route exact path="/registry" render={(props) => <RegistryItemCollectionNestedGrid registryItems={this.state.registryItems} categoriesToShow={this.state.selectedCategories} onSearchChange={this.onSearchChange} handleClick={this.handleCategoryClick} passCategories={this.state.categories} selectedCategories={this.state.selectedCategories} handleHeartClick={this.handleHeartClick} logOut={this.logOut} currentCouple={this.state.currentCouple} {...props}/>}/>
              <Route exact path="/log-in" render={(props) => <CoupleSignIn logIn={this.logIn} {...props}/>}/>
              <Route exact path="/sign-up" component={CoupleSignUp}/>
            </Switch>
          </React.Fragment>
        </Router>
    </div>
  );
  }
}

export default App;

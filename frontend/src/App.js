import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline'
import ItemCollectionNestedGrid from './containers/ItemCollectionNestedGrid'
import PrimarySearchAppBar from './components/PrimarySearchAppBar'
import CategorySelectorChips from './containers/CategorySelectorChips'
// import _ from 'lodash'
// import SignIn from './components/SignIn'

import './App.css';

class App extends Component {

  constructor(props){
   super(props)
     this.state = {
       items: [],
       searchTerm: "",
       categories: [],
       selectedCategories: []
     }
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
    // debugger
    // category = event.target.name
    // console.log(category)
    // let allButtons = this.state.categories.map(category => category.label)
    // if (allButtons.includes(event.target.name)) {
    //   this.toggleButtonFilter()
    // }
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
    <React.Fragment>
      <CssBaseline />
        <PrimarySearchAppBar onSearchChange={this.onSearchChange}/>
        <div>
          <CategorySelectorChips handleClick={this.handleCategoryClick} passCategories={this.state.categories} items={this.state.items}/>
        </div>
      <div>
      <ItemCollectionNestedGrid items={this.filteredItems()} categoriesToShow={this.state.selectedCategories} spacing="2x-large" />
      </div>
    </React.Fragment>
  );
  }
}

export default App;

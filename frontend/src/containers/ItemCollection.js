import React from 'react'
import ItemCard from "../components/ItemCard"
// import { Card } from 'semantic-ui-react'

export default class ItemCollection extends React.Component {

  state = {
    items: [],
  }

  componentDidMount() {
    return fetch('http://localhost:3001/items')
      .then(response => response.json())
      .then(items => this.setState({items: items}))
  }

  render() {
    return(
      <div className="ui four column grid">
        <div className="row">
            {this.state.items.map(item => <ItemCard key={item.id} item={item} /> )}
        </div>
      </div>
    )
  }
}

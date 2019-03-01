import React from 'react'

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
      <div>
      </div>
    )
  }
}

import React from 'react'

export default class ItemCard extends React.Component {

  render() {
    return (
      <div className="column">
        <div
        className="card"
        key={this.props.item.id} >
          <div className="image">
            <img alt="product-img" src={this.props.item.image} style={{height: "100px"}} />
          </div>
          <div className="content">
            <div className="header text-wrap">
              {this.props.item.title}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

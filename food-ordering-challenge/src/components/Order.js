import React, { Component } from 'react'

class Order extends Component{
  render(){
    const taxedTotal = this.props.total * 1.07
    return(
      <React.Fragment>
        <h3>My Order</h3>
        <ul>
         { this.props.order.map((item, index) => {
           return (
             <li key={ index }>{ item.name }</li>
           )
         })}
        </ul>
        <div>Your subtotal: ${ this.props.total }</div>
        <div>Your total with tax: ${ taxedTotal.toFixed(2) }</div>
      </React.Fragment>
    )
  }
}
export default Order

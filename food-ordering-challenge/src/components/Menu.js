import React, { Component } from 'react'

class Menu extends Component{
  render(){
    return(
      <React.Fragment>
        <ul>
        { this.props.menu.map((item, index) => {
          return (
            <div key={ index }>
              <li>{ item.name }, ${ item.price }</li>
              <img src={ item.image } alt={`menu pic of ${item.name}`}/>
              <br />
              <button onClick={ () => { this.props.addItem(item) } }>Add Item</button>
            </div>
          )
        })}
        </ul>
      </React.Fragment>
    )
  }
}
export default Menu

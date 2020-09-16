import React, { Component } from 'react'
import Order from './components/Order'
import Menu from './components/Menu'
import springrolls from './assets/springrolls.png'
import padthai from './assets/padthai.png'
import yellowcurry from './assets/yellowcurry.png'
import gyoza from './assets/gyoza.png'
import tomkha from './assets/tomkha.png'
import './App.css'

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      menu: [
        { name: "Spring Rolls", price: 7, image: springrolls },
        { name: "Pad Thai", price: 9, image: padthai },
        { name: "Yellow Curry", price: 12, image: yellowcurry },
        { name: "Gyoza", price: 8, image: gyoza },
        { name: "Tom Kha", price: 6, image: tomkha }
      ],
      order: [],
      total: 0
    }
  }

  addItem = (newItem) => {
    let runningTotal = this.state.total
    this.setState({ order: [...this.state.order, newItem], total: runningTotal += newItem.price })
  }

  render(){
    return(
      <React.Fragment>
        <h1>Thai Food Menu</h1>
        <Menu
          menu={ this.state.menu }
          addItem={ this.addItem }
        />
        <Order
          order={ this.state.order }
          total={ this.state.total }
        />
      </React.Fragment>
    )
  }
}
export default App

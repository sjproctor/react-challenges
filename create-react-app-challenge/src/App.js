import React, { Component } from 'react';
import './App.css';

class App extends Component{
  render(){
    return(
      <div>
        <Header />
        <Content />
        <MoreContent />
        <Footer />
        <Title />
        <ContentList />
      </div>
    )
  }
}

class Header extends Component{
  render(){
    return(
      <h1>About US!</h1>
    )
  }
}

class Content extends Component{
  render(){
    return(
      <ul>
        <li>I like chocolate and peanut butter ice cream.</li>
      </ul>
    )
  }
}

class MoreContent extends Component{
  render(){
    return(
      <ul>
        <li>My partner likes chips and salsa.</li>
      </ul>
    )
  }
}

class Footer extends Component{
  render(){
    return(
      <p>Team Sarik</p>
    )
  }
}

class Title extends Component{
  render(){
    return(
      <h1>My Top 5 Favorite Comfort Shows</h1>
    )
  }
}

class ContentList extends Component{
  render(){
    return(
      <ul>
        <li>Friends</li>
        <li>Parks and Rec</li>
        <li>Brooklyn 99</li>
        <li>The Office</li>
        <li>Scrubs</li>
      </ul>
    )
  }
}
export default App

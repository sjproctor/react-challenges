# Starter Code for Treasure Hunt

### Initial Setup
- Delete boiler plate code
- Set App.js
- Add components file
- Set Board, import to App.js
- Set Square, import to Board

### Square
- div with id
- border, height and width in css

### Board
- Set up state
- Array of 9 zeros
let square = this.state.board.map((value, index) => {
  return(
    <Square />
  )
})
- change <Square /> to { square }

### Square
- add an onClick to the square div
onClick={ this.handleClick }

- add a handleClick
handleClick = () => {
  alert("hey")
}

### Board
- create method
handleLocations = (index) => {
  alert(index)
}
- pass index and method into <Square />
<Square
  index={ index }
  handleLocations={ this.handleLocations }
/>

### Square
- remove alert
this.props.handleLocations(this.props.index)

### Styling
- on square
  display: flex;
  justify-content: center;
  align-items: center;
- on board
#board{
  display: flex;
  flex-wrap: wrap;
  width: 620px;
  margin: 0 auto;
}

# Treasure Hunt Challenge

## User Stories
- As a player, I can see a web page with a 3 by 3 grid board game with question marks in each square.
- As a player, when I click on one of the question marks the space turns into a tree icon.
- As a player, I can click on the question marks and behind one of the question marks is a treasure box icon.
- As a player, I can see a counter that shows how many guesses I have left.
- As a player, I am notified when the game is won or lost.
- As a player, I can click on a “Play Again” button to restart the game.

## Stretch Challenges
- As a player, I can click on the question marks and behind one of the question marks is a bomb icon.
- As a player, I cannot continue playing the game once I have won or lost.
- As a player, I can see a counter that decrements for every click.
- As a player, I can see a losing message if the counter reaches 0.

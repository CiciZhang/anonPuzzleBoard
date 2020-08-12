import React, { Component } from 'react';
import './App.scss';
// import firebase from "./firebase";
import PuzzleInput from "./PuzzleInput"
import DisplayPizzles from "./DisplayPuzzles"

class App extends Component {
  constructor () {
    super() 
    this.state = {
      dbReturn: [],
      puzzleDisplayOn: true
    }
  }
  
changeDisplay = () =>{
  const displayState = this.state.puzzleDisplayOn
  this.setState({
    puzzleDisplayOn: !displayState
  })
  console.log(this.state.puzzleDisplayOn)
}

  render() {
    return (
    
      <div className="App">
        {this.state.puzzleDisplayOn 
        ?<div>
          <header>
              <h1>Anonymous Puzzle Board</h1>
              <button onClick={this.changeDisplay}>Let's get Started</button> 
          </header>
          <DisplayPizzles /> 
        </div>
        : <div>
          <header>
            <button onClick={this.changeDisplay}>Go Back</button>
          </header>
          
          <PuzzleInput />
          </div>}
      </div>
    )
  }

  
}

export default App;

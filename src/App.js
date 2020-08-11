import React, { Component } from 'react';
import './App.css';
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
          <button onClick={this.changeDisplay}>Let's get Started</button> 
          <DisplayPizzles /> 
        </div>
        : <div>
          <button onClick={this.changeDisplay}>Go Back</button>
          <PuzzleInput />
          </div>}
      </div>
    )
  }

  
}

export default App;

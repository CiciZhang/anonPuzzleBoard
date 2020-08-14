import React, { Component } from 'react';
import './App.scss';
import PuzzleInput from "./PuzzleInput";
import DisplayPuzzles from "./DisplayPuzzles";

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
}

  render() {
    return (
      <div className="app">
        {this.state.puzzleDisplayOn 
        ?<div>
          <header>
              <h1>Anonymous Puzzle Board</h1>
              <h2>Can you solve it?</h2>
              <button onClick={this.changeDisplay}>Puzzle Submission</button> 
          </header>
          <DisplayPuzzles /> 
        </div>
        : <div>
          <header className="puzzInput">
            <h1 >Puzzle Input</h1>
            <h2>Submit your puzzle in the space below</h2>
            <button onClick={this.changeDisplay}>Go Back</button>
          </header>
            <div className="formDiv">
            <PuzzleInput />
            </div>
          </div>}
      </div>
    )
  }
}

export default App;

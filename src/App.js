import React, { Component } from 'react';
import './App.scss';
import PuzzleInput from "./PuzzleInput";
import DisplayPizzles from "./DisplayPuzzles";
import Modal from "./Modal"

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
      <div className="app">
        {this.state.puzzleDisplayOn 
        ?<div>
          <header className="headDisplayPuzz">
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

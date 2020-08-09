import React, { Component } from 'react';
import './App.css';
import firebase from "./firebase";
import PuzzleInput from "./PuzzleInput"
import DisplayPizzles from "./DisplayPuzzles"

// global variables
const dbRef = firebase.database().ref()

class App extends Component {
  constructor () {
    super() 
    this.state = {
      dbReturn: [],
      onPuzzleDisplay: true
    }
  }
  

  render() {
    return (
     
      <div className="App">
        <PuzzleInput />
        <DisplayPizzles />
      </div>
    )
  }

  
}

export default App;

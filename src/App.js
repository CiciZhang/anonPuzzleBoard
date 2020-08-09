import React, { Component } from 'react';
import './App.css';
import firebase from "./firebase"

class App extends Component {
  constructor () {
    super() 
    this.state = {
      dbReturn: [],
      riddleInput: '',
      answerInput: '',
      onPuzzleDisplay: true
    }
    
  }
  
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
    console.log(this.state.riddleInput, "this is the riddleInput")
    console.log(this.state.answerInput, "this is the answerInput")
  }

  render() {
    return (
      <div className="App">
        <h1>if you're seeing this then render works</h1>

        <form action="submit">
          <div className="riddleArea">
            <label htmlFor="riddleInput">Please input your riddle</label>
            <input type="textarea" id="riddleInput" onChange={this.handleChange} name="riddleInput" value={this.state.riddleInput} placeholder="I am round and I live underground" />
          </div>
          <div className="answerArea">
            <label htmlFor="answerInput">Please input your riddle</label>
            <input type="text" name="answerInput" id="answerInput" placeholder="potato" onChange={this.handleChange} value={this.state.answerInput} />
         </div>
          <button>Submit</button>
        </form>
      </div> 
    )
  }

  componentDidMount() {
    const dbRef = firebase.database().ref()
    dbRef.on('value', (snapshot) =>
      console.log(snapshot.val()))
    
    // this is how we get our data ^ from the firebase
    // next work on toggle between states 
    // got event handler to work now do it for the riddle answer
  }
  
}

export default App;

import React, { Component } from 'react'
import firebase from "./firebase";


class PuzzleInput extends Component {
    constructor() {
        super()
        this.state = {
            riddleInput: '',
            answerInput: '',
            counter: 0,
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleClick = (event) => {
        const dbRef = firebase.database().ref()
        event.preventDefault()
        dbRef.push(
            [this.state.riddleInput, this.state.answerInput, this.state.counter]
        )
        this.setState({
            riddleInput: '',
            answerInput: '',
            counter: 0,
        })
    }
    render() {
        return (
         <form action = "submit" >
        <h1>Puzzle Input</h1>
        <div className="riddleArea">
            <label htmlFor="riddleInput">Please input your riddle</label>
            <input type="textarea" id="riddleInput" onChange={this.handleChange} name="riddleInput" value={this.state.riddleInput} placeholder="I am round and I live underground" />
        </div>
        <div className="answerArea">
            <label htmlFor="answerInput">Please input your answer</label>
            <input type="text" name="answerInput" id="answerInput" placeholder="potato" onChange={this.handleChange} value={this.state.answerInput} />
        </div>
        <button onClick={this.handleClick}>Submit</button>
        </form >
        )
    }
}

export default PuzzleInput

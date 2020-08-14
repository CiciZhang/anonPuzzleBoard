import React, { Component } from 'react'
import firebase from "./firebase";


class PuzzleInput extends Component {
    constructor() {
        super()
        this.state = {
            riddleInput: '',
            answerInput: ''
        }
    }

    // errorCheck=(param)=>{
    //     if (param.length === 0) {
    //        alert("Come on, give me an INPUT")
    //     } 
    //     else if (param.length > 200) {
    //         alert("Input too long!")
    //     } 
    // }

    handleChange = (event) => {
        console.log(event.target.value, "handle change detector")
        // console.log(event.target.value.length, "this is my event target value")
        // this.errorCheck(event.target.value)
         if(event.target.value.length > 200){
           return alert("You're putting in too much!")
        } else {
        this.setState({
            [event.target.name]: event.target.value
        })}
        
      
    }

    handleClick = (event) => {
        const dbRef = firebase.database().ref()
        event.preventDefault()
        if (this.state.riddleInput.length === 0 || this.state.answerInput.length === 0){
            return alert("Please give me something!")
        } else {
            dbRef.push(
                [this.state.riddleInput, this.state.answerInput])
        }   
        this.setState({
            riddleInput: '',
            answerInput: '',
        })
    }
    render() {
        return (
         <form action = "submit" >
            <div className="riddleArea">
                <label htmlFor="riddleInput">Please input your puzzle</label>
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

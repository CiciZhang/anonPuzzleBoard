import React, {Component} from "react"
import firebase from "./firebase"
const dbRef = firebase.database().ref()

class DisplayPuzzle extends Component {
    constructor(){
        super()
        this.state = {
            dbReturn: []
        }
    }

    componentDidMount() {
        dbRef.on('value', (snapshot) => {
            console.log(snapshot.val())
            const dbObject = snapshot.val()
            const newReturnedArray = []
            for (let propertyName in dbObject) {
                newReturnedArray.push(dbObject[propertyName])
            }
            console.log(newReturnedArray)
            this.setState({
                dbReturn: newReturnedArray,
                riddleAnswer: ""
            }) 
            console.log(this.state.dbReturn, "this is my dbReturn")
        })
    }
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
        console.log(this.state.riddleInput, "this is the riddleInput")
        console.log(this.state.answerInput, "this is the answerInput")
    }
    checkRiddleAnswer = (event) =>{
        this.setState({
            [event.target.name]: event.target.value
        })
        console.log(this.state.riddleAnswer)
    }
    
    render() {
        return(
            <div className="displayBox">
                <h1>Anonymous Puzzle Board</h1>
                <ul>
                    {this.state.dbReturn.map(item => {
                    return <form action="submit">
                        <p>{item[0]}</p>
                        {console.log(item), "item's this"}
                        <input type="text" id="riddleAnswer" onChange={this.checkRiddleAnswer} name="riddleAnswer" value={this.state.riddleAnswer} placeholder="Answer" />
                    </form>
                    })}
                </ul>
            </div>
           
        )
    }
}

export default DisplayPuzzle 
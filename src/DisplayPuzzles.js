import React, {Component} from "react"
import firebase from "./firebase"
const dbRef = firebase.database().ref()

class DisplayPuzzle extends Component {
    constructor(){
        super()
        this.state = {
            dbReturn: [],
            userInputAnswer: "",
            userFeedback: ""
        }
    }

    componentDidMount() {
        dbRef.on('value', (snapshot) => {
            const dbObject = snapshot.val()
            const newReturnedArray = []
            for (let propertyName in dbObject) {
                newReturnedArray.push(dbObject[propertyName])
            }
            console.log(newReturnedArray)
            this.setState({
                dbReturn: newReturnedArray
            }) 
            console.log(this.state.dbReturn, "this is my dbReturn")
        })
    }
    
    saveRiddleAnswer = (event) =>{
        this.setState({
            userInputAnswer: event.target.value
        })
        console.log(this.state.userInputAnswer, "this is the state of userInputUserInputAnswer")
    }

    checkUserInputAnswer = (event) => {
        event.preventDefault()
        const dbAnswer = event.target.value
        const userAnswer = this.state.userInputAnswer
        return (
            userAnswer === dbAnswer ? this.setState({
                userFeedback: "You got it right!"
            }) : this.setState({
                userFeedback: "You got it wrong."
            })
        )
            

        // after adding userfeedback stoppred working
        console.log(this.userFeedback, "this is the userfeedback value")

        console.log(event.target.value, "value from submit")
        // const answerFromDB = event 
        // return(this.state.userInputAnswer === item[1]? "True" : "False")
        console.log(this.state.userInputAnswer, "button press submit user input answer")
        // console.log(this.state.dbReturn[0][1])

        }


    
    render() {
        // later if you want to add counter put the display here
        return(
            <div className="displayBox">
                <h1>Anonymous Puzzle Board</h1>
                <ul>
                    <li>
                        {this.state.dbReturn.map(item => {
                            return <form action="submit">
                                <p>{item[0]}</p>
                                <input type="text" id="riddleAnswer" onChange={this.saveRiddleAnswer} placeholder="Answer" />
                                <button value={item[1]} onClick={this.checkUserInputAnswer}>Submit</button>
                                <p>{this.userFeedback}</p>
                            </form>
                        })}  
                    </li>
                </ul>
            </div>
           
        )
    }
}

export default DisplayPuzzle 
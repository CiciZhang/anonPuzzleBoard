import React, {Component} from "react";
import firebase from "./firebase";


class DisplayPuzzle extends Component {
    constructor(){
        super()
        this.state = {
            dbReturn: [],
            userInputAnswer: "",
            userFeedback: "Type in an answer and see if you're right!",
        }
    }

    componentDidMount() {
        const dbRef = firebase.database().ref()
        dbRef.on('value', (snapshot) => {
            const dbObject = snapshot.val()
            const newReturnedArray = []
            for (let propertyName in dbObject) {
                const riddleObject = {
                    id: propertyName,
                    riddleInfo: dbObject[propertyName]
                }
                newReturnedArray.push(riddleObject)
            }
            this.setState({
                dbReturn: newReturnedArray
            }) 
        })
    }
    
    saveRiddleAnswer = (event) =>{
        this.setState({
            userInputAnswer: event.target.value
        })
    }

    checkUserInputAnswer = (event) => {
        event.preventDefault()
        const dbAnswer = event.target.value
        const userAnswer = this.state.userInputAnswer
        userAnswer === dbAnswer 
            ? this.setState({
                userFeedback: `You got it right! The answer is ${dbAnswer}`
            }) 
            : this.setState({
                userFeedback: `The answer is not ${userAnswer} please try again.`
            })
        this.setState({
            userInputAnswer: "",
        })
           
    }

    deletePuzzle = (riddleID) => {
        const dbRef = firebase.database().ref()
        dbRef.child(riddleID).remove()
    }

    render() {
        // later if you want to add counter put the display here
        return(
            <main className="background">
                <ul>
                    {
                        this.state.dbReturn.map((riddleObject) => {
                            return (
                                <li key={riddleObject.id}>
                                    <form action="submit">
                                        <button className="deleteButton" onClick={() => { this.deletePuzzle(riddleObject.id) }}>X</button>
                                        <div className="textBox">
                                            <p>{riddleObject.riddleInfo[0]}</p>
                                        </div>
                                        <input type="text" id="riddleAnswer" onChange={this.saveRiddleAnswer} placeholder="Answer" />
                                        <button value={riddleObject.riddleInfo[1]} onClick={this.checkUserInputAnswer}>Submit</button>
                                    </form>
                                </li>)
                        })
                    }
                </ul>
                <div className="return">
                    <p>{this.state.userFeedback}</p>
                </div>
                
            </main>
        )
    }
}
            

export default DisplayPuzzle 
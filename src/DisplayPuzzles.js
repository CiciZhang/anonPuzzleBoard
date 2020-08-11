import React, {Component} from "react"
import firebase from "./firebase"


// got it to display the text but now the text displays on ALL the entries in addition to that it is constant so need a way to clear it

class DisplayPuzzle extends Component {
    constructor(){
        super()
        this.state = {
            dbReturn: [],
            userInputAnswer: "",
            userFeedback: "Right",
        }
        console.log(this.state.userFeedback, "this is the userFeedback")
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
                console.log(dbObject[propertyName], "this is dbbject propertyname")
                newReturnedArray.push(riddleObject)
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
        userAnswer === dbAnswer 
            ? this.setState({
                userFeedback: "You got it right"
            }) 
            : this.setState({
                userFeedback: "You got it wrong"
            })
            console.log(userAnswer, "this is the user answer")
            console.log(dbAnswer, "This is the right answer from the database")
           
    }

    
    
    render() {
        // later if you want to add counter put the display here
        return(
            <div className="displayBox">
                <h1>Anonymous Puzzle Board</h1>
                    {
                        this.state.dbReturn.map((riddleObject) => {
                            return (
                                <li key={riddleObject.id}>
                                    <form action="submit">
                                        <p>{riddleObject.riddleInfo[0]}</p>
                                        <input type="text" id="riddleAnswer" onChange={this.saveRiddleAnswer} placeholder="Answer" />
                                        <button value={riddleObject.riddleInfo[1]} onClick={this.checkUserInputAnswer}>Submit</button>
                                        <p>{this.state.userFeedback}</p>
                                    </form>
                                </li>)
                        })
                    }
            </div>
        )
    }
}
            
                        
                 


export default DisplayPuzzle 
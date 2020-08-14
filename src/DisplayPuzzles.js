import React, {Component} from "react";
import firebase from "./firebase";
import Modal from "./Modal";


class DisplayPuzzle extends Component {
    constructor(){
        super()
        this.state = {
            dbReturn: [],
            userInputAnswer: "",
            userFeedback: "",
            answerBool: false
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
            userInputAnswer: event.target.value,
            answerBool: false
        })
    }

    checkUserInputAnswer = (event) => {
        event.preventDefault()
        const dbAnswer = event.target.value
        const userAnswer = this.state.userInputAnswer
        userAnswer === dbAnswer 
            ? this.setState({
                userFeedback: `You got it right! The answer is ${dbAnswer}`,
                answerBool: true
            }) 
            : this.setState({
                userFeedback: `The answer is not ${userAnswer} please try again.`
            })
        this.toggleModal()
    }


    toggleModal = () => {
    const modal = document.querySelector(".modal");
    modal.classList.toggle("show-modal");
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
                                    <Modal answerDisplay={this.state.userFeedback} id={riddleObject.id}
                                    answerBool={this.state.answerBool} toggleModal={()=>this.toggleModal}></Modal>
                                    <form action="submit">
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
            </main>
        )
    }
}
            

export default DisplayPuzzle 
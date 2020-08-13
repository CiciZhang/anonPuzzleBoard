import React, {Component} from "react";
import firebase from "./firebase";

// Modal referenced from https://sabe.io/tutorials/how-to-create-modal-popup-box but HEAVILY changed to work with react


var modal = document.querySelector(".modal");
// var trigger = document.querySelector(".trigger");
// var closeButton = document.querySelector(".close-button");

function toggleModal() {
    modal.classList.toggle("show-modal");
}



class Modal extends Component {
    deletePuzzle = (riddleID) => {
        const dbRef = firebase.database().ref()
        dbRef.child(riddleID).remove()
    }
    render(){
        console.log(this.props)
        return (
            <div className="modal" >
                <div className="modal-content">
                    <span className="close-button">X</span>
                    <p>{this.props.answerDisplay}</p>
                    {
                        this.props.answerBool
                        ?<button className="deleteButton" onClick={() => { this.deletePuzzle(this.props.id) }}>Delete This Question</button>
                        :<p></p>
                    }
                   
                </div>
            </div>
        )
    }
    
    
}
    

export default Modal
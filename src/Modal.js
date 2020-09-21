import React, {Component} from "react";
import firebase from "./firebase";

// Modal referenced from https://sabe.io/tutorials/how-to-create-modal-popup-box but changed to work with react

class Modal extends Component {

    toggleModal = () => {
        const modal = document.querySelector(".modal");
        modal.classList.toggle("show-modal");
    } 

    deletePuzzle = (riddleID) => {
        const dbRef = firebase.database().ref()
        dbRef.child(riddleID).remove()
    }

    render(){
        return (
            <div className="modal" >
                <div className="modal-content">
                    <span className="close-button" onClick={this.toggleModal}>X</span>
                    <h2>{this.props.answerDisplay}</h2>  
                    {this.props.answerBool
                    ? <button className="deleteButton" onClick={() => { this.deletePuzzle(this.props.riddleID) }}>Delete This Question</button>
                    : <div></div>}
                </div>
            </div>
        )
    }
}
    

export default Modal
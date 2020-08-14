import React, {Component} from "react";

// Modal referenced from https://sabe.io/tutorials/how-to-create-modal-popup-box but changed to work with react

class Modal extends Component {

    toggleModal = () => {
        const modal = document.querySelector(".modal");
        modal.classList.toggle("show-modal");
    } 
   
    render(){
        return (
            <div className="modal" >
                <div className="modal-content">
                    <span className="close-button" onClick={this.toggleModal}>X</span>
                    <h2>{this.props.answerDisplay}</h2>  
                </div>
            </div>
        )
    }
}
    

export default Modal
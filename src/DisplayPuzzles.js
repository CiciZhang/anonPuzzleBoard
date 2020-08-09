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
        dbRef.on('value', (snapshot) =>
            console.log(snapshot.val()))
    }
    
    render() {
        return(
            <div className="displayBox">
                <h1>If this shows up it's linked correctly</h1>
            </div>
           
        )
    }
}

export default DisplayPuzzle 
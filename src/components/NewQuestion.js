import React, { Component } from "react"
import {connect} from 'react-redux'
import {handleAddQuestion} from '../actions/questions'
import {Redirect} from 'react-router-dom'
 class NewQuestion extends Component {
   //  this is a controlled component 
     state = {
         text: '',
         toHome: false,
     }

     //  methods here ; also, may have to include more info in the state
     //  adapt this to each input field 
     // TODO: refactor how you think about state here. there are two input fields. adding same methods as props fill in both questions
     handleChange = (e) => {
       const text = e.target.value

       this.setState(()=> ({
         text
       }))
     }

     handleSubmit = (e) => {
       e.preventDefault()

       const {text} = this.state

       //  add question to store 
       console.log('new question: ' , text)

       this.setState(()=> ({
         text: ''
       }))
     }
     // 1) capture option one from user 
     // 2) capture option two from user 
     // 3) allow submission 

     // displaying component to the screen 
     //  the frontend of this is going to be  a bootstrap thumbnail 
     //  containing radio buttons

     render() {
         // other vars and dispatch go here 
         const {text, toHome} = this.state

         if (toHome === true) {
           return <Redirect to='/' />
         }

         // actual content on screen
         //  updaate state of store wiht new question 
         //  build a few actions 
        return (
            <div className="row">
            <div className="col-sm-6 col-md-4">
              <div className="thumbnail">
             
                <div className="caption">
                  <h3>Send in your dilemma! </h3>
                  <form onSubmit = {this.handleSubmit}>
                  <input type="radio" /><input type="text" placeholder= "Difficult option 1 " value={text}
                  onChange={this.handleChange}/>​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​

                  <div> </div>
                  <input type="radio" /><input type="text" placeholder= "Difficult option 2 " 
                  />​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​               
                 
                  <button className="btn btn-primary" > 
                  Submit your Question!
                  </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        )
     }
 }

 export default NewQuestion;
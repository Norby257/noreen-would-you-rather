import React, { Component } from "react"

 class NewQuestion extends Component {
     state = {
         question: ''
     }

     //  methods here ; also, may have to include more info in the state

     // 1) capture option one from user 
     // 2) capture option two from user 
     // 3) allow submission 

     // displaying component to the screen 

     render() {
         // other vars and dispatch go here 

         // actual content on screen
        return (
            <div>
            <h3 className="center">Submit a dilemma!  </h3>
            <form className="new-tweet" onSubmit={this.handleSubmit}>
           <textarea 
                placeholder="Choice 1 "
                // value={text}
                // onChange={this.handleChange}
             
                />
             

                <button className='btn'>
               
                SEND IN YOUR DILEMMA
                 </button>
            </form>
        </div>
        )
     }
 }

 export default NewQuestion;
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
     //  the frontend of this is going to be  a bootstrap thumbnail 
     //  containing radio buttons

     render() {
         // other vars and dispatch go here 

         // actual content on screen
        return (
            <div className="row">
            <div className="col-sm-6 col-md-4">
              <div className="thumbnail">
             
                <div className="caption">
                  <h3>Send in your dilemma! </h3>
                  <input type="radio" /><input type="text" placeholder= "Difficult option 1 "/>​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​

                  <div> </div>
                  <input type="radio" /><input type="text" placeholder= "Difficult option 2 "/>​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​               
                  <p><a href="#" className="btn btn-primary" role="button">Submit your Question!</a></p>
                </div>
              </div>
            </div>
          </div>
        )
     }
 }

 export default NewQuestion;
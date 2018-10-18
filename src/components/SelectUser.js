//   this is the page that allows us to select a user, just like in netflix 
//   this manages data so we will display props user can click on for logging in 
//   list of users somewhere so user can select one 
//  google how to make box in CSS and in react 
//   this is parent component that contains the logic; i.e. this is a thumbnail 
import User from './User';
import React from 'react';

class SelectUser extends React.Component {

    //  lifecycle methods here 

    //  other methods here 
    //  in the return statement below, map over the react component 
    //  similar to the ravenous project 

    render() {
        return (
            <div className="jumbotron">
                <div className="container">
            <h1>Would you Rather?</h1>
            <p>Music Festival Edition - which headliner do you see?</p>
            <p><a className="btn btn-primary btn-lg" href="#" role="button">Sign in</a></p>
            </div>
          </div>
        )
       
    }
}

export default SelectUser 
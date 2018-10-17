//   this is the page that allows us to select a user, just like in netflix 
//   this manages data so we will display props user can click on for logging in 
//   list of users somewhere so user can select one 
//  google how to make box in CSS and in react 
import User from './User';
import React from 'react';

class SelectUser extends React.Component {

    //  lifecycle methods here 

    //  other methods here 
    //  in the return statement below, map over the react component 
    //  similar to the ravenous project 

    render() {
        return (
        <div>
            <h1>  Who's playing ? </h1>
            <User />
            <User />
            <User />
        </div>

        )
    }
}

export default SelectUser 
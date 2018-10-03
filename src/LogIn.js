import React from 'react'; 
// import Button from './Button';
import './LogIn.css'
function LogIn(props) {
    return (
    <div className="LogIn">
        <div className="dropdown">
        
        <h3 className="center"> Welcome to would you rather! Choose a user to sign in </h3>
        <form>
        <label for="user-select"> Choose a User: </label>
        <select id ="user-select">
        <option value="tyler-mcGinnis">Tyler McGinnis</option>
      <option value="sarah-edo">Sarah Edo</option>
       <option value="user-3">User 3</option>
    
        </select>
          <button> Log In </button>
      </form>
       
      </div>
    </div>
    )

}

export default LogIn; 
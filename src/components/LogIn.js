import React from 'react'; 
import Button from './Button';
function LogIn(props) {
    return (
    <div className="LogIn">
        <div className="dropdown">
        
        <h3 className="center"> Welcome to would you rather! Choose a user to sign in </h3>
        <button className="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
          Select a user!
          <span className="caret"></span>
        </button>
        <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
          <li>User one</li>
          <li>User two</li>
          <li>User three </li>
          <li role="separator" className="divider"></li>
          <li><a href="#">Separated link</a></li>
        </ul>
        <Button />
      </div>
    </div>
    )

}

export default LogIn; 
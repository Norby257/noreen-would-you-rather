import React from 'react'
import DropDown from './DropDown'
//   put login / account login here 
export const LoginThumbnail = () => {
return (
    <div className="row">
    <div className="col-sm-6 col-md-4">
      <div className="thumbnail">
     
        <div className="caption">
          <h3>Select a user to log in </h3>
          <DropDown />
          <p><a href="#" className="btn btn-primary" role="button">Log in!</a></p>
        </div>
      </div>
    </div>
  </div>
)
}


export default LoginThumbnail;
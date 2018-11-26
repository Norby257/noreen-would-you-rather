import React from 'react'
import {NavLink} from 'react-router-dom'
const Navigation = () => {
    return (
        <nav className="navbar navbar-inverse">
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="#">Dashboard</a>
          </div>
      
          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav">
              <li className="active"><NavLink to='/' exact activeClassName='active'>Home 
              </NavLink> 
              <span className="sr-only">(current)
              </span>
             
              </li>
              <li>
                <NavLink to='/new' activeClassName='active'>
                New Question 
                </NavLink>
              </li>
           
            </ul>
          
           
          </div>
        </div>
      </nav>

    )
}


export default Navigation;
import React, { Component, Fragment } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import UserProfile from './UserProfile'
import Question from './Question'
import NewQuestion from './NewQuestion'
import Navigation from './Navigation'
import SelectUser from './SelectUser'
import LoginThumbail from './LoginThumbnail';
import QuestionsDashboard from './QuestionsDashboard'
import {connect} from 'react-redux'
import {handleInitialData} from '../actions/shared'


class App extends Component {
  //   dispatch handleInitialData when component mounts 
  componentDidMount() {
    this.props.dispatch(handleInitialData())

  }
  render() {
    return (
      <div className="App">
      <Navigation />
      <Router> 
          <Fragment >
        <div>
          loading bar here 
        </div>
        <div>
          {this.props.loading === true
          ? null
          : <div>
          <Route path='/' exact component={QuestionsDashboard} />
          <Route path ='/:id' exact component={Question} />
          <Route path ='/new' exact component={NewQuestion} />
          </div>}
          </div>          
          </Fragment>
      </Router>

     
      </div>
    );
  }
}


function mapStateToProps ({authedUser}) {
  return {
    loading: authedUser === null
  }
}
export default connect(mapStateToProps) (App);

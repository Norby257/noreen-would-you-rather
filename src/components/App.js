import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import UserProfile from './UserProfile'
import Question from './Question'
import NewQuestion from './NewQuestion'
import Navigation from './Navigation'
import SelectUser from './SelectUser'
import LoginThumbail from './LoginThumbnail';
import QuestionsDashboard from './QuestionsDashboard'
import {Route} from 'react-router-dom';
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
        {/* <UserProfile /> */}
        <SelectUser />
        <LoginThumbail />
        <div>
          {this.props.loading === true
          ? null
          :  <QuestionsDashboard />}
          </div>
      <NewQuestion /> 
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

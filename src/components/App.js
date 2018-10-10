import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import UserProfile from './UserProfile'
import Question from './Question'
import NewQuestion from './NewQuestion'
import Navigation from './Navigation'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <UserProfile />
    
         {/* <LogIn />
        <Question />
        <NewQuestion /> */} 
      </div>
    );
  }
}

export default App;

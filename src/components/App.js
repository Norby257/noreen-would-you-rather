import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import LogIn from './LogIn'
import Question from './Question'
import NewQuestion from './NewQuestion'
import Navigation from './Navigation'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
    
         {/* <LogIn />
        <Question />
        <NewQuestion /> */} 
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TimerComponent from './TimerComponent.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Calvin's Timer</h1>
        </header>
        <TimerComponent/>
      </div>
    );
  }
}

export default App;

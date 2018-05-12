import React, { Component } from 'react';
import logo from './logo.svg';
import truck1 from './trucks1.jpg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          
          <img src={truck1} className="Pic-header"  />
          <h1 className="App-title">Welcome to TRANSPORT COMPANY</h1>
        </header>
        <p className="App-intro">
          This site is for our new company taking care of transportation issues when transporting private goods
        </p>
      </div>
    );
  }
}

export default App;

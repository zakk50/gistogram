import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Area from './Area';
import Navbar from './navbar/Navbar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Area />
      </div>
    );
  }
}

export default App;

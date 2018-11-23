import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Area from './Area.jsx';
import Navbar from './navbar/Navbar.jsx';

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

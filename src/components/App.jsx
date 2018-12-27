import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
// import Area from './Area.jsx';
import Navbar from './navbar/Navbar.jsx';
import Sidebar from './taskbar/Sidebar';
import Histogram from './histogram/Histogram';

class App extends Component {
  render() {
    return (
      <div>
        <div className="content-navbar"><Navbar /></div>
        <div className="App clearfix">
          <div className="content-sidebar"><Sidebar /></div>
          <div className="content-histogram"><Histogram /></div>
        </div>
      </div>
    );
  }
}

export default App;

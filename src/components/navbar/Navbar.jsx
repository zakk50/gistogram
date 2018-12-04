import React, { Component } from 'react';
import './navbar.css'

class Navbar extends Component {
  render() {
    return (
      <div>
        <div className="App-header">
          <button className="button button-left">button_1</button>
          <button className="button button-left">button_2</button>
          <button className="button button-right">скачать в PDF</button>
        </div>
      </div>
    )
  }
}

export default Navbar;
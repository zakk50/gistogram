import React, { Component } from 'react';
import './navbar.css'

class Navbar extends Component {
  render() {
    return (
      <div>
        <div className="App-header">
          <button className="button button-left"><p className="button-text-1">button_1</p></button>
          <button className="button button-left"><p className="button-text-2">button_2</p></button>
          <button className="button button-right"><p className="button-text-3">скачать в PDF</p></button>
        </div>
      </div>
    )
  }
}

export default Navbar;
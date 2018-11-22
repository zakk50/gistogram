import React, { Component } from "react";

import ColorPicker from './ColorPicker';

import './sidebar.css';

class Sidebar extends Component{
  getInitialState() {
    return{
      color: '#FFFFFF'
    }
  }


  handleTextChange(event) {
    this.setState({ text: event.target.value });
};

handleTitleChange(event) {
    this.setState({ title: event.target.value });
};

handleColorChange(color) {
    this.setState({ color });
};

handleNoteAdd() {
    const newNote = {
        title: this.state.title,
        text: this.state.text,
        color: this.state.color
    };

    this.props.onNoteAdd(newNote);
    this.setState({ text: '', title: '', color: '#FFFFFF' });
};

  render() {
    return(
      <div>
        <h2>Добавить группу</h2>
        <div>
          <ColorPicker 
            value={this.state.color}
            onChanege={this.handleColorChange}
          />
        </div>
      </div>
    );
  }
}

export default Sidebar;
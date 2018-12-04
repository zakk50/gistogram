import React from "react";
import createReactClass from 'create-react-class';

import ColorPicker from './ColorPicker.jsx';

import './sidebar.css';

const Sidebar = createReactClass({
  getInitialState() {
    return{
      title: '',
      text: '',
      color: '#FFFFFF'
    }
  },

  handleTextChange(event) {
    this.setState({ text: event.target.value });
  },

  handleTitleChange(event) {
      this.setState({ title: event.target.value });
  },

  handleColorChange(color) {
      this.setState({ color });
  },

  handleNoteAdd() {
      const newNote = {
          title: this.state.title,
          text: this.state.text,
          color: this.state.color
      };

      this.props.onNoteAdd(newNote);
      this.setState({ text: '', title: '', color: '#FFFFFF' });
  },

  render() {
    return(
      <div className="sidebar">
        <div>
          <h2>ДОБАВИТЬ ГРУППУ</h2>
        </div>

        <div className="group">
          <span className="plus_s" >+</span>
        </div>

        <div>
          <h2>ДОБАВИТЬ ЭЛЕМЕНТ</h2>
        </div>

        <div className="NoteEditor__footer">
          <ColorPicker
            value={this.state.color}
            onChange={this.handleColorChange}
          />
        </div>
        <div className="element">
          <div className="element-title"><h3>Тема или место</h3></div>
          <div className="element-text"><h4>Текст циклограммы</h4></div>
          <div className="element-time"><h3>20:00</h3> </div>
        </div>
        <div className="button-create" >
          <span className="plus_ss" >+</span>
        </div>
      </div>
    );
  }
});

export default Sidebar;
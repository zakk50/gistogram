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
        <ul>
          <li>
            <div className="group-add">Группа 1</div>
          </li>
          <li>
            <div className="group-add">Группа 2 sdf sdf sdf SFD </div>
          </li>
          <li>
            <div>
              <span className="plus_" >+</span>
            </div>
          </li>
        </ul>

        <div>
          <h2>ДОБАВИТЬ ЭЛЕМЕНТ</h2>
        </div>

        <div className="NoteEditor__footer">
          <ColorPicker
            value={this.state.color}
            onChange={this.handleColorChange}
          />
        </div>

        <div className="block-task">
          <div className="block color-element"></div>
          <div className="block task-number"><p>11</p></div>
          <div className="block task-text clearfix">
            <div className="task-test-tema"><p>Lakta</p></div>
            <div className="task-text-time"><p>12:00</p></div>
          </div>
          <div className="block task-delete"></div>
        </div>

        <div className="button-create" >
          <span className="plus_ss" >+</span>
        </div>
      </div>
    );
  }
});

export default Sidebar;
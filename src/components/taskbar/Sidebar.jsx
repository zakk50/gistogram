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
      {/* !!! Добавление группы */}
        {/* <div>
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
        </ul> */}
        {/* !!! End Добавление группы */}

        <div>
          <h2>ДОБАВИТЬ ЭЛЕМЕНТ</h2>
          <div className=""></div>
          <input type="text"/>
          <input type="text"/>
          <input type="time"/>
          {/* <div class="col">
            <input className="effect-2" type="text" placeholder="Placeholder11 Text" />
              <span className="focus-border"></span>
          </div> */}
        </div>

        <div className="NoteEditor__footer">
          <ColorPicker
            value={this.state.color}
            onChange={this.handleColorChange}
          />
        </div>
        <div className="prokrutka">
          <div className="block-task">
            <div className="block color-element"></div>
            <div className="block task-number"><p>8</p></div>
            <div className="block task-text clearfix">
              <div className="task-text-tema"><p>Object</p></div>
              <div className="task-text-time"><p>12:00</p></div>
              <div className="task-text-text">Next next next next next</div>
            </div>
            <div className="block task-delete">
              {/* <div className="button-delete"><img src="http://localhost:3000/public/del-button.png"></img></div> */}
            </div>
          </div>

          {/* для вида */}
          <div className="block-task">
            <div className="block color-element e1"></div>
            <div className="block task-number"><p>7</p></div>
            <div className="block task-text clearfix">
              <div className="task-text-tema"><p>Object</p></div>
              <div className="task-text-time"><p>12:00</p></div>
              <div className="task-text-text">Next next next next next</div>
            </div>
            <div className="block task-delete"></div>
          </div>
          <div className="block-task">
            <div className="block color-element e2"></div>
            <div className="block task-number"><p>6</p></div>
            <div className="block task-text clearfix">
              <div className="task-text-tema"><p>Object</p></div>
              <div className="task-text-time"><p>12:00</p></div>
              <div className="task-text-text">Next next next next next</div>
            </div>
            <div className="block task-delete"></div>
          </div>
          <div className="block-task">
            <div className="block color-element e3"></div>
            <div className="block task-number"><p>5</p></div>
            <div className="block task-text clearfix">
              <div className="task-text-tema"><p>Object</p></div>
              <div className="task-text-time"><p>12:00</p></div>
              <div className="task-text-text">Next next next next next</div>
            </div>
            <div className="block task-delete"></div>
          </div>
          <div className="block-task">
            <div className="block color-element e4"></div>
            <div className="block task-number"><p>4</p></div>
            <div className="block task-text clearfix">
              <div className="task-text-tema"><p>Object</p></div>
              <div className="task-text-time"><p>12:00</p></div>
              <div className="task-text-text">Next next next next next</div>
            </div>
            <div className="block task-delete"></div>
          </div>
          <div className="block-task">
            <div className="block color-element e5"></div>
            <div className="block task-number"><p>3</p></div>
            <div className="block task-text clearfix">
              <div className="task-text-tema"><p>Object</p></div>
              <div className="task-text-time"><p>12:00</p></div>
              <div className="task-text-text">Next next next next next</div>
            </div>
            <div className="block task-delete"></div>
          </div>
          <div className="block-task">
            <div className="block color-element e6"></div>
            <div className="block task-number"><p>2</p></div>
            <div className="block task-text clearfix">
              <div className="task-text-tema"><p>Object</p></div>
              <div className="task-text-time"><p>12:00</p></div>
              <div className="task-text-text">Next next next next next</div>
            </div>
            <div className="block task-delete"></div>
          </div>
          <div className="block-task">
            <div className="block color-element e7"></div>
            <div className="block task-number"><p>1</p></div>
            <div className="block task-text clearfix">
              <div className="task-text-tema"><p>Object</p></div>
              <div className="task-text-time"><p>12:00</p></div>
              <div className="task-text-text">Next next next next next</div>
            </div>
            <div className="block task-delete"></div>
          </div>
        </div>
        {/* концовка для вида */}
        {/* <div className="button-create" >
          <span className="plus_ss" >+</span>
        </div> */}
      </div>
    );
  }
});

export default Sidebar;
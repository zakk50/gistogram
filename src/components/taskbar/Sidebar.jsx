import React from "react";
import createReactClass from 'create-react-class';
// import ColorPicker from './ColorPicker.jsx';

import './sidebar.css';

import { faEdit, faTrashAlt} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
        <div className="">
          <h2>ДОБАВИТЬ ЭЛЕМЕНТ</h2>
          <div className=""></div>
          <input type="text" placeholder="Шапка ..."/>
          <input type="text" placeholder="Текст ..."/>
          <input type="time"/>
          <input type="time"/>
          <button className="button-add-sidebar button-color">ЦВЕТ</button>
          <button className="button-add-sidebar button-sidebar">ДОБАВИТЬ</button>
        </div>

        <div className="NoteEditor__footer">
          {/* <ColorPicker
            value={this.state.color}
            onChange={this.handleColorChange}
          /> */}
        </div>
        <div className="prokrutka">
          <div className="block-task">
            <div className="block color-element"></div>
            <div className="block task-number"><p>8</p></div>
            <div className="block task-text clearfix">
              <div className="task-text-tema"><p>Обьект тема</p></div>
              <div className="task-text-time"><p>с 12:00</p></div>
              <div className="task-text-time"><p>по 12:00</p></div>
              <div className="task-text-text">Next next next next nextб  next next nextб .  next next next</div>
            </div>
            <div className="block task-edit-delete">
              <div className="task-edit">
                <FontAwesomeIcon icon={faEdit} className="faEdit"/>
              </div>
              <div className="task-delete">
                <FontAwesomeIcon icon={faTrashAlt} className="faTrashAl" /> 
              </div>
            </div>
          </div>

          {/* для вида */}
          <div className="block-task">
            <div className="block color-element e1"></div>
            <div className="block task-number"><p>7</p></div>
            <div className="block task-text clearfix">
              <div className="task-text-tema"><p>Object</p></div>
              <div className="task-text-time"><p>с 12:00</p></div>
              <div className="task-text-time"><p>по 12:00</p></div>
              <div className="task-text-text">Next next next next nextб  next next nextб .  next next next</div>
            </div>
            <div className="block task-edit-delete">
              <div className="task-edit">
                <FontAwesomeIcon icon={faEdit} className="faEdit"/>
              </div>
              <div className="task-delete">
                <FontAwesomeIcon icon={faTrashAlt} className="faTrashAl" /> 
              </div>
            </div>
          </div>
          <div className="block-task">
            <div className="block color-element e2"></div>
            <div className="block task-number"><p>6</p></div>
            <div className="block task-text clearfix">
              <div className="task-text-tema"><p>Object</p></div>
              <div className="task-text-time"><p>с 12:00</p></div>
              <div className="task-text-time"><p>по 12:00</p></div>
              <div className="task-text-text">Next next next next nextб  next next nextб .  next next next</div>
            </div>
            <div className="block task-edit-delete">
              <div className="task-edit">
                <FontAwesomeIcon icon={faEdit} className="faEdit"/>
              </div>
              <div className="task-delete">
                <FontAwesomeIcon icon={faTrashAlt} className="faTrashAl" /> 
              </div>
            </div>
          </div>
          <div className="block-task">
            <div className="block color-element e3"></div>
            <div className="block task-number"><p>5</p></div>
            <div className="block task-text clearfix">
              <div className="task-text-tema"><p>Object</p></div>
              <div className="task-text-time"><p>с 12:00</p></div>
              <div className="task-text-time"><p>по 12:00</p></div>
              <div className="task-text-text">Next next next next nextб  next next nextб .  next next next</div>
            </div>
            <div className="block task-edit-delete">
              <div className="task-edit">
                <FontAwesomeIcon icon={faEdit} className="faEdit"/>
              </div>
              <div className="task-delete">
                <FontAwesomeIcon icon={faTrashAlt} className="faTrashAl" /> 
              </div>
            </div>
          </div>
          <div className="block-task">
            <div className="block color-element e4"></div>
            <div className="block task-number"><p>4</p></div>
            <div className="block task-text clearfix">
              <div className="task-text-tema"><p>Object</p></div>
              <div className="task-text-time"><p>с 12:00</p></div>
              <div className="task-text-time"><p>по 12:00</p></div>
              <div className="task-text-text">Next next next next nextб  next next nextб .  next next next</div>
            </div>
            <div className="block task-edit-delete">
              <div className="task-edit">
                <FontAwesomeIcon icon={faEdit} className="faEdit"/>
              </div>
              <div className="task-delete">
                <FontAwesomeIcon icon={faTrashAlt} className="faTrashAl" /> 
              </div>
            </div>
          </div>
          <div className="block-task">
            <div className="block color-element e5"></div>
            <div className="block task-number"><p>3</p></div>
            <div className="block task-text clearfix">
              <div className="task-text-tema"><p>Object</p></div>
              <div className="task-text-time"><p>с 12:00</p></div>
              <div className="task-text-time"><p>по 12:00</p></div>
              <div className="task-text-text">Next next next next nextб  next next nextб .  next next next</div>
            </div>
            <div className="block task-edit-delete">
              <div className="task-edit">
                <FontAwesomeIcon icon={faEdit} className="faEdit"/>
              </div>
              <div className="task-delete">
                <FontAwesomeIcon icon={faTrashAlt} className="faTrashAl" /> 
              </div>
            </div>
          </div>
          <div className="block-task">
            <div className="block color-element e6"></div>
            <div className="block task-number"><p>2</p></div>
            <div className="block task-text clearfix">
              <div className="task-text-tema"><p>Object</p></div>
              <div className="task-text-time"><p>с 12:00</p></div>
              <div className="task-text-time"><p>по 12:00</p></div>
              <div className="task-text-text">Next next next next nextб  next next nextб .  next next next</div>
            </div>
            <div className="block task-edit-delete">
              <div className="task-edit">
                <FontAwesomeIcon icon={faEdit} className="faEdit"/>
              </div>
              <div className="task-delete">
                <FontAwesomeIcon icon={faTrashAlt} className="faTrashAl" /> 
              </div>
            </div>
          </div>
          <div className="block-task">
            <div className="block color-element e7"></div>
            <div className="block task-number"><p>1</p></div>
            <div className="block task-text clearfix">
              <div className="task-text-tema"><p>Object</p></div>
              <div className="task-text-time"><p>с 12:00</p></div>
              <div className="task-text-time"><p>по 12:00</p></div>
              <div className="task-text-text">Next next next next nextб  next next nextб .  next next next</div>
            </div>
            <div className="block task-edit-delete">
              <div className="task-edit">
                <FontAwesomeIcon icon={faEdit} className="faEdit"/>
              </div>
              <div className="task-delete">
                <FontAwesomeIcon icon={faTrashAlt} className="faTrashAl" /> 
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

export default Sidebar;
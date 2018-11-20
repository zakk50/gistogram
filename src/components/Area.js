import React, { Component } from 'react';
import './area.css';
import Sidebar from './taskbar/Sidebar';
import Histogram from './histogram/Histogram';

class Area extends Component {
  render() {
    return(
      <div className="content">
          <div className="content-sidebar"><Sidebar /></div>
          <div className="content-histogram"><Histogram /></div>
      </div>
    );
  }
}

export default Area;
import React, { Component } from 'react';
import './area.css';
import Sidebar from './taskbar/Sidebar.jsx';
import Histogram from './histogram/Histogram.jsx';

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
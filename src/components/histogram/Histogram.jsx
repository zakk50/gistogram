import React, { Component } from 'react';
import './histogram.css';

// import { faCopyright } from "@fortawesome/free-solid-svg-icons";
import { faCopyright} from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Histogram extends Component {
  render() {
    return(
      <div className="body-timeline">
        <h1>Timeline</h1>

        <ul className="timeline-events">
          <li className="timeline-event-legend">
            <span>
              <h2><FontAwesomeIcon icon={faCopyright} className="faCopyright" /></h2>
              <h3>Histogram 2019</h3>
              <h4><span className="span"></span>Golikov Vladimir</h4>		
            </span>
          </li>

          <li className="timeline-event-years-6">
            <span>
            <i></i>
              <h2>60 минут</h2>
              <h3>Тема тема</h3>
              <h4>Текст текст текст текст текст</h4>		
            </span>
            <i></i>
          </li>
          <li className="timeline-event-years-2">
            <h2>30 минут</h2>
            <h3>Ideaworks Advertising</h3>
            <h4>Interactive Designer</h4>
          </li>
          <li className="timeline-event-years-2">
            <h2>20 минут</h2>
            <h3>Pint, Inc</h3>
            <h4>Associate Creative Director</h4>
          </li>
          <li className="timeline-event-years-3">
            <h2>30 минут</h2>
            <h3>Cuker Interactive</h3>
            <h4>Creative</h4>
          </li>
          <li className="timeline-event-years-7">
            <h2>70 минут</h2>
            <h3>Independent</h3>
            <h4>Interactive Art Director</h4>
          </li>
          <li className="timeline-event-years-1">
            <h2>10 минут</h2>
            <h3>Cuker Interactive</h3>
            <h4>Creative</h4>
          </li>
          <li className="timeline-event-years-4">
            <h2>40 минут</h2>
            <h3>Cuker Interactive</h3>
            <h4>Creative</h4>
          </li>
        </ul>
        <ul className="timelines-years">
          <li><div className="vertical-line"></div><div className="vertical-line-2"></div>10:00</li>
          <li><div className="vertical-line"></div><div className="vertical-line-2"></div>10:10</li>
          <li><div className="vertical-line"></div><div className="vertical-line-2"></div>10:20</li>
          <li><div className="vertical-line"></div><div className="vertical-line-2"></div>10:30</li>
          <li><div className="vertical-line"></div><div className="vertical-line-2"></div>10:40</li>
          <li><div className="vertical-line"></div><div className="vertical-line-2"></div>10:50</li>
          <li><div className="vertical-line"></div><div className="vertical-line-2"></div>11:00</li>
          <li><div className="vertical-line"></div><div className="vertical-line-2"></div>11:10</li>
          <li><div className="vertical-line"></div><div className="vertical-line-2"></div>11:20</li>
          <li><div className="vertical-line"></div><div className="vertical-line-2"></div>11:30</li>
          <li><div className="vertical-line"></div><div className="vertical-line-2"></div>11:40</li>
          <li><div className="vertical-line"></div><div className="vertical-line-2"></div>11:50</li>
          <li><div className="vertical-line"></div><div className="vertical-line-2"></div>12:00</li>
          <li><div className="vertical-line"></div><div className="vertical-line-2"></div>12:10</li>
          <li><div className="vertical-line"></div><div className="vertical-line-2"></div>12:20</li>
          <li><div className="vertical-line"></div><div className="vertical-line-2"></div>12:30</li>
          <li><div className="vertical-line"></div><div className="vertical-line-2"></div>12:40</li>
          <li><div className="vertical-line"></div><div className="vertical-line-2"></div>12:50</li>
          <li><div className="vertical-line"></div><div className="vertical-line-2"></div>13:00</li>
          <li><div className="vertical-line"></div><div className="vertical-line-2"></div>13:10</li>
          <li><div className="vertical-line"></div><div className="vertical-line-2"></div>13:20</li>
          <li><div className="vertical-line"></div><div className="vertical-line-2"></div>13:30</li>
          <li><div className="vertical-line"></div><div className="vertical-line-2"></div>13:40</li>
          <li><div className="vertical-line"></div><div className="vertical-line-2"></div>13:50</li>
          <li><div className="vertical-line"></div><div className="vertical-line-2"></div>14:00</li>
          <li><div className="vertical-line"></div><div className="vertical-line-2"></div>14:10</li>
        </ul>
      </div>
    );
  }
}

export default Histogram;
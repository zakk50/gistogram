import React, { Component } from 'react';
import cx from 'classnames';

import './colorpicker.css';

const COLORS = ['#FFFFFF', '#80D8FF', '#FF8A80'];

class ColorPicker extends Component {
  render() {
    return(
      <div className="ColorPicker">asdasdasd
        {
          COLORS.map(color => 
            <div
                key={color}
                className={cx('ColorPicker__swatch', { selected: this.props.value === color})}
                style={{ backgroundColor: color }}
                onClick={ this.props.onChange.bind(null, color)}
            />
          )
        }
      </div>
    );
  }
}

export default ColorPicker;
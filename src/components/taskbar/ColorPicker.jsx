import React from 'react';
import createReactClass from 'create-react-class';
import cx from 'classnames';

import './colorpicker.css';

const COLORS = ['#FFFFFF', '#80D8FF', '#FF8A80', '#5FC681', '#FFD15B', '#885FFF', '#DA04F9', '#16B2CB', '#FE7478', '#6786EE'];

const ColorPicker =  createReactClass ({
  render() {
    return(
      <div className='ColorPicker object_color'>
        {
          COLORS.map(color =>
            <div
              key={color}
              className={cx('ColorPicker__swatch', { selected: this.props.value === color })}
              style={{ backgroundColor: color }}
              onClick={this.props.onChange.bind(null, color)}
            />
          )
        }
				</div>
    );
  }
});

export default ColorPicker;
import React, {  } from 'react';
import createReactClass from 'create-react-class';

import cx from 'classnames';

import './colorpicker.css';

const COLORS = ['#FFFFFF', '#80D8FF', '#FF8A80'];

const ColorPicker =  createReactClass ({
  render() {
    return(
      <div className='ColorPicker'>
                {
                    COLORS.map(color =>
                        <div
                            key={color}
                            className={cx('ColorPicker__swatch', { selected: this.props.value === color })}
                            style={{ backgroundColor: color }}
                            // onClick={this.props.onChange.bind(null, color)}
                        />
                    )
                }
            </div>
    );
  }
});

export default ColorPicker;
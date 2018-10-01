import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

const ScreenRow = (props) => {
  return (
    <div className='div1'>
      {props.value}
      {/* <input classname="textbox" type="text" readOnly value={props.value}/> */}
     
    </div>
  )
}

ScreenRow.propTypes = {
  value: PropTypes.string.isRequired
}

export default ScreenRow;
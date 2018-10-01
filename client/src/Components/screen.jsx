import React from 'react'; 
import PropTypes from 'prop-types';
import ScreenRow from './screen-row';
import './style.css';

const Screen = (props) => {
  return (
    <div className='alert alert-secondary div2'>
      <ScreenRow  value={props.question}/>
      <hr/>
      <ScreenRow value={props.answer}/>
    </div>
  );
}


Screen.propTypes = {
  question: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired
}

export default Screen;
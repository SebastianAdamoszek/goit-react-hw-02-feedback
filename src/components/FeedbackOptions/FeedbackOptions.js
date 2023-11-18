import React from 'react';
import PropTypes from 'prop-types';
import css from './FeedbackOption.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div className={css.buttons__box}>
      {options.map(option => (
        <button
          key={option}
          onClick={() => onLeaveFeedback(option)}
          className={`${option === 'good' ? css.good : 'good'}
                      ${option === 'neutral' ? css.neutral : 'neutral'}
                      ${option === 'bad' ? css.bad : 'bad'}`}
        >
          {option.charAt(0).toUpperCase() + option.slice(1)}
        </button>
      ))}
    </div>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;

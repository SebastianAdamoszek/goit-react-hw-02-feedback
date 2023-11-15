import React from 'react';
import PropTypes from 'prop-types';
import styles from './Feedback.module.css';

const Feedback = ({ state, handleFeedback }) => {
  const countPositiveFeedbackPercentage = () => {
    const countTotalFeedback = state.good + state.neutral + state.bad;
    const positivePercentage =
    countTotalFeedback> 0 ? (state.good / countTotalFeedback) * 100 : 0;
    return positivePercentage.toFixed(2); // Zaokrąglenie do dwóch miejsc po przecinku
  };
  return (
    <div>
      <h2>Feedback</h2>
      <button onClick={() => handleFeedback('good')}>Good</button>
      <button onClick={() => handleFeedback('neutral')}>Neutral</button>
      <button onClick={() => handleFeedback('bad')}>Bad</button>
      <div>
        <p>Statistics</p>
        <p>Good: {state.good}</p>
        <p>Neutral: {state.neutral}</p>
        <p>Bad: {state.bad}</p>
      </div>
      <p>Positive Feedback: {countPositiveFeedbackPercentage()}%</p>
    </div>
  );
};

Feedback.propTypes = {
  state: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }).isRequired,
  handleFeedback: PropTypes.func.isRequired,
};

export default Feedback;

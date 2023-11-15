import React, { useState } from 'react';
import Section from './SectionTitle/SectionTitle';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
// import Feedback from './Feedback/Feedback';

const App = () => {
  const [feedbackState, setFeedbackState] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const handleFeedback = type => {
    setFeedbackState(prevState => ({
      ...prevState,
      [type]: prevState[type] + 1,
    }));
  };

  const calculateTotalFeedback = () => {
    return feedbackState.good + feedbackState.neutral + feedbackState.bad;
  };

  const calculatePositivePercentage = () => {
    const totalFeedback = calculateTotalFeedback();
    return totalFeedback > 0
      ? ((feedbackState.good / totalFeedback) * 100).toFixed(2)
      : 0;
  };

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Section title="Feedback">
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={handleFeedback}
        />
      </Section>

      <Section title="Statistics">
        <Statistics
          good={feedbackState.good}
          neutral={feedbackState.neutral}
          bad={feedbackState.bad}
          total={calculateTotalFeedback()}
          positivePercentage={calculatePositivePercentage()}
        />
      </Section>
    </div>
  );
};

export default App;

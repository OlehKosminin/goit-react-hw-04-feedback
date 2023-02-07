import { useState } from 'react';
import MainMenu from './components/MainMenu/MainMenu';
import Section from './components/Section/Section';
import Statistics from 'components/Statistics/Statistics';

const options = ['good', 'bad', 'neutral'];

const App = () => {
  const [feeds, setFeeds] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const handleFeedback = feedback => {
    setFeeds(prevState => {
      const value = prevState[feedback];
      return { ...prevState, [feedback]: value + 1 };
    });
  };

  const countTotalFeedback = () => {
    const { good, neutral, bad } = feeds;
    return good + bad + neutral;
  };

  const countPositiveFeedbackPercentage = () => {
    let totalFeedback = countTotalFeedback();
    const { good } = feeds;
    return totalFeedback ? Math.round((good / totalFeedback) * 100) : 0;
  };

  const { good, neutral, bad } = feeds;
  const totalFeedbackCount = countTotalFeedback();
  const positiveFeedback = countPositiveFeedbackPercentage();

  return (
    <>
      <Section title="Please leave feedback">
        <MainMenu options={options} actionFeedback={handleFeedback} />
      </Section>
      <Section title="Statistics">
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={totalFeedbackCount}
          positiveFeedbackPercentage={positiveFeedback}
        />
      </Section>
    </>
  );
};

export default App;

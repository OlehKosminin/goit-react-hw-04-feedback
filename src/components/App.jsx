import { useState } from 'react';
import Section from './section';
import ButtonList from './button';
import Statistics from './statistick';

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    return Number(Math.round((good / total) * 100));
  };

  const onFeedbackClick = type => {
    if (type === 'good') {
      return setGood(pS => pS + 1);
    }
    if (type === 'neutral') {
      return setNeutral(pS => pS + 1);
    }
    if (type === 'bad') {
      return setBad(pS => pS + 1);
    }
  };

  const countTotalFeedback = () => {
    const total = good + neutral + bad;

    return Number(total);
  };

  return (
    <Section>
      <Section title="Please leave feedback">
        <ButtonList
          options={['good', 'bad', 'neutral']}
          onFeedback={onFeedbackClick}
        />
      </Section>
      <Section title="Statistic">
        {countTotalFeedback() > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <h2> No given feedback</h2>
        )}
      </Section>
    </Section>
  );
}

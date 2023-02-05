import React from 'react';
import Section from './section';
import ButtonList from './button';
import Statistics from './statistick';

export class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();
    return Math.round((this.state.good / total) * 100);
  };

  onFeedbackClick = type => {
    this.setState(prevState => {
      return { [type]: prevState[type] + 1 };
    });
  };

  countTotalFeedback = () => {
    return Object.values(this.state).reduce((count, value) => {
      return count + value;
    }, 0);
  };

  render() {
    return (
      <Section>
        <Section title="Please leave feedback">
          <ButtonList
            options={Object.keys(this.state)}
            onFeedback={this.onFeedbackClick}
          />
        </Section>
        <Section title="Statistic">
          {this.countTotalFeedback() > 0 ? (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <h2> No given feedback</h2>
          )}
        </Section>
      </Section>
    );
  }
}

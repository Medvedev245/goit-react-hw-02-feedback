import { Component } from 'react';
import { Section } from './Sections/Section';
import { FeedbackOptions } from './Sections/FeedbackOptions/FeedbackOptions';
import { Notification } from './Sections/Notification/Notification';
import { Statistics } from './Sections/Statistics/Statistics';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  getButtonName = option => {
    this.setState(prevState => {
      return {
        [option]: prevState[option] + 1,
      };
    });
  };

  counntTotal = () => {
    return Object.values(this.state).reduce((prev, number) => {
      return prev + number;
    }, 0);
  };
  calcPositiveFeedback = () => {
    const { good } = this.state;
    const total = this.counntTotal();
    return Math.round((good / total) * 100);
  };

  render() {
    const options = Object.keys(this.state);
    let isStatisticsGiven = this.counntTotal();
    console.log(isStatisticsGiven);
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={options}
            getButtonName={this.getButtonName}
          />
        </Section>
        <Section title="Statistics">
          {isStatisticsGiven === 0 ? (
            <Notification message="There is no feedback" />
          ) : (
            <Statistics
              items={this.state}
              counntTotal={this.counntTotal}
              calcPositiveFeedback={this.calcPositiveFeedback}
            />
          )}
        </Section>
      </>
    );
  }
}

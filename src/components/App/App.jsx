import { Component } from 'react';
import { Btns } from '../Btns/Btns';
import { Feedback } from '../Feedback/Feedback';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  getButtonName = button => {
    this.updateFeedback(button);
  };

  updateFeedback = type => {
    this.setState(prevState => {
      return {
        [type]: prevState[type] + 1,
      };
    });
  };

  addTotal = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  calcPositiveFeedback = () => {
    return Math.round((this.state.good / this.addTotal()) * 100);
  };

  render() {
    return (
      <div>
        <p>Please leave feedback</p>
        <Btns items={this.state} getButtonName={this.getButtonName} />
        <p>Statistics</p>
        <Feedback
          items={this.state}
          addTotal={this.addTotal}
          calcPositiveFeedback={this.calcPositiveFeedback}
        />
      </div>
    );
  }
}

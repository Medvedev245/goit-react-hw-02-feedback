import { Component } from 'react';
import { Section } from './Sections/Section';

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
    const total = Object.values(this.state).reduce((prev, number) => {
      return prev + number;
    }, 0);
    return total;
  };
  calcPositiveFeedback = () => {
    const { good } = this.state;
    const total = this.counntTotal();
    return Math.round((good / total) * 100);
  };

  render() {
    const options = Object.keys(this.state);

    return (
      <Section
        title={'Please leave feedback'}
        options={options}
        getButtonName={this.getButtonName}
        items={this.state}
        counntTotal={this.counntTotal}
        calcPositiveFeedback={this.calcPositiveFeedback}
      />
    );
  }
}

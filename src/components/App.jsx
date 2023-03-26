import { Component } from 'react';

import css from './App.module.css';

import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Section from './Section/Section';
import Notification from './Notification/Notification';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback() {
    return Object.values(this.state).reduce((acc, number) => {
      return acc + number;
    }, 0);
  }

  countPositiveFeedbackPercentage() {
    const sum = this.countTotalFeedback();
    return Math.round((this.state.good * 100) / sum);
  }

  handleLeaveFeedback = e => {
    const btnValue = e.target.textContent.toLowerCase();
    this.setState(prevState => ({ [btnValue]: prevState[btnValue] + 1 }));
  };

  render() {
    return (
      <div className={css.container}>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.handleLeaveFeedback}
          ></FeedbackOptions>
        </Section>

        <Section title="Statisticts">
          {this.countTotalFeedback() ? (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            ></Statistics>
          ) : (
            <Notification message="There is no feedback"></Notification>
          )}
        </Section>
      </div>
    );
  }
}

export default App;

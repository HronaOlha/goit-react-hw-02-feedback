import { Component } from 'react';

import css from './Feedback.module.css';

class Feedback extends Component {
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

  goodFeedback = () => {
    this.setState(prevState => ({ good: prevState.good + 1 }));
    this.countTotalFeedback();
    this.countPositiveFeedbackPercentage();
  };

  neutralFeedback = () => {
    this.setState(prevState => ({ neutral: prevState.neutral + 1 }));
    this.countTotalFeedback();
    this.countPositiveFeedbackPercentage();
  };

  badFeedback = () => {
    this.setState(prevState => ({ bad: prevState.bad + 1 }));
    this.countTotalFeedback();
    this.countPositiveFeedbackPercentage();
  };

  render() {
    return (
      <>
        <h1 className={css.title}>Please leave feedback</h1>
        <ul className={css.btnList}>
          <li>
            <button className={css.btn} onClick={this.goodFeedback}>
              Good
            </button>
          </li>
          <li>
            <button className={css.btn} onClick={this.neutralFeedback}>
              Neutral
            </button>
          </li>
          <li>
            <button className={css.btn} onClick={this.badFeedback}>
              Bad
            </button>
          </li>
        </ul>
        <h2 className={css.title}>Statisticts</h2>
        <ul className={css.feedbackList}>
          <li>
            <p>
              Good: <span>{this.state.good}</span>
            </p>
          </li>
          <li>
            <p>
              Neutral: <span>{this.state.neutral}</span>
            </p>
          </li>
          <li>
            <p>
              Bad: <span>{this.state.bad}</span>
            </p>
          </li>
          <li>
            <p>
              Total: <span>{this.countTotalFeedback()}</span>
            </p>
          </li>
          <li>
            <p>
              Positive feedback:{' '}
              <span>
                {this.countPositiveFeedbackPercentage()
                  ? this.countPositiveFeedbackPercentage()
                  : 0}
                %
              </span>
            </p>
          </li>
        </ul>
      </>
    );
  }
}

export default Feedback;

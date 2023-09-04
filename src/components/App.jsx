import React from 'react';

class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleFeedbackGood = () => {
    this.setState(prevState => {
      return {
        good: prevState.good + 1,
      };
    });
  };
  handleFeedbackNeutral = () => {
    this.setState(prevState => {
      return {
        neutral: prevState.neutral + 1,
      };
    });
  };
  handleFeedbackBad = () => {
    this.setState(prevState => {
      return {
        bad: prevState.neutral + 1,
      };
    });
  };

  countTotalFeedback = () =>
    this.state.good + this.state.neutral + this.state.bad;

  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();
    const percentage = Math.round((this.state.good / total) * 100);
    return total ? percentage : 0;
  };

  render() {
    const totalFeedback = this.countTotalFeedback();
    const positiveFeedbackPercentage = this.countPositiveFeedbackPercentage();

    return (
      <div className="Feedback">
        <h2>Please leave feedback</h2>
        <button type="button" onClick={this.handleFeedbackGood}>
          Good
        </button>
        <button type="button" onClick={this.handleFeedbackNeutral}>
          Neutral
        </button>
        <button type="button" onClick={this.handleFeedbackBad}>
          Bad
        </button>
        <h2 className="Stats">Statistics</h2>
        <p>Good:{this.state.good}</p>
        <p>Neutral:{this.state.neutral}</p>
        <p>Bad:{this.state.bad}</p>
        <p>Total:{totalFeedback}</p>
        <p>Positive fedback:{positiveFeedbackPercentage}%</p>
      </div>
    );
  }
}

export default App;

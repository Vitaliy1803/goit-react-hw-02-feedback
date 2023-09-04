import React from 'react';

class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  render() {
    return (
      <div className="Feedback">
        <h2>Please leave feedback</h2>
        <button type="button" onClick={() => console.log('Good')}>
          Good
        </button>
        <button type="button" onClick={() => console.log('Neutral')}>
          Neutral
        </button>
        <button type="button" onClick={() => console.log('Bad')}>
          Bad
        </button>
        <h2 className="Stats" onClick={() => console.log('Statistics')}>
          Statistics
        </h2>
        <p>Good:</p>
        <p>Neutral:</p>
        <p>Bad:</p>
        <p>Positive fedback:</p>
      </div>
    );
  }
}

export default App;

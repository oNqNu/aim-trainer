import React, { useState } from 'react';
import './App.css';

function App() {
  const [score, setScore] = useState(0);
  const isDisplayResult = true;

  return (
    <div className="App">
      <div className="contents-container">
        <h1 className="title">Aim Trainer</h1>
        <h2 className="score">Score: {score}</h2>
        <div className="playarea">
          <div
            className="targetItem1"
            onClick={() => setScore(score + 1)}
          ></div>
          <div
            className="targetItem2"
            onClick={() => setScore(score + 2)}
          ></div>
          <div
            className="targetItem3"
            onClick={() => setScore(score + 3)}
          ></div>
        </div>
        <button onClick={() => setScore(score + 1)}>+++</button>
        <button onClick={() => setScore(0)}>Reset</button>
      </div>
      <div className="result-container">
        <h1>結果発表</h1>
        <h2>Score: 300点</h2>
      </div>
    </div>
  );
}

export default App;

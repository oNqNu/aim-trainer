import React, { useState } from 'react';
import './App.css';

function App() {
  const [score, setScore] = useState(0);
  const [isDisplayResult, SetIsDisplayResult] = useState(false);
  const [activatedTarget, SetActivatedTarget] = useState('t1');

  return (
    <div className="App">
      <div className="contents-container">
        <h1 className="title">Aim Trainer</h1>
        <h2 className="score">Score: {score}</h2>
        <div className="playarea">
          {activatedTarget === 't1' && (
            <div
              className="targetItem1"
              onClick={() => setScore(score + 1)}
            ></div>
          )}
          {activatedTarget === 't2' && (
            <div
              className="targetItem2"
              onClick={() => setScore(score + 2)}
            ></div>
          )}
          {activatedTarget === 't3' && (
            <div
              className="targetItem3"
              onClick={() => setScore(score + 3)}
            ></div>
          )}
        </div>
        <div className="button-container">
          {!isDisplayResult ? (
            <>
              <button className="resetButton" onClick={() => setScore(0)}>
                Reset
              </button>
              <button
                className="display-result-button"
                onClick={() => SetIsDisplayResult(true)}
              >
                結果表示
              </button>
            </>
          ) : null}
        </div>
      </div>
      {isDisplayResult ? (
        <div className="result-container">
          <h1>結果発表</h1>
          <h2>Score: {score}点</h2>
          <button
            className="confirmed-result-button"
            onClick={() => {
              SetIsDisplayResult(false);
              setScore(0);
            }}
          >
            OK
          </button>
        </div>
      ) : null}
    </div>
  );
}

export default App;

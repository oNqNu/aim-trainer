import React, { useState } from 'react';
import './App.css';

function App() {
  const [score, setScore] = useState(0);
  const [isDisplayResult, SetIsDisplayResult] = useState(false);
  const [activatedTarget, SetActivatedTarget] = useState('t1');
  const [targetPosition, SetTargetPosition] = useState({
    top: '50%',
    left: '50%',
  });

  const changeTarget = () => {
    SetActivatedTarget(`t${Math.floor(Math.random() * (4 - 1)) + 1}`);
  };

  const changeTargetPosition = () => {
    SetTargetPosition({
      top: `${Math.random() * (92 - 0)}%`,
      left: `${Math.random() * (92 - 0)}%`,
    });
  };

  return (
    <div className="App">
      <div className="contents-container">
        <h1 className="title">Aim Trainer</h1>
        <h2 className="score">Score: {score}</h2>
        <div
          className="playarea"
          onClick={() => {
            changeTargetPosition();
            changeTarget();
          }}
        >
          {activatedTarget === 't1' && (
            <div
              className="targetItem1"
              style={targetPosition}
              onClick={() => {
                setScore(score + 1);
                changeTargetPosition();
                changeTarget();
              }}
            ></div>
          )}
          {activatedTarget === 't2' && (
            <div
              className="targetItem2"
              style={targetPosition}
              onClick={() => {
                setScore(score + 2);
                changeTargetPosition();
                changeTarget();
              }}
            ></div>
          )}
          {activatedTarget === 't3' && (
            <div
              className="targetItem3"
              style={targetPosition}
              onClick={() => {
                setScore(score + 3);
                changeTargetPosition();
                changeTarget();
              }}
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

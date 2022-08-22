import React, { useState } from 'react';
import './App.css';

import { MyButton } from './components/Mybutton/MyButton';

function App() {
  const [score, setScore] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
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

  const hundleClickTarget = (point: number) => {
    setScore(score + point);
    changeTargetPosition();
    changeTarget();
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
          {isPlaying && activatedTarget === 't1' && (
            <div
              className="targetItem1"
              style={targetPosition}
              onClick={() => {
                hundleClickTarget(1);
              }}
            ></div>
          )}
          {isPlaying && activatedTarget === 't2' && (
            <div
              className="targetItem2"
              style={targetPosition}
              onClick={() => {
                hundleClickTarget(2);
              }}
            ></div>
          )}
          {isPlaying && activatedTarget === 't3' && (
            <div
              className="targetItem3"
              style={targetPosition}
              onClick={() => {
                hundleClickTarget(3);
              }}
            ></div>
          )}
          {!isPlaying && (
            <MyButton
              onClick={() => {
                hundleClickTarget(1);
                setIsPlaying(true);
              }}
            >
              ゲーム開始
            </MyButton>
          )}
        </div>
        <div className="button-container">
          {!isDisplayResult ? (
            <>
              <MyButton onClick={() => setScore(0)}>reset</MyButton>
              <MyButton onClick={() => SetIsDisplayResult(true)}>
                結果表示
              </MyButton>
            </>
          ) : (
            <MyButton
              onClick={() => {
                SetIsDisplayResult(false);
                setScore(0);
              }}
            >
              OK
            </MyButton>
          )}
        </div>
      </div>
      {isDisplayResult ? (
        <div className="result-container">
          <h1>結果発表</h1>
          <h2>Score: {score}点</h2>
          <MyButton
            onClick={() => {
              SetIsDisplayResult(false);
              setScore(0);
            }}
          >
            OK
          </MyButton>
        </div>
      ) : null}
    </div>
  );
}

export default App;

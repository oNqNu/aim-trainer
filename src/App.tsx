import React, { useState } from 'react';
import './App.css';

import { MyButton, GameStartButton } from './components/Mybutton/MyButton';

function App() {
  const [score, setScore] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isDisplayResult, SetIsDisplayResult] = useState(false);
  const [activatedTarget, SetActivatedTarget] = useState('t1');
  const [targetPosition, SetTargetPosition] = useState({});

  const changeTarget = () => {
    SetActivatedTarget(`t${Math.floor(Math.random() * (4 - 1)) + 1}`);
  };

  const changeTargetPosition = () => {
    SetTargetPosition({
      top: `${Math.random() * (92 - 0)}%`,
      left: `${Math.random() * (92 - 0)}%`,
    });
  };

  const hundleClickTarget = (
    point: number,
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    setScore(score + point);
    changeTargetPosition();
    changeTarget();
    e.stopPropagation();
  };

  const hundleClickGameStartButton = () => {
    setIsPlaying(true);
    changeTargetPosition();
    changeTarget();
  };

  const hundleClickConfirmResultButton = () => {
    SetIsDisplayResult(false);
    setIsPlaying(false);
    setScore(0);
  };

  const hundleMissClick = () => {
    if (!isPlaying) {
      return;
    }
    setScore(score - 2);
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
            hundleMissClick();
          }}
        >
          {isPlaying && activatedTarget === 't1' && (
            <div
              className="targetItem1"
              style={targetPosition}
              onClick={(e) => {
                hundleClickTarget(1, e);
              }}
            ></div>
          )}
          {isPlaying && activatedTarget === 't2' && (
            <div
              className="targetItem2"
              style={targetPosition}
              onClick={(e) => {
                hundleClickTarget(2, e);
              }}
            ></div>
          )}
          {isPlaying && activatedTarget === 't3' && (
            <div
              className="targetItem3"
              style={targetPosition}
              onClick={(e) => {
                hundleClickTarget(3, e);
              }}
            ></div>
          )}
          {!isPlaying && (
            <GameStartButton onClick={() => hundleClickGameStartButton()} />
          )}
        </div>
        <div className="button-container">
          {isPlaying && !isDisplayResult ? (
            <>
              <MyButton
                onClick={() => {
                  setScore(0);
                  setIsPlaying(false);
                }}
              >
                reset
              </MyButton>
              <MyButton onClick={() => SetIsDisplayResult(true)}>
                結果表示
              </MyButton>
            </>
          ) : null}
        </div>
      </div>
      {isDisplayResult ? (
        <div className="result-container">
          <h1>結果発表</h1>
          <h2>Score: {score}点</h2>
          <MyButton
            onClick={() => {
              hundleClickConfirmResultButton();
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

import React, { useState } from 'react';
import './App.css';

import { MyButton, GameStartButton } from './components/Mybutton/MyButton';
import { PreparationCountdownTimer } from './components/MyCountdownTimer/MycountdownTimer';

function App() {
  const [score, setScore] = useState(0);
  const [countClickedTargetInRow, setCountClickedTargetInRow] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isDisplayResult, setIsDisplayResult] = useState(false);
  const [isClickedTarget, setIsClickedTarget] = useState(false);
  const [isPreparation, setIsPreparation] = useState(false);
  const [activatedTarget, setActivatedTarget] = useState('t1');
  const [targetPosition, setTargetPosition] = useState({});

  const changeTarget = () => {
    setActivatedTarget(`t${Math.floor(Math.random() * (4 - 1)) + 1}`);
  };

  const changeTargetPosition = () => {
    setTargetPosition({
      top: `${Math.random() * (92 - 0)}%`,
      left: `${Math.random() * (92 - 0)}%`,
    });
  };

  const counterOfClickedTargetInRow = (isMiss = false) => {
    if (isMiss) {
      setCountClickedTargetInRow(0);
      console.log('miss');
      return 0;
    }
    if (!isClickedTarget) {
      setCountClickedTargetInRow(1);
      console.log('isClickedTarget is false');
      return 1;
    }
    const newCount = countClickedTargetInRow + 1;
    // console.log(newCount);
    setCountClickedTargetInRow(newCount);

    return newCount;
  };

  const hundleClickTarget = (
    point: number,
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    const newCount = counterOfClickedTargetInRow();
    console.log(newCount % 4);
    const additionalPoint = point * Math.ceil(newCount / 4);
    setScore(score + additionalPoint);
    changeTargetPosition();
    changeTarget();
    setIsClickedTarget(true);
    e.stopPropagation();
  };

  const hundleMissClick = () => {
    if (!isPlaying) {
      return;
    }
    counterOfClickedTargetInRow(true);
    setScore(score - 2);
    setIsClickedTarget(false);
  };

  const hundleClickGameStartButton = () => {
    setIsPlaying(true);
    changeTargetPosition();
    changeTarget();
  };

  const hundleClickConfirmResultButton = () => {
    setIsDisplayResult(false);
    setIsPlaying(false);
    setScore(0);
    setIsClickedTarget(false);
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
          {!(isPreparation || isPlaying) && (
            <GameStartButton onClick={() => setIsPreparation(true)} />
          )}
          {isPreparation && <PreparationCountdownTimer />}
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
              <MyButton onClick={() => setIsDisplayResult(true)}>
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

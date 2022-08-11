import React, { useState } from 'react';
import './App.css';

function App() {
  const [score, setScore] = useState(0);

  return (
    <div className="App">
      <div className="contents-container">
        <h1 className="title">Aim Trainer</h1>
        <h2 className="score">Score: {score}</h2>
        <div className="playarea">
          <div className="targetItem" onClick={() => setScore(score + 1)}></div>
        </div>
        <button onClick={() => setScore(score + 1)}>+++</button>
        <button onClick={() => setScore(0)}>Reset</button>
      </div>
    </div>
  );
}

export default App;

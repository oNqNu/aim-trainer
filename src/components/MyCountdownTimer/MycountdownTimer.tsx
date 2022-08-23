import { useCountdownTimer } from 'use-countdown-timer';

export const PreparationCountdownTimer = () => {
  const { countdown, start, reset, pause, isRunning } = useCountdownTimer({
    timer: 1000 * 5,
  });
  return (
    <div>
      {isRunning && <div>{countdown / 1000}</div>}
      <button onClick={reset}>Reset</button>
      {isRunning ? (
        <button onClick={pause}>Pause</button>
      ) : (
        <button onClick={start}>Start</button>
      )}
    </div>
  );
};

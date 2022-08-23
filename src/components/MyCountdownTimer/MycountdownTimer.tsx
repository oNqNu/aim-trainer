import { useCountdownTimer } from 'use-countdown-timer';

export const PreparationCountdownTimer = () => {
  const { countdown, isRunning } = useCountdownTimer({
    timer: 1000 * 3,
    autostart: true,
  });
  return (
    <div className="preparationCountdown">
      {isRunning && <div>{countdown / 1000}</div>}
    </div>
  );
};

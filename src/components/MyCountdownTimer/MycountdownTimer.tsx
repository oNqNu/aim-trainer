import { useCountdownTimer, ICountdownTimerParams } from 'use-countdown-timer';

export const PreparationCountdownTimer: React.FC<ICountdownTimerParams> = ({
  timer,
  onExpire,
}) => {
  const { countdown, isRunning } = useCountdownTimer({
    timer,
    autostart: true,
    onExpire,
  });
  return (
    <div className="preparationCountdown">
      {isRunning && <div>{countdown / 1000 + 1}</div>}
    </div>
  );
};

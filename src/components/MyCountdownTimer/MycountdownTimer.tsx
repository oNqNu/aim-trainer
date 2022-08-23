import { useCountdownTimer, ICountdownTimerParams } from 'use-countdown-timer';
import './MycountdownTimer.css';

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
      {isRunning && <p>{countdown / 1000 + 1}</p>}
    </div>
  );
};

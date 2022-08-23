import { FC, MouseEventHandler } from 'react';
import './MyButton.css';

type Props = React.PropsWithChildren<{
  onClick: MouseEventHandler<HTMLButtonElement> | undefined;
}>;

export const MyButton: FC<Props> = ({ children, onClick, ...props }) => {
  return (
    <button className="myButton" onClick={onClick} {...props}>
      {children}
    </button>
  );
};

export const GameStartButton: FC<Props> = ({ children, onClick, ...props }) => {
  return (
    <button className="gameStartButton" onClick={onClick} {...props}>
      {children}
    </button>
  );
};

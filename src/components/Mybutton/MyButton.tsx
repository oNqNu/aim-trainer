import { FC, MouseEventHandler } from 'react';

type Props = React.PropsWithChildren<{
  onClick: MouseEventHandler<HTMLButtonElement> | undefined;
}>;

export const MyButton: FC<Props> = ({ children, onClick }) => {
  return (
    <button className="myButton" onClick={onClick}>
      {children}
    </button>
  );
};

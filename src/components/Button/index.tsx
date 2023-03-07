import classNames from 'classnames';
import React from 'react';

import ss from './Button.module.scss';

interface ButtonProps {
  text: string;
}

export const Button: React.FC<ButtonProps> = ({ text }) => {
  return (
    <div
      className={classNames('item', {
        zero: text === '0',
      })}
    >
      {text}
    </div>
  );
};
